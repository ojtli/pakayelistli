import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
var MarkerManager = /** @class */ (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.updateAnimation = function (marker) {
        return this._markers.get(marker).then(function (m) {
            if (typeof marker.animation === 'string') {
                m.setAnimation(google.maps.Animation[marker.animation]);
            }
            else {
                m.setAnimation(marker.animation);
            }
        });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
            animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager.ctorParameters = function () { return [
        { type: GoogleMapsAPIWrapper },
        { type: NgZone }
    ]; };
    MarkerManager.ɵprov = i0.ɵɵdefineInjectable({ factory: function MarkerManager_Factory() { return new MarkerManager(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); }, token: MarkerManager, providedIn: "root" });
    MarkerManager = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], MarkerManager);
    return MarkerManager;
}());
export { MarkerManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbWFuYWdlcnMvbWFya2VyLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFJMUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sOEJBQThCLENBQUM7OztBQVFsRTtJQUlFLHVCQUFzQixZQUFrQyxFQUFZLEtBQWE7UUFBM0QsaUJBQVksR0FBWixZQUFZLENBQXNCO1FBQVksVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUh2RSxhQUFRLEdBQ2QsSUFBSSxHQUFHLEVBQThCLENBQUM7SUFFMEMsQ0FBQztJQUVyRixvQ0FBWSxHQUFaLFVBQWEsTUFBaUI7UUFBOUIsaUJBWUM7UUFYQyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDYix5QkFBeUI7WUFDekIsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7UUFDRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFTO1lBQ3RCLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw0Q0FBb0IsR0FBcEIsVUFBcUIsTUFBaUI7UUFDcEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdB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Q0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDZDQUFxQixHQUFyQixVQUF5QixTQUFpQixFQUFFLE1BQWlCO1FBQTdELGlCQU1DO1FBTEMsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBcUI7WUFDN0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUztnQkFDdkMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBQyxDQUFJLElBQUssT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7WUFDN0UsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTFGbUMsb0JBQW9CO2dCQUFtQixNQUFNOzs7SUFKdEUsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csYUFBYSxDQStGekI7d0JBNUdEO0NBNEdDLEFBL0ZELElBK0ZDO1NBL0ZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtBZ21NYXJrZXJ9IGZyb20gJy4vLi4vLi4vZGlyZWN0aXZlcy9tYXJrZXInO1xuXG5pbXBvcnQge0dvb2dsZU1hcHNBUElXcmFwcGVyfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7TWFya2VyfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzLXR5cGVzJztcblxuZGVjbGFyZSB2YXIgZ29vZ2xlOiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hcmtlck1hbmFnZXIge1xuICBwcm90ZWN0ZWQgX21hcmtlcnM6IE1hcDxBZ21NYXJrZXIsIFByb21pc2U8TWFya2VyPj4gPVxuICAgICAgbmV3IE1hcDxBZ21NYXJrZXIsIFByb21pc2U8TWFya2VyPj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX21hcHNXcmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgcHJvdGVjdGVkIF96b25lOiBOZ1pvbmUpIHt9XG5cbiAgZGVsZXRlTWFya2VyKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbSA9IHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcik7XG4gICAgaWYgKG0gPT0gbnVsbCkge1xuICAgICAgLy8gbWFya2VyIGFscmVhZHkgZGVsZXRlZFxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbS50aGVuKChtOiBNYXJrZXIpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIG0uc2V0TWFwKG51bGwpO1xuICAgICAgICB0aGlzLl9tYXJrZXJzLmRlbGV0ZShtYXJrZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVNYXJrZXJQb3NpdGlvbihtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oXG4gICAgICAgIChtOiBNYXJrZXIpID0+IG0uc2V0UG9zaXRpb24oe2xhdDogbWFya2VyLmxhdGl0dWRlLCBsbmc6IG1hcmtlci5sb25naXR1ZGV9KSk7XG4gIH1cblxuICB1cGRhdGVUaXRsZShtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oKG06IE1hcmtlcikgPT4gbS5zZXRUaXRsZShtYXJrZXIudGl0bGUpKTtcbiAgfVxuXG4gIHVwZGF0ZUxhYmVsKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbigobTogTWFya2VyKSA9PiB7IG0uc2V0TGFiZWwobWFya2VyLmxhYmVsKTsgfSk7XG4gIH1cblxuICB1cGRhdGVEcmFnZ2FibGUobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKChtOiBNYXJrZXIpID0+IG0uc2V0RHJhZ2dhYmxlKG1hcmtlci5kcmFnZ2FibGUpKTtcbiAgfVxuXG4gIHVwZGF0ZUljb24obWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKChtOiBNYXJrZXIpID0+IG0uc2V0SWNvbihtYXJrZXIuaWNvblVybCkpO1xuICB9XG5cbiAgdXBkYXRlT3BhY2l0eShtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oKG06IE1hcmtlcikgPT4gbS5zZXRPcGFjaXR5KG1hcmtlci5vcGFjaXR5KSk7XG4gIH1cblxuICB1cGRhdGVWaXNpYmxlKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbigobTogTWFya2VyKSA9PiBtLnNldFZpc2libGUobWFya2VyLnZpc2libGUpKTtcbiAgfVxuXG4gIHVwZGF0ZVpJbmRleChtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oKG06IE1hcmtlcikgPT4gbS5zZXRaSW5kZXgobWFya2VyLnpJbmRleCkpO1xuICB9XG5cbiAgdXBkYXRlQ2xpY2thYmxlKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbigobTogTWFya2VyKSA9PiBtLnNldENsaWNrYWJsZShtYXJrZXIuY2xpY2thYmxlKSk7XG4gIH1cblxuICB1cGRhdGVBbmltYXRpb24obWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKChtOiBNYXJrZXIpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbWFya2VyLmFuaW1hdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbS5zZXRBbmltYXRpb24oZ29vZ2xlLm1hcHMuQW5pbWF0aW9uW21hcmtlci5hbmltYXRpb25dKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG0uc2V0QW5pbWF0aW9uKG1hcmtlci5hbmltYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlcjogQWdtTWFya2VyKSB7XG4gICAgY29uc3QgbWFya2VyUHJvbWlzZSA9IHRoaXMuX21hcHNXcmFwcGVyLmNyZWF0ZU1hcmtlcih7XG4gICAgICBwb3NpdGlvbjoge2xhdDogbWFya2VyLmxhdGl0dWRlLCBsbmc6IG1hcmtlci5sb25naXR1ZGV9LFxuICAgICAgbGFiZWw6IG1hcmtlci5sYWJlbCxcbiAgICAgIGRyYWdnYWJsZTogbWFya2VyLmRyYWdnYWJsZSxcbiAgICAgIGljb246IG1hcmtlci5pY29uVXJsLFxuICAgICAgb3BhY2l0eTogbWFya2VyLm9wYWNpdHksXG4gICAgICB2aXNpYmxlOiBtYXJrZXIudmlzaWJsZSxcbiAgICAgIHpJbmRleDogbWFya2VyLnpJbmRleCxcbiAgICAgIHRpdGxlOiBtYXJrZXIudGl0bGUsXG4gICAgICBjbGlja2FibGU6IG1hcmtlci5jbGlja2FibGUsXG4gICAgICBhbmltYXRpb246ICh0eXBlb2YgbWFya2VyLmFuaW1hdGlvbiA9PT0gJ3N0cmluZycpID8gZ29vZ2xlLm1hcHMuQW5pbWF0aW9uW21hcmtlci5hbmltYXRpb25dIDogbWFya2VyLmFuaW1hdGlvblxuICAgIH0pO1xuXG4gICAgdGhpcy5fbWFya2Vycy5zZXQobWFya2VyLCBtYXJrZXJQcm9taXNlKTtcbiAgfVxuXG4gIGdldE5hdGl2ZU1hcmtlcihtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8TWFya2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcik7XG4gIH1cblxuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIG1hcmtlcjogQWdtTWFya2VyKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbigobTogTWFya2VyKSA9PiB7XG4gICAgICAgIG0uYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAoZTogVCkgPT4gdGhpcy5fem9uZS5ydW4oKCkgPT4gb2JzZXJ2ZXIubmV4dChlKSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==