import { __decorate } from "tslib";
import { Directive, EventEmitter, ContentChildren, QueryList, Input, Output } from '@angular/core';
import { MarkerManager } from '../services/managers/marker-manager';
import { AgmInfoWindow } from './info-window';
let markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
let AgmMarker = class AgmMarker {
    constructor(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new EventEmitter();
        /**
         * This event is fired when the user mouses over the marker.
         */
        this.mouseOver = new EventEmitter();
        /**
         * This event is fired when the user mouses outside the marker.
         */
        this.mouseOut = new EventEmitter();
        /**
         * @internal
         */
        this.infoWindow = new QueryList();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._id = (markerId++).toString();
    }
    /* @internal */
    ngAfterContentInit() {
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(() => this.handleInfoWindowUpdate());
    }
    /** @internal */
    ngOnChanges(changes) {
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
        if (changes['animation']) {
            this._markerManager.updateAnimation(this);
        }
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return 'AgmMarker-' + this._id.toString(); }
    /** @internal */
    ngOnDestroy() {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
    }
    handleInfoWindowUpdate() {
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(marker => {
            marker.hostMarker = this;
        });
    }
    _addEventListeners() {
        const cs = this._markerManager.createEventObservable('click', this).subscribe(() => {
            if (this.openInfoWindow) {
                this.infoWindow.forEach(infoWindow => infoWindow.open());
            }
            this.markerClick.emit(null);
        });
        this._observableSubscriptions.push(cs);
        const ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe((e) => {
            this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        const mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe((e) => {
            this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        const mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe((e) => {
            this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
    }
};
AgmMarker.ctorParameters = () => [
    { type: MarkerManager }
];
__decorate([
    Input()
], AgmMarker.prototype, "latitude", void 0);
__decorate([
    Input()
], AgmMarker.prototype, "longitude", void 0);
__decorate([
    Input()
], AgmMarker.prototype, "title", void 0);
__decorate([
    Input()
], AgmMarker.prototype, "label", void 0);
__decorate([
    Input('markerDraggable')
], AgmMarker.prototype, "draggable", void 0);
__decorate([
    Input()
], AgmMarker.prototype, "iconUrl", void 0);
__decorate([
    Input()
], AgmMarker.prototype, "visible", void 0);
__decorate([
    Input()
], AgmMarker.prototype, "openInfoWindow", void 0);
__decorate([
    Input()
], AgmMarker.prototype, "opacity", void 0);
__decorate([
    Input()
], AgmMarker.prototype, "zIndex", void 0);
__decorate([
    Input('markerClickable')
], AgmMarker.prototype, "clickable", void 0);
__decorate([
    Output()
], AgmMarker.prototype, "markerClick", void 0);
__decorate([
    Output()
], AgmMarker.prototype, "dragEnd", void 0);
__decorate([
    Output()
], AgmMarker.prototype, "mouseOver", void 0);
__decorate([
    Output()
], AgmMarker.prototype, "mouseOut", void 0);
__decorate([
    ContentChildren(AgmInfoWindow)
], AgmMarker.prototype, "infoWindow", void 0);
AgmMarker = __decorate([
    Directive({
        selector: 'agm-marker',
        inputs: [
            'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
            'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'
        ],
        outputs: ['markerClick', 'dragEnd', 'mouseOver', 'mouseOut']
    })
], AgmMarker);
export { AgmMarker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdteC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbWFya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFDWCxlQUFlLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQzVELE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUVsRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzVDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztBQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQVNILElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7SUFnR3BCLFlBQW9CLGNBQTZCO1FBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBM0VqRDs7V0FFRztRQUNILDJDQUEyQztRQUNqQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBT3JEOztXQUVHO1FBQ00sWUFBTyxHQUFZLElBQUksQ0FBQztRQUVqQzs7V0FFRztRQUNNLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRXhDOztXQUVHO1FBQ00sWUFBTyxHQUFXLENBQUMsQ0FBQztRQUU3Qjs7Ozs7V0FLRztRQUNNLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFNUI7O1dBRUc7UUFDSCwyQ0FBMkM7UUFDakIsY0FBUyxHQUFZLElBQUksQ0FBQztRQVFwRDs7V0FFRztRQUNPLGdCQUFXLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFFckU7O1dBRUc7UUFDTyxZQUFPLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFFN0U7O1dBRUc7UUFDTyxjQUFTLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFFL0U7O1dBRUc7UUFDTyxhQUFRLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFFOUU7O1dBRUc7UUFDNkIsZUFBVSxHQUE2QixJQUFJLFNBQVMsRUFBaUIsQ0FBQztRQUU5Rix5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFFdEMsNkJBQXdCLEdBQW1CLEVBQUUsQ0FBQztRQUVELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQUMsQ0FBQztJQUUxRixlQUFlO0lBQ2Ysa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsV0FBVyxDQUFDLE9BQXNDO1FBQ2hELElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQzNFLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsRUFBRSxLQUFhLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakMsZ0JBQWdCO0lBQ2hCLFFBQVEsS0FBYSxPQUFPLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVqRSxnQkFBZ0I7SUFDaEIsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sc0JBQXNCO1FBQzVCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9CLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2pGLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMxRDtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2QyxNQUFNLEVBQUUsR0FDSixJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFzQixTQUFTLEVBQUUsSUFBSSxDQUFDO2FBQzFFLFNBQVMsQ0FBQyxDQUFDLENBQXNCLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBYSxFQUFDLE1BQU0sRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2QyxNQUFNLEtBQUssR0FDUCxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFzQixXQUFXLEVBQUUsSUFBSSxDQUFDO2FBQzVFLFNBQVMsQ0FBQyxDQUFDLENBQXNCLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBYSxFQUFDLE1BQU0sRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQyxNQUFNLElBQUksR0FDTixJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFzQixVQUFVLEVBQUUsSUFBSSxDQUFDO2FBQzNFLFNBQVMsQ0FBQyxDQUFDLENBQXNCLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBYSxFQUFDLE1BQU0sRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0YsQ0FBQTs7WUF2R3FDLGFBQWE7O0FBNUZ4QztJQUFSLEtBQUssRUFBRTsyQ0FBa0I7QUFLakI7SUFBUixLQUFLLEVBQUU7NENBQW1CO0FBS2xCO0lBQVIsS0FBSyxFQUFFO3dDQUFlO0FBS2Q7SUFBUixLQUFLLEVBQUU7d0NBQTZCO0FBTVg7SUFBekIsS0FBSyxDQUFDLGlCQUFpQixDQUFDOzRDQUE0QjtBQUs1QztJQUFSLEtBQUssRUFBRTswQ0FBaUI7QUFLaEI7SUFBUixLQUFLLEVBQUU7MENBQXlCO0FBS3hCO0lBQVIsS0FBSyxFQUFFO2lEQUFnQztBQUsvQjtJQUFSLEtBQUssRUFBRTswQ0FBcUI7QUFRcEI7SUFBUixLQUFLLEVBQUU7eUNBQW9CO0FBTUY7SUFBekIsS0FBSyxDQUFDLGlCQUFpQixDQUFDOzRDQUEyQjtBQVcxQztJQUFULE1BQU0sRUFBRTs4Q0FBNEQ7QUFLM0Q7SUFBVCxNQUFNLEVBQUU7MENBQW9FO0FBS25FO0lBQVQsTUFBTSxFQUFFOzRDQUFzRTtBQUtyRTtJQUFULE1BQU0sRUFBRTsyQ0FBcUU7QUFLOUM7SUFBL0IsZUFBZSxDQUFDLGFBQWEsQ0FBQzs2Q0FBdUU7QUExRjNGLFNBQVM7SUFSckIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsTUFBTSxFQUFFO1lBQ04sVUFBVSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLFNBQVM7WUFDbEYsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVztTQUM5RDtRQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztLQUM3RCxDQUFDO0dBQ1csU0FBUyxDQXVNckI7U0F2TVksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2UsXG4gIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBJbnB1dCwgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge01vdXNlRXZlbnR9IGZyb20gJy4uL21hcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBtYXBUeXBlcyBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy10eXBlcyc7XG5pbXBvcnQge01hcmtlck1hbmFnZXJ9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL21hcmtlci1tYW5hZ2VyJztcblxuaW1wb3J0IHtBZ21JbmZvV2luZG93fSBmcm9tICcuL2luZm8td2luZG93JztcbmltcG9ydCB7TWFya2VyTGFiZWx9IGZyb20gJy4uL21hcC10eXBlcyc7XG5cbmxldCBtYXJrZXJJZCA9IDA7XG5cbi8qKlxuICogQWdtTWFya2VyIHJlbmRlcnMgYSBtYXAgbWFya2VyIGluc2lkZSBhIHtAbGluayBBZ21NYXB9LlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICBzZWxlY3RvcjogJ215LW1hcC1jbXAnLFxuICogIHN0eWxlczogW2BcbiAqICAgIC5hZ20tbWFwLWNvbnRhaW5lciB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgICA8YWdtLW1hcmtlciBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbbGFiZWxdPVwiJ00nXCI+XG4gKiAgICAgIDwvYWdtLW1hcmtlcj5cbiAqICAgIDwvYWdtLW1hcD5cbiAqICBgXG4gKiB9KVxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FnbS1tYXJrZXInLFxuICBpbnB1dHM6IFtcbiAgICAnbGF0aXR1ZGUnLCAnbG9uZ2l0dWRlJywgJ3RpdGxlJywgJ2xhYmVsJywgJ2RyYWdnYWJsZTogbWFya2VyRHJhZ2dhYmxlJywgJ2ljb25VcmwnLFxuICAgICdvcGVuSW5mb1dpbmRvdycsICdvcGFjaXR5JywgJ3Zpc2libGUnLCAnekluZGV4JywgJ2FuaW1hdGlvbidcbiAgXSxcbiAgb3V0cHV0czogWydtYXJrZXJDbGljaycsICdkcmFnRW5kJywgJ21vdXNlT3ZlcicsICdtb3VzZU91dCddXG59KVxuZXhwb3J0IGNsYXNzIEFnbU1hcmtlciBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyoqXG4gICAqIFRoZSBsYXRpdHVkZSBwb3NpdGlvbiBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgQElucHV0KCkgbGF0aXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGxvbmdpdHVkZSBwb3NpdGlvbiBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgQElucHV0KCkgbG9uZ2l0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGxhYmVsIChhIHNpbmdsZSB1cHBlcmNhc2UgY2hhcmFjdGVyKSBmb3IgdGhlIG1hcmtlci5cbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBNYXJrZXJMYWJlbDtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG1hcmtlciBjYW4gYmUgZHJhZ2dlZC4gRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdtYXJrZXJEcmFnZ2FibGUnKSBkcmFnZ2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogSWNvbiAodGhlIFVSTCBvZiB0aGUgaW1hZ2UpIGZvciB0aGUgZm9yZWdyb3VuZC5cbiAgICovXG4gIEBJbnB1dCgpIGljb25Vcmw6IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG1hcmtlciBpcyB2aXNpYmxlXG4gICAqL1xuICBASW5wdXQoKSB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IG9wZW4gdGhlIGNoaWxkIGluZm8gd2luZG93IHdoZW4gdGhlIG1hcmtlciBpcyBjbGlja2VkLlxuICAgKi9cbiAgQElucHV0KCkgb3BlbkluZm9XaW5kb3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgbWFya2VyJ3Mgb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wLlxuICAgKi9cbiAgQElucHV0KCkgb3BhY2l0eTogbnVtYmVyID0gMTtcblxuICAvKipcbiAgICogQWxsIG1hcmtlcnMgYXJlIGRpc3BsYXllZCBvbiB0aGUgbWFwIGluIG9yZGVyIG9mIHRoZWlyIHpJbmRleCwgd2l0aCBoaWdoZXIgdmFsdWVzIGRpc3BsYXlpbmcgaW5cbiAgICogZnJvbnQgb2YgbWFya2VycyB3aXRoIGxvd2VyIHZhbHVlcy4gQnkgZGVmYXVsdCwgbWFya2VycyBhcmUgZGlzcGxheWVkIGFjY29yZGluZyB0byB0aGVpclxuICAgKiB2ZXJ0aWNhbCBwb3NpdGlvbiBvbiBzY3JlZW4sIHdpdGggbG93ZXIgbWFya2VycyBhcHBlYXJpbmcgaW4gZnJvbnQgb2YgbWFya2VycyBmdXJ0aGVyIHVwIHRoZVxuICAgKiBzY3JlZW4uXG4gICAqL1xuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlciA9IDE7XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBtYXJrZXIgY2FuIGJlIGNsaWNrZWQuIERlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdtYXJrZXJDbGlja2FibGUnKSBjbGlja2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBXaGljaCBhbmltYXRpb24gdG8gcGxheSB3aGVuIG1hcmtlciBpcyBhZGRlZCB0byBhIG1hcC5cbiAgICogVGhpcyBjYW4gYmUgJ0JPVU5DRScgb3IgJ0RST1AnXG4gICAqL1xuICBhbmltYXRpb246ICdCT1VOQ0UnIHwgJ0RST1AnIHwgbnVsbDtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgbWFya2VyLlxuICAgKi9cbiAgQE91dHB1dCgpIG1hcmtlckNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBkcmFnZ2luZyB0aGUgbWFya2VyLlxuICAgKi9cbiAgQE91dHB1dCgpIGRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIG1vdXNlcyBvdmVyIHRoZSBtYXJrZXIuXG4gICAqL1xuICBAT3V0cHV0KCkgbW91c2VPdmVyOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBtb3VzZXMgb3V0c2lkZSB0aGUgbWFya2VyLlxuICAgKi9cbiAgQE91dHB1dCgpIG1vdXNlT3V0OiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihBZ21JbmZvV2luZG93KSBpbmZvV2luZG93OiBRdWVyeUxpc3Q8QWdtSW5mb1dpbmRvdz4gPSBuZXcgUXVlcnlMaXN0PEFnbUluZm9XaW5kb3c+KCk7XG5cbiAgcHJpdmF0ZSBfbWFya2VyQWRkZWRUb01hbmdlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwcml2YXRlIF9vYnNlcnZhYmxlU3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tYXJrZXJNYW5hZ2VyOiBNYXJrZXJNYW5hZ2VyKSB7IHRoaXMuX2lkID0gKG1hcmtlcklkKyspLnRvU3RyaW5nKCk7IH1cblxuICAvKiBAaW50ZXJuYWwgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuaGFuZGxlSW5mb1dpbmRvd1VwZGF0ZSgpO1xuICAgIHRoaXMuaW5mb1dpbmRvdy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZUluZm9XaW5kb3dVcGRhdGUoKSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmxhdGl0dWRlICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGhpcy5sb25naXR1ZGUgIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fbWFya2VyQWRkZWRUb01hbmdlcikge1xuICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci5hZGRNYXJrZXIodGhpcyk7XG4gICAgICB0aGlzLl9tYXJrZXJBZGRlZFRvTWFuZ2VyID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydsYXRpdHVkZSddIHx8IGNoYW5nZXNbJ2xvbmdpdHVkZSddKSB7XG4gICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLnVwZGF0ZU1hcmtlclBvc2l0aW9uKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1sndGl0bGUnXSkge1xuICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVUaXRsZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2xhYmVsJ10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlTGFiZWwodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydkcmFnZ2FibGUnXSkge1xuICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVEcmFnZ2FibGUodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydpY29uVXJsJ10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlSWNvbih0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ29wYWNpdHknXSkge1xuICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVPcGFjaXR5KHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1sndmlzaWJsZSddKSB7XG4gICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLnVwZGF0ZVZpc2libGUodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWyd6SW5kZXgnXSkge1xuICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVaSW5kZXgodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydjbGlja2FibGUnXSkge1xuICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVDbGlja2FibGUodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydhbmltYXRpb24nXSkge1xuICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVBbmltYXRpb24odGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5faWQ7IH1cblxuICAvKiogQGludGVybmFsICovXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7IHJldHVybiAnQWdtTWFya2VyLScgKyB0aGlzLl9pZC50b1N0cmluZygpOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLmRlbGV0ZU1hcmtlcih0aGlzKTtcbiAgICAvLyB1bnN1YnNjcmliZSBhbGwgcmVnaXN0ZXJlZCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbnNcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzKSA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVJbmZvV2luZG93VXBkYXRlKCkge1xuICAgIGlmICh0aGlzLmluZm9XaW5kb3cubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBubyBtb3JlIHRoYW4gb25lIGluZm8gd2luZG93LicpO1xuICAgIH1cbiAgICB0aGlzLmluZm9XaW5kb3cuZm9yRWFjaChtYXJrZXIgPT4ge1xuICAgICAgbWFya2VyLmhvc3RNYXJrZXIgPSB0aGlzO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY3MgPSB0aGlzLl9tYXJrZXJNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSgnY2xpY2snLCB0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3BlbkluZm9XaW5kb3cpIHtcbiAgICAgICAgdGhpcy5pbmZvV2luZG93LmZvckVhY2goaW5mb1dpbmRvdyA9PiBpbmZvV2luZG93Lm9wZW4oKSk7XG4gICAgICB9XG4gICAgICB0aGlzLm1hcmtlckNsaWNrLmVtaXQobnVsbCk7XG4gICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChjcyk7XG5cbiAgICBjb25zdCBkcyA9XG4gICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlPG1hcFR5cGVzLk1vdXNlRXZlbnQ+KCdkcmFnZW5kJywgdGhpcylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IG1hcFR5cGVzLk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kcmFnRW5kLmVtaXQoPE1vdXNlRXZlbnQ+e2Nvb3Jkczoge2xhdDogZS5sYXRMbmcubGF0KCksIGxuZzogZS5sYXRMbmcubG5nKCl9fSk7XG4gICAgICAgICAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKGRzKTtcblxuICAgIGNvbnN0IG1vdmVyID1cbiAgICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGU8bWFwVHlwZXMuTW91c2VFdmVudD4oJ21vdXNlb3ZlcicsIHRoaXMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChlOiBtYXBUeXBlcy5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubW91c2VPdmVyLmVtaXQoPE1vdXNlRXZlbnQ+e2Nvb3Jkczoge2xhdDogZS5sYXRMbmcubGF0KCksIGxuZzogZS5sYXRMbmcubG5nKCl9fSk7XG4gICAgICAgICAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKG1vdmVyKTtcblxuICAgIGNvbnN0IG1vdXQgPVxuICAgICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxtYXBUeXBlcy5Nb3VzZUV2ZW50PignbW91c2VvdXQnLCB0aGlzKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZTogbWFwVHlwZXMuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm1vdXNlT3V0LmVtaXQoPE1vdXNlRXZlbnQ+e2Nvb3Jkczoge2xhdDogZS5sYXRMbmcubGF0KCksIGxuZzogZS5sYXRMbmcubG5nKCl9fSk7XG4gICAgICAgICAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKG1vdXQpO1xuICB9XG59XG4iXX0=