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
var AgmMap = /** @class */ (function () {
    function AgmMap(_elem, _mapsWrapper) {
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
    AgmMap_1 = AgmMap;
    /** @internal */
    AgmMap.prototype.ngOnInit = function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    /** @internal */
    AgmMap.prototype.ngOnDestroy = function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /* @internal */
    AgmMap.prototype.ngOnChanges = function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    AgmMap.prototype.triggerResize = function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
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
            .then(function () { return _this._mapsWrapper.getTrueNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    AgmMap.prototype._updatePosition = function (changes) {
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
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(this.fitBounds);
            return;
        }
        this._mapsWrapper.fitBounds(this.fitBounds);
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapTypeIdChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    var AgmMap_1;
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
    AgmMap.ctorParameters = function () { return [
        { type: ElementRef },
        { type: GoogleMapsAPIWrapper }
    ]; };
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
            template: "\n    <div class='agm-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "]
        })
    ], AgmMap);
    return AgmMap;
}());
export { AgmMap };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdteC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJaEksT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFLekUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUV6RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQTJCSDtJQWlORSxnQkFBb0IsS0FBaUIsRUFBVSxZQUFrQztRQUE3RCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXNCO1FBck1qRjs7V0FFRztRQUNNLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDL0I7O1dBRUc7UUFDTSxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQzlCOztXQUVHO1FBQ00sU0FBSSxHQUFXLENBQUMsQ0FBQztRQVcxQjs7V0FFRztRQUNILDJDQUEyQztRQUNwQixj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QVMsRUFBRTtnQkFDVCxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLGVBQWU7Z0JBQ3RGLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCO2FBQ3BFO1lBY0QsUUFBUSxFQUFFLHVJQUtUO3FCQWRRLGdKQVFSO1NBT0YsQ0FBQztPQUNXLE1BQU0sQ0F3WmxCO0lBQUQsYUFBQztDQUFBLEFBeFpELElBd1pDO1NBeFpZLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge01vdXNlRXZlbnR9IGZyb20gJy4uL21hcC10eXBlcyc7XG5pbXBvcnQge0dvb2dsZU1hcHNBUElXcmFwcGVyfSBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQge1xuICBGdWxsc2NyZWVuQ29udHJvbE9wdGlvbnMsIExhdExuZywgTGF0TG5nTGl0ZXJhbCwgTWFwVHlwZUNvbnRyb2xPcHRpb25zLCBNYXBUeXBlSWQsIFBhbkNvbnRyb2xPcHRpb25zLFxuICBSb3RhdGVDb250cm9sT3B0aW9ucywgU2NhbGVDb250cm9sT3B0aW9ucywgU3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zLCBab29tQ29udHJvbE9wdGlvbnN9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7TGF0TG5nQm91bmRzLCBMYXRMbmdCb3VuZHNMaXRlcmFsLCBNYXBUeXBlU3R5bGV9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7Q2lyY2xlTWFuYWdlcn0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvY2lyY2xlLW1hbmFnZXInO1xuaW1wb3J0IHtJbmZvV2luZG93TWFuYWdlcn0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvaW5mby13aW5kb3ctbWFuYWdlcic7XG5pbXBvcnQge01hcmtlck1hbmFnZXJ9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL21hcmtlci1tYW5hZ2VyJztcbmltcG9ydCB7UG9seWdvbk1hbmFnZXJ9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3BvbHlnb24tbWFuYWdlcic7XG5pbXBvcnQge1BvbHlsaW5lTWFuYWdlcn0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvcG9seWxpbmUtbWFuYWdlcic7XG5pbXBvcnQge0ttbExheWVyTWFuYWdlcn0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMva21sLWxheWVyLW1hbmFnZXInO1xuaW1wb3J0IHtEYXRhTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9kYXRhLWxheWVyLW1hbmFnZXInO1xuaW1wb3J0IHtTZWFyY2hCb3hNYW5hZ2VyfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9zZWFyY2gtYm94LW1hbmFnZXInO1xuXG4vKipcbiAqIEFnbU1hcCByZW5kZXJzIGEgR29vZ2xlIE1hcC5cbiAqICoqSW1wb3J0YW50IG5vdGUqKjogVG8gYmUgYWJsZSBzZWUgYSBtYXAgaW4gdGhlIGJyb3dzZXIsIHlvdSBoYXZlIHRvIGRlZmluZSBhIGhlaWdodCBmb3IgdGhlXG4gKiBlbGVtZW50IGBhZ20tbWFwYC5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICBhZ20tbWFwIHtcbiAqICAgICAgaGVpZ2h0OiAzMDBweDtcbiAqICAgIH1cbiAqIGBdLFxuICogIHRlbXBsYXRlOiBgXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZ20tbWFwJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIsIE1hcmtlck1hbmFnZXIsIEluZm9XaW5kb3dNYW5hZ2VyLCBDaXJjbGVNYW5hZ2VyLCBQb2x5bGluZU1hbmFnZXIsXG4gICAgUG9seWdvbk1hbmFnZXIsIEttbExheWVyTWFuYWdlciwgRGF0YUxheWVyTWFuYWdlciwgU2VhcmNoQm94TWFuYWdlclxuICBdLFxuICAvLyBob3N0OiB7XG4gIC8vICAgLy8gdG9kbzogZGVwcmVjYXRlZCAtIHdlIHdpbGwgcmVtb3ZlIGl0IHdpdGggdGhlIG5leHQgdmVyc2lvblxuICAvLyAgICdbY2xhc3Muc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcl0nOiAndHJ1ZSdcbiAgLy8gfSxcbiAgc3R5bGVzOiBbYFxuICAgIC5hZ20tbWFwLWNvbnRhaW5lci1pbm5lciB7XG4gICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICB9XG4gICAgLmFnbS1tYXAtY29udGVudCB7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPSdhZ20tbWFwLWNvbnRhaW5lci1pbm5lcic+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nYWdtLW1hcC1jb250ZW50Jz5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBZ21NYXAgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIE1hcCBvcHRpb24gYXR0cmlidXRlcyB0aGF0IGNhbiBjaGFuZ2Ugb3ZlciB0aW1lXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfbWFwT3B0aW9uc0F0dHJpYnV0ZXM6IHN0cmluZ1tdID0gW1xuICAgICdkaXNhYmxlRG91YmxlQ2xpY2tab29tJywgJ3Njcm9sbHdoZWVsJywgJ2RyYWdnYWJsZScsICdkcmFnZ2FibGVDdXJzb3InLCAnZHJhZ2dpbmdDdXJzb3InLFxuICAgICdrZXlib2FyZFNob3J0Y3V0cycsICd6b29tQ29udHJvbCcsICd6b29tQ29udHJvbE9wdGlvbnMnLCAnc3R5bGVzJywgJ3N0cmVldFZpZXdDb250cm9sJyxcbiAgICAnc3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zJywgJ3pvb20nLCAnbWFwVHlwZUNvbnRyb2wnLCAnbWFwVHlwZUNvbnRyb2xPcHRpb25zJywgJ21pblpvb20nLFxuICAgICdtYXhab29tJywgJ3BhbkNvbnRyb2wnLCAncGFuQ29udHJvbE9wdGlvbnMnLCAncm90YXRlQ29udHJvbCcsICdyb3RhdGVDb250cm9sT3B0aW9ucycsXG4gICAgJ2Z1bGxzY3JlZW5Db250cm9sJywgJ2Z1bGxzY3JlZW5Db250cm9sT3B0aW9ucycsICdzY2FsZUNvbnRyb2wnLCAnc2NhbGVDb250cm9sT3B0aW9ucycsXG4gICAgJ21hcFR5cGVJZCcsICdjbGlja2FibGVJY29ucycsICdnZXN0dXJlSGFuZGxpbmcnXG4gIF07XG4gIC8qKlxuICAgKiBUaGUgbG9uZ2l0dWRlIHRoYXQgZGVmaW5lcyB0aGUgY2VudGVyIG9mIHRoZSBtYXAuXG4gICAqL1xuICBASW5wdXQoKSBsb25naXR1ZGU6IG51bWJlciA9IDA7XG4gIC8qKlxuICAgKiBUaGUgbGF0aXR1ZGUgdGhhdCBkZWZpbmVzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcC5cbiAgICovXG4gIEBJbnB1dCgpIGxhdGl0dWRlOiBudW1iZXIgPSAwO1xuICAvKipcbiAgICogVGhlIHpvb20gbGV2ZWwgb2YgdGhlIG1hcC4gVGhlIGRlZmF1bHQgem9vbSBsZXZlbCBpcyA4LlxuICAgKi9cbiAgQElucHV0KCkgem9vbTogbnVtYmVyID0gODtcbiAgLyoqXG4gICAqIFRoZSBtaW5pbWFsIHpvb20gbGV2ZWwgb2YgdGhlIG1hcCBhbGxvd2VkLiBXaGVuIG5vdCBwcm92aWRlZCwgbm8gcmVzdHJpY3Rpb25zIHRvIHRoZSB6b29tIGxldmVsXG4gICAqIGFyZSBlbmZvcmNlZC5cbiAgICovXG4gIEBJbnB1dCgpIG1pblpvb206IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBtYXhpbWFsIHpvb20gbGV2ZWwgb2YgdGhlIG1hcCBhbGxvd2VkLiBXaGVuIG5vdCBwcm92aWRlZCwgbm8gcmVzdHJpY3Rpb25zIHRvIHRoZSB6b29tIGxldmVsXG4gICAqIGFyZSBlbmZvcmNlZC5cbiAgICovXG4gIEBJbnB1dCgpIG1heFpvb206IG51bWJlcjtcbiAgLyoqXG4gICAqIEVuYWJsZXMvZGlzYWJsZXMgaWYgbWFwIGlzIGRyYWdnYWJsZS5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdtYXBEcmFnZ2FibGUnKSBkcmFnZ2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogRW5hYmxlcy9kaXNhYmxlcyB6b29tIGFuZCBjZW50ZXIgb24gZG91YmxlIGNsaWNrLiBFbmFibGVkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlRG91YmxlQ2xpY2tab29tOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBFbmFibGVzL2Rpc2FibGVzIGFsbCBkZWZhdWx0IFVJIG9mIHRoZSBHb29nbGUgbWFwLiBQbGVhc2Ugbm90ZTogV2hlbiB0aGUgbWFwIGlzIGNyZWF0ZWQsIHRoaXNcbiAgICogdmFsdWUgY2Fubm90IGdldCB1cGRhdGVkLlxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZURlZmF1bHRVSTogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogSWYgZmFsc2UsIGRpc2FibGVzIHNjcm9sbHdoZWVsIHpvb21pbmcgb24gdGhlIG1hcC4gVGhlIHNjcm9sbHdoZWVsIGlzIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpIHNjcm9sbHdoZWVsOiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIENvbG9yIHVzZWQgZm9yIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBNYXAgZGl2LiBUaGlzIGNvbG9yIHdpbGwgYmUgdmlzaWJsZSB3aGVuIHRpbGVzIGhhdmUgbm90XG4gICAqIHlldCBsb2FkZWQgYXMgdGhlIHVzZXIgcGFucy4gVGhpcyBvcHRpb24gY2FuIG9ubHkgYmUgc2V0IHdoZW4gdGhlIG1hcCBpcyBpbml0aWFsaXplZC5cbiAgICovXG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIG5hbWUgb3IgdXJsIG9mIHRoZSBjdXJzb3IgdG8gZGlzcGxheSB3aGVuIG1vdXNpbmcgb3ZlciBhIGRyYWdnYWJsZSBtYXAuIFRoaXMgcHJvcGVydHkgdXNlc1xuICAgKiB0aGUgY3NzICAqIGN1cnNvciBhdHRyaWJ1dGUgdG8gY2hhbmdlIHRoZSBpY29uLiBBcyB3aXRoIHRoZSBjc3MgcHJvcGVydHksIHlvdSBtdXN0IHNwZWNpZnkgYXRcbiAgICogbGVhc3Qgb25lIGZhbGxiYWNrIGN1cnNvciB0aGF0IGlzIG5vdCBhIFVSTC4gRm9yIGV4YW1wbGU6XG4gICAqIFtkcmFnZ2FibGVDdXJzb3JdPVwiJ3VybChodHRwOi8vd3d3LmV4YW1wbGUuY29tL2ljb24ucG5nKSwgYXV0bzsnXCJcbiAgICovXG4gIEBJbnB1dCgpIGRyYWdnYWJsZUN1cnNvcjogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIG5hbWUgb3IgdXJsIG9mIHRoZSBjdXJzb3IgdG8gZGlzcGxheSB3aGVuIHRoZSBtYXAgaXMgYmVpbmcgZHJhZ2dlZC4gVGhpcyBwcm9wZXJ0eSB1c2VzIHRoZVxuICAgKiBjc3MgY3Vyc29yIGF0dHJpYnV0ZSB0byBjaGFuZ2UgdGhlIGljb24uIEFzIHdpdGggdGhlIGNzcyBwcm9wZXJ0eSwgeW91IG11c3Qgc3BlY2lmeSBhdCBsZWFzdFxuICAgKiBvbmUgZmFsbGJhY2sgY3Vyc29yIHRoYXQgaXMgbm90IGEgVVJMLiBGb3IgZXhhbXBsZTpcbiAgICogW2RyYWdnaW5nQ3Vyc29yXT1cIid1cmwoaHR0cDovL3d3dy5leGFtcGxlLmNvbS9pY29uLnBuZyksIGF1dG87J1wiXG4gICAqL1xuICBASW5wdXQoKSBkcmFnZ2luZ0N1cnNvcjogc3RyaW5nO1xuICAvKipcbiAgICogSWYgZmFsc2UsIHByZXZlbnRzIHRoZSBtYXAgZnJvbSBiZWluZyBjb250cm9sbGVkIGJ5IHRoZSBrZXlib2FyZC4gS2V5Ym9hcmQgc2hvcnRjdXRzIGFyZVxuICAgKiBlbmFibGVkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBASW5wdXQoKSBrZXlib2FyZFNob3J0Y3V0czogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiBUaGUgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgWm9vbSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgem9vbUNvbnRyb2w6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogT3B0aW9ucyBmb3IgdGhlIFpvb20gY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHpvb21Db250cm9sT3B0aW9uczogWm9vbUNvbnRyb2xPcHRpb25zO1xuICAvKipcbiAgICogU3R5bGVzIHRvIGFwcGx5IHRvIGVhY2ggb2YgdGhlIGRlZmF1bHQgbWFwIHR5cGVzLiBOb3RlIHRoYXQgZm9yIFNhdGVsbGl0ZS9IeWJyaWQgYW5kIFRlcnJhaW5cbiAgICogbW9kZXMsIHRoZXNlIHN0eWxlcyB3aWxsIG9ubHkgYXBwbHkgdG8gbGFiZWxzIGFuZCBnZW9tZXRyeS5cbiAgICovXG4gIEBJbnB1dCgpIHN0eWxlczogTWFwVHlwZVN0eWxlW10gPSBbXTtcbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSBhbmQgdGhlIGxhdGl0dWRlIGFuZC9vciBsb25naXR1ZGUgdmFsdWVzIGNoYW5nZXMsIHRoZSBHb29nbGUgTWFwcyBwYW5UbyBtZXRob2QgaXNcbiAgICogdXNlZCB0b1xuICAgKiBjZW50ZXIgdGhlIG1hcC4gU2VlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwXG4gICAqL1xuICBASW5wdXQoKSB1c2VQYW5uaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBTdHJlZXQgVmlldyBQZWdtYW4gY29udHJvbC5cbiAgICogVGhpcyBjb250cm9sIGlzIHBhcnQgb2YgdGhlIGRlZmF1bHQgVUksIGFuZCBzaG91bGQgYmUgc2V0IHRvIGZhbHNlIHdoZW4gZGlzcGxheWluZyBhIG1hcCB0eXBlXG4gICAqIG9uIHdoaWNoIHRoZSBTdHJlZXQgVmlldyByb2FkIG92ZXJsYXkgc2hvdWxkIG5vdCBhcHBlYXIgKGUuZy4gYSBub24tRWFydGggbWFwIHR5cGUpLlxuICAgKi9cbiAgQElucHV0KCkgc3RyZWV0Vmlld0NvbnRyb2w6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogT3B0aW9ucyBmb3IgdGhlIFN0cmVldCBWaWV3IGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSBzdHJlZXRWaWV3Q29udHJvbE9wdGlvbnM6IFN0cmVldFZpZXdDb250cm9sT3B0aW9ucztcbiAgLyoqXG4gICAqIFNldHMgdGhlIHZpZXdwb3J0IHRvIGNvbnRhaW4gdGhlIGdpdmVuIGJvdW5kcy5cbiAgICovXG4gIEBJbnB1dCgpIGZpdEJvdW5kczogTGF0TG5nQm91bmRzTGl0ZXJhbHxMYXRMbmdCb3VuZHMgPSBudWxsO1xuICAvKipcbiAgICogVGhlIGluaXRpYWwgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgU2NhbGUgY29udHJvbC4gVGhpcyBpcyBkaXNhYmxlZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgQElucHV0KCkgc2NhbGVDb250cm9sOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGUgc2NhbGUgY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHNjYWxlQ29udHJvbE9wdGlvbnM6IFNjYWxlQ29udHJvbE9wdGlvbnM7XG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBNYXAgdHlwZSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgbWFwVHlwZUNvbnRyb2w6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIE9wdGlvbnMgZm9yIHRoZSBNYXAgdHlwZSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgbWFwVHlwZUNvbnRyb2xPcHRpb25zOiBNYXBUeXBlQ29udHJvbE9wdGlvbnM7XG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBQYW4gY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHBhbkNvbnRyb2w6IGJvb2xlYW4gID0gZmFsc2U7XG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGUgUGFuIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSBwYW5Db250cm9sT3B0aW9uczogUGFuQ29udHJvbE9wdGlvbnM7XG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBSb3RhdGUgY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHJvdGF0ZUNvbnRyb2w6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIE9wdGlvbnMgZm9yIHRoZSBSb3RhdGUgY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHJvdGF0ZUNvbnRyb2xPcHRpb25zOiBSb3RhdGVDb250cm9sT3B0aW9ucztcbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIEZ1bGxzY3JlZW4gY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW5Db250cm9sOiBib29sZWFuICA9IGZhbHNlO1xuICAvKipcbiAgICogT3B0aW9ucyBmb3IgdGhlIEZ1bGxzY3JlZW4gY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW5Db250cm9sT3B0aW9uczogRnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zO1xuICAvKipcbiAgICogVGhlIG1hcCBtYXBUeXBlSWQuIERlZmF1bHRzIHRvICdyb2FkbWFwJy5cbiAgICovXG4gIEBJbnB1dCgpIG1hcFR5cGVJZDogJ3JvYWRtYXAnfCdoeWJyaWQnfCdzYXRlbGxpdGUnfCd0ZXJyYWluJ3xzdHJpbmcgPSAncm9hZG1hcCc7XG4gIC8qKlxuICAgKiBXaGVuIGZhbHNlLCBtYXAgaWNvbnMgYXJlIG5vdCBjbGlja2FibGUuIEEgbWFwIGljb24gcmVwcmVzZW50cyBhIHBvaW50IG9mIGludGVyZXN0LFxuICAgKiBhbHNvIGtub3duIGFzIGEgUE9JLiBCeSBkZWZhdWx0IG1hcCBpY29ucyBhcmUgY2xpY2thYmxlLlxuICAgKi9cbiAgQElucHV0KCkgY2xpY2thYmxlSWNvbnM6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogVGhpcyBzZXR0aW5nIGNvbnRyb2xzIGhvdyBnZXN0dXJlcyBvbiB0aGUgbWFwIGFyZSBoYW5kbGVkLlxuICAgKiBBbGxvd2VkIHZhbHVlczpcbiAgICogLSAnY29vcGVyYXRpdmUnIChUd28tZmluZ2VyIHRvdWNoIGdlc3R1cmVzIHBhbiBhbmQgem9vbSB0aGUgbWFwLiBPbmUtZmluZ2VyIHRvdWNoIGdlc3R1cmVzIGFyZSBub3QgaGFuZGxlZCBieSB0aGUgbWFwLilcbiAgICogLSAnZ3JlZWR5JyAgICAgIChBbGwgdG91Y2ggZ2VzdHVyZXMgcGFuIG9yIHpvb20gdGhlIG1hcC4pXG4gICAqIC0gJ25vbmUnICAgICAgICAoVGhlIG1hcCBjYW5ub3QgYmUgcGFubmVkIG9yIHpvb21lZCBieSB1c2VyIGdlc3R1cmVzLilcbiAgICogLSAnYXV0bycgICAgICAgIFtkZWZhdWx0XSAoR2VzdHVyZSBoYW5kbGluZyBpcyBlaXRoZXIgY29vcGVyYXRpdmUgb3IgZ3JlZWR5LCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgcGFnZSBpcyBzY3JvbGxhYmxlIG9yIG5vdC5cbiAgICovXG4gIEBJbnB1dCgpIGdlc3R1cmVIYW5kbGluZzogJ2Nvb3BlcmF0aXZlJ3wnZ3JlZWR5J3wnbm9uZSd8J2F1dG8nID0gJ2F1dG8nO1xuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgbWFwIChidXQgbm90IHdoZW4gdGhleSBjbGljayBvbiBhXG4gICAqIG1hcmtlciBvciBpbmZvV2luZG93KS5cbiAgICovXG4gIEBPdXRwdXQoKSBtYXBDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIHJpZ2h0LWNsaWNrcyBvbiB0aGUgbWFwIChidXQgbm90IHdoZW4gdGhleSBjbGlja1xuICAgKiBvbiBhIG1hcmtlciBvciBpbmZvV2luZG93KS5cbiAgICovXG4gIEBPdXRwdXQoKSBtYXBSaWdodENsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgZG91YmxlLWNsaWNrcyBvbiB0aGUgbWFwIChidXQgbm90IHdoZW4gdGhleSBjbGlja1xuICAgKiBvbiBhIG1hcmtlciBvciBpbmZvV2luZG93KS5cbiAgICovXG4gIEBPdXRwdXQoKSBtYXBEYmxDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGlzIGZpcmVkIHdoZW4gdGhlIG1hcCBjZW50ZXIgY2hhbmdlcy5cbiAgICovXG4gIEBPdXRwdXQoKSBjZW50ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMYXRMbmdMaXRlcmFsPiA9IG5ldyBFdmVudEVtaXR0ZXI8TGF0TG5nTGl0ZXJhbD4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdmlld3BvcnQgYm91bmRzIGhhdmUgY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBib3VuZHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMYXRMbmdCb3VuZHM+ID0gbmV3IEV2ZW50RW1pdHRlcjxMYXRMbmdCb3VuZHM+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIG1hcFR5cGVJZCBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgKi9cbiAgQE91dHB1dCgpIG1hcFR5cGVJZENoYW5nZTogRXZlbnRFbWl0dGVyPE1hcFR5cGVJZD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFR5cGVJZD4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgbWFwIGJlY29tZXMgaWRsZSBhZnRlciBwYW5uaW5nIG9yIHpvb21pbmcuXG4gICAqL1xuICBAT3V0cHV0KCkgaWRsZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB6b29tIGxldmVsIGhhcyBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIHpvb21DaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIGdvb2dsZSBtYXAgaXMgZnVsbHkgaW5pdGlhbGl6ZWQuXG4gICAqIFlvdSBnZXQgdGhlIGdvb2dsZS5tYXBzLk1hcCBpbnN0YW5jZSBhcyBhIHJlc3VsdCBvZiB0aGlzIEV2ZW50RW1pdHRlci5cbiAgICovXG4gIEBPdXRwdXQoKSBtYXBSZWFkeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbTogRWxlbWVudFJlZiwgcHJpdmF0ZSBfbWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyKSB7fVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdG9kbzogdGhpcyBzaG91bGQgYmUgc29sdmVkIHdpdGggYSBuZXcgY29tcG9uZW50IGFuZCBhIHZpZXdDaGlsZCBkZWNvcmF0b3JcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFnbS1tYXAtY29udGFpbmVyLWlubmVyJyk7XG4gICAgdGhpcy5faW5pdE1hcEluc3RhbmNlKGNvbnRhaW5lcik7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIHVuc3Vic2NyaWJlIGFsbCByZWdpc3RlcmVkIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uc1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLmZvckVhY2goKHMpID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICAvKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuX3VwZGF0ZU1hcE9wdGlvbnNDaGFuZ2VzKGNoYW5nZXMpO1xuICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKGNoYW5nZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIGEgcmVzaXplIGV2ZW50IG9uIHRoZSBnb29nbGUgbWFwIGluc3RhbmNlLlxuICAgKiBXaGVuIHJlY2VudGVyIGlzIHRydWUsIHRoZSBvZiB0aGUgZ29vZ2xlIG1hcCBnZXRzIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IGxhdC9sbmcgdmFsdWVzIG9yIGZpdEJvdW5kcyB2YWx1ZSB0byByZWNlbnRlciB0aGUgbWFwLlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGdldHMgcmVzb2x2ZWQgYWZ0ZXIgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQuXG4gICAqL1xuICB0cmlnZ2VyUmVzaXplKHJlY2VudGVyOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIE5vdGU6IFdoZW4gd2Ugd291bGQgdHJpZ2dlciB0aGUgcmVzaXplIGV2ZW50IGFuZCBzaG93IHRoZSBtYXAgaW4gdGhlIHNhbWUgdHVybiAod2hpY2ggaXMgYVxuICAgIC8vIGNvbW1vbiBjYXNlIGZvciB0cmlnZ2VyaW5nIGEgcmVzaXplIGV2ZW50KSwgdGhlbiB0aGUgcmVzaXplIGV2ZW50IHdvdWxkIG5vdFxuICAgIC8vIHdvcmsgKHRvIHNob3cgdGhlIG1hcCksIHNvIHdlIHRyaWdnZXIgdGhlIGV2ZW50IGluIGEgdGltZW91dC5cbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwc1dyYXBwZXIudHJpZ2dlck1hcEV2ZW50KCdyZXNpemUnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBpZiAocmVjZW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZml0Qm91bmRzICE9IG51bGwgPyB0aGlzLl9maXRCb3VuZHMoKSA6IHRoaXMuX3NldENlbnRlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0TWFwSW5zdGFuY2UoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fbWFwc1dyYXBwZXIuY3JlYXRlTWFwKGVsLCB7XG4gICAgICBjZW50ZXI6IHtsYXQ6IHRoaXMubGF0aXR1ZGUgfHwgMCwgbG5nOiB0aGlzLmxvbmdpdHVkZSB8fCAwfSxcbiAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgIG1pblpvb206IHRoaXMubWluWm9vbSxcbiAgICAgIG1heFpvb206IHRoaXMubWF4Wm9vbSxcbiAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRoaXMuZGlzYWJsZURlZmF1bHRVSSxcbiAgICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IHRoaXMuZGlzYWJsZURvdWJsZUNsaWNrWm9vbSxcbiAgICAgIHNjcm9sbHdoZWVsOiB0aGlzLnNjcm9sbHdoZWVsLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUsXG4gICAgICBkcmFnZ2FibGVDdXJzb3I6IHRoaXMuZHJhZ2dhYmxlQ3Vyc29yLFxuICAgICAgZHJhZ2dpbmdDdXJzb3I6IHRoaXMuZHJhZ2dpbmdDdXJzb3IsXG4gICAgICBrZXlib2FyZFNob3J0Y3V0czogdGhpcy5rZXlib2FyZFNob3J0Y3V0cyxcbiAgICAgIHN0eWxlczogdGhpcy5zdHlsZXMsXG4gICAgICB6b29tQ29udHJvbDogdGhpcy56b29tQ29udHJvbCxcbiAgICAgIHpvb21Db250cm9sT3B0aW9uczogdGhpcy56b29tQ29udHJvbE9wdGlvbnMsXG4gICAgICBzdHJlZXRWaWV3Q29udHJvbDogdGhpcy5zdHJlZXRWaWV3Q29udHJvbCxcbiAgICAgIHN0cmVldFZpZXdDb250cm9sT3B0aW9uczogdGhpcy5zdHJlZXRWaWV3Q29udHJvbE9wdGlvbnMsXG4gICAgICBzY2FsZUNvbnRyb2w6IHRoaXMuc2NhbGVDb250cm9sLFxuICAgICAgc2NhbGVDb250cm9sT3B0aW9uczogdGhpcy5zY2FsZUNvbnRyb2xPcHRpb25zLFxuICAgICAgbWFwVHlwZUNvbnRyb2w6IHRoaXMubWFwVHlwZUNvbnRyb2wsXG4gICAgICBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IHRoaXMubWFwVHlwZUNvbnRyb2xPcHRpb25zLFxuICAgICAgcGFuQ29udHJvbDogdGhpcy5wYW5Db250cm9sLFxuICAgICAgcGFuQ29udHJvbE9wdGlvbnM6IHRoaXMucGFuQ29udHJvbE9wdGlvbnMsXG4gICAgICByb3RhdGVDb250cm9sOiB0aGlzLnJvdGF0ZUNvbnRyb2wsXG4gICAgICByb3RhdGVDb250cm9sT3B0aW9uczogdGhpcy5yb3RhdGVDb250cm9sT3B0aW9ucyxcbiAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiB0aGlzLmZ1bGxzY3JlZW5Db250cm9sLFxuICAgICAgZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zOiB0aGlzLmZ1bGxzY3JlZW5Db250cm9sT3B0aW9ucyxcbiAgICAgIG1hcFR5cGVJZDogdGhpcy5tYXBUeXBlSWQsXG4gICAgICBjbGlja2FibGVJY29uczogdGhpcy5jbGlja2FibGVJY29ucyxcbiAgICAgIGdlc3R1cmVIYW5kbGluZzogdGhpcy5nZXN0dXJlSGFuZGxpbmdcbiAgICB9KVxuICAgICAgLy8gLnRoZW4oKCkgPT4gdGhpcy5fbWFwc1dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLl9tYXBzV3JhcHBlci5nZXRUcnVlTmF0aXZlTWFwKCkpXG4gICAgICAudGhlbihtYXAgPT4gdGhpcy5tYXBSZWFkeS5lbWl0KG1hcCkpO1xuXG4gICAgLy8gcmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXJzXG4gICAgdGhpcy5faGFuZGxlTWFwQ2VudGVyQ2hhbmdlKCk7XG4gICAgdGhpcy5faGFuZGxlTWFwWm9vbUNoYW5nZSgpO1xuICAgIHRoaXMuX2hhbmRsZU1hcE1vdXNlRXZlbnRzKCk7XG4gICAgdGhpcy5faGFuZGxlQm91bmRzQ2hhbmdlKCk7XG4gICAgdGhpcy5faGFuZGxlTWFwVHlwZUlkQ2hhbmdlKCk7XG4gICAgdGhpcy5faGFuZGxlSWRsZUV2ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVNYXBPcHRpb25zQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgbGV0IG9wdGlvbnM6IHtbcHJvcE5hbWU6IHN0cmluZ106IGFueX0gPSB7fTtcbiAgICBsZXQgb3B0aW9uS2V5cyA9XG4gICAgICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpLmZpbHRlcihrID0+IEFnbU1hcC5fbWFwT3B0aW9uc0F0dHJpYnV0ZXMuaW5kZXhPZihrKSAhPT0gLTEpO1xuICAgIG9wdGlvbktleXMuZm9yRWFjaCgoaykgPT4geyBvcHRpb25zW2tdID0gY2hhbmdlc1trXS5jdXJyZW50VmFsdWU7IH0pO1xuICAgIHRoaXMuX21hcHNXcmFwcGVyLnNldE1hcE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQb3NpdGlvbihjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ2xhdGl0dWRlJ10gPT0gbnVsbCAmJiBjaGFuZ2VzWydsb25naXR1ZGUnXSA9PSBudWxsICYmXG4gICAgICAgIGNoYW5nZXNbJ2ZpdEJvdW5kcyddID09IG51bGwpIHtcbiAgICAgIC8vIG5vIHBvc2l0aW9uIHVwZGF0ZSBuZWVkZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB3ZSBwcmVmZXIgZml0Qm91bmRzIGluIGNoYW5nZXNcbiAgICBpZiAoY2hhbmdlc1snZml0Qm91bmRzJ10gJiYgdGhpcy5maXRCb3VuZHMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fZml0Qm91bmRzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmxhdGl0dWRlICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGhpcy5sb25naXR1ZGUgIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NldENlbnRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0Q2VudGVyKCkge1xuICAgIGxldCBuZXdDZW50ZXIgPSB7XG4gICAgICBsYXQ6IHRoaXMubGF0aXR1ZGUsXG4gICAgICBsbmc6IHRoaXMubG9uZ2l0dWRlLFxuICAgIH07XG4gICAgaWYgKHRoaXMudXNlUGFubmluZykge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIucGFuVG8obmV3Q2VudGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuc2V0Q2VudGVyKG5ld0NlbnRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZml0Qm91bmRzKCkge1xuICAgIGlmICh0aGlzLnVzZVBhbm5pbmcpIHtcbiAgICAgIHRoaXMuX21hcHNXcmFwcGVyLnBhblRvQm91bmRzKHRoaXMuZml0Qm91bmRzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWFwc1dyYXBwZXIuZml0Qm91bmRzKHRoaXMuZml0Qm91bmRzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1hcENlbnRlckNoYW5nZSgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudDx2b2lkPignY2VudGVyX2NoYW5nZWQnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuZ2V0Q2VudGVyKCkudGhlbigoY2VudGVyOiBMYXRMbmcpID0+IHtcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGNlbnRlci5sYXQoKTtcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBjZW50ZXIubG5nKCk7XG4gICAgICAgIHRoaXMuY2VudGVyQ2hhbmdlLmVtaXQoPExhdExuZ0xpdGVyYWw+e2xhdDogdGhpcy5sYXRpdHVkZSwgbG5nOiB0aGlzLmxvbmdpdHVkZX0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUJvdW5kc0NoYW5nZSgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudDx2b2lkPignYm91bmRzX2NoYW5nZWQnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuZ2V0Qm91bmRzKCkudGhlbihcbiAgICAgICAgICAoYm91bmRzOiBMYXRMbmdCb3VuZHMpID0+IHsgdGhpcy5ib3VuZHNDaGFuZ2UuZW1pdChib3VuZHMpOyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTWFwVHlwZUlkQ2hhbmdlKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50PHZvaWQ+KCdtYXB0eXBlaWRfY2hhbmdlZCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRNYXBUeXBlSWQoKS50aGVuKFxuICAgICAgICAgIChtYXBUeXBlSWQ6IE1hcFR5cGVJZCkgPT4geyB0aGlzLm1hcFR5cGVJZENoYW5nZS5lbWl0KG1hcFR5cGVJZCk7IH0pO1xuICAgIH0pO1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNYXBab29tQ2hhbmdlKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50PHZvaWQ+KCd6b29tX2NoYW5nZWQnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuZ2V0Wm9vbSgpLnRoZW4oKHo6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLnpvb20gPSB6O1xuICAgICAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh6KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVJZGxlRXZlbnQoKSB7XG4gICAgY29uc3QgcyA9IHRoaXMuX21hcHNXcmFwcGVyLnN1YnNjcmliZVRvTWFwRXZlbnQ8dm9pZD4oJ2lkbGUnKS5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHsgdGhpcy5pZGxlLmVtaXQodm9pZCAwKTsgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1hcE1vdXNlRXZlbnRzKCkge1xuICAgIGludGVyZmFjZSBFbWl0dGVyIHtcbiAgICAgIGVtaXQodmFsdWU6IGFueSk6IHZvaWQ7XG4gICAgfVxuICAgIHR5cGUgRXZlbnQgPSB7bmFtZTogc3RyaW5nLCBlbWl0dGVyOiBFbWl0dGVyfTtcblxuICAgIGNvbnN0IGV2ZW50czogRXZlbnRbXSA9IFtcbiAgICAgIHtuYW1lOiAnY2xpY2snLCBlbWl0dGVyOiB0aGlzLm1hcENsaWNrfSxcbiAgICAgIHtuYW1lOiAncmlnaHRjbGljaycsIGVtaXR0ZXI6IHRoaXMubWFwUmlnaHRDbGlja30sXG4gICAgICB7bmFtZTogJ2RibGNsaWNrJywgZW1pdHRlcjogdGhpcy5tYXBEYmxDbGlja30sXG4gICAgXTtcblxuICAgIGV2ZW50cy5mb3JFYWNoKChlOiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgcyA9IHRoaXMuX21hcHNXcmFwcGVyLnN1YnNjcmliZVRvTWFwRXZlbnQ8e2xhdExuZzogTGF0TG5nfT4oZS5uYW1lKS5zdWJzY3JpYmUoXG4gICAgICAgICAgKGV2ZW50OiB7bGF0TG5nOiBMYXRMbmd9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IDxNb3VzZUV2ZW50Pntjb29yZHM6IHtsYXQ6IGV2ZW50LmxhdExuZy5sYXQoKSwgbG5nOiBldmVudC5sYXRMbmcubG5nKCl9fTtcbiAgICAgICAgICAgIGUuZW1pdHRlci5lbWl0KHZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==