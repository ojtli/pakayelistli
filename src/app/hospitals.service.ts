import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Hospital, HOSPITALS} from './hospitals';

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  constructor() { }

  findClosestHospitals(origin: google.maps.LatLng | undefined, hospitals: Hospital[]):
      Observable<{hospitals: Hospital[], status: google.maps.DistanceMatrixStatus}> {
    return new Observable(observer => {
      this.calculateDistances(origin, hospitals,
        (response: google.maps.DistanceMatrixResponse, status: google.maps.DistanceMatrixStatus) => {
        response.rows[0].elements.forEach((item, index) => {
          hospitals[index].distance = item.distance.value / 1000;
        });
        observer.next({hospitals, status});
      });
    });
  }

  calculateDistances(origin, destinies, callback) {
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins: [origin],
      destinations: destinies.map(item => item.pos),
      travelMode: 'DRIVING'
    }, callback);
  }

  getAllHospitals() {
    return [...HOSPITALS];
  }
}
