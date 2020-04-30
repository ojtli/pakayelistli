import { __decorate } from "tslib";
import { Directive, EventEmitter, ContentChildren, QueryList, Input, Output } from '@angular/core';
import { MarkerManager } from '../services/managers/marker-manager';
import { AgmInfoWindow } from './info-window';
var markerId = 0;
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
var AgmMarker = /** @class */ (function () {
    function AgmMarker(_markerManager) {
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
    AgmMarker.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
    };
    /** @internal */
    AgmMarker.prototype.ngOnChanges = function (changes) {
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
    };
    /** @internal */
    AgmMarker.prototype.id = function () { return this._id; };
    /** @internal */
    AgmMarker.prototype.toString = function () { return 'AgmMarker-' + this._id.toString(); };
    /** @internal */
    AgmMarker.prototype.ngOnDestroy = function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmMarker.prototype.handleInfoWindowUpdate = function () {
        var _this = this;
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this;
        });
    };
    AgmMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow) {
                _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
            }
            _this.markerClick.emit(null);
        });
        this._observableSubscriptions.push(cs);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        var mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(function (e) {
            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        var mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(function (e) {
            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
    };
    AgmMarker.ctorParameters = function () { return [
        { type: MarkerManager }
    ]; };
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
    return AgmMarker;
}());
export { AgmMarker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdteC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbWFya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFDWCxlQUFlLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQzVELE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUVsRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzVDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztBQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQVNIO0lBZ0dFLG1CQUFvQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQTNFakQ7O1dBRUc7UUFDSCwyQ0FBMkM7UUFDakIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQU9yRDs7V0FFRztRQUNNLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFakM7O1dBRUc7UUFDTSxtQkFBYyxHQUFZLElBQUksQ0FBQztRQUV4Qzs7V0FFRztRQUNNLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFFN0I7Ozs7O1dBS0c7UUFDTSxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRTVCOztXQUVHO1FBQ0gsMkNBQTJDO1FBQ2pCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFRcEQ7O1dBRUc7UUFDTyxnQkFBVyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXJFOztXQUVHO1FBQ08sWUFBTyxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBRTdFOztXQUVHO1FBQ08sY0FBUyxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBRS9FOztXQUVHO1FBQ08sYUFBUSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBRTlFOztXQUVHO1FBQzZCLGVBQVUsR0FBNkIsSUFBSSxTQUFTLEVBQWlCLENBQUM7UUFFOUYseUJBQW9CLEdBQVksS0FBSyxDQUFDO1FBRXRDLDZCQUF3QixHQUFtQixFQUFFLENBQUM7UUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUFDLENBQUM7SUFFMUYsZUFBZTtJQUNmLHNDQUFrQixHQUFsQjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsK0JBQVcsR0FBWCxVQUFZLE9BQXNDO1FBQ2hELElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQzNFLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsc0JBQUUsR0FBRixjQUFlLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakMsZ0JBQWdCO0lBQ2hCLDRCQUFRLEdBQVIsY0FBcUIsT0FBTyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFakUsZ0JBQWdCO0lBQ2hCLCtCQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sMENBQXNCLEdBQTlCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07WUFDNUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sc0NBQWtCLEdBQTFCO1FBQUEsaUJBNkJDO1FBNUJDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM1RSxJQUFJLEtBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7YUFDMUQ7WUFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdkMsSUFBTSxFQUFFLEdBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBc0IsU0FBUyxFQUFFLElBQUksQ0FBQzthQUMxRSxTQUFTLENBQUMsVUFBQyxDQUFzQjtZQUNoQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBYSxFQUFDLE1BQU0sRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2QyxJQUFNLEtBQUssR0FDUCxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFzQixXQUFXLEVBQUUsSUFBSSxDQUFDO2FBQzVFLFNBQVMsQ0FBQyxVQUFDLENBQXNCO1lBQ2hDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFhLEVBQUMsTUFBTSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUMsRUFBQyxDQUFDLENBQUM7UUFDeEYsQ0FBQyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFDLElBQU0sSUFBSSxHQUNOLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQXNCLFVBQVUsRUFBRSxJQUFJLENBQUM7YUFDM0UsU0FBUyxDQUFDLFVBQUMsQ0FBc0I7WUFDaEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQWEsRUFBQyxNQUFNLEVBQUUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBQyxFQUFDLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Z0JBdEdtQyxhQUFhOztJQTVGeEM7UUFBUixLQUFLLEVBQUU7K0NBQWtCO0lBS2pCO1FBQVIsS0FBSyxFQUFFO2dEQUFtQjtJQUtsQjtRQUFSLEtBQUssRUFBRTs0Q0FBZTtJQUtkO1FBQVIsS0FBSyxFQUFFOzRDQUE2QjtJQU1YO1FBQXpCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztnREFBNEI7SUFLNUM7UUFBUixLQUFLLEVBQUU7OENBQWlCO0lBS2hCO1FBQVIsS0FBSyxFQUFFOzhDQUF5QjtJQUt4QjtRQUFSLEtBQUssRUFBRTtxREFBZ0M7SUFLL0I7UUFBUixLQUFLLEVBQUU7OENBQXFCO0lBUXBCO1FBQVIsS0FBSyxFQUFFOzZDQUFvQjtJQU1GO1FBQXpCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztnREFBMkI7SUFXMUM7UUFBVCxNQUFNLEVBQUU7a0RBQTREO0lBSzNEO1FBQVQsTUFBTSxFQUFFOzhDQUFvRTtJQUtuRTtRQUFULE1BQU0sRUFBRTtnREFBc0U7SUFLckU7UUFBVCxNQUFNLEVBQUU7K0NBQXFFO0lBSzlDO1FBQS9CLGVBQWUsQ0FBQyxhQUFhLENBQUM7aURBQXVFO0lBMUYzRixTQUFTO1FBUnJCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsU0FBUztnQkFDbEYsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVzthQUM5RDtZQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztTQUM3RCxDQUFDO09BQ1csU0FBUyxDQXVNckI7SUFBRCxnQkFBQztDQUFBLEFBdk1ELElBdU1DO1NBdk1ZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlLFxuICBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtNb3VzZUV2ZW50fSBmcm9tICcuLi9tYXAtdHlwZXMnO1xuaW1wb3J0ICogYXMgbWFwVHlwZXMgZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHtNYXJrZXJNYW5hZ2VyfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9tYXJrZXItbWFuYWdlcic7XG5cbmltcG9ydCB7QWdtSW5mb1dpbmRvd30gZnJvbSAnLi9pbmZvLXdpbmRvdyc7XG5pbXBvcnQge01hcmtlckxhYmVsfSBmcm9tICcuLi9tYXAtdHlwZXMnO1xuXG5sZXQgbWFya2VySWQgPSAwO1xuXG4vKipcbiAqIEFnbU1hcmtlciByZW5kZXJzIGEgbWFwIG1hcmtlciBpbnNpZGUgYSB7QGxpbmsgQWdtTWFwfS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICAuYWdtLW1hcC1jb250YWluZXIge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgICAgPGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW2xhYmVsXT1cIidNJ1wiPlxuICogICAgICA8L2FnbS1tYXJrZXI+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20tbWFya2VyJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2xhdGl0dWRlJywgJ2xvbmdpdHVkZScsICd0aXRsZScsICdsYWJlbCcsICdkcmFnZ2FibGU6IG1hcmtlckRyYWdnYWJsZScsICdpY29uVXJsJyxcbiAgICAnb3BlbkluZm9XaW5kb3cnLCAnb3BhY2l0eScsICd2aXNpYmxlJywgJ3pJbmRleCcsICdhbmltYXRpb24nXG4gIF0sXG4gIG91dHB1dHM6IFsnbWFya2VyQ2xpY2snLCAnZHJhZ0VuZCcsICdtb3VzZU92ZXInLCAnbW91c2VPdXQnXVxufSlcbmV4cG9ydCBjbGFzcyBBZ21NYXJrZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIG1hcmtlci5cbiAgICovXG4gIEBJbnB1dCgpIGxhdGl0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBsb25naXR1ZGUgcG9zaXRpb24gb2YgdGhlIG1hcmtlci5cbiAgICovXG4gIEBJbnB1dCgpIGxvbmdpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgb2YgdGhlIG1hcmtlci5cbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCAoYSBzaW5nbGUgdXBwZXJjYXNlIGNoYXJhY3RlcikgZm9yIHRoZSBtYXJrZXIuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgTWFya2VyTGFiZWw7XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBtYXJrZXIgY2FuIGJlIGRyYWdnZWQuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnbWFya2VyRHJhZ2dhYmxlJykgZHJhZ2dhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEljb24gKHRoZSBVUkwgb2YgdGhlIGltYWdlKSBmb3IgdGhlIGZvcmVncm91bmQuXG4gICAqL1xuICBASW5wdXQoKSBpY29uVXJsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBtYXJrZXIgaXMgdmlzaWJsZVxuICAgKi9cbiAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBvcGVuIHRoZSBjaGlsZCBpbmZvIHdpbmRvdyB3aGVuIHRoZSBtYXJrZXIgaXMgY2xpY2tlZC5cbiAgICovXG4gIEBJbnB1dCgpIG9wZW5JbmZvV2luZG93OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIG1hcmtlcidzIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMC5cbiAgICovXG4gIEBJbnB1dCgpIG9wYWNpdHk6IG51bWJlciA9IDE7XG5cbiAgLyoqXG4gICAqIEFsbCBtYXJrZXJzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIG1hcCBpbiBvcmRlciBvZiB0aGVpciB6SW5kZXgsIHdpdGggaGlnaGVyIHZhbHVlcyBkaXNwbGF5aW5nIGluXG4gICAqIGZyb250IG9mIG1hcmtlcnMgd2l0aCBsb3dlciB2YWx1ZXMuIEJ5IGRlZmF1bHQsIG1hcmtlcnMgYXJlIGRpc3BsYXllZCBhY2NvcmRpbmcgdG8gdGhlaXJcbiAgICogdmVydGljYWwgcG9zaXRpb24gb24gc2NyZWVuLCB3aXRoIGxvd2VyIG1hcmtlcnMgYXBwZWFyaW5nIGluIGZyb250IG9mIG1hcmtlcnMgZnVydGhlciB1cCB0aGVcbiAgICogc2NyZWVuLlxuICAgKi9cbiAgQElucHV0KCkgekluZGV4OiBudW1iZXIgPSAxO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgbWFya2VyIGNhbiBiZSBjbGlja2VkLiBEZWZhdWx0IHZhbHVlIGlzIHRydWUuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnbWFya2VyQ2xpY2thYmxlJykgY2xpY2thYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hpY2ggYW5pbWF0aW9uIHRvIHBsYXkgd2hlbiBtYXJrZXIgaXMgYWRkZWQgdG8gYSBtYXAuXG4gICAqIFRoaXMgY2FuIGJlICdCT1VOQ0UnIG9yICdEUk9QJ1xuICAgKi9cbiAgYW5pbWF0aW9uOiAnQk9VTkNFJyB8ICdEUk9QJyB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIG1hcmtlci5cbiAgICovXG4gIEBPdXRwdXQoKSBtYXJrZXJDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgdGhlIG1hcmtlci5cbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnRW5kOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBtb3VzZXMgb3ZlciB0aGUgbWFya2VyLlxuICAgKi9cbiAgQE91dHB1dCgpIG1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgbW91c2VzIG91dHNpZGUgdGhlIG1hcmtlci5cbiAgICovXG4gIEBPdXRwdXQoKSBtb3VzZU91dDogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oQWdtSW5mb1dpbmRvdykgaW5mb1dpbmRvdzogUXVlcnlMaXN0PEFnbUluZm9XaW5kb3c+ID0gbmV3IFF1ZXJ5TGlzdDxBZ21JbmZvV2luZG93PigpO1xuXG4gIHByaXZhdGUgX21hcmtlckFkZGVkVG9NYW5nZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWFya2VyTWFuYWdlcjogTWFya2VyTWFuYWdlcikgeyB0aGlzLl9pZCA9IChtYXJrZXJJZCsrKS50b1N0cmluZygpOyB9XG5cbiAgLyogQGludGVybmFsICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmhhbmRsZUluZm9XaW5kb3dVcGRhdGUoKTtcbiAgICB0aGlzLmluZm9XaW5kb3cuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVJbmZvV2luZG93VXBkYXRlKCkpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5sYXRpdHVkZSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHRoaXMubG9uZ2l0dWRlICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX21hcmtlckFkZGVkVG9NYW5nZXIpIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIuYWRkTWFya2VyKHRoaXMpO1xuICAgICAgdGhpcy5fbWFya2VyQWRkZWRUb01hbmdlciA9IHRydWU7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snbGF0aXR1ZGUnXSB8fCBjaGFuZ2VzWydsb25naXR1ZGUnXSkge1xuICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVNYXJrZXJQb3NpdGlvbih0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ3RpdGxlJ10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlVGl0bGUodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydsYWJlbCddKSB7XG4gICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLnVwZGF0ZUxhYmVsKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snZHJhZ2dhYmxlJ10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlRHJhZ2dhYmxlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snaWNvblVybCddKSB7XG4gICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLnVwZGF0ZUljb24odGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydvcGFjaXR5J10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlT3BhY2l0eSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ3Zpc2libGUnXSkge1xuICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVWaXNpYmxlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snekluZGV4J10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlWkluZGV4KHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snY2xpY2thYmxlJ10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlQ2xpY2thYmxlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snYW5pbWF0aW9uJ10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlQW5pbWF0aW9uKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2lkOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gJ0FnbU1hcmtlci0nICsgdGhpcy5faWQudG9TdHJpbmcoKTsgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbWFya2VyTWFuYWdlci5kZWxldGVNYXJrZXIodGhpcyk7XG4gICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMuZm9yRWFjaCgocykgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSW5mb1dpbmRvd1VwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5pbmZvV2luZG93Lmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbm8gbW9yZSB0aGFuIG9uZSBpbmZvIHdpbmRvdy4nKTtcbiAgICB9XG4gICAgdGhpcy5pbmZvV2luZG93LmZvckVhY2gobWFya2VyID0+IHtcbiAgICAgIG1hcmtlci5ob3N0TWFya2VyID0gdGhpcztcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGNzID0gdGhpcy5fbWFya2VyTWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUoJ2NsaWNrJywgdGhpcykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9wZW5JbmZvV2luZG93KSB7XG4gICAgICAgIHRoaXMuaW5mb1dpbmRvdy5mb3JFYWNoKGluZm9XaW5kb3cgPT4gaW5mb1dpbmRvdy5vcGVuKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5tYXJrZXJDbGljay5lbWl0KG51bGwpO1xuICAgIH0pO1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2goY3MpO1xuXG4gICAgY29uc3QgZHMgPVxuICAgICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxtYXBUeXBlcy5Nb3VzZUV2ZW50PignZHJhZ2VuZCcsIHRoaXMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChlOiBtYXBUeXBlcy5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KDxNb3VzZUV2ZW50Pntjb29yZHM6IHtsYXQ6IGUubGF0TG5nLmxhdCgpLCBsbmc6IGUubGF0TG5nLmxuZygpfX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChkcyk7XG5cbiAgICBjb25zdCBtb3ZlciA9XG4gICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlPG1hcFR5cGVzLk1vdXNlRXZlbnQ+KCdtb3VzZW92ZXInLCB0aGlzKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZTogbWFwVHlwZXMuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm1vdXNlT3Zlci5lbWl0KDxNb3VzZUV2ZW50Pntjb29yZHM6IHtsYXQ6IGUubGF0TG5nLmxhdCgpLCBsbmc6IGUubGF0TG5nLmxuZygpfX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChtb3Zlcik7XG5cbiAgICBjb25zdCBtb3V0ID1cbiAgICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGU8bWFwVHlwZXMuTW91c2VFdmVudD4oJ21vdXNlb3V0JywgdGhpcylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IG1hcFR5cGVzLk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5tb3VzZU91dC5lbWl0KDxNb3VzZUV2ZW50Pntjb29yZHM6IHtsYXQ6IGUubGF0TG5nLmxhdCgpLCBsbmc6IGUubGF0TG5nLmxuZygpfX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChtb3V0KTtcbiAgfVxufVxuIl19