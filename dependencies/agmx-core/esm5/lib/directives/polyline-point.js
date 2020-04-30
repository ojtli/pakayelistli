import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var AgmPolylinePoint = /** @class */ (function () {
    function AgmPolylinePoint() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new EventEmitter();
    }
    AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    __decorate([
        Input()
    ], AgmPolylinePoint.prototype, "latitude", void 0);
    __decorate([
        Input()
    ], AgmPolylinePoint.prototype, "longitude", void 0);
    __decorate([
        Output()
    ], AgmPolylinePoint.prototype, "positionChanged", void 0);
    AgmPolylinePoint = __decorate([
        Directive({ selector: 'agm-polyline-point' })
    ], AgmPolylinePoint);
    return AgmPolylinePoint;
}());
export { AgmPolylinePoint };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtcG9pbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9wb2x5bGluZS1wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFHL0Y7OztHQUdHO0FBRUg7SUFnQkU7UUFMQTs7V0FFRztRQUNPLG9CQUFlLEdBQWdDLElBQUksWUFBWSxFQUFpQixDQUFDO0lBRTVFLENBQUM7SUFFaEIsc0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUMvQyxJQUFNLFFBQVEsR0FBaUM7Z0JBQzdDLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWTtnQkFDckMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZO2FBQ3ZDLENBQUM7WUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUF0QlE7UUFBUixLQUFLLEVBQUU7c0RBQXlCO0lBS3hCO1FBQVIsS0FBSyxFQUFFO3VEQUEwQjtJQUt4QjtRQUFULE1BQU0sRUFBRTs2REFBa0Y7SUFkaEYsZ0JBQWdCO1FBRDVCLFNBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBQyxDQUFDO09BQy9CLGdCQUFnQixDQTJCNUI7SUFBRCx1QkFBQztDQUFBLEFBM0JELElBMkJDO1NBM0JZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xhdExuZ0xpdGVyYWx9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcblxuLyoqXG4gKiBBZ21Qb2x5bGluZVBvaW50IHJlcHJlc2VudHMgb25lIGVsZW1lbnQgb2YgYSBwb2x5bGluZSB3aXRoaW4gYSAge0BsaW5rXG4gKiBTZW1iR29vZ2xlTWFwUG9seWxpbmV9XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnYWdtLXBvbHlsaW5lLXBvaW50J30pXG5leHBvcnQgY2xhc3MgQWdtUG9seWxpbmVQb2ludCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIHBvaW50LlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGxhdGl0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBsb25naXR1ZGUgcG9zaXRpb24gb2YgdGhlIHBvaW50O1xuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGxvbmdpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHBvc2l0aW9uIG9mIHRoZSBwb2ludCBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIHBvc2l0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPExhdExuZ0xpdGVyYWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxMYXRMbmdMaXRlcmFsPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYW55IHtcbiAgICBpZiAoY2hhbmdlc1snbGF0aXR1ZGUnXSB8fCBjaGFuZ2VzWydsb25naXR1ZGUnXSkge1xuICAgICAgY29uc3QgcG9zaXRpb246IExhdExuZ0xpdGVyYWwgPSA8TGF0TG5nTGl0ZXJhbD57XG4gICAgICAgIGxhdDogY2hhbmdlc1snbGF0aXR1ZGUnXS5jdXJyZW50VmFsdWUsXG4gICAgICAgIGxuZzogY2hhbmdlc1snbG9uZ2l0dWRlJ10uY3VycmVudFZhbHVlXG4gICAgICB9O1xuICAgICAgdGhpcy5wb3NpdGlvbkNoYW5nZWQuZW1pdChwb3NpdGlvbik7XG4gICAgfVxuICB9XG59XG4iXX0=