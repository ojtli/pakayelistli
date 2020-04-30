import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmPolygon } from '../../directives/polygon';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as ɵngcc0 from '@angular/core';
export declare class PolygonManager {
    private _mapsWrapper;
    private _zone;
    private _polygons;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    addPolygon(path: AgmPolygon): void;
    updatePolygon(polygon: AgmPolygon): Promise<void>;
    setPolygonOptions(path: AgmPolygon, options: {
        [propName: string]: any;
    }): Promise<void>;
    deletePolygon(paths: AgmPolygon): Promise<void>;
    createEventObservable<T>(eventName: string, path: AgmPolygon): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PolygonManager, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi1tYW5hZ2VyLmQudHMiLCJzb3VyY2VzIjpbInBvbHlnb24tbWFuYWdlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWdtUG9seWdvbiB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcG9seWdvbic7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBvbHlnb25NYW5hZ2VyIHtcbiAgICBwcml2YXRlIF9tYXBzV3JhcHBlcjtcbiAgICBwcml2YXRlIF96b25lO1xuICAgIHByaXZhdGUgX3BvbHlnb25zO1xuICAgIGNvbnN0cnVjdG9yKF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIF96b25lOiBOZ1pvbmUpO1xuICAgIGFkZFBvbHlnb24ocGF0aDogQWdtUG9seWdvbik6IHZvaWQ7XG4gICAgdXBkYXRlUG9seWdvbihwb2x5Z29uOiBBZ21Qb2x5Z29uKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRQb2x5Z29uT3B0aW9ucyhwYXRoOiBBZ21Qb2x5Z29uLCBvcHRpb25zOiB7XG4gICAgICAgIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xuICAgIH0pOiBQcm9taXNlPHZvaWQ+O1xuICAgIGRlbGV0ZVBvbHlnb24ocGF0aHM6IEFnbVBvbHlnb24pOiBQcm9taXNlPHZvaWQ+O1xuICAgIGNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgcGF0aDogQWdtUG9seWdvbik6IE9ic2VydmFibGU8VD47XG59XG4iXX0=