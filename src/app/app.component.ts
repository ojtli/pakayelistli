import {Component, OnInit, ViewChild} from '@angular/core';
import {Address, AddressService, Reference} from 'amoxtlatiloyan';
import {AgmMap} from 'agmx-core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

interface Destination {
  status?: string;
  errorMessage?: string;
  address: Address;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AddressService]
})
export class AppComponent implements OnInit {
  title = 'pakayelistli';
  ref: Reference | null = null;
  center: google.maps.LatLng | google.maps.LatLngLiteral = {lat: 12.129208234908715, lng: -86.26639924943447};
  reference: any;
  latlngBounds: google.maps.LatLngBounds;
  position: google.maps.ControlPosition;
  zoomControlOptions: google.maps.ZoomControlOptions;
  nodes: any;
  @ViewChild('agm-map') mapEl: AgmMap;
  map: google.maps.Map;
  origin: Destination;

  constructor(private snackBar: MatSnackBar,
              private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
  }

  view(pos: google.maps.LatLng) {
    this.center = pos;
  }

  mapReady(map: google.maps.Map) {
    this.map = map;
    this.zoomControlOptions = {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    };
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
    ]).subscribe(result => {
      if (result.matches) {
        this.position = google.maps.ControlPosition.BOTTOM_CENTER;

        this.zoomControlOptions = {
          position: google.maps.ControlPosition.TOP_LEFT
        };
      }
    });

    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
    ]).subscribe(result => {
      if (result.matches) {
        this.position = google.maps.ControlPosition.LEFT_BOTTOM;

        this.zoomControlOptions = {
          position: google.maps.ControlPosition.RIGHT_BOTTOM
        };
      }
    });

    this.breakpointObserver.observe([
      Breakpoints.TabletPortrait,
    ]).subscribe(result => {
      if (result.matches) {
        this.position = google.maps.ControlPosition.RIGHT_BOTTOM;

        this.zoomControlOptions = {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        };
      }
    });

    this.breakpointObserver.observe([
      Breakpoints.TabletLandscape,
      Breakpoints.WebLandscape,
    ]).subscribe(result => {
      if (result.matches) {
        this.position = google.maps.ControlPosition.TOP_LEFT;
        this.zoomControlOptions = {
          position: google.maps.ControlPosition.RIGHT_BOTTOM
        };
      }
    });
  }

  drawDirection($event: google.maps.LatLng[]) {
    this.nodes = $event;
  }

  protected fitBounds(nodes): google.maps.LatLngBounds {
    const latlngBounds = new google.maps.LatLngBounds();
    let upper;
    let lower;
    let eastest;
    let westest;

    nodes.forEach((location, index) => {
      if (index === 0) {
        upper = lower = location.lat;
        eastest = westest = location.lng;
      } else {
        upper = upper > location.lat ? upper : location.lat;
        lower = lower < location.lat ? lower : location.lat;
        eastest = eastest > location.lng ? eastest : location.lng;
        westest = westest < location.lng ? westest : location.lng;
      }
    });

    if (nodes.length) {
      latlngBounds.extend(new window.google.maps.LatLng(upper, westest));
      latlngBounds.extend(new window.google.maps.LatLng(lower, eastest));
    } else {
      latlngBounds.extend(new window.google.maps.LatLng(this.center.lat as number, this.center.lng as number));
    }
    return latlngBounds;
  }

}

