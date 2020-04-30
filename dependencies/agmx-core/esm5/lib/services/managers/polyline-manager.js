import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
var PolylineManager = /** @class */ (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager_1 = PolylineManager;
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager_1._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager_1._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.prototype.createEventObservableOnPath = function (eventName, line) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._polylines.get(line).then(function (l) {
                _this._mapsWrapper.getNativeMap().then(function (map) {
                    google.maps.event.addListener(l.getPath(), 'set_at', function (e) {
                        return _this._zone.run(function () { return observer.next({ index: e, value: l.getPath().getAt(e) }); });
                    });
                });
            });
        });
    };
    var PolylineManager_1;
    PolylineManager.ctorParameters = function () { return [
        { type: GoogleMapsAPIWrapper },
        { type: NgZone }
    ]; };
    PolylineManager.ɵprov = i0.ɵɵdefineInjectable({ factory: function PolylineManager_Factory() { return new PolylineManager(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); }, token: PolylineManager, providedIn: "root" });
    PolylineManager = PolylineManager_1 = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], PolylineManager);
    return PolylineManager;
}());
export { PolylineManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnbXgtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5bGluZS1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBSTFDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDOzs7QUFPaEU7SUFJRSx5QkFBb0IsWUFBa0MsRUFBVSxLQUFhO1FBQXpELGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVE7UUFIckUsZUFBVSxHQUNkLElBQUksR0FBRyxFQUFrQyxDQUFDO0lBRWtDLENBQUM7d0JBSnRFLGVBQWU7SUFNWCw4QkFBYyxHQUE3QixVQUE4QixJQUFpQjtRQUM3QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBdUI7WUFDekQsT0FBc0IsRUFBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLElBQWlCO1FBQzNCLElBQU0sSUFBSSxHQUFHLGlCQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO1lBQ3ZELFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZC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LENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFXO2dCQUN6QyxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7b0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQUMsQ0FBUzt3QkFDM0QsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7b0JBQ3hGLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztnQkF2RWlDLG9CQUFvQjtnQkFBaUIsTUFBTTs7O0lBSmxFLGVBQWU7UUFIM0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGVBQWUsQ0E0RTNCOzBCQXhGRDtDQXdGQyxBQTVFRCxJQTRFQztTQTVFWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7QWdtUG9seWxpbmV9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcG9seWxpbmUnO1xuaW1wb3J0IHtBZ21Qb2x5bGluZVBvaW50fSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3BvbHlsaW5lLXBvaW50JztcbmltcG9ydCB7R29vZ2xlTWFwc0FQSVdyYXBwZXJ9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7TGF0TG5nTGl0ZXJhbCwgUG9seWxpbmUsIExhdExuZ30gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuZGVjbGFyZSB2YXIgZ29vZ2xlOiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBvbHlsaW5lTWFuYWdlciB7XG4gIHByaXZhdGUgX3BvbHlsaW5lczogTWFwPEFnbVBvbHlsaW5lLCBQcm9taXNlPFBvbHlsaW5lPj4gPVxuICAgICAgbmV3IE1hcDxBZ21Qb2x5bGluZSwgUHJvbWlzZTxQb2x5bGluZT4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBwcml2YXRlIF96b25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2NvbnZlcnRQb2ludHMobGluZTogQWdtUG9seWxpbmUpOiBBcnJheTxMYXRMbmdMaXRlcmFsPiB7XG4gICAgY29uc3QgcGF0aCA9IGxpbmUuX2dldFBvaW50cygpLm1hcCgocG9pbnQ6IEFnbVBvbHlsaW5lUG9pbnQpID0+IHtcbiAgICAgIHJldHVybiA8TGF0TG5nTGl0ZXJhbD57bGF0OiBwb2ludC5sYXRpdHVkZSwgbG5nOiBwb2ludC5sb25naXR1ZGV9O1xuICAgIH0pO1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgYWRkUG9seWxpbmUobGluZTogQWdtUG9seWxpbmUpIHtcbiAgICBjb25zdCBwYXRoID0gUG9seWxpbmVNYW5hZ2VyLl9jb252ZXJ0UG9pbnRzKGxpbmUpO1xuICAgIGNvbnN0IHBvbHlsaW5lUHJvbWlzZSA9IHRoaXMuX21hcHNXcmFwcGVyLmNyZWF0ZVBvbHlsaW5lKHtcbiAgICAgIGNsaWNrYWJsZTogbGluZS5jbGlja2FibGUsXG4gICAgICBkcmFnZ2FibGU6IGxpbmUuZHJhZ2dhYmxlLFxuICAgICAgZWRpdGFibGU6IGxpbmUuZWRpdGFibGUsXG4gICAgICBnZW9kZXNpYzogbGluZS5nZW9kZXNpYyxcbiAgICAgIHN0cm9rZUNvbG9yOiBsaW5lLnN0cm9rZUNvbG9yLFxuICAgICAgc3Ryb2tlT3BhY2l0eTogbGluZS5zdHJva2VPcGFjaXR5LFxuICAgICAgc3Ryb2tlV2VpZ2h0OiBsaW5lLnN0cm9rZVdlaWdodCxcbiAgICAgIHZpc2libGU6IGxpbmUudmlzaWJsZSxcbiAgICAgIHpJbmRleDogbGluZS56SW5kZXgsXG4gICAgICBwYXRoOiBwYXRoXG4gICAgfSk7XG4gICAgdGhpcy5fcG9seWxpbmVzLnNldChsaW5lLCBwb2x5bGluZVByb21pc2UpO1xuICB9XG5cbiAgdXBkYXRlUG9seWxpbmVQb2ludHMobGluZTogQWdtUG9seWxpbmUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXRoID0gUG9seWxpbmVNYW5hZ2VyLl9jb252ZXJ0UG9pbnRzKGxpbmUpO1xuICAgIGNvbnN0IG0gPSB0aGlzLl9wb2x5bGluZXMuZ2V0KGxpbmUpO1xuICAgIGlmIChtID09IG51bGwpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIG0udGhlbigobDogUG9seWxpbmUpID0+IHsgcmV0dXJuIHRoaXMuX3pvbmUucnVuKCgpID0+IHsgbC5zZXRQYXRoKHBhdGgpOyB9KTsgfSk7XG4gIH1cblxuICBzZXRQb2x5bGluZU9wdGlvbnMobGluZTogQWdtUG9seWxpbmUsIG9wdGlvbnM6IHtbcHJvcE5hbWU6IHN0cmluZ106IGFueX0pOlxuICAgICAgUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbHlsaW5lcy5nZXQobGluZSkudGhlbigobDogUG9seWxpbmUpID0+IHsgbC5zZXRPcHRpb25zKG9wdGlvbnMpOyB9KTtcbiAgfVxuXG4gIGRlbGV0ZVBvbHlsaW5lKGxpbmU6IEFnbVBvbHlsaW5lKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbSA9IHRoaXMuX3BvbHlsaW5lcy5nZXQobGluZSk7XG4gICAgaWYgKG0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbS50aGVuKChsOiBQb2x5bGluZSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgbC5zZXRNYXAobnVsbCk7XG4gICAgICAgIHRoaXMuX3BvbHlsaW5lcy5kZWxldGUobGluZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgbGluZTogQWdtUG9seWxpbmUpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4ge1xuICAgICAgdGhpcy5fcG9seWxpbmVzLmdldChsaW5lKS50aGVuKChsOiBQb2x5bGluZSkgPT4ge1xuICAgICAgICBsLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgKGU6IFQpID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoZSkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlT25QYXRoPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBsaW5lOiBBZ21Qb2x5bGluZSk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIHRoaXMuX3BvbHlsaW5lcy5nZXQobGluZSkudGhlbigobDogUG9seWxpbmUpID0+IHtcbiAgICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbihtYXAgPT4ge1xuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobC5nZXRQYXRoKCksICdzZXRfYXQnLCAoZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoe2luZGV4OiBlLCB2YWx1ZTogbC5nZXRQYXRoKCkuZ2V0QXQoZSl9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19