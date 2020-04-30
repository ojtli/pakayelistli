import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = /** @class */ (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    DataLayerManager.prototype.addDataLayer = function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    DataLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    DataLayerManager.prototype.getDataFeatures = function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    DataLayerManager.ctorParameters = function () { return [
        { type: GoogleMapsAPIWrapper },
        { type: NgZone }
    ]; };
    DataLayerManager.ɵprov = i0.ɵɵdefineInjectable({ factory: function DataLayerManager_Factory() { return new DataLayerManager(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); }, token: DataLayerManager, providedIn: "root" });
    DataLayerManager = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], DataLayerManager);
    return DataLayerManager;
}());
export { DataLayerManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1sYXllci1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdteC1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL21hbmFnZXJzL2RhdGEtbGF5ZXItbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUc5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBS3BFOztHQUVHO0FBSUg7SUFJRSwwQkFBb0IsUUFBOEIsRUFBVSxLQUFhO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQXNCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUhqRSxZQUFPLEdBQ2YsSUFBSSxHQUFHLEVBQStCLENBQUM7SUFFc0MsQ0FBQztJQUU5RTs7T0FFRztJQUNILHVDQUFZLEdBQVosVUFBYSxLQUFtQjtRQUFoQyxpQkFXQztRQVZDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFjO1lBQzFELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztTQUNuQixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNMLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDakIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFyQixDQUFxQixDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCww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LENBQUMsQ0FBQyxDQUFDO2lCQUNYO2FBQ0Y7aUJBQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQ3RDLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxNQUFNLENBQUMsa0VBQWtFLENBQUMsQ0FBQzthQUM1RTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0JBaEY2QixvQkFBb0I7Z0JBQWlCLE1BQU07OztJQUo5RCxnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQXFGNUI7MkJBcEdEO0NBb0dDLEFBckZELElBcUZDO1NBckZZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBZ21EYXRhTGF5ZXIgfSBmcm9tICcuLy4uLy4uL2RpcmVjdGl2ZXMvZGF0YS1sYXllcic7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4vLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuaW1wb3J0IHsgRGF0YSwgRGF0YU9wdGlvbnMsIEZlYXR1cmUgfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzLXR5cGVzJztcblxuZGVjbGFyZSB2YXIgZ29vZ2xlOiBhbnk7XG5cbi8qKlxuICogTWFuYWdlcyBhbGwgRGF0YSBMYXllcnMgZm9yIGEgR29vZ2xlIE1hcCBpbnN0YW5jZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUxheWVyTWFuYWdlciB7XG4gIHByaXZhdGUgX2xheWVyczogTWFwPEFnbURhdGFMYXllciwgUHJvbWlzZTxEYXRhPj4gPVxuICBuZXcgTWFwPEFnbURhdGFMYXllciwgUHJvbWlzZTxEYXRhPj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93cmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7IH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBEYXRhIExheWVyIHRvIHRoZSBtYXAuXG4gICAqL1xuICBhZGREYXRhTGF5ZXIobGF5ZXI6IEFnbURhdGFMYXllcikge1xuICAgIGNvbnN0IG5ld0xheWVyID0gdGhpcy5fd3JhcHBlci5jcmVhdGVEYXRhTGF5ZXIoPERhdGFPcHRpb25zPntcbiAgICAgIHN0eWxlOiBsYXllci5zdHlsZVxuICAgIH0pXG4gICAgLnRoZW4oZCA9PiB7XG4gICAgICBpZiAobGF5ZXIuZ2VvSnNvbikge1xuICAgICAgICB0aGlzLmdldERhdGFGZWF0dXJlcyhkLCBsYXllci5nZW9Kc29uKS50aGVuKGZlYXR1cmVzID0+IGQuZmVhdHVyZXMgPSBmZWF0dXJlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZDtcbiAgICB9KTtcbiAgICB0aGlzLl9sYXllcnMuc2V0KGxheWVyLCBuZXdMYXllcik7XG4gIH1cblxuICBkZWxldGVEYXRhTGF5ZXIobGF5ZXI6IEFnbURhdGFMYXllcikge1xuICAgIHRoaXMuX2xheWVycy5nZXQobGF5ZXIpLnRoZW4obCA9PiB7XG4gICAgICBsLnNldE1hcChudWxsKTtcbiAgICAgIHRoaXMuX2xheWVycy5kZWxldGUobGF5ZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlR2VvSnNvbihsYXllcjogQWdtRGF0YUxheWVyLCBnZW9Kc29uOiBPYmplY3QgfCBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGwgPT4ge1xuICAgICAgbC5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlOiBGZWF0dXJlKSB7XG4gICAgICAgIGwucmVtb3ZlKGZlYXR1cmUpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IGwuZmVhdHVyZXMuaW5kZXhPZihmZWF0dXJlLCAwKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICBsLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5nZXREYXRhRmVhdHVyZXMobCwgZ2VvSnNvbikudGhlbihmZWF0dXJlcyA9PiBsLmZlYXR1cmVzID0gZmVhdHVyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0RGF0YU9wdGlvbnMobGF5ZXI6IEFnbURhdGFMYXllciwgb3B0aW9uczogRGF0YU9wdGlvbnMpXG4gIHtcbiAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGwgPT4ge1xuICAgICAgbC5zZXRDb250cm9sUG9zaXRpb24ob3B0aW9ucy5jb250cm9sUG9zaXRpb24pO1xuICAgICAgbC5zZXRDb250cm9scyhvcHRpb25zLmNvbnRyb2xzKTtcbiAgICAgIGwuc2V0RHJhd2luZ01vZGUob3B0aW9ucy5kcmF3aW5nTW9kZSk7XG4gICAgICBsLnNldFN0eWxlKG9wdGlvbnMuc3R5bGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBHb29nbGUgTWFwcyBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGdpdmVuIERhdGFMYXllciBhcyBhbiBPYnNlcnZhYmxlXG4gICAqL1xuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIGxheWVyOiBBZ21EYXRhTGF5ZXIpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4ge1xuICAgICAgdGhpcy5fbGF5ZXJzLmdldChsYXllcikudGhlbigoZDogRGF0YSkgPT4ge1xuICAgICAgICBkLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgKGU6IFQpID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoZSkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgZmVhdHVyZXMgZnJvbSBhIGdlb0pzb24gdXNpbmcgZ29vZ2xlLm1hcHMgRGF0YSBDbGFzc1xuICAgKiBAcGFyYW0gZCA6IGdvb2dsZS5tYXBzLkRhdGEgY2xhc3MgaW5zdGFuY2VcbiAgICogQHBhcmFtIGdlb0pzb24gOiB1cmwgb3IgZ2VvanNvbiBvYmplY3RcbiAgICovXG4gIGdldERhdGFGZWF0dXJlcyhkOiBEYXRhLCBnZW9Kc29uOiBPYmplY3QgfCBzdHJpbmcpOiBQcm9taXNlPEZlYXR1cmVbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxGZWF0dXJlW10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBnZW9Kc29uID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlcyA9IGQuYWRkR2VvSnNvbihnZW9Kc29uKTtcbiAgICAgICAgICAgIHJlc29sdmUoZmVhdHVyZXMpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGdlb0pzb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZC5sb2FkR2VvSnNvbihnZW9Kc29uLCBudWxsLCByZXNvbHZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoYEltcG9zc2libGUgdG8gZXh0cmFjdCBmZWF0dXJlcyBmcm9tIGdlb0pzb246IHdyb25nIGFyZ3VtZW50IHR5cGVgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==