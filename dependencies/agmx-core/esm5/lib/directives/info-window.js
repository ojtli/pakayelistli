import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, Output, Input } from '@angular/core';
import { InfoWindowManager } from '../services/managers/info-window-manager';
var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
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
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = /** @class */ (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new EventEmitter();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow_1 = AgmInfoWindow;
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    /**
     * Opens the info window.
     */
    AgmInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    AgmInfoWindow.prototype.close = function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    AgmInfoWindow.prototype.id = function () { return this._id; };
    /** @internal */
    AgmInfoWindow.prototype.toString = function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow_1._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    var AgmInfoWindow_1;
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    AgmInfoWindow.ctorParameters = function () { return [
        { type: InfoWindowManager },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], AgmInfoWindow.prototype, "latitude", void 0);
    __decorate([
        Input()
    ], AgmInfoWindow.prototype, "longitude", void 0);
    __decorate([
        Input()
    ], AgmInfoWindow.prototype, "disableAutoPan", void 0);
    __decorate([
        Input()
    ], AgmInfoWindow.prototype, "zIndex", void 0);
    __decorate([
        Input()
    ], AgmInfoWindow.prototype, "maxWidth", void 0);
    __decorate([
        Input()
    ], AgmInfoWindow.prototype, "isOpen", void 0);
    __decorate([
        Output()
    ], AgmInfoWindow.prototype, "infoWindowClose", void 0);
    AgmInfoWindow = AgmInfoWindow_1 = __decorate([
        Component({
            selector: 'agm-info-window',
            template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
        })
    ], AgmInfoWindow);
    return AgmInfoWindow;
}());
export { AgmInfoWindow };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby13aW5kb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9pbmZvLXdpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBSTNFLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztBQUVyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQVFIO0lBaURFLHVCQUFvQixrQkFBcUMsRUFBVSxHQUFlO1FBQTlELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBWGxGOztXQUVHO1FBQ00sV0FBTSxHQUFZLEtBQUssQ0FBQztRQUNqQzs7V0FFRztRQUNPLG9CQUFlLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDakUsOEJBQXlCLEdBQVksS0FBSyxDQUFDO1FBQzNDLFFBQUcsR0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFbUMsQ0FBQztzQkFqRDNFLGFBQWE7SUFtRHhCLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsdUJBQXVC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QUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7O0lBbEhjLHNDQUF3QixHQUFhLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLENBQUM7O2dCQWdEM0MsaUJBQWlCO2dCQUFlLFVBQVU7O0lBM0N6RTtRQUFSLEtBQUssRUFBRTttREFBa0I7SUFLakI7UUFBUixLQUFLLEVBQUU7b0RBQW1CO0lBS2xCO1FBQVIsS0FBSyxFQUFFO3lEQUF5QjtJQU94QjtRQUFSLEtBQUssRUFBRTtpREFBZ0I7SUFNZjtRQUFSLEtBQUssRUFBRTttREFBa0I7SUFZakI7UUFBUixLQUFLLEVBQUU7aURBQXlCO0lBSXZCO1FBQVQsTUFBTSxFQUFFOzBEQUFnRTtJQTdDOUQsYUFBYTtRQVB6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSx3RkFHVDtTQUNGLENBQUM7T0FDVyxhQUFhLENBb0h6QjtJQUFELG9CQUFDO0NBQUEsQUFwSEQsSUFvSEM7U0FwSFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2UsIE91dHB1dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtJbmZvV2luZG93TWFuYWdlcn0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvaW5mby13aW5kb3ctbWFuYWdlcic7XG5cbmltcG9ydCB7QWdtTWFya2VyfSBmcm9tICcuL21hcmtlcic7XG5cbmxldCBpbmZvV2luZG93SWQgPSAwO1xuXG4vKipcbiAqIEFnbUluZm9XaW5kb3cgcmVuZGVycyBhIGluZm8gd2luZG93IGluc2lkZSBhIHtAbGluayBBZ21NYXJrZXJ9IG9yIHN0YW5kYWxvbmUuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgc3R5bGVzOiBbYFxuICogICAgLmFnbS1tYXAtY29udGFpbmVyIHtcbiAqICAgICAgaGVpZ2h0OiAzMDBweDtcbiAqICAgIH1cbiAqIGBdLFxuICogIHRlbXBsYXRlOiBgXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICAgIDxhZ20tbWFya2VyIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFtsYWJlbF09XCInTSdcIj5cbiAqICAgICAgICA8YWdtLWluZm8td2luZG93IFtkaXNhYmxlQXV0b1Bhbl09XCJ0cnVlXCI+XG4gKiAgICAgICAgICBIaSwgdGhpcyBpcyB0aGUgY29udGVudCBvZiB0aGUgPHN0cm9uZz5pbmZvIHdpbmRvdzwvc3Ryb25nPlxuICogICAgICAgIDwvYWdtLWluZm8td2luZG93PlxuICogICAgICA8L2FnbS1tYXJrZXI+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZ20taW5mby13aW5kb3cnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J2FnbS1pbmZvLXdpbmRvdy1jb250ZW50Jz5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBZ21JbmZvV2luZG93IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgc3RhdGljIF9pbmZvV2luZG93T3B0aW9uc0lucHV0czogc3RyaW5nW10gPSBbJ2Rpc2FibGVBdXRvUGFuJywgJ21heFdpZHRoJ107XG4gIC8qKlxuICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIGluZm8gd2luZG93IChvbmx5IHVzZWZ1bGwgaWYgeW91IHVzZSBpdCBvdXNpZGUgb2YgYSB7QGxpbmtcbiAgICogQWdtTWFya2VyfSkuXG4gICAqL1xuICBASW5wdXQoKSBsYXRpdHVkZTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGxvbmdpdHVkZSBwb3NpdGlvbiBvZiB0aGUgaW5mbyB3aW5kb3cgKG9ubHkgdXNlZnVsbCBpZiB5b3UgdXNlIGl0IG91c2lkZSBvZiBhIHtAbGlua1xuICAgKiBBZ21NYXJrZXJ9KS5cbiAgICovXG4gIEBJbnB1dCgpIGxvbmdpdHVkZTogbnVtYmVyO1xuICAvKipcbiAgICogRGlzYWJsZSBhdXRvLXBhbiBvbiBvcGVuLiBCeSBkZWZhdWx0LCB0aGUgaW5mbyB3aW5kb3cgd2lsbCBwYW4gdGhlIG1hcCBzbyB0aGF0IGl0IGlzIGZ1bGx5XG4gICAqIHZpc2libGUgd2hlbiBpdCBvcGVucy5cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVBdXRvUGFuOiBib29sZWFuO1xuICAvKipcbiAgICogQWxsIEluZm9XaW5kb3dzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIG1hcCBpbiBvcmRlciBvZiB0aGVpciB6SW5kZXgsIHdpdGggaGlnaGVyIHZhbHVlc1xuICAgKiBkaXNwbGF5aW5nIGluIGZyb250IG9mIEluZm9XaW5kb3dzIHdpdGggbG93ZXIgdmFsdWVzLiBCeSBkZWZhdWx0LCBJbmZvV2luZG93cyBhcmUgZGlzcGxheWVkXG4gICAqIGFjY29yZGluZyB0byB0aGVpciBsYXRpdHVkZSwgd2l0aCBJbmZvV2luZG93cyBvZiBsb3dlciBsYXRpdHVkZXMgYXBwZWFyaW5nIGluIGZyb250IG9mXG4gICAqIEluZm9XaW5kb3dzIGF0IGhpZ2hlciBsYXRpdHVkZXMuIEluZm9XaW5kb3dzIGFyZSBhbHdheXMgZGlzcGxheWVkIGluIGZyb250IG9mIG1hcmtlcnMuXG4gICAqL1xuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcbiAgLyoqXG4gICAqIE1heGltdW0gd2lkdGggb2YgdGhlIGluZm93aW5kb3csIHJlZ2FyZGxlc3Mgb2YgY29udGVudCdzIHdpZHRoLiBUaGlzIHZhbHVlIGlzIG9ubHkgY29uc2lkZXJlZFxuICAgKiBpZiBpdCBpcyBzZXQgYmVmb3JlIGEgY2FsbCB0byBvcGVuLiBUbyBjaGFuZ2UgdGhlIG1heGltdW0gd2lkdGggd2hlbiBjaGFuZ2luZyBjb250ZW50LCBjYWxsXG4gICAqIGNsb3NlLCB1cGRhdGUgbWF4V2lkdGgsIGFuZCB0aGVuIG9wZW4uXG4gICAqL1xuICBASW5wdXQoKSBtYXhXaWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogSG9sZHMgdGhlIG1hcmtlciB0aGF0IGlzIHRoZSBob3N0IG9mIHRoZSBpbmZvIHdpbmRvdyAoaWYgYXZhaWxhYmxlKVxuICAgKi9cbiAgaG9zdE1hcmtlcjogQWdtTWFya2VyO1xuICAvKipcbiAgICogSG9sZHMgdGhlIG5hdGl2ZSBlbGVtZW50IHRoYXQgaXMgdXNlZCBmb3IgdGhlIGluZm8gd2luZG93IGNvbnRlbnQuXG4gICAqL1xuICBjb250ZW50OiBOb2RlO1xuICAvKipcbiAgICogU2V0cyB0aGUgb3BlbiBzdGF0ZSBmb3IgdGhlIEluZm9XaW5kb3cuIFlvdSBjYW4gYWxzbyBjYWxsIHRoZSBvcGVuKCkgYW5kIGNsb3NlKCkgbWV0aG9kcy5cbiAgICovXG4gIEBJbnB1dCgpIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgaW5mbyB3aW5kb3cgaXMgY2xvc2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGluZm9XaW5kb3dDbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBwcml2YXRlIF9pbmZvV2luZG93QWRkZWRUb01hbmFnZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZyA9IChpbmZvV2luZG93SWQrKykudG9TdHJpbmcoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmZvV2luZG93TWFuYWdlcjogSW5mb1dpbmRvd01hbmFnZXIsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFnbS1pbmZvLXdpbmRvdy1jb250ZW50Jyk7XG4gICAgdGhpcy5faW5mb1dpbmRvd01hbmFnZXIuYWRkSW5mb1dpbmRvdyh0aGlzKTtcbiAgICB0aGlzLl9pbmZvV2luZG93QWRkZWRUb01hbmFnZXIgPSB0cnVlO1xuICAgIHRoaXMuX3VwZGF0ZU9wZW5TdGF0ZSgpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1trZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICBpZiAoIXRoaXMuX2luZm9XaW5kb3dBZGRlZFRvTWFuYWdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKGNoYW5nZXNbJ2xhdGl0dWRlJ10gfHwgY2hhbmdlc1snbG9uZ2l0dWRlJ10pICYmIHR5cGVvZiB0aGlzLmxhdGl0dWRlID09PSAnbnVtYmVyJyAmJlxuICAgICAgICB0eXBlb2YgdGhpcy5sb25naXR1ZGUgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRQb3NpdGlvbih0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ3pJbmRleCddKSB7XG4gICAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRaSW5kZXgodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydpc09wZW4nXSkge1xuICAgICAgdGhpcy5fdXBkYXRlT3BlblN0YXRlKCk7XG4gICAgfVxuICAgIHRoaXMuX3NldEluZm9XaW5kb3dPcHRpb25zKGNoYW5nZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBpbmZvIHdpbmRvdy5cbiAgICovXG4gIG9wZW4oKTogUHJvbWlzZTx2b2lkPiB7IHJldHVybiB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5vcGVuKHRoaXMpOyB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgaW5mbyB3aW5kb3cuXG4gICAqL1xuICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5faW5mb1dpbmRvd01hbmFnZXIuY2xvc2UodGhpcykudGhlbigoKSA9PiB7IHRoaXMuaW5mb1dpbmRvd0Nsb3NlLmVtaXQoKTsgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pZDsgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuICdBZ21JbmZvV2luZG93LScgKyB0aGlzLl9pZC50b1N0cmluZygpOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uRGVzdHJveSgpIHsgdGhpcy5faW5mb1dpbmRvd01hbmFnZXIuZGVsZXRlSW5mb1dpbmRvdyh0aGlzKTsgfVxuXG4gIHByaXZhdGUgX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5mb1dpbmRvd01hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlKCdjbG9zZWNsaWNrJywgdGhpcykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLmluZm9XaW5kb3dDbG9zZS5lbWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVPcGVuU3RhdGUoKSB7XG4gICAgdGhpcy5pc09wZW4gPyB0aGlzLm9wZW4oKSA6IHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEluZm9XaW5kb3dPcHRpb25zKGNoYW5nZXM6IHtba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG4gICAgbGV0IG9wdGlvbnM6IHtbcHJvcE5hbWU6IHN0cmluZ106IGFueX0gPSB7fTtcbiAgICBsZXQgb3B0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpLmZpbHRlcihcbiAgICAgICAgayA9PiBBZ21JbmZvV2luZG93Ll9pbmZvV2luZG93T3B0aW9uc0lucHV0cy5pbmRleE9mKGspICE9PSAtMSk7XG4gICAgb3B0aW9uS2V5cy5mb3JFYWNoKChrKSA9PiB7IG9wdGlvbnNba10gPSBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZTsgfSk7XG4gICAgdGhpcy5faW5mb1dpbmRvd01hbmFnZXIuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcbiAgfVxufVxuIl19