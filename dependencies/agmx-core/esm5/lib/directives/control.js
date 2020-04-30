import { __decorate } from "tslib";
import { Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
/**
 * AgmMapControl allows to add a custom control to the map
 *
 * See [Positioning Custom Controls]{@link https://developers.google.com/maps/documentation/javascript/controls?hl=en#CustomPositioning}
 *
 * ### Example
 *
 * ```
 * <agm-control [position]="position">
 *   <div content>
 *       <!-- my markup -->
 *   </div>
 * </agm-control>
 * ```
 *
 */
var AgmControl = /** @class */ (function () {
    function AgmControl(elm, _mapsWrapper) {
        this.elm = elm;
        this._mapsWrapper = _mapsWrapper;
    }
    /* @internal */
    AgmControl.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['position'] && this.position) {
            this._mapsWrapper.getControls().then(function (controls) {
                var index = _this.getElementIndex(controls, changes);
                if (index !== null) {
                    controls[changes['position'].previousValue].removeAt(index);
                }
                controls[_this.position].push(_this.elm.nativeElement);
            });
        }
        else if (changes['position'] && changes['position'].currentValue === null && changes['position'].previousValue !== null) {
            this._mapsWrapper.getControls().then(function (controls) {
                var index = _this.getElementIndex(controls, changes);
                if (index !== null) {
                    controls[changes['position'].previousValue].removeAt(index);
                }
            });
        }
    };
    AgmControl.prototype.getElementIndex = function (controls, changes) {
        var _this = this;
        if (!controls[changes['position'].previousValue]) {
            return null;
        }
        var index = null;
        controls[changes['position'].previousValue].forEach(function (elem, i) {
            if (elem === _this.elm.nativeElement) {
                index = i;
                return null;
            }
        });
        return index;
    };
    AgmControl.ctorParameters = function () { return [
        { type: ElementRef },
        { type: GoogleMapsAPIWrapper }
    ]; };
    __decorate([
        Input()
    ], AgmControl.prototype, "position", void 0);
    AgmControl = __decorate([
        Component({
            selector: 'agm-control',
            template: '<ng-content select="[content]"></ng-content>'
        })
    ], AgmControl);
    return AgmControl;
}());
export { AgmControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnbXgtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBRXpFOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUtIO0lBTUUsb0JBQW9CLEdBQWUsRUFBVSxZQUFrQztRQUEzRCxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXNCO0lBQUcsQ0FBQztJQUVuRixlQUFlO0lBQ2YsZ0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQWtCQztRQWpCQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBc0M7Z0JBQzFFLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7b0JBQ2xCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM3RDtnQkFFRCxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtZQUN6SCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQXNDO2dCQUMxRSxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUNsQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDN0Q7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVPLG9DQUFlLEdBQXZCLFVBQXdCLFFBQXNDLEVBQUUsT0FBc0I7UUFBdEYsaUJBWUM7UUFYQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNoRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUQsSUFBSSxJQUFJLEtBQUssS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUU7Z0JBQ25DLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ1YsT0FBTyxJQUFJLENBQUM7YUFDYjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFuQ3dCLFVBQVU7Z0JBQXdCLG9CQUFvQjs7SUFGdEU7UUFBUixLQUFLLEVBQUU7Z0RBQXVDO0lBSnBDLFVBQVU7UUFKdEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLDhDQUE4QztTQUN6RCxDQUFDO09BQ1csVUFBVSxDQTBDdEI7SUFBRCxpQkFBQztDQUFBLEFBMUNELElBMENDO1NBMUNZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dvb2dsZU1hcHNBUElXcmFwcGVyfSBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5cbi8qKlxuICogQWdtTWFwQ29udHJvbCBhbGxvd3MgdG8gYWRkIGEgY3VzdG9tIGNvbnRyb2wgdG8gdGhlIG1hcFxuICpcbiAqIFNlZSBbUG9zaXRpb25pbmcgQ3VzdG9tIENvbnRyb2xzXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9jb250cm9scz9obD1lbiNDdXN0b21Qb3NpdGlvbmluZ31cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogPGFnbS1jb250cm9sIFtwb3NpdGlvbl09XCJwb3NpdGlvblwiPlxuICogICA8ZGl2IGNvbnRlbnQ+XG4gKiAgICAgICA8IS0tIG15IG1hcmt1cCAtLT5cbiAqICAgPC9kaXY+XG4gKiA8L2FnbS1jb250cm9sPlxuICogYGBgXG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZ20tY29udHJvbCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRlbnRdXCI+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIEFnbUNvbnRyb2wgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKipcbiAgICogIFBvc2l0aW9uIG9mIHRoZSBjb250cm9sXG4gICAqL1xuICBASW5wdXQoKSBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxtOiBFbGVtZW50UmVmLCBwcml2YXRlIF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIpIHt9XG5cbiAgLyogQGludGVybmFsICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1sncG9zaXRpb24nXSAmJiB0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRDb250cm9scygpLnRoZW4oKGNvbnRyb2xzOiBnb29nbGUubWFwcy5NVkNBcnJheTxOb2RlPltdKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRFbGVtZW50SW5kZXgoY29udHJvbHMsIGNoYW5nZXMpO1xuICAgICAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICBjb250cm9sc1tjaGFuZ2VzWydwb3NpdGlvbiddLnByZXZpb3VzVmFsdWVdLnJlbW92ZUF0KGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRyb2xzW3RoaXMucG9zaXRpb25dLnB1c2godGhpcy5lbG0ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZXNbJ3Bvc2l0aW9uJ10gJiYgY2hhbmdlc1sncG9zaXRpb24nXS5jdXJyZW50VmFsdWUgPT09IG51bGwgJiYgY2hhbmdlc1sncG9zaXRpb24nXS5wcmV2aW91c1ZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRDb250cm9scygpLnRoZW4oKGNvbnRyb2xzOiBnb29nbGUubWFwcy5NVkNBcnJheTxOb2RlPltdKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRFbGVtZW50SW5kZXgoY29udHJvbHMsIGNoYW5nZXMpO1xuICAgICAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICBjb250cm9sc1tjaGFuZ2VzWydwb3NpdGlvbiddLnByZXZpb3VzVmFsdWVdLnJlbW92ZUF0KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbGVtZW50SW5kZXgoY29udHJvbHM6IGdvb2dsZS5tYXBzLk1WQ0FycmF5PE5vZGU+W10sIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIWNvbnRyb2xzW2NoYW5nZXNbJ3Bvc2l0aW9uJ10ucHJldmlvdXNWYWx1ZV0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgaW5kZXggPSBudWxsO1xuICAgIGNvbnRyb2xzW2NoYW5nZXNbJ3Bvc2l0aW9uJ10ucHJldmlvdXNWYWx1ZV0uZm9yRWFjaCgoZWxlbSwgaSkgPT4ge1xuICAgICAgaWYgKGVsZW0gPT09IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbn1cbiJdfQ==