/// <reference types="googlemaps" />
import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
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
import * as ɵngcc0 from '@angular/core';
export declare class AgmControl implements OnChanges {
    private elm;
    private _mapsWrapper;
    /**
     *  Position of the control
     */
    position: google.maps.ControlPosition;
    constructor(elm: ElementRef, _mapsWrapper: GoogleMapsAPIWrapper);
    ngOnChanges(changes: SimpleChanges): void;
    private getElementIndex;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmControl, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AgmControl, "agm-control", never, { "position": "position"; }, {}, never, ["[content]"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5kLnRzIiwic291cmNlcyI6WyJjb250cm9sLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJnb29nbGVtYXBzXCIgLz5cbmltcG9ydCB7IEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG4vKipcbiAqIEFnbU1hcENvbnRyb2wgYWxsb3dzIHRvIGFkZCBhIGN1c3RvbSBjb250cm9sIHRvIHRoZSBtYXBcbiAqXG4gKiBTZWUgW1Bvc2l0aW9uaW5nIEN1c3RvbSBDb250cm9sc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvY29udHJvbHM/aGw9ZW4jQ3VzdG9tUG9zaXRpb25pbmd9XG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIDxhZ20tY29udHJvbCBbcG9zaXRpb25dPVwicG9zaXRpb25cIj5cbiAqICAgPGRpdiBjb250ZW50PlxuICogICAgICAgPCEtLSBteSBtYXJrdXAgLS0+XG4gKiAgIDwvZGl2PlxuICogPC9hZ20tY29udHJvbD5cbiAqIGBgYFxuICpcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWdtQ29udHJvbCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBlbG07XG4gICAgcHJpdmF0ZSBfbWFwc1dyYXBwZXI7XG4gICAgLyoqXG4gICAgICogIFBvc2l0aW9uIG9mIHRoZSBjb250cm9sXG4gICAgICovXG4gICAgcG9zaXRpb246IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihlbG06IEVsZW1lbnRSZWYsIF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHByaXZhdGUgZ2V0RWxlbWVudEluZGV4O1xufVxuIl19