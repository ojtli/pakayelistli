import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmPolyline } from '../../directives/polyline';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as ɵngcc0 from '@angular/core';
export declare class PolylineManager {
    private _mapsWrapper;
    private _zone;
    private _polylines;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    private static _convertPoints;
    addPolyline(line: AgmPolyline): void;
    updatePolylinePoints(line: AgmPolyline): Promise<void>;
    setPolylineOptions(line: AgmPolyline, options: {
        [propName: string]: any;
    }): Promise<void>;
    deletePolyline(line: AgmPolyline): Promise<void>;
    createEventObservable<T>(eventName: string, line: AgmPolyline): Observable<T>;
    createEventObservableOnPath<T>(eventName: string, line: AgmPolyline): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PolylineManager, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtbWFuYWdlci5kLnRzIiwic291cmNlcyI6WyJwb2x5bGluZS1tYW5hZ2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWdtUG9seWxpbmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3BvbHlsaW5lJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUG9seWxpbmVNYW5hZ2VyIHtcbiAgICBwcml2YXRlIF9tYXBzV3JhcHBlcjtcbiAgICBwcml2YXRlIF96b25lO1xuICAgIHByaXZhdGUgX3BvbHlsaW5lcztcbiAgICBjb25zdHJ1Y3RvcihfbWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBfem9uZTogTmdab25lKTtcbiAgICBwcml2YXRlIHN0YXRpYyBfY29udmVydFBvaW50cztcbiAgICBhZGRQb2x5bGluZShsaW5lOiBBZ21Qb2x5bGluZSk6IHZvaWQ7XG4gICAgdXBkYXRlUG9seWxpbmVQb2ludHMobGluZTogQWdtUG9seWxpbmUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFBvbHlsaW5lT3B0aW9ucyhsaW5lOiBBZ21Qb2x5bGluZSwgb3B0aW9uczoge1xuICAgICAgICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbiAgICB9KTogUHJvbWlzZTx2b2lkPjtcbiAgICBkZWxldGVQb2x5bGluZShsaW5lOiBBZ21Qb2x5bGluZSk6IFByb21pc2U8dm9pZD47XG4gICAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBsaW5lOiBBZ21Qb2x5bGluZSk6IE9ic2VydmFibGU8VD47XG4gICAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlT25QYXRoPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBsaW5lOiBBZ21Qb2x5bGluZSk6IE9ic2VydmFibGU8VD47XG59XG4iXX0=