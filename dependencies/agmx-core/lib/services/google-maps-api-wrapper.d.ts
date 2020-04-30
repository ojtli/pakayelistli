/// <reference types="googlemaps" />
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import * as mapTypes from './google-maps-types';
import { Polyline } from './google-maps-types';
import { PolylineOptions } from './google-maps-types';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
import * as ɵngcc0 from '@angular/core';
export declare class GoogleMapsAPIWrapper {
    private _loader;
    private _zone;
    private _map;
    private _mapResolver;
    constructor(_loader: MapsAPILoader, _zone: NgZone);
    createMap(el: HTMLElement, mapOptions: mapTypes.MapOptions): Promise<void>;
    setMapOptions(options: mapTypes.MapOptions): void;
    /**
     * Creates a google map marker with the map context
     */
    createMarker(options?: mapTypes.MarkerOptions, addToMap?: boolean): Promise<mapTypes.Marker>;
    createInfoWindow(options?: mapTypes.InfoWindowOptions): Promise<mapTypes.InfoWindow>;
    /**
     * Creates a google.map.Circle for the current map.
     */
    createCircle(options: mapTypes.CircleOptions): Promise<mapTypes.Circle>;
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    createRectangle(options: mapTypes.RectangleOptions): Promise<mapTypes.Rectangle>;
    createPolyline(options: PolylineOptions): Promise<Polyline>;
    createPolygon(options: mapTypes.PolygonOptions): Promise<mapTypes.Polygon>;
    /**
     * Creates a new google.map.Data layer for the current map
     */
    createDataLayer(options?: mapTypes.DataOptions): Promise<mapTypes.Data>;
    /**
     * Creates a TransitLayer instance for a map
     * @param options
     */
    createTransitLayer(options: mapTypes.TransitLayerOptions): Promise<mapTypes.TransitLayer>;
    /**
     * Creates a BicyclingLayer instance for a map
     * @param options
     */
    createBicyclingLayer(options: mapTypes.BicyclingLayerOptions): Promise<mapTypes.BicyclingLayer>;
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    containsLocation(latLng: mapTypes.LatLngLiteral, polygon: mapTypes.Polygon): Promise<boolean>;
    subscribeToMapEvent<E>(eventName: string): Observable<E>;
    clearInstanceListeners(): void;
    setCenter(latLng: mapTypes.LatLngLiteral): Promise<void>;
    getZoom(): Promise<number>;
    getBounds(): Promise<mapTypes.LatLngBounds>;
    getMapTypeId(): Promise<mapTypes.MapTypeId>;
    setZoom(zoom: number): Promise<void>;
    getCenter(): Promise<mapTypes.LatLng>;
    getControls(): Promise<mapTypes.MVCArray<Node>[]>;
    panTo(latLng: mapTypes.LatLng | mapTypes.LatLngLiteral): Promise<void>;
    panBy(x: number, y: number): Promise<void>;
    fitBounds(latLng: mapTypes.LatLngBounds | mapTypes.LatLngBoundsLiteral, padding?: number | mapTypes.Padding): Promise<void>;
    panToBounds(latLng: mapTypes.LatLngBounds | mapTypes.LatLngBoundsLiteral, padding?: number | mapTypes.Padding): Promise<void>;
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    getNativeMap(): Promise<mapTypes.GoogleMap>;
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    getTrueNativeMap(): Promise<google.maps.Map>;
    /**
     * Triggers the given event name on the map instance.
     */
    triggerMapEvent(eventName: string): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GoogleMapsAPIWrapper, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXIuZC50cyIsInNvdXJjZXMiOlsiZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiZ29vZ2xlbWFwc1wiIC8+XG5pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIG1hcFR5cGVzIGZyb20gJy4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHsgUG9seWxpbmUgfSBmcm9tICcuL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7IFBvbHlsaW5lT3B0aW9ucyB9IGZyb20gJy4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHsgTWFwc0FQSUxvYWRlciB9IGZyb20gJy4vbWFwcy1hcGktbG9hZGVyL21hcHMtYXBpLWxvYWRlcic7XG4vKipcbiAqIFdyYXBwZXIgY2xhc3MgdGhhdCBoYW5kbGVzIHRoZSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIEdvb2dsZSBNYXBzIEphdmFzY3JpcHRcbiAqIEFQSSB2M1xuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHb29nbGVNYXBzQVBJV3JhcHBlciB7XG4gICAgcHJpdmF0ZSBfbG9hZGVyO1xuICAgIHByaXZhdGUgX3pvbmU7XG4gICAgcHJpdmF0ZSBfbWFwO1xuICAgIHByaXZhdGUgX21hcFJlc29sdmVyO1xuICAgIGNvbnN0cnVjdG9yKF9sb2FkZXI6IE1hcHNBUElMb2FkZXIsIF96b25lOiBOZ1pvbmUpO1xuICAgIGNyZWF0ZU1hcChlbDogSFRNTEVsZW1lbnQsIG1hcE9wdGlvbnM6IG1hcFR5cGVzLk1hcE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1hcE9wdGlvbnMob3B0aW9uczogbWFwVHlwZXMuTWFwT3B0aW9ucyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdvb2dsZSBtYXAgbWFya2VyIHdpdGggdGhlIG1hcCBjb250ZXh0XG4gICAgICovXG4gICAgY3JlYXRlTWFya2VyKG9wdGlvbnM/OiBtYXBUeXBlcy5NYXJrZXJPcHRpb25zLCBhZGRUb01hcD86IGJvb2xlYW4pOiBQcm9taXNlPG1hcFR5cGVzLk1hcmtlcj47XG4gICAgY3JlYXRlSW5mb1dpbmRvdyhvcHRpb25zPzogbWFwVHlwZXMuSW5mb1dpbmRvd09wdGlvbnMpOiBQcm9taXNlPG1hcFR5cGVzLkluZm9XaW5kb3c+O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBnb29nbGUubWFwLkNpcmNsZSBmb3IgdGhlIGN1cnJlbnQgbWFwLlxuICAgICAqL1xuICAgIGNyZWF0ZUNpcmNsZShvcHRpb25zOiBtYXBUeXBlcy5DaXJjbGVPcHRpb25zKTogUHJvbWlzZTxtYXBUeXBlcy5DaXJjbGU+O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBnb29nbGUubWFwLlJlY3RhbmdsZSBmb3IgdGhlIGN1cnJlbnQgbWFwLlxuICAgICAqL1xuICAgIGNyZWF0ZVJlY3RhbmdsZShvcHRpb25zOiBtYXBUeXBlcy5SZWN0YW5nbGVPcHRpb25zKTogUHJvbWlzZTxtYXBUeXBlcy5SZWN0YW5nbGU+O1xuICAgIGNyZWF0ZVBvbHlsaW5lKG9wdGlvbnM6IFBvbHlsaW5lT3B0aW9ucyk6IFByb21pc2U8UG9seWxpbmU+O1xuICAgIGNyZWF0ZVBvbHlnb24ob3B0aW9uczogbWFwVHlwZXMuUG9seWdvbk9wdGlvbnMpOiBQcm9taXNlPG1hcFR5cGVzLlBvbHlnb24+O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgZ29vZ2xlLm1hcC5EYXRhIGxheWVyIGZvciB0aGUgY3VycmVudCBtYXBcbiAgICAgKi9cbiAgICBjcmVhdGVEYXRhTGF5ZXIob3B0aW9ucz86IG1hcFR5cGVzLkRhdGFPcHRpb25zKTogUHJvbWlzZTxtYXBUeXBlcy5EYXRhPjtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgVHJhbnNpdExheWVyIGluc3RhbmNlIGZvciBhIG1hcFxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgY3JlYXRlVHJhbnNpdExheWVyKG9wdGlvbnM6IG1hcFR5cGVzLlRyYW5zaXRMYXllck9wdGlvbnMpOiBQcm9taXNlPG1hcFR5cGVzLlRyYW5zaXRMYXllcj47XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIEJpY3ljbGluZ0xheWVyIGluc3RhbmNlIGZvciBhIG1hcFxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgY3JlYXRlQmljeWNsaW5nTGF5ZXIob3B0aW9uczogbWFwVHlwZXMuQmljeWNsaW5nTGF5ZXJPcHRpb25zKTogUHJvbWlzZTxtYXBUeXBlcy5CaWN5Y2xpbmdMYXllcj47XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBnaXZlbiBjb29yZGluYXRlcyBhcmUgaW5zaXRlIGEgUG9seWdvbiBwYXRoLlxuICAgICAqL1xuICAgIGNvbnRhaW5zTG9jYXRpb24obGF0TG5nOiBtYXBUeXBlcy5MYXRMbmdMaXRlcmFsLCBwb2x5Z29uOiBtYXBUeXBlcy5Qb2x5Z29uKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBzdWJzY3JpYmVUb01hcEV2ZW50PEU+KGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxFPjtcbiAgICBjbGVhckluc3RhbmNlTGlzdGVuZXJzKCk6IHZvaWQ7XG4gICAgc2V0Q2VudGVyKGxhdExuZzogbWFwVHlwZXMuTGF0TG5nTGl0ZXJhbCk6IFByb21pc2U8dm9pZD47XG4gICAgZ2V0Wm9vbSgpOiBQcm9taXNlPG51bWJlcj47XG4gICAgZ2V0Qm91bmRzKCk6IFByb21pc2U8bWFwVHlwZXMuTGF0TG5nQm91bmRzPjtcbiAgICBnZXRNYXBUeXBlSWQoKTogUHJvbWlzZTxtYXBUeXBlcy5NYXBUeXBlSWQ+O1xuICAgIHNldFpvb20oem9vbTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICBnZXRDZW50ZXIoKTogUHJvbWlzZTxtYXBUeXBlcy5MYXRMbmc+O1xuICAgIGdldENvbnRyb2xzKCk6IFByb21pc2U8bWFwVHlwZXMuTVZDQXJyYXk8Tm9kZT5bXT47XG4gICAgcGFuVG8obGF0TG5nOiBtYXBUeXBlcy5MYXRMbmcgfCBtYXBUeXBlcy5MYXRMbmdMaXRlcmFsKTogUHJvbWlzZTx2b2lkPjtcbiAgICBwYW5CeSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgZml0Qm91bmRzKGxhdExuZzogbWFwVHlwZXMuTGF0TG5nQm91bmRzIHwgbWFwVHlwZXMuTGF0TG5nQm91bmRzTGl0ZXJhbCwgcGFkZGluZz86IG51bWJlciB8IG1hcFR5cGVzLlBhZGRpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHBhblRvQm91bmRzKGxhdExuZzogbWFwVHlwZXMuTGF0TG5nQm91bmRzIHwgbWFwVHlwZXMuTGF0TG5nQm91bmRzTGl0ZXJhbCwgcGFkZGluZz86IG51bWJlciB8IG1hcFR5cGVzLlBhZGRpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5hdGl2ZSBHb29nbGUgTWFwcyBNYXAgaW5zdGFuY2UuIEJlIGNhcmVmdWwgd2hlbiB1c2luZyB0aGlzIGluc3RhbmNlIGRpcmVjdGx5LlxuICAgICAqL1xuICAgIGdldE5hdGl2ZU1hcCgpOiBQcm9taXNlPG1hcFR5cGVzLkdvb2dsZU1hcD47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmF0aXZlIEdvb2dsZSBNYXBzIE1hcCBpbnN0YW5jZS4gQmUgY2FyZWZ1bCB3aGVuIHVzaW5nIHRoaXMgaW5zdGFuY2UgZGlyZWN0bHkuXG4gICAgICovXG4gICAgZ2V0VHJ1ZU5hdGl2ZU1hcCgpOiBQcm9taXNlPGdvb2dsZS5tYXBzLk1hcD47XG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGdpdmVuIGV2ZW50IG5hbWUgb24gdGhlIG1hcCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICB0cmlnZ2VyTWFwRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xufVxuIl19