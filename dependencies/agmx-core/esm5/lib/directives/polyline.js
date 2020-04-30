import { __decorate } from "tslib";
import { ContentChildren, Directive, EventEmitter, Input, Output } from '@angular/core';
import { PolylineManager } from '../services/managers/polyline-manager';
import { AgmPolylinePoint } from './polyline-point';
var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
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
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmPolyline = /** @class */ (function () {
    function AgmPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new EventEmitter();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new EventEmitter();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new EventEmitter();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new EventEmitter();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new EventEmitter();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new EventEmitter();
        /**
         * This even is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new EventEmitter();
        /**
         * This even is fired when a point in the path is updated
         */
        this.pointUpdated = new EventEmitter();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    AgmPolyline_1 = AgmPolyline;
    /** @internal */
    AgmPolyline.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.points.length) {
            this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this).then(function () { return _this.attachObservables(); }); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this.points.changes.subscribe(function () {
            _this._polylineManager.updatePolylinePoints(_this).then(function () { return _this.attachObservables(); });
        });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this).then(function () { return _this.attachObservables(); });
    };
    /** @internal */
    AgmPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    /** @internal */
    AgmPolyline.prototype.attachObservables = function () {
        var _this = this;
        this._polylineManager.createEventObservableOnPath('set_at', this).subscribe(function (result) {
            _this.pointUpdated.emit(result);
        });
    };
    /** @internal */
    AgmPolyline.prototype._getPoints = function () {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    };
    /** @internal */
    AgmPolyline.prototype.id = function () { return this._id; };
    /** @internal */
    AgmPolyline.prototype.ngOnDestroy = function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    var AgmPolyline_1;
    AgmPolyline._polylineOptionsAttributes = [
        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
        'zIndex'
    ];
    AgmPolyline.ctorParameters = function () { return [
        { type: PolylineManager }
    ]; };
    __decorate([
        Input()
    ], AgmPolyline.prototype, "clickable", void 0);
    __decorate([
        Input('polylineDraggable')
    ], AgmPolyline.prototype, "draggable", void 0);
    __decorate([
        Input()
    ], AgmPolyline.prototype, "editable", void 0);
    __decorate([
        Input()
    ], AgmPolyline.prototype, "geodesic", void 0);
    __decorate([
        Input()
    ], AgmPolyline.prototype, "strokeColor", void 0);
    __decorate([
        Input()
    ], AgmPolyline.prototype, "strokeOpacity", void 0);
    __decorate([
        Input()
    ], AgmPolyline.prototype, "strokeWeight", void 0);
    __decorate([
        Input()
    ], AgmPolyline.prototype, "visible", void 0);
    __decorate([
        Input()
    ], AgmPolyline.prototype, "zIndex", void 0);
    __decorate([
        Output()
    ], AgmPolyline.prototype, "lineClick", void 0);
    __decorate([
        Output()
    ], AgmPolyline.prototype, "lineDblClick", void 0);
    __decorate([
        Output()
    ], AgmPolyline.prototype, "lineDrag", void 0);
    __decorate([
        Output()
    ], AgmPolyline.prototype, "lineDragEnd", void 0);
    __decorate([
        Output()
    ], AgmPolyline.prototype, "lineDragStart", void 0);
    __decorate([
        Output()
    ], AgmPolyline.prototype, "lineMouseDown", void 0);
    __decorate([
        Output()
    ], AgmPolyline.prototype, "lineMouseMove", void 0);
    __decorate([
        Output()
    ], AgmPolyline.prototype, "lineMouseOut", void 0);
    __decorate([
        Output()
    ], AgmPolyline.prototype, "lineMouseOver", void 0);
    __decorate([
        Output()
    ], AgmPolyline.prototype, "lineMouseUp", void 0);
    __decorate([
        Output()
    ], AgmPolyline.prototype, "lineRightClick", void 0);
    __decorate([
        Output()
    ], AgmPolyline.prototype, "pointUpdated", void 0);
    __decorate([
        ContentChildren(AgmPolylinePoint)
    ], AgmPolyline.prototype, "points", void 0);
    AgmPolyline = AgmPolyline_1 = __decorate([
        Directive({
            selector: 'agm-polyline'
        })
    ], AgmPolyline);
    return AgmPolyline;
}());
export { AgmPolyline };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9wb2x5bGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFvQixlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBa0QsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkxSixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFcEQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRztBQUlIO0lBdUdFLHFCQUFvQixnQkFBaUM7UUFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQWxHckQ7O1dBRUc7UUFDTSxjQUFTLEdBQVksSUFBSSxDQUFDO1FBQ25DOzs7V0FHRztRQUNILDJDQUEyQztRQUNmLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDdkQ7OztXQUdHO1FBQ00sYUFBUSxHQUFZLEtBQUssQ0FBQztRQUNuQzs7Ozs7V0FLRztRQUNNLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFhbkM7O1dBRUc7UUFDTSxZQUFPLEdBQVksSUFBSSxDQUFDO1FBS2pDOztXQUVHO1FBQ08sY0FBUyxHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUN2Rjs7V0FFRztRQUNPLGlCQUFZLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQzFGOztXQUVHO1FBQ08sYUFBUSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzlFOztXQUVHO1FBQ08sZ0JBQVcsR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUNqRjs7V0FFRztRQUNPLGtCQUFhLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFDbkY7O1dBRUc7UUFDTyxrQkFBYSxHQUFp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SXBCO1FBQVIsS0FBSyxFQUFFO3NEQUF1QjtJQUl0QjtRQUFSLEtBQUssRUFBRTtxREFBc0I7SUFJckI7UUFBUixLQUFLLEVBQUU7Z0RBQXlCO0lBSXhCO1FBQVIsS0FBSyxFQUFFOytDQUFnQjtJQUlkO1FBQVQsTUFBTSxFQUFFO2tEQUE4RTtJQUk3RTtRQUFULE1BQU0sRUFBRTtxREFBaUY7SUFJaEY7UUFBVCxNQUFNLEVBQUU7aURBQXFFO0lBSXBFO1FBQVQsTUFBTSxFQUFFO29EQUF3RTtJQUl2RTtRQUFULE1BQU0sRUFBRTtzREFBMEU7SUFJekU7UUFBVCxNQUFNLEVBQUU7c0RBQWtGO0lBSWpGO1FBQVQsTUFBTSxFQUFFO3NEQUFrRjtJQUlqRjtRQUFULE1BQU0sRUFBRTtxREFBaUY7SUFJaEY7UUFBVCxNQUFNLEVBQUU7c0RBQWtGO0lBSWpGO1FBQVQsTUFBTSxFQUFFO29EQUFnRjtJQUkvRTtRQUFULE1BQU0sRUFBRTt1REFBbUY7SUFJbEY7UUFBVCxNQUFNLEVBQUU7cURBQTJEO0lBSWpDO1FBQWxDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQzsrQ0FBcUM7SUFsRzVELFdBQVc7UUFIdkIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7U0FDekIsQ0FBQztPQUNXLFdBQVcsQ0E0THZCO0lBQUQsa0JBQUM7Q0FBQSxBQTVMRCxJQTRMQztTQTVMWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFF1ZXJ5TGlzdCwgU2ltcGxlQ2hhbmdlcywgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFBvbHlNb3VzZUV2ZW50IH0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHsgUG9seWxpbmVNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvcG9seWxpbmUtbWFuYWdlcic7XG5pbXBvcnQgeyBBZ21Qb2x5bGluZVBvaW50IH0gZnJvbSAnLi9wb2x5bGluZS1wb2ludCc7XG5cbmxldCBwb2x5bGluZUlkID0gMDtcbi8qKlxuICogQWdtUG9seWxpbmUgcmVuZGVycyBhIHBvbHlsaW5lIG9uIGEge0BsaW5rIEFnbU1hcH1cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICAuYWdtLW1hcC1jb250YWluZXIge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgICAgPGFnbS1wb2x5bGluZT5cbiAqICAgICAgICAgIDxhZ20tcG9seWxpbmUtcG9pbnQgW2xhdGl0dWRlXT1cImxhdEFcIiBbbG9uZ2l0dWRlXT1cImxuZ0FcIj5cbiAqICAgICAgICAgIDwvYWdtLXBvbHlsaW5lLXBvaW50PlxuICogICAgICAgICAgPGFnbS1wb2x5bGluZS1wb2ludCBbbGF0aXR1ZGVdPVwibGF0QlwiIFtsb25naXR1ZGVdPVwibG5nQlwiPlxuICogICAgICAgICAgPC9hZ20tcG9seWxpbmUtcG9pbnQ+XG4gKiAgICAgIDwvYWdtLXBvbHlsaW5lPlxuICogICAgPC9hZ20tbWFwPlxuICogIGBcbiAqIH0pXG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLXBvbHlsaW5lJ1xufSlcbmV4cG9ydCBjbGFzcyBBZ21Qb2x5bGluZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBzdGF0aWMgX3BvbHlsaW5lT3B0aW9uc0F0dHJpYnV0ZXM6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgJ2RyYWdnYWJsZScsICdlZGl0YWJsZScsICd2aXNpYmxlJywgJ2dlb2Rlc2ljJywgJ3N0cm9rZUNvbG9yJywgJ3N0cm9rZU9wYWNpdHknLCAnc3Ryb2tlV2VpZ2h0JyxcbiAgICAnekluZGV4J1xuICBdO1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBQb2x5bGluZSBoYW5kbGVzIG1vdXNlIGV2ZW50cy4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpIGNsaWNrYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGRyYWcgdGhpcyBzaGFwZSBvdmVyIHRoZSBtYXAuIFRoZSBnZW9kZXNpYyBwcm9wZXJ0eSBkZWZpbmVzIHRoZVxuICAgKiBtb2RlIG9mIGRyYWdnaW5nLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdwb2x5bGluZURyYWdnYWJsZScpIGRyYWdnYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBlZGl0IHRoaXMgc2hhcGUgYnkgZHJhZ2dpbmcgdGhlIGNvbnRyb2wgcG9pbnRzIHNob3duIGF0IHRoZVxuICAgKiB2ZXJ0aWNlcyBhbmQgb24gZWFjaCBzZWdtZW50LiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGVkZ2VzIG9mIHRoZSBwb2x5Z29uIGFyZSBpbnRlcnByZXRlZCBhcyBnZW9kZXNpYyBhbmQgd2lsbCBmb2xsb3cgdGhlIGN1cnZhdHVyZSBvZlxuICAgKiB0aGUgRWFydGguIFdoZW4gZmFsc2UsIGVkZ2VzIG9mIHRoZSBwb2x5Z29uIGFyZSByZW5kZXJlZCBhcyBzdHJhaWdodCBsaW5lcyBpbiBzY3JlZW4gc3BhY2UuXG4gICAqIE5vdGUgdGhhdCB0aGUgc2hhcGUgb2YgYSBnZW9kZXNpYyBwb2x5Z29uIG1heSBhcHBlYXIgdG8gY2hhbmdlIHdoZW4gZHJhZ2dlZCwgYXMgdGhlIGRpbWVuc2lvbnNcbiAgICogYXJlIG1haW50YWluZWQgcmVsYXRpdmUgdG8gdGhlIHN1cmZhY2Ugb2YgdGhlIGVhcnRoLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgpIGdlb2Rlc2ljOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGUgc3Ryb2tlIGNvbG9yLiBBbGwgQ1NTMyBjb2xvcnMgYXJlIHN1cHBvcnRlZCBleGNlcHQgZm9yIGV4dGVuZGVkIG5hbWVkIGNvbG9ycy5cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZUNvbG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgc3Ryb2tlIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMC5cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZU9wYWNpdHk6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBzdHJva2Ugd2lkdGggaW4gcGl4ZWxzLlxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlV2VpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgcG9seWxpbmUgaXMgdmlzaWJsZSBvbiB0aGUgbWFwLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiBUaGUgekluZGV4IGNvbXBhcmVkIHRvIG90aGVyIHBvbHlzLlxuICAgKi9cbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBjbGljayBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmUuXG4gICAqL1xuICBAT3V0cHV0KCkgbGluZUNsaWNrOiBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIGRibGNsaWNrIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5bGluZS5cbiAgICovXG4gIEBPdXRwdXQoKSBsaW5lRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PigpO1xuICAvKipcbiAgICogVGhpcyBldmVudCBpcyByZXBlYXRlZGx5IGZpcmVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzIHRoZSBwb2x5bGluZS5cbiAgICovXG4gIEBPdXRwdXQoKSBsaW5lRHJhZzogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIHRoZSBwb2x5bGluZS5cbiAgICovXG4gIEBPdXRwdXQoKSBsaW5lRHJhZ0VuZDogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyB0aGUgcG9seWxpbmUuXG4gICAqL1xuICBAT3V0cHV0KCkgbGluZURyYWdTdGFydDogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vkb3duIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5bGluZS5cbiAgICovXG4gIEBPdXRwdXQoKSBsaW5lTW91c2VEb3duOiBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlbW92ZSBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmUuXG4gICAqL1xuICBAT3V0cHV0KCkgbGluZU1vdXNlTW92ZTogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIFBvbHlsaW5lIG1vdXNlb3V0LlxuICAgKi9cbiAgQE91dHB1dCgpIGxpbmVNb3VzZU91dDogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIFBvbHlsaW5lIG1vdXNlb3Zlci5cbiAgICovXG4gIEBPdXRwdXQoKSBsaW5lTW91c2VPdmVyOiBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlIHRoZSBET00gbW91c2V1cCBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmVcbiAgICovXG4gIEBPdXRwdXQoKSBsaW5lTW91c2VVcDogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW4gaXMgZmlyZWQgd2hlbiB0aGUgUG9seWxpbmUgaXMgcmlnaHQtY2xpY2tlZCBvbi5cbiAgICovXG4gIEBPdXRwdXQoKSBsaW5lUmlnaHRDbGljazogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW4gaXMgZmlyZWQgd2hlbiBhIHBvaW50IGluIHRoZSBwYXRoIGlzIHVwZGF0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSBwb2ludFVwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oQWdtUG9seWxpbmVQb2ludCkgcG9pbnRzOiBRdWVyeUxpc3Q8QWdtUG9seWxpbmVQb2ludD47XG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BvbHlsaW5lQWRkZWRUb01hbmFnZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb2x5bGluZU1hbmFnZXI6IFBvbHlsaW5lTWFuYWdlcikgeyB0aGlzLl9pZCA9IChwb2x5bGluZUlkKyspLnRvU3RyaW5nKCk7IH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKChwb2ludDogQWdtUG9seWxpbmVQb2ludCkgPT4ge1xuICAgICAgICBjb25zdCBzID0gcG9pbnQucG9zaXRpb25DaGFuZ2VkLnN1YnNjcmliZShcbiAgICAgICAgICAgICgpID0+IHsgdGhpcy5fcG9seWxpbmVNYW5hZ2VyLnVwZGF0ZVBvbHlsaW5lUG9pbnRzKHRoaXMpLnRoZW4oKCkgPT4gdGhpcy5hdHRhY2hPYnNlcnZhYmxlcygpKTsgfSk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3BvbHlsaW5lQWRkZWRUb01hbmFnZXIpIHtcbiAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG4gICAgY29uc3QgcyA9IHRoaXMucG9pbnRzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+ICB7XG4gICAgICB0aGlzLl9wb2x5bGluZU1hbmFnZXIudXBkYXRlUG9seWxpbmVQb2ludHModGhpcykudGhlbigoKSA9PiB0aGlzLmF0dGFjaE9ic2VydmFibGVzKCkpO1xuICAgIH0pO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgICB0aGlzLl9wb2x5bGluZU1hbmFnZXIudXBkYXRlUG9seWxpbmVQb2ludHModGhpcykudGhlbigoKSA9PiB0aGlzLmF0dGFjaE9ic2VydmFibGVzKCkpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYW55IHtcbiAgICBpZiAoIXRoaXMuX3BvbHlsaW5lQWRkZWRUb01hbmFnZXIpIHtcbiAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgb3B0aW9uczoge1twcm9wTmFtZTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgIGNvbnN0IG9wdGlvbktleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoXG4gICAgICAgIGsgPT4gQWdtUG9seWxpbmUuX3BvbHlsaW5lT3B0aW9uc0F0dHJpYnV0ZXMuaW5kZXhPZihrKSAhPT0gLTEpO1xuICAgIG9wdGlvbktleXMuZm9yRWFjaChrID0+IG9wdGlvbnNba10gPSBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZSk7XG4gICAgdGhpcy5fcG9seWxpbmVNYW5hZ2VyLnNldFBvbHlsaW5lT3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYXR0YWNoT2JzZXJ2YWJsZXMoKSB7XG4gICAgICB0aGlzLl9wb2x5bGluZU1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlT25QYXRoKCdzZXRfYXQnLCB0aGlzKS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5wb2ludFVwZGF0ZWQuZW1pdChyZXN1bHQpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9nZXRQb2ludHMoKTogQXJyYXk8QWdtUG9seWxpbmVQb2ludD4ge1xuICAgIGlmICh0aGlzLnBvaW50cykge1xuICAgICAgcmV0dXJuIHRoaXMucG9pbnRzLnRvQXJyYXkoKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5faWQ7IH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3BvbHlsaW5lTWFuYWdlci5kZWxldGVQb2x5bGluZSh0aGlzKTtcbiAgICAvLyB1bnN1YnNjcmliZSBhbGwgcmVnaXN0ZXJlZCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbnNcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goKHMpID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0KCkge1xuICAgIHRoaXMuX3BvbHlsaW5lTWFuYWdlci5hZGRQb2x5bGluZSh0aGlzKTtcbiAgICB0aGlzLl9wb2x5bGluZUFkZGVkVG9NYW5hZ2VyID0gdHJ1ZTtcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXG4gICAgICB7bmFtZTogJ2NsaWNrJywgaGFuZGxlcjogKGV2OiBQb2x5TW91c2VFdmVudCkgPT4gdGhpcy5saW5lQ2xpY2suZW1pdChldil9LFxuICAgICAge25hbWU6ICdkYmxjbGljaycsIGhhbmRsZXI6IChldjogUG9seU1vdXNlRXZlbnQpID0+IHRoaXMubGluZURibENsaWNrLmVtaXQoZXYpfSxcbiAgICAgIHtuYW1lOiAnZHJhZycsIGhhbmRsZXI6IChldjogTW91c2VFdmVudCkgPT4gdGhpcy5saW5lRHJhZy5lbWl0KGV2KX0sXG4gICAgICB7bmFtZTogJ2RyYWdlbmQnLCBoYW5kbGVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IHRoaXMubGluZURyYWdFbmQuZW1pdChldil9LFxuICAgICAge25hbWU6ICdkcmFnc3RhcnQnLCBoYW5kbGVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IHRoaXMubGluZURyYWdTdGFydC5lbWl0KGV2KX0sXG4gICAgICB7bmFtZTogJ21vdXNlZG93bicsIGhhbmRsZXI6IChldjogUG9seU1vdXNlRXZlbnQpID0+IHRoaXMubGluZU1vdXNlRG93bi5lbWl0KGV2KX0sXG4gICAgICB7bmFtZTogJ21vdXNlbW92ZScsIGhhbmRsZXI6IChldjogUG9seU1vdXNlRXZlbnQpID0+IHRoaXMubGluZU1vdXNlTW92ZS5lbWl0KGV2KX0sXG4gICAgICB7bmFtZTogJ21vdXNlb3V0JywgaGFuZGxlcjogKGV2OiBQb2x5TW91c2VFdmVudCkgPT4gdGhpcy5saW5lTW91c2VPdXQuZW1pdChldil9LFxuICAgICAge25hbWU6ICdtb3VzZW92ZXInLCBoYW5kbGVyOiAoZXY6IFBvbHlNb3VzZUV2ZW50KSA9PiB0aGlzLmxpbmVNb3VzZU92ZXIuZW1pdChldil9LFxuICAgICAge25hbWU6ICdtb3VzZXVwJywgaGFuZGxlcjogKGV2OiBQb2x5TW91c2VFdmVudCkgPT4gdGhpcy5saW5lTW91c2VVcC5lbWl0KGV2KX0sXG4gICAgICB7bmFtZTogJ3JpZ2h0Y2xpY2snLCBoYW5kbGVyOiAoZXY6IFBvbHlNb3VzZUV2ZW50KSA9PiB0aGlzLmxpbmVSaWdodENsaWNrLmVtaXQoZXYpfSxcbiAgICBdO1xuICAgIGhhbmRsZXJzLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgY29uc3Qgb3MgPSB0aGlzLl9wb2x5bGluZU1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlKG9iai5uYW1lLCB0aGlzKS5zdWJzY3JpYmUob2JqLmhhbmRsZXIpO1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKG9zKTtcbiAgICB9KTtcbiAgfVxufVxuIl19