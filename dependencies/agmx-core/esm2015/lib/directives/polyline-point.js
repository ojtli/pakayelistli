import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
let AgmPolylinePoint = class AgmPolylinePoint {
    constructor() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['latitude'] || changes['longitude']) {
            const position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
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
export { AgmPolylinePoint };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtcG9pbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9wb2x5bGluZS1wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFHL0Y7OztHQUdHO0FBRUgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFnQjNCO1FBTEE7O1dBRUc7UUFDTyxvQkFBZSxHQUFnQyxJQUFJLFlBQVksRUFBaUIsQ0FBQztJQUU1RSxDQUFDO0lBRWhCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0MsTUFBTSxRQUFRLEdBQWlDO2dCQUM3QyxHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVk7Z0JBQ3JDLEdBQUcsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWTthQUN2QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXZCVTtJQUFSLEtBQUssRUFBRTtrREFBeUI7QUFLeEI7SUFBUixLQUFLLEVBQUU7bURBQTBCO0FBS3hCO0lBQVQsTUFBTSxFQUFFO3lEQUFrRjtBQWRoRixnQkFBZ0I7SUFENUIsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFFLG9CQUFvQixFQUFDLENBQUM7R0FDL0IsZ0JBQWdCLENBMkI1QjtTQTNCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMYXRMbmdMaXRlcmFsfSBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy10eXBlcyc7XG5cbi8qKlxuICogQWdtUG9seWxpbmVQb2ludCByZXByZXNlbnRzIG9uZSBlbGVtZW50IG9mIGEgcG9seWxpbmUgd2l0aGluIGEgIHtAbGlua1xuICogU2VtYkdvb2dsZU1hcFBvbHlsaW5lfVxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ2FnbS1wb2x5bGluZS1wb2ludCd9KVxuZXhwb3J0IGNsYXNzIEFnbVBvbHlsaW5lUG9pbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKipcbiAgICogVGhlIGxhdGl0dWRlIHBvc2l0aW9uIG9mIHRoZSBwb2ludC5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbG9uZ2l0dWRlIHBvc2l0aW9uIG9mIHRoZSBwb2ludDtcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9pbnQgY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBwb3NpdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxMYXRMbmdMaXRlcmFsPiA9IG5ldyBFdmVudEVtaXR0ZXI8TGF0TG5nTGl0ZXJhbD4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGFueSB7XG4gICAgaWYgKGNoYW5nZXNbJ2xhdGl0dWRlJ10gfHwgY2hhbmdlc1snbG9uZ2l0dWRlJ10pIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uOiBMYXRMbmdMaXRlcmFsID0gPExhdExuZ0xpdGVyYWw+e1xuICAgICAgICBsYXQ6IGNoYW5nZXNbJ2xhdGl0dWRlJ10uY3VycmVudFZhbHVlLFxuICAgICAgICBsbmc6IGNoYW5nZXNbJ2xvbmdpdHVkZSddLmN1cnJlbnRWYWx1ZVxuICAgICAgfTtcbiAgICAgIHRoaXMucG9zaXRpb25DaGFuZ2VkLmVtaXQocG9zaXRpb24pO1xuICAgIH1cbiAgfVxufVxuIl19