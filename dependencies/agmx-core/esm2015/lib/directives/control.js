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
let AgmControl = class AgmControl {
    constructor(elm, _mapsWrapper) {
        this.elm = elm;
        this._mapsWrapper = _mapsWrapper;
    }
    /* @internal */
    ngOnChanges(changes) {
        if (changes['position'] && this.position) {
            this._mapsWrapper.getControls().then((controls) => {
                const index = this.getElementIndex(controls, changes);
                if (index !== null) {
                    controls[changes['position'].previousValue].removeAt(index);
                }
                controls[this.position].push(this.elm.nativeElement);
            });
        }
        else if (changes['position'] && changes['position'].currentValue === null && changes['position'].previousValue !== null) {
            this._mapsWrapper.getControls().then((controls) => {
                const index = this.getElementIndex(controls, changes);
                if (index !== null) {
                    controls[changes['position'].previousValue].removeAt(index);
                }
            });
        }
    }
    getElementIndex(controls, changes) {
        if (!controls[changes['position'].previousValue]) {
            return null;
        }
        let index = null;
        controls[changes['position'].previousValue].forEach((elem, i) => {
            if (elem === this.elm.nativeElement) {
                index = i;
                return null;
            }
        });
        return index;
    }
};
AgmControl.ctorParameters = () => [
    { type: ElementRef },
    { type: GoogleMapsAPIWrapper }
];
__decorate([
    Input()
], AgmControl.prototype, "position", void 0);
AgmControl = __decorate([
    Component({
        selector: 'agm-control',
        template: '<ng-content select="[content]"></ng-content>'
    })
], AgmControl);
export { AgmControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnbXgtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBRXpFOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUtILElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUFNckIsWUFBb0IsR0FBZSxFQUFVLFlBQWtDO1FBQTNELFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7SUFBRyxDQUFDO0lBRW5GLGVBQWU7SUFDZixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQXNDLEVBQUUsRUFBRTtnQkFDOUUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3RELElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtvQkFDbEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzdEO2dCQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkQsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQ3pILElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBc0MsRUFBRSxFQUFFO2dCQUM5RSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUNsQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDN0Q7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVPLGVBQWUsQ0FBQyxRQUFzQyxFQUFFLE9BQXNCO1FBQ3BGLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUQsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUU7Z0JBQ25DLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ1YsT0FBTyxJQUFJLENBQUM7YUFDYjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQTs7WUFwQzBCLFVBQVU7WUFBd0Isb0JBQW9COztBQUZ0RTtJQUFSLEtBQUssRUFBRTs0Q0FBdUM7QUFKcEMsVUFBVTtJQUp0QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsOENBQThDO0tBQ3pELENBQUM7R0FDVyxVQUFVLENBMEN0QjtTQTFDWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHb29nbGVNYXBzQVBJV3JhcHBlcn0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuXG4vKipcbiAqIEFnbU1hcENvbnRyb2wgYWxsb3dzIHRvIGFkZCBhIGN1c3RvbSBjb250cm9sIHRvIHRoZSBtYXBcbiAqXG4gKiBTZWUgW1Bvc2l0aW9uaW5nIEN1c3RvbSBDb250cm9sc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvY29udHJvbHM/aGw9ZW4jQ3VzdG9tUG9zaXRpb25pbmd9XG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIDxhZ20tY29udHJvbCBbcG9zaXRpb25dPVwicG9zaXRpb25cIj5cbiAqICAgPGRpdiBjb250ZW50PlxuICogICAgICAgPCEtLSBteSBtYXJrdXAgLS0+XG4gKiAgIDwvZGl2PlxuICogPC9hZ20tY29udHJvbD5cbiAqIGBgYFxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWdtLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50IHNlbGVjdD1cIltjb250ZW50XVwiPjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21Db250cm9sIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqICBQb3NpdGlvbiBvZiB0aGUgY29udHJvbFxuICAgKi9cbiAgQElucHV0KCkgcG9zaXRpb246IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsbTogRWxlbWVudFJlZiwgcHJpdmF0ZSBfbWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyKSB7fVxuXG4gIC8qIEBpbnRlcm5hbCAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ3Bvc2l0aW9uJ10gJiYgdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuZ2V0Q29udHJvbHMoKS50aGVuKChjb250cm9sczogZ29vZ2xlLm1hcHMuTVZDQXJyYXk8Tm9kZT5bXSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0RWxlbWVudEluZGV4KGNvbnRyb2xzLCBjaGFuZ2VzKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udHJvbHNbY2hhbmdlc1sncG9zaXRpb24nXS5wcmV2aW91c1ZhbHVlXS5yZW1vdmVBdChpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250cm9sc1t0aGlzLnBvc2l0aW9uXS5wdXNoKHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2VzWydwb3NpdGlvbiddICYmIGNoYW5nZXNbJ3Bvc2l0aW9uJ10uY3VycmVudFZhbHVlID09PSBudWxsICYmIGNoYW5nZXNbJ3Bvc2l0aW9uJ10ucHJldmlvdXNWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuZ2V0Q29udHJvbHMoKS50aGVuKChjb250cm9sczogZ29vZ2xlLm1hcHMuTVZDQXJyYXk8Tm9kZT5bXSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0RWxlbWVudEluZGV4KGNvbnRyb2xzLCBjaGFuZ2VzKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udHJvbHNbY2hhbmdlc1sncG9zaXRpb24nXS5wcmV2aW91c1ZhbHVlXS5yZW1vdmVBdChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWxlbWVudEluZGV4KGNvbnRyb2xzOiBnb29nbGUubWFwcy5NVkNBcnJheTxOb2RlPltdLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCFjb250cm9sc1tjaGFuZ2VzWydwb3NpdGlvbiddLnByZXZpb3VzVmFsdWVdKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gbnVsbDtcbiAgICBjb250cm9sc1tjaGFuZ2VzWydwb3NpdGlvbiddLnByZXZpb3VzVmFsdWVdLmZvckVhY2goKGVsZW0sIGkpID0+IHtcbiAgICAgIGlmIChlbGVtID09PSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG59XG4iXX0=