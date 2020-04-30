import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
var CircleManager = /** @class */ (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    CircleManager.prototype.removeCircle = function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return Observable.create(function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager.ctorParameters = function () { return [
        { type: GoogleMapsAPIWrapper },
        { type: NgZone }
    ]; };
    CircleManager.ɵprov = i0.ɵɵdefineInjectable({ factory: function CircleManager_Factory() { return new CircleManager(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); }, token: CircleManager, providedIn: "root" });
    CircleManager = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CircleManager);
    return CircleManager;
}());
export { CircleManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbWFuYWdlcnMvY2lyY2xlLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFHMUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7OztBQU1oRTtJQUlFLHVCQUFvQixXQUFpQyxFQUFVLEtBQWE7UUFBeEQsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUhwRSxhQUFRLEdBQ1osSUFBSSxHQUFHLEVBQXVDLENBQUM7SUFFNEIsQ0FBQztJQUVoRixpQ0FBUyxHQUFULFVBQVUsTUFBaUI7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1lBQ3RELE1BQU0sRUFBRSxFQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFDO1lBQ3JELFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7WUFDL0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztZQUMvQixhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWE7WUFDbkMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxjQUFjO1lBQ3JDLFlBQVksRUFB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c0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtBZ21DaXJjbGV9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2lyY2xlJztcbmltcG9ydCB7R29vZ2xlTWFwc0FQSVdyYXBwZXJ9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCAqIGFzIG1hcFR5cGVzIGZyb20gJy4uL2dvb2dsZS1tYXBzLXR5cGVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2lyY2xlTWFuYWdlciB7XG4gIHByaXZhdGUgX2NpcmNsZXM6IE1hcDxBZ21DaXJjbGUsIFByb21pc2U8bWFwVHlwZXMuQ2lyY2xlPj4gPVxuICAgICAgbmV3IE1hcDxBZ21DaXJjbGUsIFByb21pc2U8bWFwVHlwZXMuQ2lyY2xlPj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hcGlXcmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7fVxuXG4gIGFkZENpcmNsZShjaXJjbGU6IEFnbUNpcmNsZSkge1xuICAgIHRoaXMuX2NpcmNsZXMuc2V0KGNpcmNsZSwgdGhpcy5fYXBpV3JhcHBlci5jcmVhdGVDaXJjbGUoe1xuICAgICAgY2VudGVyOiB7bGF0OiBjaXJjbGUubGF0aXR1ZGUsIGxuZzogY2lyY2xlLmxvbmdpdHVkZX0sXG4gICAgICBjbGlja2FibGU6IGNpcmNsZS5jbGlja2FibGUsXG4gICAgICBkcmFnZ2FibGU6IGNpcmNsZS5kcmFnZ2FibGUsXG4gICAgICBlZGl0YWJsZTogY2lyY2xlLmVkaXRhYmxlLFxuICAgICAgZmlsbENvbG9yOiBjaXJjbGUuZmlsbENvbG9yLFxuICAgICAgZmlsbE9wYWNpdHk6IGNpcmNsZS5maWxsT3BhY2l0eSxcbiAgICAgIHJhZGl1czogY2lyY2xlLnJhZGl1cyxcbiAgICAgIHN0cm9rZUNvbG9yOiBjaXJjbGUuc3Ryb2tlQ29sb3IsXG4gICAgICBzdHJva2VPcGFjaXR5OiBjaXJjbGUuc3Ryb2tlT3BhY2l0eSxcbiAgICAgIHN0cm9rZVBvc2l0aW9uOiBjaXJjbGUuc3Ryb2tlUG9zaXRpb24sXG4gICAgICBzdHJva2VXZWlnaHQ6IGNpcmNsZS5zdHJva2VXZWlnaHQsXG4gICAgICB2aXNpYmxlOiBjaXJjbGUudmlzaWJsZSxcbiAgICAgIHpJbmRleDogY2lyY2xlLnpJbmRleFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBjaXJjbGUgZnJvbSB0aGUgbWFwLlxuICAgKi9cbiAgcmVtb3ZlQ2lyY2xlKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbigoYykgPT4ge1xuICAgICAgYy5zZXRNYXAobnVsbCk7XG4gICAgICB0aGlzLl9jaXJjbGVzLmRlbGV0ZShjaXJjbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhjaXJjbGU6IEFnbUNpcmNsZSwgb3B0aW9uczogbWFwVHlwZXMuQ2lyY2xlT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oKGMpID0+IGMuc2V0T3B0aW9ucyhvcHRpb25zKSk7XG4gIH1cblxuICBnZXRCb3VuZHMoY2lyY2xlOiBBZ21DaXJjbGUpOiBQcm9taXNlPG1hcFR5cGVzLkxhdExuZ0JvdW5kcz4ge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oKGMpID0+IGMuZ2V0Qm91bmRzKCkpO1xuICB9XG5cbiAgZ2V0Q2VudGVyKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTxtYXBUeXBlcy5MYXRMbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKChjKSA9PiBjLmdldENlbnRlcigpKTtcbiAgfVxuXG4gIGdldFJhZGl1cyhjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbigoYykgPT4gYy5nZXRSYWRpdXMoKSk7XG4gIH1cblxuICBzZXRDZW50ZXIoY2lyY2xlOiBBZ21DaXJjbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKFxuICAgICAgICAoYykgPT4geyByZXR1cm4gYy5zZXRDZW50ZXIoe2xhdDogY2lyY2xlLmxhdGl0dWRlLCBsbmc6IGNpcmNsZS5sb25naXR1ZGV9KTsgfSk7XG4gIH1cblxuICBzZXRFZGl0YWJsZShjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oKGMpID0+IHsgcmV0dXJuIGMuc2V0RWRpdGFibGUoY2lyY2xlLmVkaXRhYmxlKTsgfSk7XG4gIH1cblxuICBzZXREcmFnZ2FibGUoY2lyY2xlOiBBZ21DaXJjbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKChjKSA9PiB7IHJldHVybiBjLnNldERyYWdnYWJsZShjaXJjbGUuZHJhZ2dhYmxlKTsgfSk7XG4gIH1cblxuICBzZXRWaXNpYmxlKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbigoYykgPT4geyByZXR1cm4gYy5zZXRWaXNpYmxlKGNpcmNsZS52aXNpYmxlKTsgfSk7XG4gIH1cblxuICBzZXRSYWRpdXMoY2lyY2xlOiBBZ21DaXJjbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKChjKSA9PiB7IHJldHVybiBjLnNldFJhZGl1cyhjaXJjbGUucmFkaXVzKTsgfSk7XG4gIH1cblxuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIGNpcmNsZTogQWdtQ2lyY2xlKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIGxldCBsaXN0ZW5lcjogbWFwVHlwZXMuTWFwc0V2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAgICAgdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKChjKSA9PiB7XG4gICAgICAgIGxpc3RlbmVyID0gYy5hZGRMaXN0ZW5lcihldmVudE5hbWUsIChlOiBUKSA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiBvYnNlcnZlci5uZXh0KGUpKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgbGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==