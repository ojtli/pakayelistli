import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
import * as i0 from "@angular/core";
import * as i1 from "./maps-api-loader/maps-api-loader";
/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = /** @class */ (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);
                _this._mapResolver(map);
                return;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            _this._map.then(function (m) { m.setOptions(options); });
        });
    };
    /**
     * Creates a google map marker with the map context
     */
    GoogleMapsAPIWrapper.prototype.createMarker = function (options, addToMap) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) {
                if (addToMap) {
                    options.map = map;
                }
                return new google.maps.Marker(options);
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function () { return new google.maps.InfoWindow(options); });
        });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) {
                if (typeof options.strokePosition === 'string') {
                    options.strokePosition = google.maps.StrokePosition[options.strokePosition];
                }
                options.map = map;
                return new google.maps.Circle(options);
            });
        });
    };
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    GoogleMapsAPIWrapper.prototype.createRectangle = function (options) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) {
                options.map = map;
                return new google.maps.Rectangle(options);
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this.getNativeMap().then(function (map) {
                var line = new google.maps.Polyline(options);
                line.setMap(map);
                return line;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this.getNativeMap().then(function (map) {
                var polygon = new google.maps.Polygon(options);
                polygon.setMap(map);
                return polygon;
            });
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    GoogleMapsAPIWrapper.prototype.createDataLayer = function (options) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (m) {
                var data = new google.maps.Data(options);
                data.setMap(m);
                return data;
            });
        });
    };
    /**
     * Creates a TransitLayer instance for a map
     * @param options
     */
    /* @param {TransitLayerOptions} options - used for setting layer options
     * @returns {Promise<TransitLayer>} a new transit layer object
     */
    GoogleMapsAPIWrapper.prototype.createTransitLayer = function (options) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) {
                var newLayer = new google.maps.TransitLayer();
                newLayer.setMap(options.visible ? map : null);
                return newLayer;
            });
        });
    };
    /**
     * Creates a BicyclingLayer instance for a map
     * @param options
     */
    /* @param {BicyclingLayerOptions} options - used for setting layer options
    * @returns {Promise<BicyclingLayer>} a new bicycling layer object
    */
    GoogleMapsAPIWrapper.prototype.createBicyclingLayer = function (options) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) {
                var newLayer = new google.maps.BicyclingLayer();
                newLayer.setMap(options.visible ? map : null);
                return newLayer;
            });
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    GoogleMapsAPIWrapper.prototype.containsLocation = function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return new Observable(function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            _this._map.then(function (map) {
                google.maps.event.clearInstanceListeners(map);
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) { return map.setCenter(latLng); });
        });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) { return map.getZoom(); });
        });
    };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) { return map.getBounds(); });
        });
    };
    GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) { return map.getMapTypeId(); });
        });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) { return map.setZoom(zoom); });
        });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) { return map.getCenter(); });
        });
    };
    GoogleMapsAPIWrapper.prototype.getControls = function () {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) { return map.controls; });
        });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) { return map.panTo(latLng); });
        });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) { return map.panBy(x, y); });
        });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng, padding) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) { return map.fitBounds(latLng, padding); });
        });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng, padding) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._map.then(function (map) { return map.panToBounds(latLng, padding); });
        });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    GoogleMapsAPIWrapper.prototype.getTrueNativeMap = function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper.ctorParameters = function () { return [
        { type: MapsAPILoader },
        { type: NgZone }
    ]; };
    GoogleMapsAPIWrapper.ɵprov = i0.ɵɵdefineInjectable({ factory: function GoogleMapsAPIWrapper_Factory() { return new GoogleMapsAPIWrapper(i0.ɵɵinject(i1.MapsAPILoader), i0.ɵɵinject(i0.NgZone)); }, token: GoogleMapsAPIWrapper, providedIn: "root" });
    GoogleMapsAPIWrapper = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GoogleMapsAPIWrapper);
    return GoogleMapsAPIWrapper;
}());
export { GoogleMapsAPIWrapper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFLMUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1DQUFtQyxDQUFDOzs7QUFLaEU7OztHQUdHO0FBSUg7SUFJRSw4QkFBb0IsT0FBc0IsRUFBVSxLQUFhO1FBQWpFLGlCQUdDO1FBSG1CLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQy9ELElBQUksQ0FBQyxJQUFJO1lBQ0wsSUFBSSxPQUFPLENBQXFCLFVBQUMsT0FBbUIsSUFBTyxLQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCx3Q0FBUyxHQUFULFVBQVUsRUFBZSxFQUFFLFVBQStCO1FBQTFELGlCQVFDO1FBUEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFFO1lBQ25DLE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQzlCLElBQU0sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsWUFBWSxDQUFxQixHQUFHLENBQUMsQ0FBQztnQkFDM0MsT0FBTztZQUNULENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLE9BQTRCO1FBQTFDLGlCQUlDO1FBSEMs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QUFDLEdBQXVCLElBQUssT0FBQSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkNBQVksR0FBWixjQUE4QyxPQUFPLElBQUksQ0FBQyxJQUFtQyxDQUFDLENBQUMsQ0FBQztJQUVoRzs7T0FFRztJQUNILCtDQUFnQixHQUFoQixjQUErQyxPQUFPLElBQUksQ0FBQyxJQUFnQyxDQUFDLENBQUMsQ0FBQztJQUU5Rjs7T0FFRztJQUNILDhDQUFlLEdBQWYsVUFBZ0IsU0FBaUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnQkFoUDRCLGFBQWE7Z0JBQWlCLE1BQU07OztJQUp0RCxvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG9CQUFvQixDQXFQaEM7K0JBdlFEO0NBdVFDLEFBclBELElBcVBDO1NBclBZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgKiBhcyBtYXBUeXBlcyBmcm9tICcuL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7UG9seWxpbmV9IGZyb20gJy4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHtQb2x5bGluZU9wdGlvbnN9IGZyb20gJy4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHtNYXBzQVBJTG9hZGVyfSBmcm9tICcuL21hcHMtYXBpLWxvYWRlci9tYXBzLWFwaS1sb2FkZXInO1xuXG4vLyB0b2RvOiBhZGQgdHlwZXMgZm9yIHRoaXNcbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xuXG4vKipcbiAqIFdyYXBwZXIgY2xhc3MgdGhhdCBoYW5kbGVzIHRoZSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIEdvb2dsZSBNYXBzIEphdmFzY3JpcHRcbiAqIEFQSSB2M1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzQVBJV3JhcHBlciB7XG4gIHByaXZhdGUgX21hcDogUHJvbWlzZTxtYXBUeXBlcy5Hb29nbGVNYXAgfCBnb29nbGUubWFwcy5NYXA+O1xuICBwcml2YXRlIF9tYXBSZXNvbHZlcjogKHZhbHVlPzogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRlcjogTWFwc0FQSUxvYWRlciwgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7XG4gICAgdGhpcy5fbWFwID1cbiAgICAgICAgbmV3IFByb21pc2U8bWFwVHlwZXMuR29vZ2xlTWFwPigocmVzb2x2ZTogKCkgPT4gdm9pZCkgPT4geyB0aGlzLl9tYXBSZXNvbHZlciA9IHJlc29sdmU7IH0pO1xuICB9XG5cbiAgY3JlYXRlTWFwKGVsOiBIVE1MRWxlbWVudCwgbWFwT3B0aW9uczogbWFwVHlwZXMuTWFwT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChlbCwgbWFwT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX21hcFJlc29sdmVyKDxtYXBUeXBlcy5Hb29nbGVNYXA+bWFwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRNYXBPcHRpb25zKG9wdGlvbnM6IG1hcFR5cGVzLk1hcE9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9tYXAudGhlbigobTogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiB7IG0uc2V0T3B0aW9ucyhvcHRpb25zKTsgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdvb2dsZSBtYXAgbWFya2VyIHdpdGggdGhlIG1hcCBjb250ZXh0XG4gICAqL1xuICBjcmVhdGVNYXJrZXIob3B0aW9uczogbWFwVHlwZXMuTWFya2VyT3B0aW9ucyA9IDxtYXBUeXBlcy5NYXJrZXJPcHRpb25zPnt9LCBhZGRUb01hcDogYm9vbGVhbiA9IHRydWUpOlxuICAgICAgUHJvbWlzZTxtYXBUeXBlcy5NYXJrZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiB7XG4gICAgICAgIGlmIChhZGRUb01hcCkge1xuICAgICAgICAgIG9wdGlvbnMubWFwID0gbWFwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVJbmZvV2luZG93KG9wdGlvbnM/OiBtYXBUeXBlcy5JbmZvV2luZG93T3B0aW9ucyk6IFByb21pc2U8bWFwVHlwZXMuSW5mb1dpbmRvdz4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigoKSA9PiB7IHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyhvcHRpb25zKTsgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdvb2dsZS5tYXAuQ2lyY2xlIGZvciB0aGUgY3VycmVudCBtYXAuXG4gICAqL1xuICBjcmVhdGVDaXJjbGUob3B0aW9uczogbWFwVHlwZXMuQ2lyY2xlT3B0aW9ucyk6IFByb21pc2U8bWFwVHlwZXMuQ2lyY2xlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKChtYXA6IG1hcFR5cGVzLkdvb2dsZU1hcCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc3Ryb2tlUG9zaXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgb3B0aW9ucy5zdHJva2VQb3NpdGlvbiA9IGdvb2dsZS5tYXBzLlN0cm9rZVBvc2l0aW9uW29wdGlvbnMuc3Ryb2tlUG9zaXRpb25dO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMubWFwID0gbWFwO1xuICAgICAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkNpcmNsZShvcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBnb29nbGUubWFwLlJlY3RhbmdsZSBmb3IgdGhlIGN1cnJlbnQgbWFwLlxuICAgKi9cbiAgY3JlYXRlUmVjdGFuZ2xlKG9wdGlvbnM6IG1hcFR5cGVzLlJlY3RhbmdsZU9wdGlvbnMpOiBQcm9taXNlPG1hcFR5cGVzLlJlY3RhbmdsZT4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IHtcbiAgICAgICAgb3B0aW9ucy5tYXAgPSBtYXA7XG4gICAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuUmVjdGFuZ2xlKG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQb2x5bGluZShvcHRpb25zOiBQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPFBvbHlsaW5lPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlTWFwKCkudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IHtcbiAgICAgICAgbGV0IGxpbmUgPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUob3B0aW9ucyk7XG4gICAgICAgIGxpbmUuc2V0TWFwKG1hcCk7XG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQb2x5Z29uKG9wdGlvbnM6IG1hcFR5cGVzLlBvbHlnb25PcHRpb25zKTogUHJvbWlzZTxtYXBUeXBlcy5Qb2x5Z29uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlTWFwKCkudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IHtcbiAgICAgICAgbGV0IHBvbHlnb24gPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWdvbihvcHRpb25zKTtcbiAgICAgICAgcG9seWdvbi5zZXRNYXAobWFwKTtcbiAgICAgICAgcmV0dXJuIHBvbHlnb247XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGdvb2dsZS5tYXAuRGF0YSBsYXllciBmb3IgdGhlIGN1cnJlbnQgbWFwXG4gICAqL1xuICBjcmVhdGVEYXRhTGF5ZXIob3B0aW9ucz86IG1hcFR5cGVzLkRhdGFPcHRpb25zKTogUHJvbWlzZTxtYXBUeXBlcy5EYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKG0gPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IG5ldyBnb29nbGUubWFwcy5EYXRhKG9wdGlvbnMpO1xuICAgICAgICBkYXRhLnNldE1hcChtKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgVHJhbnNpdExheWVyIGluc3RhbmNlIGZvciBhIG1hcFxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgLyogQHBhcmFtIHtUcmFuc2l0TGF5ZXJPcHRpb25zfSBvcHRpb25zIC0gdXNlZCBmb3Igc2V0dGluZyBsYXllciBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFRyYW5zaXRMYXllcj59IGEgbmV3IHRyYW5zaXQgbGF5ZXIgb2JqZWN0XG4gICAqL1xuICBjcmVhdGVUcmFuc2l0TGF5ZXIob3B0aW9uczogbWFwVHlwZXMuVHJhbnNpdExheWVyT3B0aW9ucyk6IFByb21pc2U8bWFwVHlwZXMuVHJhbnNpdExheWVyPntcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiB7XG4gICAgICAgIGxldCBuZXdMYXllcjogbWFwVHlwZXMuVHJhbnNpdExheWVyID0gbmV3IGdvb2dsZS5tYXBzLlRyYW5zaXRMYXllcigpO1xuICAgICAgICBuZXdMYXllci5zZXRNYXAob3B0aW9ucy52aXNpYmxlID8gbWFwIDogbnVsbCk7XG4gICAgICAgIHJldHVybiBuZXdMYXllcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBCaWN5Y2xpbmdMYXllciBpbnN0YW5jZSBmb3IgYSBtYXBcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIC8qIEBwYXJhbSB7QmljeWNsaW5nTGF5ZXJPcHRpb25zfSBvcHRpb25zIC0gdXNlZCBmb3Igc2V0dGluZyBsYXllciBvcHRpb25zXG4gICogQHJldHVybnMge1Byb21pc2U8QmljeWNsaW5nTGF5ZXI+fSBhIG5ldyBiaWN5Y2xpbmcgbGF5ZXIgb2JqZWN0XG4gICovXG4gIGNyZWF0ZUJpY3ljbGluZ0xheWVyKG9wdGlvbnM6IG1hcFR5cGVzLkJpY3ljbGluZ0xheWVyT3B0aW9ucyk6IFByb21pc2U8bWFwVHlwZXMuQmljeWNsaW5nTGF5ZXI+e1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IHtcbiAgICAgICAgbGV0IG5ld0xheWVyOiBtYXBUeXBlcy5CaWN5Y2xpbmdMYXllciA9IG5ldyBnb29nbGUubWFwcy5CaWN5Y2xpbmdMYXllcigpO1xuICAgICAgICBuZXdMYXllci5zZXRNYXAob3B0aW9ucy52aXNpYmxlID8gbWFwIDogbnVsbCk7XG4gICAgICAgIHJldHVybiBuZXdMYXllcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgZ2l2ZW4gY29vcmRpbmF0ZXMgYXJlIGluc2l0ZSBhIFBvbHlnb24gcGF0aC5cbiAgICovXG4gIGNvbnRhaW5zTG9jYXRpb24obGF0TG5nOiBtYXBUeXBlcy5MYXRMbmdMaXRlcmFsLCBwb2x5Z29uOiBtYXBUeXBlcy5Qb2x5Z29uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGdvb2dsZS5tYXBzLmdlb21ldHJ5LnBvbHkuY29udGFpbnNMb2NhdGlvbihsYXRMbmcsIHBvbHlnb24pO1xuICB9XG5cbiAgc3Vic2NyaWJlVG9NYXBFdmVudDxFPihldmVudE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8RT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEU+KSA9PiB7XG4gICAgICB0aGlzLl9tYXAudGhlbigobTogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiB7XG4gICAgICAgIG0uYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAoYXJnOiBFKSA9PiB7IHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoYXJnKSk7IH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhckluc3RhbmNlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX21hcC50aGVuKChtYXA6IG1hcFR5cGVzLkdvb2dsZU1hcCkgPT4ge1xuICAgICAgICBnb29nbGUubWFwcy5ldmVudC5jbGVhckluc3RhbmNlTGlzdGVuZXJzKG1hcCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldENlbnRlcihsYXRMbmc6IG1hcFR5cGVzLkxhdExuZ0xpdGVyYWwpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiBtYXAuc2V0Q2VudGVyKGxhdExuZykpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Wm9vbSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IG1hcC5nZXRab29tKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCk6IFByb21pc2U8bWFwVHlwZXMuTGF0TG5nQm91bmRzPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKChtYXA6IG1hcFR5cGVzLkdvb2dsZU1hcCkgPT4gbWFwLmdldEJvdW5kcygpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldE1hcFR5cGVJZCgpOiBQcm9taXNlPG1hcFR5cGVzLk1hcFR5cGVJZD4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IG1hcC5nZXRNYXBUeXBlSWQoKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRab29tKHpvb206IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IG1hcC5zZXRab29tKHpvb20pKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENlbnRlcigpOiBQcm9taXNlPG1hcFR5cGVzLkxhdExuZz4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IG1hcC5nZXRDZW50ZXIoKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250cm9scygpOiBQcm9taXNlPG1hcFR5cGVzLk1WQ0FycmF5PE5vZGU+W10+IHtcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiBtYXAuY29udHJvbHMpO1xuICAgIH0pO1xuICB9XG5cbiAgcGFuVG8obGF0TG5nOiBtYXBUeXBlcy5MYXRMbmd8bWFwVHlwZXMuTGF0TG5nTGl0ZXJhbCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBtYXBUeXBlcy5Hb29nbGVNYXApID0+IG1hcC5wYW5UbyhsYXRMbmcpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBhbkJ5KHg6IG51bWJlciwgeTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKChtYXApID0+IG1hcC5wYW5CeSh4LCB5KSk7XG4gICAgfSk7XG4gIH1cblxuICBmaXRCb3VuZHMobGF0TG5nOiBtYXBUeXBlcy5MYXRMbmdCb3VuZHN8bWFwVHlwZXMuTGF0TG5nQm91bmRzTGl0ZXJhbCwgcGFkZGluZz86IG51bWJlciB8IG1hcFR5cGVzLlBhZGRpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiBtYXAuZml0Qm91bmRzKGxhdExuZywgcGFkZGluZykpO1xuICAgIH0pO1xuICB9XG5cbiAgcGFuVG9Cb3VuZHMobGF0TG5nOiBtYXBUeXBlcy5MYXRMbmdCb3VuZHN8bWFwVHlwZXMuTGF0TG5nQm91bmRzTGl0ZXJhbCwgcGFkZGluZz86IG51bWJlciB8IG1hcFR5cGVzLlBhZGRpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogbWFwVHlwZXMuR29vZ2xlTWFwKSA9PiBtYXAucGFuVG9Cb3VuZHMobGF0TG5nLCBwYWRkaW5nKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmF0aXZlIEdvb2dsZSBNYXBzIE1hcCBpbnN0YW5jZS4gQmUgY2FyZWZ1bCB3aGVuIHVzaW5nIHRoaXMgaW5zdGFuY2UgZGlyZWN0bHkuXG4gICAqL1xuICBnZXROYXRpdmVNYXAoKTogUHJvbWlzZTxtYXBUeXBlcy5Hb29nbGVNYXA+IHsgcmV0dXJuIHRoaXMuX21hcCBhcyBQcm9taXNlPG1hcFR5cGVzLkdvb2dsZU1hcD47IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmF0aXZlIEdvb2dsZSBNYXBzIE1hcCBpbnN0YW5jZS4gQmUgY2FyZWZ1bCB3aGVuIHVzaW5nIHRoaXMgaW5zdGFuY2UgZGlyZWN0bHkuXG4gICAqL1xuICBnZXRUcnVlTmF0aXZlTWFwKCk6IFByb21pc2U8Z29vZ2xlLm1hcHMuTWFwPiB7IHJldHVybiB0aGlzLl9tYXAgYXMgUHJvbWlzZTxnb29nbGUubWFwcy5NYXA+OyB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHRoZSBnaXZlbiBldmVudCBuYW1lIG9uIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqL1xuICB0cmlnZ2VyTWFwRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG0pID0+IGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobSwgZXZlbnROYW1lKSk7XG4gIH1cbn1cbiJdfQ==