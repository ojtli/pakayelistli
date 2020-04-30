import { Observable } from 'rxjs';
import { NgZone } from '@angular/core';
import { AgmInfoWindow } from '../../directives/info-window';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { InfoWindowOptions } from '../google-maps-types';
import { MarkerManager } from './marker-manager';
import * as ɵngcc0 from '@angular/core';
export declare class InfoWindowManager {
    private _mapsWrapper;
    private _zone;
    private _markerManager;
    private _infoWindows;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone, _markerManager: MarkerManager);
    deleteInfoWindow(infoWindow: AgmInfoWindow): Promise<void>;
    setPosition(infoWindow: AgmInfoWindow): Promise<void>;
    setZIndex(infoWindow: AgmInfoWindow): Promise<void>;
    open(infoWindow: AgmInfoWindow): Promise<void>;
    close(infoWindow: AgmInfoWindow): Promise<void>;
    setOptions(infoWindow: AgmInfoWindow, options: InfoWindowOptions): Promise<void>;
    addInfoWindow(infoWindow: AgmInfoWindow): void;
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    createEventObservable<T>(eventName: string, infoWindow: AgmInfoWindow): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InfoWindowManager, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby13aW5kb3ctbWFuYWdlci5kLnRzIiwic291cmNlcyI6WyJpbmZvLXdpbmRvdy1tYW5hZ2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFnbUluZm9XaW5kb3cgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2luZm8td2luZG93JztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuaW1wb3J0IHsgSW5mb1dpbmRvd09wdGlvbnMgfSBmcm9tICcuLi9nb29nbGUtbWFwcy10eXBlcyc7XG5pbXBvcnQgeyBNYXJrZXJNYW5hZ2VyIH0gZnJvbSAnLi9tYXJrZXItbWFuYWdlcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbmZvV2luZG93TWFuYWdlciB7XG4gICAgcHJpdmF0ZSBfbWFwc1dyYXBwZXI7XG4gICAgcHJpdmF0ZSBfem9uZTtcbiAgICBwcml2YXRlIF9tYXJrZXJNYW5hZ2VyO1xuICAgIHByaXZhdGUgX2luZm9XaW5kb3dzO1xuICAgIGNvbnN0cnVjdG9yKF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIF96b25lOiBOZ1pvbmUsIF9tYXJrZXJNYW5hZ2VyOiBNYXJrZXJNYW5hZ2VyKTtcbiAgICBkZWxldGVJbmZvV2luZG93KGluZm9XaW5kb3c6IEFnbUluZm9XaW5kb3cpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFBvc2l0aW9uKGluZm9XaW5kb3c6IEFnbUluZm9XaW5kb3cpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFpJbmRleChpbmZvV2luZG93OiBBZ21JbmZvV2luZG93KTogUHJvbWlzZTx2b2lkPjtcbiAgICBvcGVuKGluZm9XaW5kb3c6IEFnbUluZm9XaW5kb3cpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGNsb3NlKGluZm9XaW5kb3c6IEFnbUluZm9XaW5kb3cpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE9wdGlvbnMoaW5mb1dpbmRvdzogQWdtSW5mb1dpbmRvdywgb3B0aW9uczogSW5mb1dpbmRvd09wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGFkZEluZm9XaW5kb3coaW5mb1dpbmRvdzogQWdtSW5mb1dpbmRvdyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIEdvb2dsZSBNYXBzIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgZ2l2ZW4gSW5mb1dpbmRvdyBhcyBhbiBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBpbmZvV2luZG93OiBBZ21JbmZvV2luZG93KTogT2JzZXJ2YWJsZTxUPjtcbn1cbiJdfQ==