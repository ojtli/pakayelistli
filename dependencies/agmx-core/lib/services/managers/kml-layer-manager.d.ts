import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmKmlLayer } from './../../directives/kml-layer';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import { KmlLayerOptions } from './../google-maps-types';
/**
 * Manages all KML Layers for a Google Map instance.
 */
import * as ɵngcc0 from '@angular/core';
export declare class KmlLayerManager {
    private _wrapper;
    private _zone;
    private _layers;
    constructor(_wrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    /**
     * Adds a new KML Layer to the map.
     */
    addKmlLayer(layer: AgmKmlLayer): void;
    setOptions(layer: AgmKmlLayer, options: KmlLayerOptions): void;
    deleteKmlLayer(layer: AgmKmlLayer): void;
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    createEventObservable<T>(eventName: string, layer: AgmKmlLayer): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<KmlLayerManager, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21sLWxheWVyLW1hbmFnZXIuZC50cyIsInNvdXJjZXMiOlsia21sLWxheWVyLW1hbmFnZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWdtS21sTGF5ZXIgfSBmcm9tICcuLy4uLy4uL2RpcmVjdGl2ZXMva21sLWxheWVyJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQgeyBLbWxMYXllck9wdGlvbnMgfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzLXR5cGVzJztcbi8qKlxuICogTWFuYWdlcyBhbGwgS01MIExheWVycyBmb3IgYSBHb29nbGUgTWFwIGluc3RhbmNlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBLbWxMYXllck1hbmFnZXIge1xuICAgIHByaXZhdGUgX3dyYXBwZXI7XG4gICAgcHJpdmF0ZSBfem9uZTtcbiAgICBwcml2YXRlIF9sYXllcnM7XG4gICAgY29uc3RydWN0b3IoX3dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBfem9uZTogTmdab25lKTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbmV3IEtNTCBMYXllciB0byB0aGUgbWFwLlxuICAgICAqL1xuICAgIGFkZEttbExheWVyKGxheWVyOiBBZ21LbWxMYXllcik6IHZvaWQ7XG4gICAgc2V0T3B0aW9ucyhsYXllcjogQWdtS21sTGF5ZXIsIG9wdGlvbnM6IEttbExheWVyT3B0aW9ucyk6IHZvaWQ7XG4gICAgZGVsZXRlS21sTGF5ZXIobGF5ZXI6IEFnbUttbExheWVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgR29vZ2xlIE1hcHMgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBLbWxMYXllciBhcyBhbiBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBsYXllcjogQWdtS21sTGF5ZXIpOiBPYnNlcnZhYmxlPFQ+O1xufVxuIl19