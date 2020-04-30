import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { KmlLayerManager } from './../services/managers/kml-layer-manager';
var layerId = 0;
var AgmKmlLayer = /** @class */ (function () {
    function AgmKmlLayer(_manager) {
        this._manager = _manager;
        /**
         * If true, the layer receives mouse events. Default value is true.
         */
        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */
        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */
        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */
        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */
        this.url = null;
        /**
         * The z-index of the layer.
         */
        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new EventEmitter();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */
        this.defaultViewportChange = new EventEmitter();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */
        this.statusChange = new EventEmitter();
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
    }
    AgmKmlLayer_1 = AgmKmlLayer;
    AgmKmlLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmKmlLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    /** @internal */
    AgmKmlLayer.prototype.id = function () { return this._id; };
    /** @internal */
    AgmKmlLayer.prototype.toString = function () { return "AgmKmlLayer-" + this._id.toString(); };
    /** @internal */
    AgmKmlLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmKmlLayer_1._kmlLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmKmlLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    var AgmKmlLayer_1;
    AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
    AgmKmlLayer.ctorParameters = function () { return [
        { type: KmlLayerManager }
    ]; };
    __decorate([
        Input()
    ], AgmKmlLayer.prototype, "clickable", void 0);
    __decorate([
        Input()
    ], AgmKmlLayer.prototype, "preserveViewport", void 0);
    __decorate([
        Input()
    ], AgmKmlLayer.prototype, "screenOverlays", void 0);
    __decorate([
        Input()
    ], AgmKmlLayer.prototype, "suppressInfoWindows", void 0);
    __decorate([
        Input()
    ], AgmKmlLayer.prototype, "url", void 0);
    __decorate([
        Input()
    ], AgmKmlLayer.prototype, "zIndex", void 0);
    __decorate([
        Output()
    ], AgmKmlLayer.prototype, "layerClick", void 0);
    __decorate([
        Output()
    ], AgmKmlLayer.prototype, "defaultViewportChange", void 0);
    __decorate([
        Output()
    ], AgmKmlLayer.prototype, "statusChange", void 0);
    AgmKmlLayer = AgmKmlLayer_1 = __decorate([
        Directive({
            selector: 'agm-kml-layer'
        })
    ], AgmKmlLayer);
    return AgmKmlLayer;
}());
export { AgmKmlLayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21sLWxheWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdteC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMva21sLWxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBK0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlwSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFFekUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBS2hCO0lBZ0RFLHFCQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQTdDN0M7O1dBRUc7UUFDTSxjQUFTLEdBQVksSUFBSSxDQUFDO1FBQ25DOzs7OztXQUtHO1FBQ00scUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQzNDOztXQUVHO1FBQ00sbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFDeEM7O1dBRUc7UUFDTSx3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDOUM7O1dBRUc7UUFDTSxRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQzVCOztXQUVHO1FBQ00sV0FBTSxHQUFnQixJQUFJLENBQUM7UUFDcEM7O1dBRUc7UUFDTyxlQUFVLEdBQWdDLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ3RGOztXQUVHO1FBQ08sMEJBQXFCLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDL0U7Ozs7V0FJRztRQUNPLGlCQUFZLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDOUQsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsUUFBRyxHQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxtQkFBYyxHQUFtQixFQUFFLENBQUM7SUFFSSxDQUFDO29CQWhEdEMsV0FBVztJQWtEdEIsOEJBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixP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QUFxQixFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQzs7Z0JBOENsRSxlQUFlOztJQTFDcEM7UUFBUixLQUFLLEVBQUU7a0RBQTJCO0lBTzFCO1FBQVIsS0FBSyxFQUFFO3lEQUFtQztJQUlsQztRQUFSLEtBQUssRUFBRTt1REFBZ0M7SUFJL0I7UUFBUixLQUFLLEVBQUU7NERBQXNDO0lBSXJDO1FBQVIsS0FBSyxFQUFFOzRDQUFvQjtJQUluQjtRQUFSLEtBQUssRUFBRTsrQ0FBNEI7SUFJMUI7UUFBVCxNQUFNLEVBQUU7bURBQTZFO0lBSTVFO1FBQVQsTUFBTSxFQUFFOzhEQUFzRTtJQU1yRTtRQUFULE1BQU0sRUFBRTtxREFBNkQ7SUEzQzNELFdBQVc7UUFIdkIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7U0FDMUIsQ0FBQztPQUNXLFdBQVcsQ0FzR3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXRHRCxJQXNHQztTQXRHWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtLbWxNb3VzZUV2ZW50fSBmcm9tICcuLy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7S21sTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLy4uL3NlcnZpY2VzL21hbmFnZXJzL2ttbC1sYXllci1tYW5hZ2VyJztcblxubGV0IGxheWVySWQgPSAwO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20ta21sLWxheWVyJ1xufSlcbmV4cG9ydCBjbGFzcyBBZ21LbWxMYXllciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIHN0YXRpYyBfa21sTGF5ZXJPcHRpb25zOiBzdHJpbmdbXSA9XG4gICAgICBbJ2NsaWNrYWJsZScsICdwcmVzZXJ2ZVZpZXdwb3J0JywgJ3NjcmVlbk92ZXJsYXlzJywgJ3N1cHByZXNzSW5mb1dpbmRvd3MnLCAndXJsJywgJ3pJbmRleCddO1xuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGxheWVyIHJlY2VpdmVzIG1vdXNlIGV2ZW50cy4gRGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxuICAgKi9cbiAgQElucHV0KCkgY2xpY2thYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBpbnB1dCBtYXAgaXMgY2VudGVyZWQgYW5kIHpvb21lZCB0byB0aGUgYm91bmRpbmcgYm94IG9mIHRoZSBjb250ZW50cyBvZiB0aGVcbiAgICogbGF5ZXIuXG4gICAqIElmIHRoaXMgb3B0aW9uIGlzIHNldCB0byB0cnVlLCB0aGUgdmlld3BvcnQgaXMgbGVmdCB1bmNoYW5nZWQsIHVubGVzcyB0aGUgbWFwJ3MgY2VudGVyIGFuZCB6b29tXG4gICAqIHdlcmUgbmV2ZXIgc2V0LlxuICAgKi9cbiAgQElucHV0KCkgcHJlc2VydmVWaWV3cG9ydDogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogV2hldGhlciB0byByZW5kZXIgdGhlIHNjcmVlbiBvdmVybGF5cy4gRGVmYXVsdCB0cnVlLlxuICAgKi9cbiAgQElucHV0KCkgc2NyZWVuT3ZlcmxheXM6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogU3VwcHJlc3MgdGhlIHJlbmRlcmluZyBvZiBpbmZvIHdpbmRvd3Mgd2hlbiBsYXllciBmZWF0dXJlcyBhcmUgY2xpY2tlZC5cbiAgICovXG4gIEBJbnB1dCgpIHN1cHByZXNzSW5mb1dpbmRvd3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIEtNTCBkb2N1bWVudCB0byBkaXNwbGF5LlxuICAgKi9cbiAgQElucHV0KCkgdXJsOiBzdHJpbmcgPSBudWxsO1xuICAvKipcbiAgICogVGhlIHotaW5kZXggb2YgdGhlIGxheWVyLlxuICAgKi9cbiAgQElucHV0KCkgekluZGV4OiBudW1iZXJ8bnVsbCA9IG51bGw7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gYSBmZWF0dXJlIGluIHRoZSBsYXllciBpcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGxheWVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxLbWxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8S21sTW91c2VFdmVudD4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgS01MIGxheWVycyBkZWZhdWx0IHZpZXdwb3J0IGhhcyBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGRlZmF1bHRWaWV3cG9ydENoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBLTUwgbGF5ZXIgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAqIEF0IHRoaXMgcG9pbnQgaXQgaXMgc2FmZSB0byByZWFkIHRoZSBzdGF0dXMgcHJvcGVydHkgdG8gZGV0ZXJtaW5lIGlmIHRoZSBsYXllciBsb2FkZWRcbiAgICogc3VjY2Vzc2Z1bGx5LlxuICAgKi9cbiAgQE91dHB1dCgpIHN0YXR1c0NoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBwcml2YXRlIF9hZGRlZFRvTWFuYWdlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pZDogc3RyaW5nID0gKGxheWVySWQrKykudG9TdHJpbmcoKTtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tYW5hZ2VyOiBLbWxMYXllck1hbmFnZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuX2FkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hbmFnZXIuYWRkS21sTGF5ZXIodGhpcyk7XG4gICAgdGhpcy5fYWRkZWRUb01hbmFnZXIgPSB0cnVlO1xuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLl9hZGRlZFRvTWFuYWdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVQb2x5Z29uT3B0aW9ucyhjaGFuZ2VzKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2lkOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gYEFnbUttbExheWVyLSR7dGhpcy5faWQudG9TdHJpbmcoKX1gOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9tYW5hZ2VyLmRlbGV0ZUttbExheWVyKHRoaXMpO1xuICAgIC8vIHVuc3Vic2NyaWJlIGFsbCByZWdpc3RlcmVkIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uc1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQb2x5Z29uT3B0aW9ucyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGsgPT4gQWdtS21sTGF5ZXIuX2ttbExheWVyT3B0aW9ucy5pbmRleE9mKGspICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKG9iajogYW55LCBrOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tdID0gY2hhbmdlc1trXS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX21hbmFnZXIuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSBbXG4gICAgICB7bmFtZTogJ2NsaWNrJywgaGFuZGxlcjogKGV2OiBLbWxNb3VzZUV2ZW50KSA9PiB0aGlzLmxheWVyQ2xpY2suZW1pdChldil9LFxuICAgICAge25hbWU6ICdkZWZhdWx0dmlld3BvcnRfY2hhbmdlZCcsIGhhbmRsZXI6ICgpID0+IHRoaXMuZGVmYXVsdFZpZXdwb3J0Q2hhbmdlLmVtaXQoKX0sXG4gICAgICB7bmFtZTogJ3N0YXR1c19jaGFuZ2VkJywgaGFuZGxlcjogKCkgPT4gdGhpcy5zdGF0dXNDaGFuZ2UuZW1pdCgpfSxcbiAgICBdO1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGNvbnN0IG9zID0gdGhpcy5fbWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUob2JqLm5hbWUsIHRoaXMpLnN1YnNjcmliZShvYmouaGFuZGxlcik7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2gob3MpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=