var AgmPolyline_1;
import { __decorate } from "tslib";
import { ContentChildren, Directive, EventEmitter, Input, Output } from '@angular/core';
import { PolylineManager } from '../services/managers/polyline-manager';
import { AgmPolylinePoint } from './polyline-point';
let polylineId = 0;
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
let AgmPolyline = AgmPolyline_1 = class AgmPolyline {
    constructor(_polylineManager) {
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
    /** @internal */
    ngAfterContentInit() {
        if (this.points.length) {
            this.points.forEach((point) => {
                const s = point.positionChanged.subscribe(() => { this._polylineManager.updatePolylinePoints(this).then(() => this.attachObservables()); });
                this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        const s = this.points.changes.subscribe(() => {
            this._polylineManager.updatePolylinePoints(this).then(() => this.attachObservables());
        });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this).then(() => this.attachObservables());
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        let options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1);
        optionKeys.forEach(k => options[k] = changes[k].currentValue);
        this._polylineManager.setPolylineOptions(this, options);
    }
    /** @internal */
    attachObservables() {
        this._polylineManager.createEventObservableOnPath('set_at', this).subscribe((result) => {
            this.pointUpdated.emit(result);
        });
    }
    /** @internal */
    _getPoints() {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    ngOnDestroy() {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach((s) => s.unsubscribe());
    }
    _init() {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const handlers = [
            { name: 'click', handler: (ev) => this.lineClick.emit(ev) },
            { name: 'dblclick', handler: (ev) => this.lineDblClick.emit(ev) },
            { name: 'drag', handler: (ev) => this.lineDrag.emit(ev) },
            { name: 'dragend', handler: (ev) => this.lineDragEnd.emit(ev) },
            { name: 'dragstart', handler: (ev) => this.lineDragStart.emit(ev) },
            { name: 'mousedown', handler: (ev) => this.lineMouseDown.emit(ev) },
            { name: 'mousemove', handler: (ev) => this.lineMouseMove.emit(ev) },
            { name: 'mouseout', handler: (ev) => this.lineMouseOut.emit(ev) },
            { name: 'mouseover', handler: (ev) => this.lineMouseOver.emit(ev) },
            { name: 'mouseup', handler: (ev) => this.lineMouseUp.emit(ev) },
            { name: 'rightclick', handler: (ev) => this.lineRightClick.emit(ev) },
        ];
        handlers.forEach((obj) => {
            const os = this._polylineManager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
    }
};
AgmPolyline._polylineOptionsAttributes = [
    'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
    'zIndex'
];
AgmPolyline.ctorParameters = () => [
    { type: PolylineManager }
];
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
export { AgmPolyline };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9wb2x5bGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBb0IsZUFBZSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWtELEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJMUosT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXBELElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7QUFJSCxJQUFhLFdBQVcsbUJBQXhCLE1BQWEsV0FBVztJQXVHdEIsWUFBb0IsZ0JBQWlDO1FBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFsR3JEOztXQUVHO1FBQ00sY0FBUyxHQUFZLElBQUksQ0FBQztRQUNuQzs7O1dBR0c7UUFDSCwyQ0FBMkM7UUFDZixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQ3ZEOzs7V0FHRztRQUNNLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDbkM7Ozs7O1dBS0c7UUFDTSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBYW5DOztXQUVHO1FBQ00sWUFBTyxHQUFZLElBQUksQ0FBQztRQUtqQzs7V0FFRztRQUNPLGNBQVMsR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDdkY7O1dBRUc7UUFDTyxpQkFBWSxHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUMxRjs7V0FFRztRQUNPLGFBQVEsR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM5RTs7V0FFRztRQUNPLGdCQUFXLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFDakY7O1dBRUc7UUFDTyxrQkFBYSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFD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O0FBSTdFO0lBQVQsTUFBTSxFQUFFO2lEQUFpRjtBQUloRjtJQUFULE1BQU0sRUFBRTs2Q0FBcUU7QUFJcEU7SUFBVCxNQUFNLEVBQUU7Z0RBQXdFO0FBSXZFO0lBQVQsTUFBTSxFQUFFO2tEQUEwRTtBQUl6RTtJQUFULE1BQU0sRUFBRTtrREFBa0Y7QUFJakY7SUFBVCxNQUFNLEVBQUU7a0RBQWtGO0FBSWpGO0lBQVQsTUFBTSxFQUFFO2lEQUFpRjtBQUloRjtJQUFULE1BQU0sRUFBRTtrREFBa0Y7QUFJakY7SUFBVCxNQUFNLEVBQUU7Z0RBQWdGO0FBSS9FO0lBQVQsTUFBTSxFQUFFO21EQUFtRjtBQUlsRjtJQUFULE1BQU0sRUFBRTtpREFBMkQ7QUFJakM7SUFBbEMsZUFBZSxDQUFDLGdCQUFnQixDQUFDOzJDQUFxQztBQWxHNUQsV0FBVztJQUh2QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztLQUN6QixDQUFDO0dBQ1csV0FBVyxDQTRMdkI7U0E1TFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBQb2x5TW91c2VFdmVudCB9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7IFBvbHlsaW5lTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3BvbHlsaW5lLW1hbmFnZXInO1xuaW1wb3J0IHsgQWdtUG9seWxpbmVQb2ludCB9IGZyb20gJy4vcG9seWxpbmUtcG9pbnQnO1xuXG5sZXQgcG9seWxpbmVJZCA9IDA7XG4vKipcbiAqIEFnbVBvbHlsaW5lIHJlbmRlcnMgYSBwb2x5bGluZSBvbiBhIHtAbGluayBBZ21NYXB9XG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgc3R5bGVzOiBbYFxuICogICAgLmFnbS1tYXAtY29udGFpbmVyIHtcbiAqICAgICAgaGVpZ2h0OiAzMDBweDtcbiAqICAgIH1cbiAqIGBdLFxuICogIHRlbXBsYXRlOiBgXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICAgIDxhZ20tcG9seWxpbmU+XG4gKiAgICAgICAgICA8YWdtLXBvbHlsaW5lLXBvaW50IFtsYXRpdHVkZV09XCJsYXRBXCIgW2xvbmdpdHVkZV09XCJsbmdBXCI+XG4gKiAgICAgICAgICA8L2FnbS1wb2x5bGluZS1wb2ludD5cbiAqICAgICAgICAgIDxhZ20tcG9seWxpbmUtcG9pbnQgW2xhdGl0dWRlXT1cImxhdEJcIiBbbG9uZ2l0dWRlXT1cImxuZ0JcIj5cbiAqICAgICAgICAgIDwvYWdtLXBvbHlsaW5lLXBvaW50PlxuICogICAgICA8L2FnbS1wb2x5bGluZT5cbiAqICAgIDwvYWdtLW1hcD5cbiAqICBgXG4gKiB9KVxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FnbS1wb2x5bGluZSdcbn0pXG5leHBvcnQgY2xhc3MgQWdtUG9seWxpbmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgc3RhdGljIF9wb2x5bGluZU9wdGlvbnNBdHRyaWJ1dGVzOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICdkcmFnZ2FibGUnLCAnZWRpdGFibGUnLCAndmlzaWJsZScsICdnZW9kZXNpYycsICdzdHJva2VDb2xvcicsICdzdHJva2VPcGFjaXR5JywgJ3N0cm9rZVdlaWdodCcsXG4gICAgJ3pJbmRleCdcbiAgXTtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgUG9seWxpbmUgaGFuZGxlcyBtb3VzZSBldmVudHMuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBASW5wdXQoKSBjbGlja2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBkcmFnIHRoaXMgc2hhcGUgb3ZlciB0aGUgbWFwLiBUaGUgZ2VvZGVzaWMgcHJvcGVydHkgZGVmaW5lcyB0aGVcbiAgICogbW9kZSBvZiBkcmFnZ2luZy4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgncG9seWxpbmVEcmFnZ2FibGUnKSBkcmFnZ2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gZWRpdCB0aGlzIHNoYXBlIGJ5IGRyYWdnaW5nIHRoZSBjb250cm9sIHBvaW50cyBzaG93biBhdCB0aGVcbiAgICogdmVydGljZXMgYW5kIG9uIGVhY2ggc2VnbWVudC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoKSBlZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogV2hlbiB0cnVlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmUgaW50ZXJwcmV0ZWQgYXMgZ2VvZGVzaWMgYW5kIHdpbGwgZm9sbG93IHRoZSBjdXJ2YXR1cmUgb2ZcbiAgICogdGhlIEVhcnRoLiBXaGVuIGZhbHNlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmUgcmVuZGVyZWQgYXMgc3RyYWlnaHQgbGluZXMgaW4gc2NyZWVuIHNwYWNlLlxuICAgKiBOb3RlIHRoYXQgdGhlIHNoYXBlIG9mIGEgZ2VvZGVzaWMgcG9seWdvbiBtYXkgYXBwZWFyIHRvIGNoYW5nZSB3aGVuIGRyYWdnZWQsIGFzIHRoZSBkaW1lbnNpb25zXG4gICAqIGFyZSBtYWludGFpbmVkIHJlbGF0aXZlIHRvIHRoZSBzdXJmYWNlIG9mIHRoZSBlYXJ0aC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoKSBnZW9kZXNpYzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogVGhlIHN0cm9rZSBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZCBjb2xvcnMuXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VDb2xvcjogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHN0cm9rZSBvcGFjaXR5IGJldHdlZW4gMC4wIGFuZCAxLjAuXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VPcGFjaXR5OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVscy5cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZVdlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogV2hldGhlciB0aGlzIHBvbHlsaW5lIGlzIHZpc2libGUgb24gdGhlIG1hcC4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogVGhlIHpJbmRleCBjb21wYXJlZCB0byBvdGhlciBwb2x5cy5cbiAgICovXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gY2xpY2sgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlsaW5lLlxuICAgKi9cbiAgQE91dHB1dCgpIGxpbmVDbGljazogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBkYmxjbGljayBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmUuXG4gICAqL1xuICBAT3V0cHV0KCkgbGluZURibENsaWNrOiBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgcmVwZWF0ZWRseSBmaXJlZCB3aGlsZSB0aGUgdXNlciBkcmFncyB0aGUgcG9seWxpbmUuXG4gICAqL1xuICBAT3V0cHV0KCkgbGluZURyYWc6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBkcmFnZ2luZyB0aGUgcG9seWxpbmUuXG4gICAqL1xuICBAT3V0cHV0KCkgbGluZURyYWdFbmQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIHBvbHlsaW5lLlxuICAgKi9cbiAgQE91dHB1dCgpIGxpbmVEcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlZG93biBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmUuXG4gICAqL1xuICBAT3V0cHV0KCkgbGluZU1vdXNlRG93bjogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZW1vdmUgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlsaW5lLlxuICAgKi9cbiAgQE91dHB1dCgpIGxpbmVNb3VzZU1vdmU6IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PigpO1xuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBQb2x5bGluZSBtb3VzZW91dC5cbiAgICovXG4gIEBPdXRwdXQoKSBsaW5lTW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PigpO1xuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBQb2x5bGluZSBtb3VzZW92ZXIuXG4gICAqL1xuICBAT3V0cHV0KCkgbGluZU1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+KCk7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZSB0aGUgRE9NIG1vdXNldXAgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlsaW5lXG4gICAqL1xuICBAT3V0cHV0KCkgbGluZU1vdXNlVXA6IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PigpO1xuICAvKipcbiAgICogVGhpcyBldmVuIGlzIGZpcmVkIHdoZW4gdGhlIFBvbHlsaW5lIGlzIHJpZ2h0LWNsaWNrZWQgb24uXG4gICAqL1xuICBAT3V0cHV0KCkgbGluZVJpZ2h0Q2xpY2s6IEV2ZW50RW1pdHRlcjxQb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PigpO1xuICAvKipcbiAgICogVGhpcyBldmVuIGlzIGZpcmVkIHdoZW4gYSBwb2ludCBpbiB0aGUgcGF0aCBpcyB1cGRhdGVkXG4gICAqL1xuICBAT3V0cHV0KCkgcG9pbnRVcGRhdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKEFnbVBvbHlsaW5lUG9pbnQpIHBvaW50czogUXVlcnlMaXN0PEFnbVBvbHlsaW5lUG9pbnQ+O1xuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwcml2YXRlIF9wb2x5bGluZUFkZGVkVG9NYW5hZ2VyOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9seWxpbmVNYW5hZ2VyOiBQb2x5bGluZU1hbmFnZXIpIHsgdGhpcy5faWQgPSAocG9seWxpbmVJZCsrKS50b1N0cmluZygpOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaCgocG9pbnQ6IEFnbVBvbHlsaW5lUG9pbnQpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IHBvaW50LnBvc2l0aW9uQ2hhbmdlZC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoKSA9PiB7IHRoaXMuX3BvbHlsaW5lTWFuYWdlci51cGRhdGVQb2x5bGluZVBvaW50cyh0aGlzKS50aGVuKCgpID0+IHRoaXMuYXR0YWNoT2JzZXJ2YWJsZXMoKSk7IH0pO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9wb2x5bGluZUFkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuICAgIGNvbnN0IHMgPSB0aGlzLnBvaW50cy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiAge1xuICAgICAgdGhpcy5fcG9seWxpbmVNYW5hZ2VyLnVwZGF0ZVBvbHlsaW5lUG9pbnRzKHRoaXMpLnRoZW4oKCkgPT4gdGhpcy5hdHRhY2hPYnNlcnZhYmxlcygpKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gICAgdGhpcy5fcG9seWxpbmVNYW5hZ2VyLnVwZGF0ZVBvbHlsaW5lUG9pbnRzKHRoaXMpLnRoZW4oKCkgPT4gdGhpcy5hdHRhY2hPYnNlcnZhYmxlcygpKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9wb2x5bGluZUFkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG9wdGlvbnM6IHtbcHJvcE5hbWU6IHN0cmluZ106IGFueX0gPSB7fTtcbiAgICBjb25zdCBvcHRpb25LZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKFxuICAgICAgICBrID0+IEFnbVBvbHlsaW5lLl9wb2x5bGluZU9wdGlvbnNBdHRyaWJ1dGVzLmluZGV4T2YoaykgIT09IC0xKTtcbiAgICBvcHRpb25LZXlzLmZvckVhY2goayA9PiBvcHRpb25zW2tdID0gY2hhbmdlc1trXS5jdXJyZW50VmFsdWUpO1xuICAgIHRoaXMuX3BvbHlsaW5lTWFuYWdlci5zZXRQb2x5bGluZU9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIGF0dGFjaE9ic2VydmFibGVzKCkge1xuICAgICAgdGhpcy5fcG9seWxpbmVNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZU9uUGF0aCgnc2V0X2F0JywgdGhpcykuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMucG9pbnRVcGRhdGVkLmVtaXQocmVzdWx0KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZ2V0UG9pbnRzKCk6IEFycmF5PEFnbVBvbHlsaW5lUG9pbnQ+IHtcbiAgICBpZiAodGhpcy5wb2ludHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvaW50cy50b0FycmF5KCk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2lkOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9wb2x5bGluZU1hbmFnZXIuZGVsZXRlUG9seWxpbmUodGhpcyk7XG4gICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzKSA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdCgpIHtcbiAgICB0aGlzLl9wb2x5bGluZU1hbmFnZXIuYWRkUG9seWxpbmUodGhpcyk7XG4gICAgdGhpcy5fcG9seWxpbmVBZGRlZFRvTWFuYWdlciA9IHRydWU7XG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW1xuICAgICAge25hbWU6ICdjbGljaycsIGhhbmRsZXI6IChldjogUG9seU1vdXNlRXZlbnQpID0+IHRoaXMubGluZUNsaWNrLmVtaXQoZXYpfSxcbiAgICAgIHtuYW1lOiAnZGJsY2xpY2snLCBoYW5kbGVyOiAoZXY6IFBvbHlNb3VzZUV2ZW50KSA9PiB0aGlzLmxpbmVEYmxDbGljay5lbWl0KGV2KX0sXG4gICAgICB7bmFtZTogJ2RyYWcnLCBoYW5kbGVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IHRoaXMubGluZURyYWcuZW1pdChldil9LFxuICAgICAge25hbWU6ICdkcmFnZW5kJywgaGFuZGxlcjogKGV2OiBNb3VzZUV2ZW50KSA9PiB0aGlzLmxpbmVEcmFnRW5kLmVtaXQoZXYpfSxcbiAgICAgIHtuYW1lOiAnZHJhZ3N0YXJ0JywgaGFuZGxlcjogKGV2OiBNb3VzZUV2ZW50KSA9PiB0aGlzLmxpbmVEcmFnU3RhcnQuZW1pdChldil9LFxuICAgICAge25hbWU6ICdtb3VzZWRvd24nLCBoYW5kbGVyOiAoZXY6IFBvbHlNb3VzZUV2ZW50KSA9PiB0aGlzLmxpbmVNb3VzZURvd24uZW1pdChldil9LFxuICAgICAge25hbWU6ICdtb3VzZW1vdmUnLCBoYW5kbGVyOiAoZXY6IFBvbHlNb3VzZUV2ZW50KSA9PiB0aGlzLmxpbmVNb3VzZU1vdmUuZW1pdChldil9LFxuICAgICAge25hbWU6ICdtb3VzZW91dCcsIGhhbmRsZXI6IChldjogUG9seU1vdXNlRXZlbnQpID0+IHRoaXMubGluZU1vdXNlT3V0LmVtaXQoZXYpfSxcbiAgICAgIHtuYW1lOiAnbW91c2VvdmVyJywgaGFuZGxlcjogKGV2OiBQb2x5TW91c2VFdmVudCkgPT4gdGhpcy5saW5lTW91c2VPdmVyLmVtaXQoZXYpfSxcbiAgICAgIHtuYW1lOiAnbW91c2V1cCcsIGhhbmRsZXI6IChldjogUG9seU1vdXNlRXZlbnQpID0+IHRoaXMubGluZU1vdXNlVXAuZW1pdChldil9LFxuICAgICAge25hbWU6ICdyaWdodGNsaWNrJywgaGFuZGxlcjogKGV2OiBQb2x5TW91c2VFdmVudCkgPT4gdGhpcy5saW5lUmlnaHRDbGljay5lbWl0KGV2KX0sXG4gICAgXTtcbiAgICBoYW5kbGVycy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGNvbnN0IG9zID0gdGhpcy5fcG9seWxpbmVNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZShvYmoubmFtZSwgdGhpcykuc3Vic2NyaWJlKG9iai5oYW5kbGVyKTtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChvcyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==