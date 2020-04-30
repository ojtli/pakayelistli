import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MouseEvent } from '../map-types';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
import { FullscreenControlOptions, LatLngLiteral, MapTypeControlOptions, MapTypeId, PanControlOptions, RotateControlOptions, ScaleControlOptions, StreetViewControlOptions, ZoomControlOptions } from '../services/google-maps-types';
import { LatLngBounds, LatLngBoundsLiteral, MapTypeStyle } from '../services/google-maps-types';
/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class AgmMap implements OnChanges, OnInit, OnDestroy {
    private _elem;
    private _mapsWrapper;
    /**
     * Map option attributes that can change over time
     */
    private static _mapOptionsAttributes;
    /**
     * The longitude that defines the center of the map.
     */
    longitude: number;
    /**
     * The latitude that defines the center of the map.
     */
    latitude: number;
    /**
     * The zoom level of the map. The default zoom level is 8.
     */
    zoom: number;
    /**
     * The minimal zoom level of the map allowed. When not provided, no restrictions to the zoom level
     * are enforced.
     */
    minZoom: number;
    /**
     * The maximal zoom level of the map allowed. When not provided, no restrictions to the zoom level
     * are enforced.
     */
    maxZoom: number;
    /**
     * Enables/disables if map is draggable.
     */
    draggable: boolean;
    /**
     * Enables/disables zoom and center on double click. Enabled by default.
     */
    disableDoubleClickZoom: boolean;
    /**
     * Enables/disables all default UI of the Google map. Please note: When the map is created, this
     * value cannot get updated.
     */
    disableDefaultUI: boolean;
    /**
     * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
     */
    scrollwheel: boolean;
    /**
     * Color used for the background of the Map div. This color will be visible when tiles have not
     * yet loaded as the user pans. This option can only be set when the map is initialized.
     */
    backgroundColor: string;
    /**
     * The name or url of the cursor to display when mousing over a draggable map. This property uses
     * the css  * cursor attribute to change the icon. As with the css property, you must specify at
     * least one fallback cursor that is not a URL. For example:
     * [draggableCursor]="'url(http://www.example.com/icon.png), auto;'"
     */
    draggableCursor: string;
    /**
     * The name or url of the cursor to display when the map is being dragged. This property uses the
     * css cursor attribute to change the icon. As with the css property, you must specify at least
     * one fallback cursor that is not a URL. For example:
     * [draggingCursor]="'url(http://www.example.com/icon.png), auto;'"
     */
    draggingCursor: string;
    /**
     * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
     * enabled by default.
     */
    keyboardShortcuts: boolean;
    /**
     * The enabled/disabled state of the Zoom control.
     */
    zoomControl: boolean;
    /**
     * Options for the Zoom control.
     */
    zoomControlOptions: ZoomControlOptions;
    /**
     * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
     * modes, these styles will only apply to labels and geometry.
     */
    styles: MapTypeStyle[];
    /**
     * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
     * used to
     * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
     */
    usePanning: boolean;
    /**
     * The initial enabled/disabled state of the Street View Pegman control.
     * This control is part of the default UI, and should be set to false when displaying a map type
     * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
     */
    streetViewControl: boolean;
    /**
     * Options for the Street View control.
     */
    streetViewControlOptions: StreetViewControlOptions;
    /**
     * Sets the viewport to contain the given bounds.
     */
    fitBounds: LatLngBoundsLiteral | LatLngBounds;
    /**
     * The initial enabled/disabled state of the Scale control. This is disabled by default.
     */
    scaleControl: boolean;
    /**
     * Options for the scale control.
     */
    scaleControlOptions: ScaleControlOptions;
    /**
     * The initial enabled/disabled state of the Map type control.
     */
    mapTypeControl: boolean;
    /**
     * Options for the Map type control.
     */
    mapTypeControlOptions: MapTypeControlOptions;
    /**
     * The initial enabled/disabled state of the Pan control.
     */
    panControl: boolean;
    /**
     * Options for the Pan control.
     */
    panControlOptions: PanControlOptions;
    /**
     * The initial enabled/disabled state of the Rotate control.
     */
    rotateControl: boolean;
    /**
     * Options for the Rotate control.
     */
    rotateControlOptions: RotateControlOptions;
    /**
     * The initial enabled/disabled state of the Fullscreen control.
     */
    fullscreenControl: boolean;
    /**
     * Options for the Fullscreen control.
     */
    fullscreenControlOptions: FullscreenControlOptions;
    /**
     * The map mapTypeId. Defaults to 'roadmap'.
     */
    mapTypeId: 'roadmap' | 'hybrid' | 'satellite' | 'terrain' | string;
    /**
     * When false, map icons are not clickable. A map icon represents a point of interest,
     * also known as a POI. By default map icons are clickable.
     */
    clickableIcons: boolean;
    /**
     * This setting controls how gestures on the map are handled.
     * Allowed values:
     * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
     * - 'greedy'      (All touch gestures pan or zoom the map.)
     * - 'none'        (The map cannot be panned or zoomed by user gestures.)
     * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
     */
    gestureHandling: 'cooperative' | 'greedy' | 'none' | 'auto';
    /**
     * This event emitter gets emitted when the user clicks on the map (but not when they click on a
     * marker or infoWindow).
     */
    mapClick: EventEmitter<MouseEvent>;
    /**
     * This event emitter gets emitted when the user right-clicks on the map (but not when they click
     * on a marker or infoWindow).
     */
    mapRightClick: EventEmitter<MouseEvent>;
    /**
     * This event emitter gets emitted when the user double-clicks on the map (but not when they click
     * on a marker or infoWindow).
     */
    mapDblClick: EventEmitter<MouseEvent>;
    /**
     * This event emitter is fired when the map center changes.
     */
    centerChange: EventEmitter<LatLngLiteral>;
    /**
     * This event is fired when the viewport bounds have changed.
     */
    boundsChange: EventEmitter<LatLngBounds>;
    /**
     * This event is fired when the mapTypeId property changes.
     */
    mapTypeIdChange: EventEmitter<MapTypeId>;
    /**
     * This event is fired when the map becomes idle after panning or zooming.
     */
    idle: EventEmitter<void>;
    /**
     * This event is fired when the zoom level has changed.
     */
    zoomChange: EventEmitter<number>;
    /**
     * This event is fired when the google map is fully initialized.
     * You get the google.maps.Map instance as a result of this EventEmitter.
     */
    mapReady: EventEmitter<any>;
    private _observableSubscriptions;
    constructor(_elem: ElementRef, _mapsWrapper: GoogleMapsAPIWrapper);
    /** @internal */
    ngOnInit(): void;
    /** @internal */
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    triggerResize(recenter?: boolean): Promise<void>;
    private _initMapInstance;
    private _updateMapOptionsChanges;
    private _updatePosition;
    private _setCenter;
    private _fitBounds;
    private _handleMapCenterChange;
    private _handleBoundsChange;
    private _handleMapTypeIdChange;
    private _handleMapZoomChange;
    private _handleIdleEvent;
    private _handleMapMouseEvents;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmMap, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AgmMap, "agm-map", never, { "longitude": "longitude"; "latitude": "latitude"; "zoom": "zoom"; "draggable": "mapDraggable"; "disableDoubleClickZoom": "disableDoubleClickZoom"; "disableDefaultUI": "disableDefaultUI"; "scrollwheel": "scrollwheel"; "keyboardShortcuts": "keyboardShortcuts"; "zoomControl": "zoomControl"; "styles": "styles"; "usePanning": "usePanning"; "streetViewControl": "streetViewControl"; "fitBounds": "fitBounds"; "scaleControl": "scaleControl"; "mapTypeControl": "mapTypeControl"; "panControl": "panControl"; "rotateControl": "rotateControl"; "fullscreenControl": "fullscreenControl"; "mapTypeId": "mapTypeId"; "clickableIcons": "clickableIcons"; "gestureHandling": "gestureHandling"; "minZoom": "minZoom"; "maxZoom": "maxZoom"; "backgroundColor": "backgroundColor"; "draggableCursor": "draggableCursor"; "draggingCursor": "draggingCursor"; "zoomControlOptions": "zoomControlOptions"; "streetViewControlOptions": "streetViewControlOptions"; "scaleControlOptions": "scaleControlOptions"; "mapTypeControlOptions": "mapTypeControlOptions"; "panControlOptions": "panControlOptions"; "rotateControlOptions": "rotateControlOptions"; "fullscreenControlOptions": "fullscreenControlOptions"; }, { "mapClick": "mapClick"; "mapRightClick": "mapRightClick"; "mapDblClick": "mapDblClick"; "centerChange": "centerChange"; "boundsChange": "boundsChange"; "mapTypeIdChange": "mapTypeIdChange"; "idle": "idle"; "zoomChange": "zoomChange"; "mapReady": "mapReady"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmQudHMiLCJzb3VyY2VzIjpbIm1hcC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tICcuLi9tYXAtdHlwZXMnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQgeyBGdWxsc2NyZWVuQ29udHJvbE9wdGlvbnMsIExhdExuZ0xpdGVyYWwsIE1hcFR5cGVDb250cm9sT3B0aW9ucywgTWFwVHlwZUlkLCBQYW5Db250cm9sT3B0aW9ucywgUm90YXRlQ29udHJvbE9wdGlvbnMsIFNjYWxlQ29udHJvbE9wdGlvbnMsIFN0cmVldFZpZXdDb250cm9sT3B0aW9ucywgWm9vbUNvbnRyb2xPcHRpb25zIH0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHsgTGF0TG5nQm91bmRzLCBMYXRMbmdCb3VuZHNMaXRlcmFsLCBNYXBUeXBlU3R5bGUgfSBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy10eXBlcyc7XG4vKipcbiAqIEFnbU1hcCByZW5kZXJzIGEgR29vZ2xlIE1hcC5cbiAqICoqSW1wb3J0YW50IG5vdGUqKjogVG8gYmUgYWJsZSBzZWUgYSBtYXAgaW4gdGhlIGJyb3dzZXIsIHlvdSBoYXZlIHRvIGRlZmluZSBhIGhlaWdodCBmb3IgdGhlXG4gKiBlbGVtZW50IGBhZ20tbWFwYC5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICBhZ20tbWFwIHtcbiAqICAgICAgaGVpZ2h0OiAzMDBweDtcbiAqICAgIH1cbiAqIGBdLFxuICogIHRlbXBsYXRlOiBgXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZ21NYXAgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9lbGVtO1xuICAgIHByaXZhdGUgX21hcHNXcmFwcGVyO1xuICAgIC8qKlxuICAgICAqIE1hcCBvcHRpb24gYXR0cmlidXRlcyB0aGF0IGNhbiBjaGFuZ2Ugb3ZlciB0aW1lXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgX21hcE9wdGlvbnNBdHRyaWJ1dGVzO1xuICAgIC8qKlxuICAgICAqIFRoZSBsb25naXR1ZGUgdGhhdCBkZWZpbmVzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcC5cbiAgICAgKi9cbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbGF0aXR1ZGUgdGhhdCBkZWZpbmVzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcC5cbiAgICAgKi9cbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSB6b29tIGxldmVsIG9mIHRoZSBtYXAuIFRoZSBkZWZhdWx0IHpvb20gbGV2ZWwgaXMgOC5cbiAgICAgKi9cbiAgICB6b29tOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltYWwgem9vbSBsZXZlbCBvZiB0aGUgbWFwIGFsbG93ZWQuIFdoZW4gbm90IHByb3ZpZGVkLCBubyByZXN0cmljdGlvbnMgdG8gdGhlIHpvb20gbGV2ZWxcbiAgICAgKiBhcmUgZW5mb3JjZWQuXG4gICAgICovXG4gICAgbWluWm9vbTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbWFsIHpvb20gbGV2ZWwgb2YgdGhlIG1hcCBhbGxvd2VkLiBXaGVuIG5vdCBwcm92aWRlZCwgbm8gcmVzdHJpY3Rpb25zIHRvIHRoZSB6b29tIGxldmVsXG4gICAgICogYXJlIGVuZm9yY2VkLlxuICAgICAqL1xuICAgIG1heFpvb206IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBFbmFibGVzL2Rpc2FibGVzIGlmIG1hcCBpcyBkcmFnZ2FibGUuXG4gICAgICovXG4gICAgZHJhZ2dhYmxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgem9vbSBhbmQgY2VudGVyIG9uIGRvdWJsZSBjbGljay4gRW5hYmxlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRW5hYmxlcy9kaXNhYmxlcyBhbGwgZGVmYXVsdCBVSSBvZiB0aGUgR29vZ2xlIG1hcC4gUGxlYXNlIG5vdGU6IFdoZW4gdGhlIG1hcCBpcyBjcmVhdGVkLCB0aGlzXG4gICAgICogdmFsdWUgY2Fubm90IGdldCB1cGRhdGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVEZWZhdWx0VUk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgZmFsc2UsIGRpc2FibGVzIHNjcm9sbHdoZWVsIHpvb21pbmcgb24gdGhlIG1hcC4gVGhlIHNjcm9sbHdoZWVsIGlzIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBzY3JvbGx3aGVlbDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBDb2xvciB1c2VkIGZvciB0aGUgYmFja2dyb3VuZCBvZiB0aGUgTWFwIGRpdi4gVGhpcyBjb2xvciB3aWxsIGJlIHZpc2libGUgd2hlbiB0aWxlcyBoYXZlIG5vdFxuICAgICAqIHlldCBsb2FkZWQgYXMgdGhlIHVzZXIgcGFucy4gVGhpcyBvcHRpb24gY2FuIG9ubHkgYmUgc2V0IHdoZW4gdGhlIG1hcCBpcyBpbml0aWFsaXplZC5cbiAgICAgKi9cbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvciB1cmwgb2YgdGhlIGN1cnNvciB0byBkaXNwbGF5IHdoZW4gbW91c2luZyBvdmVyIGEgZHJhZ2dhYmxlIG1hcC4gVGhpcyBwcm9wZXJ0eSB1c2VzXG4gICAgICogdGhlIGNzcyAgKiBjdXJzb3IgYXR0cmlidXRlIHRvIGNoYW5nZSB0aGUgaWNvbi4gQXMgd2l0aCB0aGUgY3NzIHByb3BlcnR5LCB5b3UgbXVzdCBzcGVjaWZ5IGF0XG4gICAgICogbGVhc3Qgb25lIGZhbGxiYWNrIGN1cnNvciB0aGF0IGlzIG5vdCBhIFVSTC4gRm9yIGV4YW1wbGU6XG4gICAgICogW2RyYWdnYWJsZUN1cnNvcl09XCIndXJsKGh0dHA6Ly93d3cuZXhhbXBsZS5jb20vaWNvbi5wbmcpLCBhdXRvOydcIlxuICAgICAqL1xuICAgIGRyYWdnYWJsZUN1cnNvcjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9yIHVybCBvZiB0aGUgY3Vyc29yIHRvIGRpc3BsYXkgd2hlbiB0aGUgbWFwIGlzIGJlaW5nIGRyYWdnZWQuIFRoaXMgcHJvcGVydHkgdXNlcyB0aGVcbiAgICAgKiBjc3MgY3Vyc29yIGF0dHJpYnV0ZSB0byBjaGFuZ2UgdGhlIGljb24uIEFzIHdpdGggdGhlIGNzcyBwcm9wZXJ0eSwgeW91IG11c3Qgc3BlY2lmeSBhdCBsZWFzdFxuICAgICAqIG9uZSBmYWxsYmFjayBjdXJzb3IgdGhhdCBpcyBub3QgYSBVUkwuIEZvciBleGFtcGxlOlxuICAgICAqIFtkcmFnZ2luZ0N1cnNvcl09XCIndXJsKGh0dHA6Ly93d3cuZXhhbXBsZS5jb20vaWNvbi5wbmcpLCBhdXRvOydcIlxuICAgICAqL1xuICAgIGRyYWdnaW5nQ3Vyc29yOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSWYgZmFsc2UsIHByZXZlbnRzIHRoZSBtYXAgZnJvbSBiZWluZyBjb250cm9sbGVkIGJ5IHRoZSBrZXlib2FyZC4gS2V5Ym9hcmQgc2hvcnRjdXRzIGFyZVxuICAgICAqIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBrZXlib2FyZFNob3J0Y3V0czogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgWm9vbSBjb250cm9sLlxuICAgICAqL1xuICAgIHpvb21Db250cm9sOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgZm9yIHRoZSBab29tIGNvbnRyb2wuXG4gICAgICovXG4gICAgem9vbUNvbnRyb2xPcHRpb25zOiBab29tQ29udHJvbE9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogU3R5bGVzIHRvIGFwcGx5IHRvIGVhY2ggb2YgdGhlIGRlZmF1bHQgbWFwIHR5cGVzLiBOb3RlIHRoYXQgZm9yIFNhdGVsbGl0ZS9IeWJyaWQgYW5kIFRlcnJhaW5cbiAgICAgKiBtb2RlcywgdGhlc2Ugc3R5bGVzIHdpbGwgb25seSBhcHBseSB0byBsYWJlbHMgYW5kIGdlb21ldHJ5LlxuICAgICAqL1xuICAgIHN0eWxlczogTWFwVHlwZVN0eWxlW107XG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlIGFuZCB0aGUgbGF0aXR1ZGUgYW5kL29yIGxvbmdpdHVkZSB2YWx1ZXMgY2hhbmdlcywgdGhlIEdvb2dsZSBNYXBzIHBhblRvIG1ldGhvZCBpc1xuICAgICAqIHVzZWQgdG9cbiAgICAgKiBjZW50ZXIgdGhlIG1hcC4gU2VlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwXG4gICAgICovXG4gICAgdXNlUGFubmluZzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBTdHJlZXQgVmlldyBQZWdtYW4gY29udHJvbC5cbiAgICAgKiBUaGlzIGNvbnRyb2wgaXMgcGFydCBvZiB0aGUgZGVmYXVsdCBVSSwgYW5kIHNob3VsZCBiZSBzZXQgdG8gZmFsc2Ugd2hlbiBkaXNwbGF5aW5nIGEgbWFwIHR5cGVcbiAgICAgKiBvbiB3aGljaCB0aGUgU3RyZWV0IFZpZXcgcm9hZCBvdmVybGF5IHNob3VsZCBub3QgYXBwZWFyIChlLmcuIGEgbm9uLUVhcnRoIG1hcCB0eXBlKS5cbiAgICAgKi9cbiAgICBzdHJlZXRWaWV3Q29udHJvbDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBPcHRpb25zIGZvciB0aGUgU3RyZWV0IFZpZXcgY29udHJvbC5cbiAgICAgKi9cbiAgICBzdHJlZXRWaWV3Q29udHJvbE9wdGlvbnM6IFN0cmVldFZpZXdDb250cm9sT3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2aWV3cG9ydCB0byBjb250YWluIHRoZSBnaXZlbiBib3VuZHMuXG4gICAgICovXG4gICAgZml0Qm91bmRzOiBMYXRMbmdCb3VuZHNMaXRlcmFsIHwgTGF0TG5nQm91bmRzO1xuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIFNjYWxlIGNvbnRyb2wuIFRoaXMgaXMgZGlzYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBzY2FsZUNvbnRyb2w6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3B0aW9ucyBmb3IgdGhlIHNjYWxlIGNvbnRyb2wuXG4gICAgICovXG4gICAgc2NhbGVDb250cm9sT3B0aW9uczogU2NhbGVDb250cm9sT3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBNYXAgdHlwZSBjb250cm9sLlxuICAgICAqL1xuICAgIG1hcFR5cGVDb250cm9sOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgZm9yIHRoZSBNYXAgdHlwZSBjb250cm9sLlxuICAgICAqL1xuICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczogTWFwVHlwZUNvbnRyb2xPcHRpb25zO1xuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIFBhbiBjb250cm9sLlxuICAgICAqL1xuICAgIHBhbkNvbnRyb2w6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3B0aW9ucyBmb3IgdGhlIFBhbiBjb250cm9sLlxuICAgICAqL1xuICAgIHBhbkNvbnRyb2xPcHRpb25zOiBQYW5Db250cm9sT3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBSb3RhdGUgY29udHJvbC5cbiAgICAgKi9cbiAgICByb3RhdGVDb250cm9sOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgZm9yIHRoZSBSb3RhdGUgY29udHJvbC5cbiAgICAgKi9cbiAgICByb3RhdGVDb250cm9sT3B0aW9uczogUm90YXRlQ29udHJvbE9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgRnVsbHNjcmVlbiBjb250cm9sLlxuICAgICAqL1xuICAgIGZ1bGxzY3JlZW5Db250cm9sOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgZm9yIHRoZSBGdWxsc2NyZWVuIGNvbnRyb2wuXG4gICAgICovXG4gICAgZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zOiBGdWxsc2NyZWVuQ29udHJvbE9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogVGhlIG1hcCBtYXBUeXBlSWQuIERlZmF1bHRzIHRvICdyb2FkbWFwJy5cbiAgICAgKi9cbiAgICBtYXBUeXBlSWQ6ICdyb2FkbWFwJyB8ICdoeWJyaWQnIHwgJ3NhdGVsbGl0ZScgfCAndGVycmFpbicgfCBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogV2hlbiBmYWxzZSwgbWFwIGljb25zIGFyZSBub3QgY2xpY2thYmxlLiBBIG1hcCBpY29uIHJlcHJlc2VudHMgYSBwb2ludCBvZiBpbnRlcmVzdCxcbiAgICAgKiBhbHNvIGtub3duIGFzIGEgUE9JLiBCeSBkZWZhdWx0IG1hcCBpY29ucyBhcmUgY2xpY2thYmxlLlxuICAgICAqL1xuICAgIGNsaWNrYWJsZUljb25zOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoaXMgc2V0dGluZyBjb250cm9scyBob3cgZ2VzdHVyZXMgb24gdGhlIG1hcCBhcmUgaGFuZGxlZC5cbiAgICAgKiBBbGxvd2VkIHZhbHVlczpcbiAgICAgKiAtICdjb29wZXJhdGl2ZScgKFR3by1maW5nZXIgdG91Y2ggZ2VzdHVyZXMgcGFuIGFuZCB6b29tIHRoZSBtYXAuIE9uZS1maW5nZXIgdG91Y2ggZ2VzdHVyZXMgYXJlIG5vdCBoYW5kbGVkIGJ5IHRoZSBtYXAuKVxuICAgICAqIC0gJ2dyZWVkeScgICAgICAoQWxsIHRvdWNoIGdlc3R1cmVzIHBhbiBvciB6b29tIHRoZSBtYXAuKVxuICAgICAqIC0gJ25vbmUnICAgICAgICAoVGhlIG1hcCBjYW5ub3QgYmUgcGFubmVkIG9yIHpvb21lZCBieSB1c2VyIGdlc3R1cmVzLilcbiAgICAgKiAtICdhdXRvJyAgICAgICAgW2RlZmF1bHRdIChHZXN0dXJlIGhhbmRsaW5nIGlzIGVpdGhlciBjb29wZXJhdGl2ZSBvciBncmVlZHksIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBwYWdlIGlzIHNjcm9sbGFibGUgb3Igbm90LlxuICAgICAqL1xuICAgIGdlc3R1cmVIYW5kbGluZzogJ2Nvb3BlcmF0aXZlJyB8ICdncmVlZHknIHwgJ25vbmUnIHwgJ2F1dG8nO1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIG1hcCAoYnV0IG5vdCB3aGVuIHRoZXkgY2xpY2sgb24gYVxuICAgICAqIG1hcmtlciBvciBpbmZvV2luZG93KS5cbiAgICAgKi9cbiAgICBtYXBDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciByaWdodC1jbGlja3Mgb24gdGhlIG1hcCAoYnV0IG5vdCB3aGVuIHRoZXkgY2xpY2tcbiAgICAgKiBvbiBhIG1hcmtlciBvciBpbmZvV2luZG93KS5cbiAgICAgKi9cbiAgICBtYXBSaWdodENsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGRvdWJsZS1jbGlja3Mgb24gdGhlIG1hcCAoYnV0IG5vdCB3aGVuIHRoZXkgY2xpY2tcbiAgICAgKiBvbiBhIG1hcmtlciBvciBpbmZvV2luZG93KS5cbiAgICAgKi9cbiAgICBtYXBEYmxDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBpcyBmaXJlZCB3aGVuIHRoZSBtYXAgY2VudGVyIGNoYW5nZXMuXG4gICAgICovXG4gICAgY2VudGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGF0TG5nTGl0ZXJhbD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB2aWV3cG9ydCBib3VuZHMgaGF2ZSBjaGFuZ2VkLlxuICAgICAqL1xuICAgIGJvdW5kc0NoYW5nZTogRXZlbnRFbWl0dGVyPExhdExuZ0JvdW5kcz47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtYXBUeXBlSWQgcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBtYXBUeXBlSWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNYXBUeXBlSWQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgbWFwIGJlY29tZXMgaWRsZSBhZnRlciBwYW5uaW5nIG9yIHpvb21pbmcuXG4gICAgICovXG4gICAgaWRsZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgem9vbSBsZXZlbCBoYXMgY2hhbmdlZC5cbiAgICAgKi9cbiAgICB6b29tQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIGdvb2dsZSBtYXAgaXMgZnVsbHkgaW5pdGlhbGl6ZWQuXG4gICAgICogWW91IGdldCB0aGUgZ29vZ2xlLm1hcHMuTWFwIGluc3RhbmNlIGFzIGEgcmVzdWx0IG9mIHRoaXMgRXZlbnRFbWl0dGVyLlxuICAgICAqL1xuICAgIG1hcFJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBwcml2YXRlIF9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihfZWxlbTogRWxlbWVudFJlZiwgX21hcHNXcmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlcik7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgYSByZXNpemUgZXZlbnQgb24gdGhlIGdvb2dsZSBtYXAgaW5zdGFuY2UuXG4gICAgICogV2hlbiByZWNlbnRlciBpcyB0cnVlLCB0aGUgb2YgdGhlIGdvb2dsZSBtYXAgZ2V0cyBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCBsYXQvbG5nIHZhbHVlcyBvciBmaXRCb3VuZHMgdmFsdWUgdG8gcmVjZW50ZXIgdGhlIG1hcC5cbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGdldHMgcmVzb2x2ZWQgYWZ0ZXIgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQuXG4gICAgICovXG4gICAgdHJpZ2dlclJlc2l6ZShyZWNlbnRlcj86IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHByaXZhdGUgX2luaXRNYXBJbnN0YW5jZTtcbiAgICBwcml2YXRlIF91cGRhdGVNYXBPcHRpb25zQ2hhbmdlcztcbiAgICBwcml2YXRlIF91cGRhdGVQb3NpdGlvbjtcbiAgICBwcml2YXRlIF9zZXRDZW50ZXI7XG4gICAgcHJpdmF0ZSBfZml0Qm91bmRzO1xuICAgIHByaXZhdGUgX2hhbmRsZU1hcENlbnRlckNoYW5nZTtcbiAgICBwcml2YXRlIF9oYW5kbGVCb3VuZHNDaGFuZ2U7XG4gICAgcHJpdmF0ZSBfaGFuZGxlTWFwVHlwZUlkQ2hhbmdlO1xuICAgIHByaXZhdGUgX2hhbmRsZU1hcFpvb21DaGFuZ2U7XG4gICAgcHJpdmF0ZSBfaGFuZGxlSWRsZUV2ZW50O1xuICAgIHByaXZhdGUgX2hhbmRsZU1hcE1vdXNlRXZlbnRzO1xufVxuIl19