import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPanelComponent } from './search-panel.component';
import {of} from 'rxjs';
import {HospitalsService} from '../hospitals.service';
import {AddressService} from 'amoxtlatiloyan';
import {MatDialogModule} from '@angular/material/dialog';
import {By} from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggle, MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';

declare const google: any;

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;
  let mockAddressService;
  let mockHospitalsService;
  const defaultHospitals = [
    {name: 'Hospital covid de prueba 1', city: 'Managua', pos: { lat: 12.147108, lng: -86.217831 },
      covid19: true, public: true, private: false},
    {name: 'Hospital Covid de prueba 2', city: 'Rivas', pos: {lat: 11.440219, lng: -85.839791},
      covid19: true, public: true, private: false},
    {name: 'Hospital Privado de prueba', city: 'Rivas', pos: {lat: 11.440219, lng: -85.839791},
      covid19: false, public: true, private: true},
  ];
  const hospitalsWithDistances = [
    {name: 'Hospital covid de prueba 1', city: 'Managua', pos: { lat: 12.147108, lng: -86.217831 }, distance: 20.1,
      covid19: true, public: true, private: false},
    {name: 'Hospital covid de prueba 2', city: 'Rivas', pos: {lat: 11.440219, lng: -85.839791},
      distance: 30.4, covid19: true, public: true, private: false},
    {name: 'Hospital Privado de prueba', city: 'Rivas', pos: {lat: 11.440219, lng: -85.839791},
      distance: 80.4, covid19: false, public: true, private: true},
  ]

  beforeEach(async(() => {
    mockAddressService = jasmine.createSpyObj(['validate']);
    mockHospitalsService = jasmine.createSpyObj(['findClosestHospitals', 'getAllHospitals']);

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatDialogModule,
        MatListModule,
        MatSlideToggleModule,
      ],
      declarations: [ SearchPanelComponent ],
      providers: [
        {provide: AddressService, useValue: mockAddressService},
        {provide: HospitalsService, useValue: mockHospitalsService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    component.convertToLatLng = () => null;
    mockHospitalsService.getAllHospitals.and.returnValue(defaultHospitals);

    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call findClosestHospitals', () => {
    mockHospitalsService.findClosestHospitals.and.returnValue(of({hospitals: hospitalsWithDistances, status: 'OK'}));
    component.findHospital({address: {position: {lat: 1, lng: 1} as any}});
    expect(mockHospitalsService.findClosestHospitals).toHaveBeenCalled();
  });

  it('should render covid hospitals by default', () => {
    expect(fixture.nativeElement.querySelectorAll('.mat-list-item').length).toBe(2);
  });
  it('should render covid and private hospitals', () => {
    component.privateHospitals = true;
    component.origin = null;
    component.updateInfo();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.mat-list-item')).length).toBe(3);
  });
  it('should filter list when mat-slide-toggle is toggled', () => {
    const filters = fixture.debugElement.queryAll(By.directive(MatSlideToggle));
    console.log(filters);
    (filters[1].componentInstance as MatSlideToggle).toggle();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.mat-list-item')).length).toBe(3);
  });
});
