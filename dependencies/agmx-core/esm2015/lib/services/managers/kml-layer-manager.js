import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
/**
 * Manages all KML Layers for a Google Map instance.
 */
let KmlLayerManager = class KmlLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    addKmlLayer(layer) {
        const newLayer = this._wrapper.getNativeMap().then(m => {
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
    }
    setOptions(layer, options) {
        this._layers.get(layer).then(l => l.setOptions(options));
    }
    deleteKmlLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return Observable.create((observer) => {
            this._layers.get(layer).then((m) => {
                m.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
};
KmlLayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: NgZone }
];
KmlLayerManager.ɵprov = i0.ɵɵdefineInjectable({ factory: function KmlLayerManager_Factory() { return new KmlLayerManager(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); }, token: KmlLayerManager, providedIn: "root" });
KmlLayerManager = __decorate([
    Injectable({
        providedIn: 'root'
    })
], KmlLayerManager);
export { KmlLayerManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21sLWxheWVyLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbWFuYWdlcnMva21sLWxheWVyLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFHMUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sOEJBQThCLENBQUM7OztBQUtsRTs7R0FFRztBQUlILElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFJMUIsWUFBb0IsUUFBOEIsRUFBVSxLQUFhO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQXNCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUhqRSxZQUFPLEdBQ1gsSUFBSSxHQUFHLEVBQWtDLENBQUM7SUFFOEIsQ0FBQztJQUU3RTs7T0FFRztJQUNILFdBQVcsQ0FBQyxLQUFrQjtRQUM1QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyRCxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQWtCO2dCQUMvQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7Z0JBQzFCLEdBQUcsRUFBRSxDQUFDO2dCQUNOLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7Z0JBQ3hDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztnQkFDcEMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtnQkFDOUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO2dCQUNkLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTthQUNyQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWtCLEVBQUUsT0FBd0I7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxjQUFjLENBQUMsS0FBa0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9CLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILHFCQUFxQixDQUFJLFNBQWlCLEVBQUUsS0FBa0I7UUFDNUQsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBcUIsRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQVcsRUFBRSxFQUFFO2dCQUMzQyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0UsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztZQXpDK0Isb0JBQW9CO1lBQWlCLE1BQU07OztBQUo5RCxlQUFlO0lBSDNCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxlQUFlLENBNkMzQjtTQTdDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7QWdtS21sTGF5ZXJ9IGZyb20gJy4vLi4vLi4vZGlyZWN0aXZlcy9rbWwtbGF5ZXInO1xuaW1wb3J0IHtHb29nbGVNYXBzQVBJV3JhcHBlcn0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQge0ttbExheWVyLCBLbWxMYXllck9wdGlvbnN9IGZyb20gJy4vLi4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuXG5kZWNsYXJlIHZhciBnb29nbGU6IGFueTtcblxuLyoqXG4gKiBNYW5hZ2VzIGFsbCBLTUwgTGF5ZXJzIGZvciBhIEdvb2dsZSBNYXAgaW5zdGFuY2UuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEttbExheWVyTWFuYWdlciB7XG4gIHByaXZhdGUgX2xheWVyczogTWFwPEFnbUttbExheWVyLCBQcm9taXNlPEttbExheWVyPj4gPVxuICAgICAgbmV3IE1hcDxBZ21LbWxMYXllciwgUHJvbWlzZTxLbWxMYXllcj4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge31cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBLTUwgTGF5ZXIgdG8gdGhlIG1hcC5cbiAgICovXG4gIGFkZEttbExheWVyKGxheWVyOiBBZ21LbWxMYXllcikge1xuICAgIGNvbnN0IG5ld0xheWVyID0gdGhpcy5fd3JhcHBlci5nZXROYXRpdmVNYXAoKS50aGVuKG0gPT4ge1xuICAgICAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5LbWxMYXllcig8S21sTGF5ZXJPcHRpb25zPntcbiAgICAgICAgY2xpY2thYmxlOiBsYXllci5jbGlja2FibGUsXG4gICAgICAgIG1hcDogbSxcbiAgICAgICAgcHJlc2VydmVWaWV3cG9ydDogbGF5ZXIucHJlc2VydmVWaWV3cG9ydCxcbiAgICAgICAgc2NyZWVuT3ZlcmxheXM6IGxheWVyLnNjcmVlbk92ZXJsYXlzLFxuICAgICAgICBzdXBwcmVzc0luZm9XaW5kb3dzOiBsYXllci5zdXBwcmVzc0luZm9XaW5kb3dzLFxuICAgICAgICB1cmw6IGxheWVyLnVybCxcbiAgICAgICAgekluZGV4OiBsYXllci56SW5kZXhcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuX2xheWVycy5zZXQobGF5ZXIsIG5ld0xheWVyKTtcbiAgfVxuXG4gIHNldE9wdGlvbnMobGF5ZXI6IEFnbUttbExheWVyLCBvcHRpb25zOiBLbWxMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGwgPT4gbC5zZXRPcHRpb25zKG9wdGlvbnMpKTtcbiAgfVxuXG4gIGRlbGV0ZUttbExheWVyKGxheWVyOiBBZ21LbWxMYXllcikge1xuICAgIHRoaXMuX2xheWVycy5nZXQobGF5ZXIpLnRoZW4obCA9PiB7XG4gICAgICBsLnNldE1hcChudWxsKTtcbiAgICAgIHRoaXMuX2xheWVycy5kZWxldGUobGF5ZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBHb29nbGUgTWFwcyBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGdpdmVuIEttbExheWVyIGFzIGFuIE9ic2VydmFibGVcbiAgICovXG4gIGNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgbGF5ZXI6IEFnbUttbExheWVyKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIHRoaXMuX2xheWVycy5nZXQobGF5ZXIpLnRoZW4oKG06IEttbExheWVyKSA9PiB7XG4gICAgICAgIG0uYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAoZTogVCkgPT4gdGhpcy5fem9uZS5ydW4oKCkgPT4gb2JzZXJ2ZXIubmV4dChlKSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==