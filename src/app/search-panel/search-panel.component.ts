import {Component, EventEmitter, Input, NgZone, OnInit, Output} from '@angular/core';
import {Address, AddressService, Reference} from 'amoxtlatiloyan';
import {Hospital} from '../hospitals';
import {HospitalsService} from '../hospitals.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

interface Destination {
  status?: string;
  errorMessage?: string;
  address: Address;
}

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  responseWarn: any;
  covid19 = true;
  publicHospitals = false;
  privateHospitals = false;
  shrink = false;
  shrinkable = true;
  searching: {inProgress: boolean, message: string | boolean} = {inProgress: false, message: true};
  sortedHospitals: Hospital[];
  origin: Destination;
  selectedHospital: Hospital;
  @Input() map: google.maps.Map;
  @Output() nearHospitalFound: EventEmitter<google.maps.LatLng[]> = new EventEmitter<google.maps.LatLng[]>();
  @Output() hospitalSelected: EventEmitter<google.maps.LatLngLiteral> = new EventEmitter<google.maps.LatLngLiteral>();
  private ref: Reference;

  constructor(private addressService: AddressService,
              private hospitalsService: HospitalsService,
              private sanitizer: DomSanitizer,
              public dialog: MatDialog,
              private ngZone: NgZone,
              private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.sortedHospitals = this.filterHospitals();
    this.breakpointObserver.observe([
      Breakpoints.TabletLandscape,
      Breakpoints.WebLandscape,
    ]).subscribe(result => {
      if (result.matches) {
        this.shrink = false;
        this.shrinkable = false;
      }
    });
  }

  filterHospitals() {
    return this.hospitalsService.getAllHospitals().filter(item => (item.covid19 && this.covid19) || (item.public && this.publicHospitals)
      || (item.private && this.privateHospitals));
  }

  updateProgress(message: string, error = false) {
    if (error) {
      this.responseWarn = message;
      this.searching.message = false;
    } else {
      this.searching.message = message;
    }
    this.searching.inProgress = !error && !!message;
  }

  search(input?: string): void {
    if (!!input) {
      if (this.sortedHospitals.length === 0) {
        this.updateProgress('Elije por lo menos una categoría de hospitales.', true);
        return;
      }

      this.responseWarn = '';
      this.updateProgress('Analizando...');
      if (input.length > 15 || this.addressService.isMaybeAnAddress(input)) {
        this.addressService.analyze(input).subscribe((resp: Address) => {
          this.innerSearch(resp);
        }, error => {
          this.updateProgress('Se produjo un error', true);
        });
      } else {
        this.updateProgress('Buscando en Google...');
        const request = {
          query: input,
          fields: ['name', 'geometry'],
        };
        const service = new google.maps.places.PlacesService(this.map);

        service.findPlaceFromQuery(request, (results, status) => {
          this.ngZone.run( () => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results[0].geometry) {
              this.ref = {
                pos: results[0].geometry.location
              } as Reference;
              this.origin = {address: {fullAddress: input, position: results[0].geometry.location}};
              this.origin.status = 'found';
              this.findHospital(this.origin);
            } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
              this.updateProgress('No se encontraron resultados', true);
            }
          });
        });
      }

    }
  }

  innerSearch(address: Address): void {
    this.updateProgress('Buscando dirección...');
    this.addressService.detailSearch(address)
      .subscribe(response => {
        if (!!response.pos && response.pos.lat && response.pos.lng) {
          this.ref = {
            pos: response.pos
          } as Reference;
          address.position = response.pos;
          this.origin = {address};
          this.origin.status = 'found';
          this.findHospital(this.origin);
        }
        if (response.warn) {
          this.responseWarn = response.warn;
        } else if (response.error !== undefined) {
          this.responseWarn = response.error === 'ZERO_RESULTS' ? 'No hemos encontrado el lugar: ' + address.reference :
            'Ha ocurrido un error inesperado';
        }
        this.updateProgress('');
      }, error => {
        if (this.origin.address) {
          this.origin.address.position = undefined;
        }
        this.responseWarn = 'Dirección no encontrada';
        this.updateProgress('');
      });
  }

  openAtGmap(destination: Hospital) {
    if (!this.origin.address.position) {
      return null;
    }
    const gMapsUri = `https://www.google.com/maps/dir/?api=1&origin=${this.origin.address.position.lat},${this.origin.address.position.lng}&destination=${destination.pos.lat},${destination.pos.lng}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(gMapsUri);
  }

  help() {
    const dialogRef = this.dialog.open(
      HelpDialogComponent, {
        height: '730px',
        width: '600px',
      });
  }

  toggleCard() {
    this.shrink = !this.shrink;
  }

  routeTo(hospital) {
    if (this.origin) {
      this.selectedHospital = hospital;
      this.nearHospitalFound.emit([this.origin.address.position, hospital.pos]);
    }
  }

  findHospital(destination: Destination) {
    if (destination.address.position) {
      this.updateProgress('Buscando hospital...');

      this.hospitalsService.findClosestHospitals(destination.address.position, this.sortedHospitals)
        .subscribe((resp: { hospitals: Hospital[]; status: google.maps.DistanceMatrixStatus }) => {
          if (resp.status === 'OK') {
            this.ngZone.run( () => {
              this.sortedHospitals = [...resp.hospitals].sort(
                (itemA: Hospital, itemB: Hospital) => (itemA.distance || 0) - (itemB.distance || 0));
              this.selectedHospital = this.sortedHospitals[0];
              if (this.shrinkable) {
                this.shrink = true;
              }
              this.nearHospitalFound.emit([
                destination.address.position,
                this.convertToLatLng(this.sortedHospitals[0].pos)
              ]);
              this.updateProgress('');
            });
          }
        });
    }
  }

  convertToLatLng(pos: google.maps.LatLngLiteral) {
    return new google.maps.LatLng(pos.lat, pos.lng);
  }

  updateInfo() {
    this.sortedHospitals = this.filterHospitals();
    if (this.origin) {
      this.findHospital(this.origin);
    }
  }

  view(destination: Hospital) {
    this.hospitalSelected.emit(destination.pos);
  }

  trackHospitals(index, item) {
    return item.name;
  }
}


@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.html',
})
export class HelpDialogComponent {
  constructor(public dialogRef: MatDialogRef<HelpDialogComponent>) {}
}
