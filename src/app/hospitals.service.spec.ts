import { TestBed } from '@angular/core/testing';

import { HospitalsService } from './hospitals.service';

describe('HospitalsService', () => {
  let service: HospitalsService;
  const hospitals = [
    {name: 'Hospital covid de prueba 1', city: 'Managua', pos: { lat: 12.147108, lng: -86.217831 },
      covid19: true, public: true, private: false},
    {name: 'Hospital Covid de prueba 2', city: 'Rivas', pos: {lat: 11.440219, lng: -85.839791},
      covid19: true, public: true, private: false},
    {name: 'Hospital Privado de prueba', city: 'Rivas', pos: {lat: 11.440219, lng: -85.839791},
      covid19: false, public: true, private: true},
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call calculateDistances', () => {
    service.calculateDistances = (origin, destinies, callback) => { //mock function
      const response = {
        rows: [
          {elements: destinies.map((item, index) => ({
              distance: {value: index % 2 ? (index + 1) * 1000 : (index + 1) * 1500}
            }))}
        ],
      };
      callback(response, 'OK');
    };
    spyOn(service, 'calculateDistances');
    service.findClosestHospitals( {lat: 1, lng: 1} as any,
      hospitals).subscribe(resp => {
        expect(resp.hospitals[0]).toEqual(jasmine.objectContaining({distance: 1.5}));
    });

    expect(service.calculateDistances).toHaveBeenCalled();
  });
});
