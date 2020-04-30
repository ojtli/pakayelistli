import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = /** @class */ (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    KmlLayerManager.prototype.addKmlLayer = function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    KmlLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager.ctorParameters = function () { return [
        { type: GoogleMapsAPIWrapper },
        { type: NgZone }
    ]; };
    KmlLayerManager.ɵprov = i0.ɵɵdefineInjectable({ factory: function KmlLayerManager_Factory() { return new KmlLayerManager(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); }, token: KmlLayerManager, providedIn: "root" });
    KmlLayerManager = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], KmlLayerManager);
    return KmlLayerManager;
}());
export { KmlLayerManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21sLWxheWVyLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbWFuYWdlcnMva21sLWxheWVyLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFHMUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sOEJBQThCLENBQUM7OztBQUtsRTs7R0FFRztBQUlIO0lBSUUseUJBQW9CLFFBQThCLEVBQVUsS0FBYTtRQUFyRCxhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVE7UUFIakUsWUFBTyxHQUNYLElBQUksR0FBRyxFQUFrQyxDQUFDO0lBRThCLENBQUM7SUFFN0U7O09BRUc7SUFDSCxxQ0FBVyxHQUFYLFVBQVksS0FBa0I7UUFDNUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ2xELE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBa0I7Z0JBQy9DLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDMUIsR0FBRyxFQUFFLENBQUM7Z0JBQ04sZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtnQkFDeEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO2dCQUNwQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO2dCQUM5QyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7Z0JBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2FBQ3JCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsS0FBa0IsRUFBRSxPQUF3QjtRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxLQUFrQjtRQUFqQyxpQkFLQztRQUpDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDNUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNmLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0NBQXFCLEdBQXJCLFVBQXlCLFNBQWlCLEVBQUUsS0FBa0I7UUFBOUQsaUJBTUM7UUFMQyxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFxQjtZQUM3QyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFXO2dCQUN2QyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxVQUFDLENBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQztZQUM3RSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBeEM2QixvQkFBb0I7Z0JBQWlCLE1BQU07OztJQUo5RCxlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBNkMzQjswQkE1REQ7Q0E0REMsQUE3Q0QsSUE2Q0M7U0E3Q1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge0FnbUttbExheWVyfSBmcm9tICcuLy4uLy4uL2RpcmVjdGl2ZXMva21sLWxheWVyJztcbmltcG9ydCB7R29vZ2xlTWFwc0FQSVdyYXBwZXJ9IGZyb20gJy4vLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuaW1wb3J0IHtLbWxMYXllciwgS21sTGF5ZXJPcHRpb25zfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzLXR5cGVzJztcblxuZGVjbGFyZSB2YXIgZ29vZ2xlOiBhbnk7XG5cbi8qKlxuICogTWFuYWdlcyBhbGwgS01MIExheWVycyBmb3IgYSBHb29nbGUgTWFwIGluc3RhbmNlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBLbWxMYXllck1hbmFnZXIge1xuICBwcml2YXRlIF9sYXllcnM6IE1hcDxBZ21LbWxMYXllciwgUHJvbWlzZTxLbWxMYXllcj4+ID1cbiAgICAgIG5ldyBNYXA8QWdtS21sTGF5ZXIsIFByb21pc2U8S21sTGF5ZXI+PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBwcml2YXRlIF96b25lOiBOZ1pvbmUpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgS01MIExheWVyIHRvIHRoZSBtYXAuXG4gICAqL1xuICBhZGRLbWxMYXllcihsYXllcjogQWdtS21sTGF5ZXIpIHtcbiAgICBjb25zdCBuZXdMYXllciA9IHRoaXMuX3dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbihtID0+IHtcbiAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuS21sTGF5ZXIoPEttbExheWVyT3B0aW9ucz57XG4gICAgICAgIGNsaWNrYWJsZTogbGF5ZXIuY2xpY2thYmxlLFxuICAgICAgICBtYXA6IG0sXG4gICAgICAgIHByZXNlcnZlVmlld3BvcnQ6IGxheWVyLnByZXNlcnZlVmlld3BvcnQsXG4gICAgICAgIHNjcmVlbk92ZXJsYXlzOiBsYXllci5zY3JlZW5PdmVybGF5cyxcbiAgICAgICAgc3VwcHJlc3NJbmZvV2luZG93czogbGF5ZXIuc3VwcHJlc3NJbmZvV2luZG93cyxcbiAgICAgICAgdXJsOiBsYXllci51cmwsXG4gICAgICAgIHpJbmRleDogbGF5ZXIuekluZGV4XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9sYXllcnMuc2V0KGxheWVyLCBuZXdMYXllcik7XG4gIH1cblxuICBzZXRPcHRpb25zKGxheWVyOiBBZ21LbWxMYXllciwgb3B0aW9uczogS21sTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5fbGF5ZXJzLmdldChsYXllcikudGhlbihsID0+IGwuc2V0T3B0aW9ucyhvcHRpb25zKSk7XG4gIH1cblxuICBkZWxldGVLbWxMYXllcihsYXllcjogQWdtS21sTGF5ZXIpIHtcbiAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGwgPT4ge1xuICAgICAgbC5zZXRNYXAobnVsbCk7XG4gICAgICB0aGlzLl9sYXllcnMuZGVsZXRlKGxheWVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgR29vZ2xlIE1hcHMgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBLbWxMYXllciBhcyBhbiBPYnNlcnZhYmxlXG4gICAqL1xuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIGxheWVyOiBBZ21LbWxMYXllcik6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB7XG4gICAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKChtOiBLbWxMYXllcikgPT4ge1xuICAgICAgICBtLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgKGU6IFQpID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoZSkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=