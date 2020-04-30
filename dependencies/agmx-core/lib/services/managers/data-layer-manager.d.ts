import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmDataLayer } from './../../directives/data-layer';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import { Data, DataOptions, Feature } from './../google-maps-types';
/**
 * Manages all Data Layers for a Google Map instance.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DataLayerManager {
    private _wrapper;
    private _zone;
    private _layers;
    constructor(_wrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    /**
     * Adds a new Data Layer to the map.
     */
    addDataLayer(layer: AgmDataLayer): void;
    deleteDataLayer(layer: AgmDataLayer): void;
    updateGeoJson(layer: AgmDataLayer, geoJson: Object | string): void;
    setDataOptions(layer: AgmDataLayer, options: DataOptions): void;
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    createEventObservable<T>(eventName: string, layer: AgmDataLayer): Observable<T>;
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    getDataFeatures(d: Data, geoJson: Object | string): Promise<Feature[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataLayerManager, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1sYXllci1tYW5hZ2VyLmQudHMiLCJzb3VyY2VzIjpbImRhdGEtbGF5ZXItbWFuYWdlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFnbURhdGFMYXllciB9IGZyb20gJy4vLi4vLi4vZGlyZWN0aXZlcy9kYXRhLWxheWVyJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQgeyBEYXRhLCBEYXRhT3B0aW9ucywgRmVhdHVyZSB9IGZyb20gJy4vLi4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuLyoqXG4gKiBNYW5hZ2VzIGFsbCBEYXRhIExheWVycyBmb3IgYSBHb29nbGUgTWFwIGluc3RhbmNlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEYXRhTGF5ZXJNYW5hZ2VyIHtcbiAgICBwcml2YXRlIF93cmFwcGVyO1xuICAgIHByaXZhdGUgX3pvbmU7XG4gICAgcHJpdmF0ZSBfbGF5ZXJzO1xuICAgIGNvbnN0cnVjdG9yKF93cmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgX3pvbmU6IE5nWm9uZSk7XG4gICAgLyoqXG4gICAgICogQWRkcyBhIG5ldyBEYXRhIExheWVyIHRvIHRoZSBtYXAuXG4gICAgICovXG4gICAgYWRkRGF0YUxheWVyKGxheWVyOiBBZ21EYXRhTGF5ZXIpOiB2b2lkO1xuICAgIGRlbGV0ZURhdGFMYXllcihsYXllcjogQWdtRGF0YUxheWVyKTogdm9pZDtcbiAgICB1cGRhdGVHZW9Kc29uKGxheWVyOiBBZ21EYXRhTGF5ZXIsIGdlb0pzb246IE9iamVjdCB8IHN0cmluZyk6IHZvaWQ7XG4gICAgc2V0RGF0YU9wdGlvbnMobGF5ZXI6IEFnbURhdGFMYXllciwgb3B0aW9uczogRGF0YU9wdGlvbnMpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBHb29nbGUgTWFwcyBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGdpdmVuIERhdGFMYXllciBhcyBhbiBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBsYXllcjogQWdtRGF0YUxheWVyKTogT2JzZXJ2YWJsZTxUPjtcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGZlYXR1cmVzIGZyb20gYSBnZW9Kc29uIHVzaW5nIGdvb2dsZS5tYXBzIERhdGEgQ2xhc3NcbiAgICAgKiBAcGFyYW0gZCA6IGdvb2dsZS5tYXBzLkRhdGEgY2xhc3MgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gZ2VvSnNvbiA6IHVybCBvciBnZW9qc29uIG9iamVjdFxuICAgICAqL1xuICAgIGdldERhdGFGZWF0dXJlcyhkOiBEYXRhLCBnZW9Kc29uOiBPYmplY3QgfCBzdHJpbmcpOiBQcm9taXNlPEZlYXR1cmVbXT47XG59XG4iXX0=