import { __decorate } from "tslib";
import { Observable } from 'rxjs';
import { Injectable, NgZone } from '@angular/core';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { MarkerManager } from './marker-manager';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
import * as i2 from "./marker-manager";
var InfoWindowManager = /** @class */ (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude
        }); });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    InfoWindowManager.prototype.createEventObservable = function (eventName, infoWindow) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager.ctorParameters = function () { return [
        { type: GoogleMapsAPIWrapper },
        { type: NgZone },
        { type: MarkerManager }
    ]; };
    InfoWindowManager.ɵprov = i0.ɵɵdefineInjectable({ factory: function InfoWindowManager_Factory() { return new InfoWindowManager(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i2.MarkerManager)); }, token: InfoWindowManager, providedIn: "root" });
    InfoWindowManager = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], InfoWindowManager);
    return InfoWindowManager;
}());
export { InfoWindowManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby13aW5kb3ctbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnbXgtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tYW5hZ2Vycy9pbmZvLXdpbmRvdy1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSWpELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRWhFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUsvQztJQUlFLDJCQUNZLFlBQWtDLEVBQVUsS0FBYSxFQUN6RCxjQUE2QjtRQUQ3QixpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ3pELG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBTGpDLGlCQUFZLEdBQ2hCLElBQUksR0FBRyxFQUFzQyxDQUFDO0lBSU4sQ0FBQztJQUU3Qyw0Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBeUI7UUFBMUMsaUJBWUM7UUFYQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDbkIsOEJBQThCO1lBQzlCLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBYTtZQUNoQyxPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUNwQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDTCxD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QUN0RSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUE7O09BRUc7SUFDSixpREFBcUIsR0FBckIsVUFBeUIsU0FBaUIsRUFBRSxVQUF5QjtRQUFyRSxpQkFNQztRQUxDLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQXFCO1lBQzdDLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQWE7Z0JBQ25ELENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO1lBQzdFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF2RXlCLG9CQUFvQjtnQkFBaUIsTUFBTTtnQkFDekMsYUFBYTs7O0lBTjlCLGlCQUFpQjtRQUg3QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csaUJBQWlCLENBNkU3Qjs0QkF6RkQ7Q0F5RkMsQUE3RUQsSUE2RUM7U0E3RVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0FnbUluZm9XaW5kb3d9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvaW5mby13aW5kb3cnO1xuXG5pbXBvcnQge0dvb2dsZU1hcHNBUElXcmFwcGVyfSBmcm9tICcuLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQge0luZm9XaW5kb3csIEluZm9XaW5kb3dPcHRpb25zfSBmcm9tICcuLi9nb29nbGUtbWFwcy10eXBlcyc7XG5pbXBvcnQge01hcmtlck1hbmFnZXJ9IGZyb20gJy4vbWFya2VyLW1hbmFnZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbmZvV2luZG93TWFuYWdlciB7XG4gIHByaXZhdGUgX2luZm9XaW5kb3dzOiBNYXA8QWdtSW5mb1dpbmRvdywgUHJvbWlzZTxJbmZvV2luZG93Pj4gPVxuICAgICAgbmV3IE1hcDxBZ21JbmZvV2luZG93LCBQcm9taXNlPEluZm9XaW5kb3c+PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfbWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBwcml2YXRlIF96b25lOiBOZ1pvbmUsXG4gICAgICBwcml2YXRlIF9tYXJrZXJNYW5hZ2VyOiBNYXJrZXJNYW5hZ2VyKSB7fVxuXG4gIGRlbGV0ZUluZm9XaW5kb3coaW5mb1dpbmRvdzogQWdtSW5mb1dpbmRvdyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGlXaW5kb3cgPSB0aGlzLl9pbmZvV2luZG93cy5nZXQoaW5mb1dpbmRvdyk7XG4gICAgaWYgKGlXaW5kb3cgPT0gbnVsbCkge1xuICAgICAgLy8gaW5mbyB3aW5kb3cgYWxyZWFkeSBkZWxldGVkXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIHJldHVybiBpV2luZG93LnRoZW4oKGk6IEluZm9XaW5kb3cpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIGkuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5faW5mb1dpbmRvd3MuZGVsZXRlKGluZm9XaW5kb3cpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRQb3NpdGlvbihpbmZvV2luZG93OiBBZ21JbmZvV2luZG93KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3dzLmdldChpbmZvV2luZG93KS50aGVuKChpOiBJbmZvV2luZG93KSA9PiBpLnNldFBvc2l0aW9uKHtcbiAgICAgIGxhdDogaW5mb1dpbmRvdy5sYXRpdHVkZSxcbiAgICAgIGxuZzogaW5mb1dpbmRvdy5sb25naXR1ZGVcbiAgICB9KSk7XG4gIH1cblxuICBzZXRaSW5kZXgoaW5mb1dpbmRvdzogQWdtSW5mb1dpbmRvdyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9pbmZvV2luZG93cy5nZXQoaW5mb1dpbmRvdylcbiAgICAgICAgLnRoZW4oKGk6IEluZm9XaW5kb3cpID0+IGkuc2V0WkluZGV4KGluZm9XaW5kb3cuekluZGV4KSk7XG4gIH1cblxuICBvcGVuKGluZm9XaW5kb3c6IEFnbUluZm9XaW5kb3cpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5faW5mb1dpbmRvd3MuZ2V0KGluZm9XaW5kb3cpLnRoZW4oKHcpID0+IHtcbiAgICAgIGlmIChpbmZvV2luZG93Lmhvc3RNYXJrZXIgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyTWFuYWdlci5nZXROYXRpdmVNYXJrZXIoaW5mb1dpbmRvdy5ob3N0TWFya2VyKS50aGVuKChtYXJrZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwc1dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbigobWFwKSA9PiB3Lm9wZW4obWFwLCBtYXJrZXIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fbWFwc1dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbigobWFwKSA9PiB3Lm9wZW4obWFwKSk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZShpbmZvV2luZG93OiBBZ21JbmZvV2luZG93KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3dzLmdldChpbmZvV2luZG93KS50aGVuKCh3KSA9PiB3LmNsb3NlKCkpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhpbmZvV2luZG93OiBBZ21JbmZvV2luZG93LCBvcHRpb25zOiBJbmZvV2luZG93T3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9pbmZvV2luZG93cy5nZXQoaW5mb1dpbmRvdykudGhlbigoaTogSW5mb1dpbmRvdykgPT4gaS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcbiAgfVxuXG4gIGFkZEluZm9XaW5kb3coaW5mb1dpbmRvdzogQWdtSW5mb1dpbmRvdykge1xuICAgIGNvbnN0IG9wdGlvbnM6IEluZm9XaW5kb3dPcHRpb25zID0ge1xuICAgICAgY29udGVudDogaW5mb1dpbmRvdy5jb250ZW50LFxuICAgICAgbWF4V2lkdGg6IGluZm9XaW5kb3cubWF4V2lkdGgsXG4gICAgICB6SW5kZXg6IGluZm9XaW5kb3cuekluZGV4LFxuICAgICAgZGlzYWJsZUF1dG9QYW46IGluZm9XaW5kb3cuZGlzYWJsZUF1dG9QYW5cbiAgICB9O1xuICAgIGlmICh0eXBlb2YgaW5mb1dpbmRvdy5sYXRpdHVkZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGluZm9XaW5kb3cubG9uZ2l0dWRlID09PSAnbnVtYmVyJykge1xuICAgICAgb3B0aW9ucy5wb3NpdGlvbiA9IHtsYXQ6IGluZm9XaW5kb3cubGF0aXR1ZGUsIGxuZzogaW5mb1dpbmRvdy5sb25naXR1ZGV9O1xuICAgIH1cbiAgICBjb25zdCBpbmZvV2luZG93UHJvbWlzZSA9IHRoaXMuX21hcHNXcmFwcGVyLmNyZWF0ZUluZm9XaW5kb3cob3B0aW9ucyk7XG4gICAgdGhpcy5faW5mb1dpbmRvd3Muc2V0KGluZm9XaW5kb3csIGluZm9XaW5kb3dQcm9taXNlKTtcbiAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZXMgYSBHb29nbGUgTWFwcyBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGdpdmVuIEluZm9XaW5kb3cgYXMgYW4gT2JzZXJ2YWJsZVxuICAgICovXG4gIGNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgaW5mb1dpbmRvdzogQWdtSW5mb1dpbmRvdyk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB7XG4gICAgICB0aGlzLl9pbmZvV2luZG93cy5nZXQoaW5mb1dpbmRvdykudGhlbigoaTogSW5mb1dpbmRvdykgPT4ge1xuICAgICAgICBpLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgKGU6IFQpID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoZSkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=