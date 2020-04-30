import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { LatLngLiteral } from '../services/google-maps-types';
/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
import * as ɵngcc0 from '@angular/core';
export declare class AgmPolylinePoint implements OnChanges {
    /**
     * The latitude position of the point.
     */
    latitude: number;
    /**
     * The longitude position of the point;
     */
    longitude: number;
    /**
     * This event emitter gets emitted when the position of the point changed.
     */
    positionChanged: EventEmitter<LatLngLiteral>;
    constructor();
    ngOnChanges(changes: SimpleChanges): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmPolylinePoint, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmPolylinePoint, "agm-polyline-point", never, { "latitude": "latitude"; "longitude": "longitude"; }, { "positionChanged": "positionChanged"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtcG9pbnQuZC50cyIsInNvdXJjZXMiOlsicG9seWxpbmUtcG9pbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXRMbmdMaXRlcmFsIH0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMnO1xuLyoqXG4gKiBBZ21Qb2x5bGluZVBvaW50IHJlcHJlc2VudHMgb25lIGVsZW1lbnQgb2YgYSBwb2x5bGluZSB3aXRoaW4gYSAge0BsaW5rXG4gKiBTZW1iR29vZ2xlTWFwUG9seWxpbmV9XG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFnbVBvbHlsaW5lUG9pbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIC8qKlxuICAgICAqIFRoZSBsYXRpdHVkZSBwb3NpdGlvbiBvZiB0aGUgcG9pbnQuXG4gICAgICovXG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbG9uZ2l0dWRlIHBvc2l0aW9uIG9mIHRoZSBwb2ludDtcbiAgICAgKi9cbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHBvc2l0aW9uIG9mIHRoZSBwb2ludCBjaGFuZ2VkLlxuICAgICAqL1xuICAgIHBvc2l0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPExhdExuZ0xpdGVyYWw+O1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGFueTtcbn1cbiJdfQ==