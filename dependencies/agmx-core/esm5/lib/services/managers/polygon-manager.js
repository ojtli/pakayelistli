import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
var PolygonManager = /** @class */ (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.ctorParameters = function () { return [
        { type: GoogleMapsAPIWrapper },
        { type: NgZone }
    ]; };
    PolygonManager.ɵprov = i0.ɵɵdefineInjectable({ factory: function PolygonManager_Factory() { return new PolygonManager(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); }, token: PolygonManager, providedIn: "root" });
    PolygonManager = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], PolygonManager);
    return PolygonManager;
}());
export { PolygonManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdteC1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL21hbmFnZXJzL3BvbHlnb24tbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUcxQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBTWhFO0lBSUUsd0JBQW9CLFlBQWtDLEVBQVUsS0FBYTtRQUF6RCxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBSHJFLGNBQVMsR0FDYixJQUFJLEdBQUcsRUFBZ0MsQ0FBQztJQUVvQyxDQUFDO0lBRWpGLG1DQUFVLEdBQVYsVUFBVyxJQUFnQjtRQUN6QixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztZQUNyRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFtQjtRQUFqQyxpQkFNQztRQUxDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNiLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFwRCxDQUFvRCxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELDBDQUFpQixHQUFqQixVQUFrQixJQUFnQixFQUFFLE9BQWtDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBVSxJQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEtBQWlCO1FBQS9CLGlCQVdDO1FBVkMsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2IsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7UUFDRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFVO1lBQ3ZCLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4Q0FBcUIsR0FBckIsVUFBeUIsU0FBaUIsRUFBRSxJQUFnQjtRQUE1RCxpQkFNQztRQUxDLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQXFCO1lBQzdDLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVU7Z0JBQ3ZDLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO1lBQzdFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuRGlDLG9CQUFvQjtnQkFBaUIsTUFBTTs7O0lBSmxFLGNBQWM7UUFIMUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGNBQWMsQ0F3RDFCO3lCQWxFRDtDQWtFQyxBQXhERCxJQXdEQztTQXhEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7QWdtUG9seWdvbn0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9wb2x5Z29uJztcbmltcG9ydCB7R29vZ2xlTWFwc0FQSVdyYXBwZXJ9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7UG9seWdvbn0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQb2x5Z29uTWFuYWdlciB7XG4gIHByaXZhdGUgX3BvbHlnb25zOiBNYXA8QWdtUG9seWdvbiwgUHJvbWlzZTxQb2x5Z29uPj4gPVxuICAgICAgbmV3IE1hcDxBZ21Qb2x5Z29uLCBQcm9taXNlPFBvbHlnb24+PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hcHNXcmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7fVxuXG4gIGFkZFBvbHlnb24ocGF0aDogQWdtUG9seWdvbikge1xuICAgIGNvbnN0IHBvbHlnb25Qcm9taXNlID0gdGhpcy5fbWFwc1dyYXBwZXIuY3JlYXRlUG9seWdvbih7XG4gICAgICBjbGlja2FibGU6IHBhdGguY2xpY2thYmxlLFxuICAgICAgZHJhZ2dhYmxlOiBwYXRoLmRyYWdnYWJsZSxcbiAgICAgIGVkaXRhYmxlOiBwYXRoLmVkaXRhYmxlLFxuICAgICAgZmlsbENvbG9yOiBwYXRoLmZpbGxDb2xvcixcbiAgICAgIGZpbGxPcGFjaXR5OiBwYXRoLmZpbGxPcGFjaXR5LFxuICAgICAgZ2VvZGVzaWM6IHBhdGguZ2VvZGVzaWMsXG4gICAgICBwYXRoczogcGF0aC5wYXRocyxcbiAgICAgIHN0cm9rZUNvbG9yOiBwYXRoLnN0cm9rZUNvbG9yLFxuICAgICAgc3Ryb2tlT3BhY2l0eTogcGF0aC5zdHJva2VPcGFjaXR5LFxuICAgICAgc3Ryb2tlV2VpZ2h0OiBwYXRoLnN0cm9rZVdlaWdodCxcbiAgICAgIHZpc2libGU6IHBhdGgudmlzaWJsZSxcbiAgICAgIHpJbmRleDogcGF0aC56SW5kZXgsXG4gICAgfSk7XG4gICAgdGhpcy5fcG9seWdvbnMuc2V0KHBhdGgsIHBvbHlnb25Qcm9taXNlKTtcbiAgfVxuXG4gIHVwZGF0ZVBvbHlnb24ocG9seWdvbjogQWdtUG9seWdvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IG0gPSB0aGlzLl9wb2x5Z29ucy5nZXQocG9seWdvbik7XG4gICAgaWYgKG0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbS50aGVuKChsOiBQb2x5Z29uKSA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiB7IGwuc2V0UGF0aHMocG9seWdvbi5wYXRocyk7IH0pKTtcbiAgfVxuXG4gIHNldFBvbHlnb25PcHRpb25zKHBhdGg6IEFnbVBvbHlnb24sIG9wdGlvbnM6IHtbcHJvcE5hbWU6IHN0cmluZ106IGFueX0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fcG9seWdvbnMuZ2V0KHBhdGgpLnRoZW4oKGw6IFBvbHlnb24pID0+IHsgbC5zZXRPcHRpb25zKG9wdGlvbnMpOyB9KTtcbiAgfVxuXG4gIGRlbGV0ZVBvbHlnb24ocGF0aHM6IEFnbVBvbHlnb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtID0gdGhpcy5fcG9seWdvbnMuZ2V0KHBhdGhzKTtcbiAgICBpZiAobSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIHJldHVybiBtLnRoZW4oKGw6IFBvbHlnb24pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIGwuc2V0TWFwKG51bGwpO1xuICAgICAgICB0aGlzLl9wb2x5Z29ucy5kZWxldGUocGF0aHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIHBhdGg6IEFnbVBvbHlnb24pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4ge1xuICAgICAgdGhpcy5fcG9seWdvbnMuZ2V0KHBhdGgpLnRoZW4oKGw6IFBvbHlnb24pID0+IHtcbiAgICAgICAgbC5hZGRMaXN0ZW5lcihldmVudE5hbWUsIChlOiBUKSA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiBvYnNlcnZlci5uZXh0KGUpKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19