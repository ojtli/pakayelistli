import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
let PolygonManager = class PolygonManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    addPolygon(path) {
        const polygonPromise = this._mapsWrapper.createPolygon({
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
    }
    updatePolygon(polygon) {
        const m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => this._zone.run(() => { l.setPaths(polygon.paths); }));
    }
    setPolygonOptions(path, options) {
        return this._polygons.get(path).then((l) => { l.setOptions(options); });
    }
    deletePolygon(paths) {
        const m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => {
            return this._zone.run(() => {
                l.setMap(null);
                this._polygons.delete(paths);
            });
        });
    }
    createEventObservable(eventName, path) {
        return Observable.create((observer) => {
            this._polygons.get(path).then((l) => {
                l.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
};
PolygonManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: NgZone }
];
PolygonManager.ɵprov = i0.ɵɵdefineInjectable({ factory: function PolygonManager_Factory() { return new PolygonManager(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); }, token: PolygonManager, providedIn: "root" });
PolygonManager = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PolygonManager);
export { PolygonManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdteC1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL21hbmFnZXJzL3BvbHlnb24tbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUcxQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBTWhFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFJekIsWUFBb0IsWUFBa0MsRUFBVSxLQUFhO1FBQXpELGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVE7UUFIckUsY0FBUyxHQUNiLElBQUksR0FBRyxFQUFnQyxDQUFDO0lBRW9DLENBQUM7SUFFakYsVUFBVSxDQUFDLElBQWdCO1FBQ3pCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1lBQ3JELFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQW1CO1FBQy9CLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNiLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQWdCLEVBQUUsT0FBa0M7UUFDcEUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFVLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWlCO1FBQzdCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNiLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFBcUIsQ0FBSSxTQUFpQixFQUFFLElBQWdCO1FBQzFELE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQXFCLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFVLEVBQUUsRUFBRTtnQkFDM0MsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7WUFwRG1DLG9CQUFvQjtZQUFpQixNQUFNOzs7QUFKbEUsY0FBYztJQUgxQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csY0FBYyxDQXdEMUI7U0F4RFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge0FnbVBvbHlnb259IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcG9seWdvbic7XG5pbXBvcnQge0dvb2dsZU1hcHNBUElXcmFwcGVyfSBmcm9tICcuLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQge1BvbHlnb259IGZyb20gJy4uL2dvb2dsZS1tYXBzLXR5cGVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUG9seWdvbk1hbmFnZXIge1xuICBwcml2YXRlIF9wb2x5Z29uczogTWFwPEFnbVBvbHlnb24sIFByb21pc2U8UG9seWdvbj4+ID1cbiAgICAgIG5ldyBNYXA8QWdtUG9seWdvbiwgUHJvbWlzZTxQb2x5Z29uPj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge31cblxuICBhZGRQb2x5Z29uKHBhdGg6IEFnbVBvbHlnb24pIHtcbiAgICBjb25zdCBwb2x5Z29uUHJvbWlzZSA9IHRoaXMuX21hcHNXcmFwcGVyLmNyZWF0ZVBvbHlnb24oe1xuICAgICAgY2xpY2thYmxlOiBwYXRoLmNsaWNrYWJsZSxcbiAgICAgIGRyYWdnYWJsZTogcGF0aC5kcmFnZ2FibGUsXG4gICAgICBlZGl0YWJsZTogcGF0aC5lZGl0YWJsZSxcbiAgICAgIGZpbGxDb2xvcjogcGF0aC5maWxsQ29sb3IsXG4gICAgICBmaWxsT3BhY2l0eTogcGF0aC5maWxsT3BhY2l0eSxcbiAgICAgIGdlb2Rlc2ljOiBwYXRoLmdlb2Rlc2ljLFxuICAgICAgcGF0aHM6IHBhdGgucGF0aHMsXG4gICAgICBzdHJva2VDb2xvcjogcGF0aC5zdHJva2VDb2xvcixcbiAgICAgIHN0cm9rZU9wYWNpdHk6IHBhdGguc3Ryb2tlT3BhY2l0eSxcbiAgICAgIHN0cm9rZVdlaWdodDogcGF0aC5zdHJva2VXZWlnaHQsXG4gICAgICB2aXNpYmxlOiBwYXRoLnZpc2libGUsXG4gICAgICB6SW5kZXg6IHBhdGguekluZGV4LFxuICAgIH0pO1xuICAgIHRoaXMuX3BvbHlnb25zLnNldChwYXRoLCBwb2x5Z29uUHJvbWlzZSk7XG4gIH1cblxuICB1cGRhdGVQb2x5Z29uKHBvbHlnb246IEFnbVBvbHlnb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtID0gdGhpcy5fcG9seWdvbnMuZ2V0KHBvbHlnb24pO1xuICAgIGlmIChtID09IG51bGwpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIG0udGhlbigobDogUG9seWdvbikgPT4gdGhpcy5fem9uZS5ydW4oKCkgPT4geyBsLnNldFBhdGhzKHBvbHlnb24ucGF0aHMpOyB9KSk7XG4gIH1cblxuICBzZXRQb2x5Z29uT3B0aW9ucyhwYXRoOiBBZ21Qb2x5Z29uLCBvcHRpb25zOiB7W3Byb3BOYW1lOiBzdHJpbmddOiBhbnl9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbHlnb25zLmdldChwYXRoKS50aGVuKChsOiBQb2x5Z29uKSA9PiB7IGwuc2V0T3B0aW9ucyhvcHRpb25zKTsgfSk7XG4gIH1cblxuICBkZWxldGVQb2x5Z29uKHBhdGhzOiBBZ21Qb2x5Z29uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbSA9IHRoaXMuX3BvbHlnb25zLmdldChwYXRocyk7XG4gICAgaWYgKG0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbS50aGVuKChsOiBQb2x5Z29uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICBsLnNldE1hcChudWxsKTtcbiAgICAgICAgdGhpcy5fcG9seWdvbnMuZGVsZXRlKHBhdGhzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBwYXRoOiBBZ21Qb2x5Z29uKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIHRoaXMuX3BvbHlnb25zLmdldChwYXRoKS50aGVuKChsOiBQb2x5Z29uKSA9PiB7XG4gICAgICAgIGwuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAoZTogVCkgPT4gdGhpcy5fem9uZS5ydW4oKCkgPT4gb2JzZXJ2ZXIubmV4dChlKSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==