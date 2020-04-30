var AgmMap_1;
import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, Input, Output } from '@angular/core';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
import { CircleManager } from '../services/managers/circle-manager';
import { InfoWindowManager } from '../services/managers/info-window-manager';
import { MarkerManager } from '../services/managers/marker-manager';
import { PolygonManager } from '../services/managers/polygon-manager';
import { PolylineManager } from '../services/managers/polyline-manager';
import { KmlLayerManager } from '../services/managers/kml-layer-manager';
import { DataLayerManager } from '../services/managers/data-layer-manager';
import { SearchBoxManager } from '../services/managers/search-box-manager';
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
let AgmMap = AgmMap_1 = class AgmMap {
    constructor(_elem, _mapsWrapper) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * The enabled/disabled state of the Zoom control.
         */
        this.zoomControl = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * The initial enabled/disabled state of the Street View Pegman control.
         * This control is part of the default UI, and should be set to false when displaying a map type
         * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
         */
        this.streetViewControl = true;
        /**
         * Sets the viewport to contain the given bounds.
         */
        this.fitBounds = null;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */
        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */
        this.mapTypeControl = false;
        /**
         * The initial enabled/disabled state of the Pan control.
         */
        this.panControl = false;
        /**
         * The initial enabled/disabled state of the Rotate control.
         */
        this.rotateControl = false;
        /**
         * The initial enabled/disabled state of the Fullscreen control.
         */
        this.fullscreenControl = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */
        this.mapTypeId = 'roadmap';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */
        this.clickableIcons = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */
        this.gestureHandling = 'auto';
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        this.mapClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new EventEmitter();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new EventEmitter();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new EventEmitter();
        /**
         * This event is fired when the mapTypeId property changes.
         */
        this.mapTypeIdChange = new EventEmitter();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new EventEmitter();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new EventEmitter();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */
        this.mapReady = new EventEmitter();
        this._observableSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        // todo: this should be solved with a new component and a viewChild decorator
        const container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    }
    /** @internal */
    ngOnDestroy() {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
    }
    /* @internal */
    ngOnChanges(changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    }
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    triggerResize(recenter = true) {
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise((resolve) => {
            setTimeout(() => {
                return this._mapsWrapper.triggerMapEvent('resize').then(() => {
                    if (recenter) {
                        this.fitBounds != null ? this._fitBounds() : this._setCenter();
                    }
                    resolve();
                });
            });
        });
    }
    _initMapInstance(el) {
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            // .then(() => this._mapsWrapper.getNativeMap())
            .then(() => this._mapsWrapper.getTrueNativeMap())
            .then(map => this.mapReady.emit(map));
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    }
    _updateMapOptionsChanges(changes) {
        let options = {};
        let optionKeys = Object.keys(changes).filter(k => AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    }
    _updatePosition(changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            changes['fitBounds'] == null) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if (changes['fitBounds'] && this.fitBounds != null) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    }
    _setCenter() {
        let newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    }
    _fitBounds() {
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(this.fitBounds);
            return;
        }
        this._mapsWrapper.fitBounds(this.fitBounds);
    }
    _handleMapCenterChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(() => {
            this._mapsWrapper.getCenter().then((center) => {
                this.latitude = center.lat();
                this.longitude = center.lng();
                this.centerChange.emit({ lat: this.latitude, lng: this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleBoundsChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(() => {
            this._mapsWrapper.getBounds().then((bounds) => { this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapTypeIdChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(() => {
            this._mapsWrapper.getMapTypeId().then((mapTypeId) => { this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapZoomChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(() => {
            this._mapsWrapper.getZoom().then((z) => {
                this.zoom = z;
                this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleIdleEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(() => { this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    }
    _handleMapMouseEvents() {
        const events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach((e) => {
            const s = this._mapsWrapper.subscribeToMapEvent(e.name).subscribe((event) => {
                const value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            this._observableSubscriptions.push(s);
        });
    }
};
/**
 * Map option attributes that can change over time
 */
AgmMap._mapOptionsAttributes = [
    'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
    'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
    'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
    'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
    'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
    'mapTypeId', 'clickableIcons', 'gestureHandling'
];
AgmMap.ctorParameters = () => [
    { type: ElementRef },
    { type: GoogleMapsAPIWrapper }
];
__decorate([
    Input()
], AgmMap.prototype, "longitude", void 0);
__decorate([
    Input()
], AgmMap.prototype, "latitude", void 0);
__decorate([
    Input()
], AgmMap.prototype, "zoom", void 0);
__decorate([
    Input()
], AgmMap.prototype, "minZoom", void 0);
__decorate([
    Input()
], AgmMap.prototype, "maxZoom", void 0);
__decorate([
    Input('mapDraggable')
], AgmMap.prototype, "draggable", void 0);
__decorate([
    Input()
], AgmMap.prototype, "disableDoubleClickZoom", void 0);
__decorate([
    Input()
], AgmMap.prototype, "disableDefaultUI", void 0);
__decorate([
    Input()
], AgmMap.prototype, "scrollwheel", void 0);
__decorate([
    Input()
], AgmMap.prototype, "backgroundColor", void 0);
__decorate([
    Input()
], AgmMap.prototype, "draggableCursor", void 0);
__decorate([
    Input()
], AgmMap.prototype, "draggingCursor", void 0);
__decorate([
    Input()
], AgmMap.prototype, "keyboardShortcuts", void 0);
__decorate([
    Input()
], AgmMap.prototype, "zoomControl", void 0);
__decorate([
    Input()
], AgmMap.prototype, "zoomControlOptions", void 0);
__decorate([
    Input()
], AgmMap.prototype, "styles", void 0);
__decorate([
    Input()
], AgmMap.prototype, "usePanning", void 0);
__decorate([
    Input()
], AgmMap.prototype, "streetViewControl", void 0);
__decorate([
    Input()
], AgmMap.prototype, "streetViewControlOptions", void 0);
__decorate([
    Input()
], AgmMap.prototype, "fitBounds", void 0);
__decorate([
    Input()
], AgmMap.prototype, "scaleControl", void 0);
__decorate([
    Input()
], AgmMap.prototype, "scaleControlOptions", void 0);
__decorate([
    Input()
], AgmMap.prototype, "mapTypeControl", void 0);
__decorate([
    Input()
], AgmMap.prototype, "mapTypeControlOptions", void 0);
__decorate([
    Input()
], AgmMap.prototype, "panControl", void 0);
__decorate([
    Input()
], AgmMap.prototype, "panControlOptions", void 0);
__decorate([
    Input()
], AgmMap.prototype, "rotateControl", void 0);
__decorate([
    Input()
], AgmMap.prototype, "rotateControlOptions", void 0);
__decorate([
    Input()
], AgmMap.prototype, "fullscreenControl", void 0);
__decorate([
    Input()
], AgmMap.prototype, "fullscreenControlOptions", void 0);
__decorate([
    Input()
], AgmMap.prototype, "mapTypeId", void 0);
__decorate([
    Input()
], AgmMap.prototype, "clickableIcons", void 0);
__decorate([
    Input()
], AgmMap.prototype, "gestureHandling", void 0);
__decorate([
    Output()
], AgmMap.prototype, "mapClick", void 0);
__decorate([
    Output()
], AgmMap.prototype, "mapRightClick", void 0);
__decorate([
    Output()
], AgmMap.prototype, "mapDblClick", void 0);
__decorate([
    Output()
], AgmMap.prototype, "centerChange", void 0);
__decorate([
    Output()
], AgmMap.prototype, "boundsChange", void 0);
__decorate([
    Output()
], AgmMap.prototype, "mapTypeIdChange", void 0);
__decorate([
    Output()
], AgmMap.prototype, "idle", void 0);
__decorate([
    Output()
], AgmMap.prototype, "zoomChange", void 0);
__decorate([
    Output()
], AgmMap.prototype, "mapReady", void 0);
AgmMap = AgmMap_1 = __decorate([
    Component({
        selector: 'agm-map',
        providers: [
            GoogleMapsAPIWrapper, MarkerManager, InfoWindowManager, CircleManager, PolylineManager,
            PolygonManager, KmlLayerManager, DataLayerManager, SearchBoxManager
        ],
        template: `
    <div class='agm-map-container-inner'></div>
    <div class='agm-map-content'>
      <ng-content></ng-content>
    </div>
  `,
        styles: [`
    .agm-map-container-inner {
      width: inherit;
      height: inherit;
    }
    .agm-map-content {
      display:none;
    }
  `]
    })
], AgmMap);
export { AgmMap };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdteC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSWhJLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBS3pFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDdkUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFFekU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUEyQkgsSUFBYSxNQUFNLGNBQW5CLE1BQWEsTUFBTTtJQWlOakIsWUFBb0IsS0FBaUIsRUFBVSxZQUFrQztRQUE3RCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXNCO1FBck1qRjs7V0FFRztRQUNNLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDL0I7O1dBRUc7UUFDTSxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQzlCOztXQUVHO1FBQ00sU0FBSSxHQUFXLENBQUMsQ0FBQztRQVcx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WUFDdEYsY0FBYyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0I7U0FDcEU7UUFjRCxRQUFRLEVBQUU7Ozs7O0dBS1Q7aUJBZFE7Ozs7Ozs7O0dBUVI7S0FPRixDQUFDO0dBQ1csTUFBTSxDQXdabEI7U0F4WlksTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7TW91c2VFdmVudH0gZnJvbSAnLi4vbWFwLXR5cGVzJztcbmltcG9ydCB7R29vZ2xlTWFwc0FQSVdyYXBwZXJ9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7XG4gIEZ1bGxzY3JlZW5Db250cm9sT3B0aW9ucywgTGF0TG5nLCBMYXRMbmdMaXRlcmFsLCBNYXBUeXBlQ29udHJvbE9wdGlvbnMsIE1hcFR5cGVJZCwgUGFuQ29udHJvbE9wdGlvbnMsXG4gIFJvdGF0ZUNvbnRyb2xPcHRpb25zLCBTY2FsZUNvbnRyb2xPcHRpb25zLCBTdHJlZXRWaWV3Q29udHJvbE9wdGlvbnMsIFpvb21Db250cm9sT3B0aW9uc30gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHtMYXRMbmdCb3VuZHMsIExhdExuZ0JvdW5kc0xpdGVyYWwsIE1hcFR5cGVTdHlsZX0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHtDaXJjbGVNYW5hZ2VyfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9jaXJjbGUtbWFuYWdlcic7XG5pbXBvcnQge0luZm9XaW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9pbmZvLXdpbmRvdy1tYW5hZ2VyJztcbmltcG9ydCB7TWFya2VyTWFuYWdlcn0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvbWFya2VyLW1hbmFnZXInO1xuaW1wb3J0IHtQb2x5Z29uTWFuYWdlcn0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvcG9seWdvbi1tYW5hZ2VyJztcbmltcG9ydCB7UG9seWxpbmVNYW5hZ2VyfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5bGluZS1tYW5hZ2VyJztcbmltcG9ydCB7S21sTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9rbWwtbGF5ZXItbWFuYWdlcic7XG5pbXBvcnQge0RhdGFMYXllck1hbmFnZXJ9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL2RhdGEtbGF5ZXItbWFuYWdlcic7XG5pbXBvcnQge1NlYXJjaEJveE1hbmFnZXJ9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3NlYXJjaC1ib3gtbWFuYWdlcic7XG5cbi8qKlxuICogQWdtTWFwIHJlbmRlcnMgYSBHb29nbGUgTWFwLlxuICogKipJbXBvcnRhbnQgbm90ZSoqOiBUbyBiZSBhYmxlIHNlZSBhIG1hcCBpbiB0aGUgYnJvd3NlciwgeW91IGhhdmUgdG8gZGVmaW5lIGEgaGVpZ2h0IGZvciB0aGVcbiAqIGVsZW1lbnQgYGFnbS1tYXBgLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICBzZWxlY3RvcjogJ215LW1hcC1jbXAnLFxuICogIHN0eWxlczogW2BcbiAqICAgIGFnbS1tYXAge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgIDwvYWdtLW1hcD5cbiAqICBgXG4gKiB9KVxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnbS1tYXAnLFxuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlciwgTWFya2VyTWFuYWdlciwgSW5mb1dpbmRvd01hbmFnZXIsIENpcmNsZU1hbmFnZXIsIFBvbHlsaW5lTWFuYWdlcixcbiAgICBQb2x5Z29uTWFuYWdlciwgS21sTGF5ZXJNYW5hZ2VyLCBEYXRhTGF5ZXJNYW5hZ2VyLCBTZWFyY2hCb3hNYW5hZ2VyXG4gIF0sXG4gIC8vIGhvc3Q6IHtcbiAgLy8gICAvLyB0b2RvOiBkZXByZWNhdGVkIC0gd2Ugd2lsbCByZW1vdmUgaXQgd2l0aCB0aGUgbmV4dCB2ZXJzaW9uXG4gIC8vICAgJ1tjbGFzcy5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyXSc6ICd0cnVlJ1xuICAvLyB9LFxuICBzdHlsZXM6IFtgXG4gICAgLmFnbS1tYXAtY29udGFpbmVyLWlubmVyIHtcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIH1cbiAgICAuYWdtLW1hcC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9J2FnbS1tYXAtY29udGFpbmVyLWlubmVyJz48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdhZ20tbWFwLWNvbnRlbnQnPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFnbU1hcCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogTWFwIG9wdGlvbiBhdHRyaWJ1dGVzIHRoYXQgY2FuIGNoYW5nZSBvdmVyIHRpbWVcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIF9tYXBPcHRpb25zQXR0cmlidXRlczogc3RyaW5nW10gPSBbXG4gICAgJ2Rpc2FibGVEb3VibGVDbGlja1pvb20nLCAnc2Nyb2xsd2hlZWwnLCAnZHJhZ2dhYmxlJywgJ2RyYWdnYWJsZUN1cnNvcicsICdkcmFnZ2luZ0N1cnNvcicsXG4gICAgJ2tleWJvYXJkU2hvcnRjdXRzJywgJ3pvb21Db250cm9sJywgJ3pvb21Db250cm9sT3B0aW9ucycsICdzdHlsZXMnLCAnc3RyZWV0Vmlld0NvbnRyb2wnLFxuICAgICdzdHJlZXRWaWV3Q29udHJvbE9wdGlvbnMnLCAnem9vbScsICdtYXBUeXBlQ29udHJvbCcsICdtYXBUeXBlQ29udHJvbE9wdGlvbnMnLCAnbWluWm9vbScsXG4gICAgJ21heFpvb20nLCAncGFuQ29udHJvbCcsICdwYW5Db250cm9sT3B0aW9ucycsICdyb3RhdGVDb250cm9sJywgJ3JvdGF0ZUNvbnRyb2xPcHRpb25zJyxcbiAgICAnZnVsbHNjcmVlbkNvbnRyb2wnLCAnZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zJywgJ3NjYWxlQ29udHJvbCcsICdzY2FsZUNvbnRyb2xPcHRpb25zJyxcbiAgICAnbWFwVHlwZUlkJywgJ2NsaWNrYWJsZUljb25zJywgJ2dlc3R1cmVIYW5kbGluZydcbiAgXTtcbiAgLyoqXG4gICAqIFRoZSBsb25naXR1ZGUgdGhhdCBkZWZpbmVzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcC5cbiAgICovXG4gIEBJbnB1dCgpIGxvbmdpdHVkZTogbnVtYmVyID0gMDtcbiAgLyoqXG4gICAqIFRoZSBsYXRpdHVkZSB0aGF0IGRlZmluZXMgdGhlIGNlbnRlciBvZiB0aGUgbWFwLlxuICAgKi9cbiAgQElucHV0KCkgbGF0aXR1ZGU6IG51bWJlciA9IDA7XG4gIC8qKlxuICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLiBUaGUgZGVmYXVsdCB6b29tIGxldmVsIGlzIDguXG4gICAqL1xuICBASW5wdXQoKSB6b29tOiBudW1iZXIgPSA4O1xuICAvKipcbiAgICogVGhlIG1pbmltYWwgem9vbSBsZXZlbCBvZiB0aGUgbWFwIGFsbG93ZWQuIFdoZW4gbm90IHByb3ZpZGVkLCBubyByZXN0cmljdGlvbnMgdG8gdGhlIHpvb20gbGV2ZWxcbiAgICogYXJlIGVuZm9yY2VkLlxuICAgKi9cbiAgQElucHV0KCkgbWluWm9vbTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIG1heGltYWwgem9vbSBsZXZlbCBvZiB0aGUgbWFwIGFsbG93ZWQuIFdoZW4gbm90IHByb3ZpZGVkLCBubyByZXN0cmljdGlvbnMgdG8gdGhlIHpvb20gbGV2ZWxcbiAgICogYXJlIGVuZm9yY2VkLlxuICAgKi9cbiAgQElucHV0KCkgbWF4Wm9vbTogbnVtYmVyO1xuICAvKipcbiAgICogRW5hYmxlcy9kaXNhYmxlcyBpZiBtYXAgaXMgZHJhZ2dhYmxlLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ21hcERyYWdnYWJsZScpIGRyYWdnYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiBFbmFibGVzL2Rpc2FibGVzIHpvb20gYW5kIGNlbnRlciBvbiBkb3VibGUgY2xpY2suIEVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVEb3VibGVDbGlja1pvb206IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEVuYWJsZXMvZGlzYWJsZXMgYWxsIGRlZmF1bHQgVUkgb2YgdGhlIEdvb2dsZSBtYXAuIFBsZWFzZSBub3RlOiBXaGVuIHRoZSBtYXAgaXMgY3JlYXRlZCwgdGhpc1xuICAgKiB2YWx1ZSBjYW5ub3QgZ2V0IHVwZGF0ZWQuXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlRGVmYXVsdFVJOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBJZiBmYWxzZSwgZGlzYWJsZXMgc2Nyb2xsd2hlZWwgem9vbWluZyBvbiB0aGUgbWFwLiBUaGUgc2Nyb2xsd2hlZWwgaXMgZW5hYmxlZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgQElucHV0KCkgc2Nyb2xsd2hlZWw6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogQ29sb3IgdXNlZCBmb3IgdGhlIGJhY2tncm91bmQgb2YgdGhlIE1hcCBkaXYuIFRoaXMgY29sb3Igd2lsbCBiZSB2aXNpYmxlIHdoZW4gdGlsZXMgaGF2ZSBub3RcbiAgICogeWV0IGxvYWRlZCBhcyB0aGUgdXNlciBwYW5zLiBUaGlzIG9wdGlvbiBjYW4gb25seSBiZSBzZXQgd2hlbiB0aGUgbWFwIGlzIGluaXRpYWxpemVkLlxuICAgKi9cbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvciB1cmwgb2YgdGhlIGN1cnNvciB0byBkaXNwbGF5IHdoZW4gbW91c2luZyBvdmVyIGEgZHJhZ2dhYmxlIG1hcC4gVGhpcyBwcm9wZXJ0eSB1c2VzXG4gICAqIHRoZSBjc3MgICogY3Vyc29yIGF0dHJpYnV0ZSB0byBjaGFuZ2UgdGhlIGljb24uIEFzIHdpdGggdGhlIGNzcyBwcm9wZXJ0eSwgeW91IG11c3Qgc3BlY2lmeSBhdFxuICAgKiBsZWFzdCBvbmUgZmFsbGJhY2sgY3Vyc29yIHRoYXQgaXMgbm90IGEgVVJMLiBGb3IgZXhhbXBsZTpcbiAgICogW2RyYWdnYWJsZUN1cnNvcl09XCIndXJsKGh0dHA6Ly93d3cuZXhhbXBsZS5jb20vaWNvbi5wbmcpLCBhdXRvOydcIlxuICAgKi9cbiAgQElucHV0KCkgZHJhZ2dhYmxlQ3Vyc29yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvciB1cmwgb2YgdGhlIGN1cnNvciB0byBkaXNwbGF5IHdoZW4gdGhlIG1hcCBpcyBiZWluZyBkcmFnZ2VkLiBUaGlzIHByb3BlcnR5IHVzZXMgdGhlXG4gICAqIGNzcyBjdXJzb3IgYXR0cmlidXRlIHRvIGNoYW5nZSB0aGUgaWNvbi4gQXMgd2l0aCB0aGUgY3NzIHByb3BlcnR5LCB5b3UgbXVzdCBzcGVjaWZ5IGF0IGxlYXN0XG4gICAqIG9uZSBmYWxsYmFjayBjdXJzb3IgdGhhdCBpcyBub3QgYSBVUkwuIEZvciBleGFtcGxlOlxuICAgKiBbZHJhZ2dpbmdDdXJzb3JdPVwiJ3VybChodHRwOi8vd3d3LmV4YW1wbGUuY29tL2ljb24ucG5nKSwgYXV0bzsnXCJcbiAgICovXG4gIEBJbnB1dCgpIGRyYWdnaW5nQ3Vyc29yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJZiBmYWxzZSwgcHJldmVudHMgdGhlIG1hcCBmcm9tIGJlaW5nIGNvbnRyb2xsZWQgYnkgdGhlIGtleWJvYXJkLiBLZXlib2FyZCBzaG9ydGN1dHMgYXJlXG4gICAqIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpIGtleWJvYXJkU2hvcnRjdXRzOiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIFRoZSBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBab29tIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSB6b29tQ29udHJvbDogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGUgWm9vbSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgem9vbUNvbnRyb2xPcHRpb25zOiBab29tQ29udHJvbE9wdGlvbnM7XG4gIC8qKlxuICAgKiBTdHlsZXMgdG8gYXBwbHkgdG8gZWFjaCBvZiB0aGUgZGVmYXVsdCBtYXAgdHlwZXMuIE5vdGUgdGhhdCBmb3IgU2F0ZWxsaXRlL0h5YnJpZCBhbmQgVGVycmFpblxuICAgKiBtb2RlcywgdGhlc2Ugc3R5bGVzIHdpbGwgb25seSBhcHBseSB0byBsYWJlbHMgYW5kIGdlb21ldHJ5LlxuICAgKi9cbiAgQElucHV0KCkgc3R5bGVzOiBNYXBUeXBlU3R5bGVbXSA9IFtdO1xuICAvKipcbiAgICogV2hlbiB0cnVlIGFuZCB0aGUgbGF0aXR1ZGUgYW5kL29yIGxvbmdpdHVkZSB2YWx1ZXMgY2hhbmdlcywgdGhlIEdvb2dsZSBNYXBzIHBhblRvIG1ldGhvZCBpc1xuICAgKiB1c2VkIHRvXG4gICAqIGNlbnRlciB0aGUgbWFwLiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBcbiAgICovXG4gIEBJbnB1dCgpIHVzZVBhbm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIFN0cmVldCBWaWV3IFBlZ21hbiBjb250cm9sLlxuICAgKiBUaGlzIGNvbnRyb2wgaXMgcGFydCBvZiB0aGUgZGVmYXVsdCBVSSwgYW5kIHNob3VsZCBiZSBzZXQgdG8gZmFsc2Ugd2hlbiBkaXNwbGF5aW5nIGEgbWFwIHR5cGVcbiAgICogb24gd2hpY2ggdGhlIFN0cmVldCBWaWV3IHJvYWQgb3ZlcmxheSBzaG91bGQgbm90IGFwcGVhciAoZS5nLiBhIG5vbi1FYXJ0aCBtYXAgdHlwZSkuXG4gICAqL1xuICBASW5wdXQoKSBzdHJlZXRWaWV3Q29udHJvbDogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGUgU3RyZWV0IFZpZXcgY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHN0cmVldFZpZXdDb250cm9sT3B0aW9uczogU3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zO1xuICAvKipcbiAgICogU2V0cyB0aGUgdmlld3BvcnQgdG8gY29udGFpbiB0aGUgZ2l2ZW4gYm91bmRzLlxuICAgKi9cbiAgQElucHV0KCkgZml0Qm91bmRzOiBMYXRMbmdCb3VuZHNMaXRlcmFsfExhdExuZ0JvdW5kcyA9IG51bGw7XG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBTY2FsZSBjb250cm9sLiBUaGlzIGlzIGRpc2FibGVkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBASW5wdXQoKSBzY2FsZUNvbnRyb2w6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIE9wdGlvbnMgZm9yIHRoZSBzY2FsZSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgc2NhbGVDb250cm9sT3B0aW9uczogU2NhbGVDb250cm9sT3B0aW9ucztcbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIE1hcCB0eXBlIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSBtYXBUeXBlQ29udHJvbDogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogT3B0aW9ucyBmb3IgdGhlIE1hcCB0eXBlIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IE1hcFR5cGVDb250cm9sT3B0aW9ucztcbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIFBhbiBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgcGFuQ29udHJvbDogYm9vbGVhbiAgPSBmYWxzZTtcbiAgLyoqXG4gICAqIE9wdGlvbnMgZm9yIHRoZSBQYW4gY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHBhbkNvbnRyb2xPcHRpb25zOiBQYW5Db250cm9sT3B0aW9ucztcbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIFJvdGF0ZSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgcm90YXRlQ29udHJvbDogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogT3B0aW9ucyBmb3IgdGhlIFJvdGF0ZSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgcm90YXRlQ29udHJvbE9wdGlvbnM6IFJvdGF0ZUNvbnRyb2xPcHRpb25zO1xuICAvKipcbiAgICogVGhlIGluaXRpYWwgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgRnVsbHNjcmVlbiBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgZnVsbHNjcmVlbkNvbnRyb2w6IGJvb2xlYW4gID0gZmFsc2U7XG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGUgRnVsbHNjcmVlbiBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zOiBGdWxsc2NyZWVuQ29udHJvbE9wdGlvbnM7XG4gIC8qKlxuICAgKiBUaGUgbWFwIG1hcFR5cGVJZC4gRGVmYXVsdHMgdG8gJ3JvYWRtYXAnLlxuICAgKi9cbiAgQElucHV0KCkgbWFwVHlwZUlkOiAncm9hZG1hcCd8J2h5YnJpZCd8J3NhdGVsbGl0ZSd8J3RlcnJhaW4nfHN0cmluZyA9ICdyb2FkbWFwJztcbiAgLyoqXG4gICAqIFdoZW4gZmFsc2UsIG1hcCBpY29ucyBhcmUgbm90IGNsaWNrYWJsZS4gQSBtYXAgaWNvbiByZXByZXNlbnRzIGEgcG9pbnQgb2YgaW50ZXJlc3QsXG4gICAqIGFsc28ga25vd24gYXMgYSBQT0kuIEJ5IGRlZmF1bHQgbWFwIGljb25zIGFyZSBjbGlja2FibGUuXG4gICAqL1xuICBASW5wdXQoKSBjbGlja2FibGVJY29uczogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiBUaGlzIHNldHRpbmcgY29udHJvbHMgaG93IGdlc3R1cmVzIG9uIHRoZSBtYXAgYXJlIGhhbmRsZWQuXG4gICAqIEFsbG93ZWQgdmFsdWVzOlxuICAgKiAtICdjb29wZXJhdGl2ZScgKFR3by1maW5nZXIgdG91Y2ggZ2VzdHVyZXMgcGFuIGFuZCB6b29tIHRoZSBtYXAuIE9uZS1maW5nZXIgdG91Y2ggZ2VzdHVyZXMgYXJlIG5vdCBoYW5kbGVkIGJ5IHRoZSBtYXAuKVxuICAgKiAtICdncmVlZHknICAgICAgKEFsbCB0b3VjaCBnZXN0dXJlcyBwYW4gb3Igem9vbSB0aGUgbWFwLilcbiAgICogLSAnbm9uZScgICAgICAgIChUaGUgbWFwIGNhbm5vdCBiZSBwYW5uZWQgb3Igem9vbWVkIGJ5IHVzZXIgZ2VzdHVyZXMuKVxuICAgKiAtICdhdXRvJyAgICAgICAgW2RlZmF1bHRdIChHZXN0dXJlIGhhbmRsaW5nIGlzIGVpdGhlciBjb29wZXJhdGl2ZSBvciBncmVlZHksIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBwYWdlIGlzIHNjcm9sbGFibGUgb3Igbm90LlxuICAgKi9cbiAgQElucHV0KCkgZ2VzdHVyZUhhbmRsaW5nOiAnY29vcGVyYXRpdmUnfCdncmVlZHknfCdub25lJ3wnYXV0bycgPSAnYXV0byc7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrIG9uIGFcbiAgICogbWFya2VyIG9yIGluZm9XaW5kb3cpLlxuICAgKi9cbiAgQE91dHB1dCgpIG1hcENsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgcmlnaHQtY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrXG4gICAqIG9uIGEgbWFya2VyIG9yIGluZm9XaW5kb3cpLlxuICAgKi9cbiAgQE91dHB1dCgpIG1hcFJpZ2h0Q2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBkb3VibGUtY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrXG4gICAqIG9uIGEgbWFya2VyIG9yIGluZm9XaW5kb3cpLlxuICAgKi9cbiAgQE91dHB1dCgpIG1hcERibENsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgaXMgZmlyZWQgd2hlbiB0aGUgbWFwIGNlbnRlciBjaGFuZ2VzLlxuICAgKi9cbiAgQE91dHB1dCgpIGNlbnRlckNoYW5nZTogRXZlbnRFbWl0dGVyPExhdExuZ0xpdGVyYWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxMYXRMbmdMaXRlcmFsPigpO1xuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB2aWV3cG9ydCBib3VuZHMgaGF2ZSBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGJvdW5kc0NoYW5nZTogRXZlbnRFbWl0dGVyPExhdExuZ0JvdW5kcz4gPSBuZXcgRXZlbnRFbWl0dGVyPExhdExuZ0JvdW5kcz4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgbWFwVHlwZUlkIHByb3BlcnR5IGNoYW5nZXMuXG4gICAqL1xuICBAT3V0cHV0KCkgbWFwVHlwZUlkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TWFwVHlwZUlkPiA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwVHlwZUlkPigpO1xuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtYXAgYmVjb21lcyBpZGxlIGFmdGVyIHBhbm5pbmcgb3Igem9vbWluZy5cbiAgICovXG4gIEBPdXRwdXQoKSBpZGxlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHpvb20gbGV2ZWwgaGFzIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgem9vbUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgZ29vZ2xlIG1hcCBpcyBmdWxseSBpbml0aWFsaXplZC5cbiAgICogWW91IGdldCB0aGUgZ29vZ2xlLm1hcHMuTWFwIGluc3RhbmNlIGFzIGEgcmVzdWx0IG9mIHRoaXMgRXZlbnRFbWl0dGVyLlxuICAgKi9cbiAgQE91dHB1dCgpIG1hcFJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwcml2YXRlIF9vYnNlcnZhYmxlU3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtOiBFbGVtZW50UmVmLCBwcml2YXRlIF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIpIHt9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0b2RvOiB0aGlzIHNob3VsZCBiZSBzb2x2ZWQgd2l0aCBhIG5ldyBjb21wb25lbnQgYW5kIGEgdmlld0NoaWxkIGRlY29yYXRvclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2VsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWdtLW1hcC1jb250YWluZXItaW5uZXInKTtcbiAgICB0aGlzLl9pbml0TWFwSW5zdGFuY2UoY29udGFpbmVyKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMuZm9yRWFjaCgocykgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgfVxuXG4gIC8qIEBpbnRlcm5hbCAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5fdXBkYXRlTWFwT3B0aW9uc0NoYW5nZXMoY2hhbmdlcyk7XG4gICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oY2hhbmdlcyk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgYSByZXNpemUgZXZlbnQgb24gdGhlIGdvb2dsZSBtYXAgaW5zdGFuY2UuXG4gICAqIFdoZW4gcmVjZW50ZXIgaXMgdHJ1ZSwgdGhlIG9mIHRoZSBnb29nbGUgbWFwIGdldHMgY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgbGF0L2xuZyB2YWx1ZXMgb3IgZml0Qm91bmRzIHZhbHVlIHRvIHJlY2VudGVyIHRoZSBtYXAuXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgZ2V0cyByZXNvbHZlZCBhZnRlciB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZC5cbiAgICovXG4gIHRyaWdnZXJSZXNpemUocmVjZW50ZXI6IGJvb2xlYW4gPSB0cnVlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTm90ZTogV2hlbiB3ZSB3b3VsZCB0cmlnZ2VyIHRoZSByZXNpemUgZXZlbnQgYW5kIHNob3cgdGhlIG1hcCBpbiB0aGUgc2FtZSB0dXJuICh3aGljaCBpcyBhXG4gICAgLy8gY29tbW9uIGNhc2UgZm9yIHRyaWdnZXJpbmcgYSByZXNpemUgZXZlbnQpLCB0aGVuIHRoZSByZXNpemUgZXZlbnQgd291bGQgbm90XG4gICAgLy8gd29yayAodG8gc2hvdyB0aGUgbWFwKSwgc28gd2UgdHJpZ2dlciB0aGUgZXZlbnQgaW4gYSB0aW1lb3V0LlxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXBzV3JhcHBlci50cmlnZ2VyTWFwRXZlbnQoJ3Jlc2l6ZScpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmIChyZWNlbnRlcikge1xuICAgICAgICAgICAgdGhpcy5maXRCb3VuZHMgIT0gbnVsbCA/IHRoaXMuX2ZpdEJvdW5kcygpIDogdGhpcy5fc2V0Q2VudGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRNYXBJbnN0YW5jZShlbDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9tYXBzV3JhcHBlci5jcmVhdGVNYXAoZWwsIHtcbiAgICAgIGNlbnRlcjoge2xhdDogdGhpcy5sYXRpdHVkZSB8fCAwLCBsbmc6IHRoaXMubG9uZ2l0dWRlIHx8IDB9LFxuICAgICAgem9vbTogdGhpcy56b29tLFxuICAgICAgbWluWm9vbTogdGhpcy5taW5ab29tLFxuICAgICAgbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgZGlzYWJsZURlZmF1bHRVSTogdGhpcy5kaXNhYmxlRGVmYXVsdFVJLFxuICAgICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdGhpcy5kaXNhYmxlRG91YmxlQ2xpY2tab29tLFxuICAgICAgc2Nyb2xsd2hlZWw6IHRoaXMuc2Nyb2xsd2hlZWwsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgZHJhZ2dhYmxlOiB0aGlzLmRyYWdnYWJsZSxcbiAgICAgIGRyYWdnYWJsZUN1cnNvcjogdGhpcy5kcmFnZ2FibGVDdXJzb3IsXG4gICAgICBkcmFnZ2luZ0N1cnNvcjogdGhpcy5kcmFnZ2luZ0N1cnNvcixcbiAgICAgIGtleWJvYXJkU2hvcnRjdXRzOiB0aGlzLmtleWJvYXJkU2hvcnRjdXRzLFxuICAgICAgc3R5bGVzOiB0aGlzLnN0eWxlcyxcbiAgICAgIHpvb21Db250cm9sOiB0aGlzLnpvb21Db250cm9sLFxuICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB0aGlzLnpvb21Db250cm9sT3B0aW9ucyxcbiAgICAgIHN0cmVldFZpZXdDb250cm9sOiB0aGlzLnN0cmVldFZpZXdDb250cm9sLFxuICAgICAgc3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zOiB0aGlzLnN0cmVldFZpZXdDb250cm9sT3B0aW9ucyxcbiAgICAgIHNjYWxlQ29udHJvbDogdGhpcy5zY2FsZUNvbnRyb2wsXG4gICAgICBzY2FsZUNvbnRyb2xPcHRpb25zOiB0aGlzLnNjYWxlQ29udHJvbE9wdGlvbnMsXG4gICAgICBtYXBUeXBlQ29udHJvbDogdGhpcy5tYXBUeXBlQ29udHJvbCxcbiAgICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczogdGhpcy5tYXBUeXBlQ29udHJvbE9wdGlvbnMsXG4gICAgICBwYW5Db250cm9sOiB0aGlzLnBhbkNvbnRyb2wsXG4gICAgICBwYW5Db250cm9sT3B0aW9uczogdGhpcy5wYW5Db250cm9sT3B0aW9ucyxcbiAgICAgIHJvdGF0ZUNvbnRyb2w6IHRoaXMucm90YXRlQ29udHJvbCxcbiAgICAgIHJvdGF0ZUNvbnRyb2xPcHRpb25zOiB0aGlzLnJvdGF0ZUNvbnRyb2xPcHRpb25zLFxuICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IHRoaXMuZnVsbHNjcmVlbkNvbnRyb2wsXG4gICAgICBmdWxsc2NyZWVuQ29udHJvbE9wdGlvbnM6IHRoaXMuZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zLFxuICAgICAgbWFwVHlwZUlkOiB0aGlzLm1hcFR5cGVJZCxcbiAgICAgIGNsaWNrYWJsZUljb25zOiB0aGlzLmNsaWNrYWJsZUljb25zLFxuICAgICAgZ2VzdHVyZUhhbmRsaW5nOiB0aGlzLmdlc3R1cmVIYW5kbGluZ1xuICAgIH0pXG4gICAgICAvLyAudGhlbigoKSA9PiB0aGlzLl9tYXBzV3JhcHBlci5nZXROYXRpdmVNYXAoKSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuX21hcHNXcmFwcGVyLmdldFRydWVOYXRpdmVNYXAoKSlcbiAgICAgIC50aGVuKG1hcCA9PiB0aGlzLm1hcFJlYWR5LmVtaXQobWFwKSk7XG5cbiAgICAvLyByZWdpc3RlciBldmVudCBsaXN0ZW5lcnNcbiAgICB0aGlzLl9oYW5kbGVNYXBDZW50ZXJDaGFuZ2UoKTtcbiAgICB0aGlzLl9oYW5kbGVNYXBab29tQ2hhbmdlKCk7XG4gICAgdGhpcy5faGFuZGxlTWFwTW91c2VFdmVudHMoKTtcbiAgICB0aGlzLl9oYW5kbGVCb3VuZHNDaGFuZ2UoKTtcbiAgICB0aGlzLl9oYW5kbGVNYXBUeXBlSWRDaGFuZ2UoKTtcbiAgICB0aGlzLl9oYW5kbGVJZGxlRXZlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU1hcE9wdGlvbnNDaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBsZXQgb3B0aW9uczoge1twcm9wTmFtZTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgIGxldCBvcHRpb25LZXlzID1cbiAgICAgICAgT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKGsgPT4gQWdtTWFwLl9tYXBPcHRpb25zQXR0cmlidXRlcy5pbmRleE9mKGspICE9PSAtMSk7XG4gICAgb3B0aW9uS2V5cy5mb3JFYWNoKChrKSA9PiB7IG9wdGlvbnNba10gPSBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZTsgfSk7XG4gICAgdGhpcy5fbWFwc1dyYXBwZXIuc2V0TWFwT3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVBvc2l0aW9uKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snbGF0aXR1ZGUnXSA9PSBudWxsICYmIGNoYW5nZXNbJ2xvbmdpdHVkZSddID09IG51bGwgJiZcbiAgICAgICAgY2hhbmdlc1snZml0Qm91bmRzJ10gPT0gbnVsbCkge1xuICAgICAgLy8gbm8gcG9zaXRpb24gdXBkYXRlIG5lZWRlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHdlIHByZWZlciBmaXRCb3VuZHMgaW4gY2hhbmdlc1xuICAgIGlmIChjaGFuZ2VzWydmaXRCb3VuZHMnXSAmJiB0aGlzLmZpdEJvdW5kcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9maXRCb3VuZHMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMubGF0aXR1ZGUgIT09ICdudW1iZXInIHx8IHR5cGVvZiB0aGlzLmxvbmdpdHVkZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2V0Q2VudGVyKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRDZW50ZXIoKSB7XG4gICAgbGV0IG5ld0NlbnRlciA9IHtcbiAgICAgIGxhdDogdGhpcy5sYXRpdHVkZSxcbiAgICAgIGxuZzogdGhpcy5sb25naXR1ZGUsXG4gICAgfTtcbiAgICBpZiAodGhpcy51c2VQYW5uaW5nKSB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5wYW5UbyhuZXdDZW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5zZXRDZW50ZXIobmV3Q2VudGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maXRCb3VuZHMoKSB7XG4gICAgaWYgKHRoaXMudXNlUGFubmluZykge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIucGFuVG9Cb3VuZHModGhpcy5maXRCb3VuZHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tYXBzV3JhcHBlci5maXRCb3VuZHModGhpcy5maXRCb3VuZHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTWFwQ2VudGVyQ2hhbmdlKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50PHZvaWQ+KCdjZW50ZXJfY2hhbmdlZCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRDZW50ZXIoKS50aGVuKChjZW50ZXI6IExhdExuZykgPT4ge1xuICAgICAgICB0aGlzLmxhdGl0dWRlID0gY2VudGVyLmxhdCgpO1xuICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IGNlbnRlci5sbmcoKTtcbiAgICAgICAgdGhpcy5jZW50ZXJDaGFuZ2UuZW1pdCg8TGF0TG5nTGl0ZXJhbD57bGF0OiB0aGlzLmxhdGl0dWRlLCBsbmc6IHRoaXMubG9uZ2l0dWRlfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQm91bmRzQ2hhbmdlKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50PHZvaWQ+KCdib3VuZHNfY2hhbmdlZCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRCb3VuZHMoKS50aGVuKFxuICAgICAgICAgIChib3VuZHM6IExhdExuZ0JvdW5kcykgPT4geyB0aGlzLmJvdW5kc0NoYW5nZS5lbWl0KGJvdW5kcyk7IH0pO1xuICAgIH0pO1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNYXBUeXBlSWRDaGFuZ2UoKSB7XG4gICAgY29uc3QgcyA9IHRoaXMuX21hcHNXcmFwcGVyLnN1YnNjcmliZVRvTWFwRXZlbnQ8dm9pZD4oJ21hcHR5cGVpZF9jaGFuZ2VkJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX21hcHNXcmFwcGVyLmdldE1hcFR5cGVJZCgpLnRoZW4oXG4gICAgICAgICAgKG1hcFR5cGVJZDogTWFwVHlwZUlkKSA9PiB7IHRoaXMubWFwVHlwZUlkQ2hhbmdlLmVtaXQobWFwVHlwZUlkKTsgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1hcFpvb21DaGFuZ2UoKSB7XG4gICAgY29uc3QgcyA9IHRoaXMuX21hcHNXcmFwcGVyLnN1YnNjcmliZVRvTWFwRXZlbnQ8dm9pZD4oJ3pvb21fY2hhbmdlZCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRab29tKCkudGhlbigoejogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMuem9vbSA9IHo7XG4gICAgICAgIHRoaXMuem9vbUNoYW5nZS5lbWl0KHopO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUlkbGVFdmVudCgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudDx2b2lkPignaWRsZScpLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4geyB0aGlzLmlkbGUuZW1pdCh2b2lkIDApOyB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTWFwTW91c2VFdmVudHMoKSB7XG4gICAgaW50ZXJmYWNlIEVtaXR0ZXIge1xuICAgICAgZW1pdCh2YWx1ZTogYW55KTogdm9pZDtcbiAgICB9XG4gICAgdHlwZSBFdmVudCA9IHtuYW1lOiBzdHJpbmcsIGVtaXR0ZXI6IEVtaXR0ZXJ9O1xuXG4gICAgY29uc3QgZXZlbnRzOiBFdmVudFtdID0gW1xuICAgICAge25hbWU6ICdjbGljaycsIGVtaXR0ZXI6IHRoaXMubWFwQ2xpY2t9LFxuICAgICAge25hbWU6ICdyaWdodGNsaWNrJywgZW1pdHRlcjogdGhpcy5tYXBSaWdodENsaWNrfSxcbiAgICAgIHtuYW1lOiAnZGJsY2xpY2snLCBlbWl0dGVyOiB0aGlzLm1hcERibENsaWNrfSxcbiAgICBdO1xuXG4gICAgZXZlbnRzLmZvckVhY2goKGU6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudDx7bGF0TG5nOiBMYXRMbmd9PihlLm5hbWUpLnN1YnNjcmliZShcbiAgICAgICAgICAoZXZlbnQ6IHtsYXRMbmc6IExhdExuZ30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gPE1vdXNlRXZlbnQ+e2Nvb3Jkczoge2xhdDogZXZlbnQubGF0TG5nLmxhdCgpLCBsbmc6IGV2ZW50LmxhdExuZy5sbmcoKX19O1xuICAgICAgICAgICAgZS5lbWl0dGVyLmVtaXQodmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgICB9KTtcbiAgfVxufVxuIl19