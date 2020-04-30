import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
let SearchBoxManager = class SearchBoxManager {
    constructor(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
    }
    /** @internal */
    createEventObservable(searchBox) {
        return Observable.create((observer) => {
            searchBox.getSearchBoxEl().addListener('places_changed', (e) => {
                this._zone.run(() => observer.next(e));
            });
        });
    }
};
SearchBoxManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: NgZone }
];
SearchBoxManager.ɵprov = i0.ɵɵdefineInjectable({ factory: function SearchBoxManager_Factory() { return new SearchBoxManager(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); }, token: SearchBoxManager, providedIn: "root" });
SearchBoxManager = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SearchBoxManager);
export { SearchBoxManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdteC1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL21hbmFnZXJzL3NlYXJjaC1ib3gtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFDLFVBQVUsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUUxQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBTWhFLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBRTNCLFlBQW9CLFdBQWlDLEVBQVUsS0FBYTtRQUF4RCxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQUcsQ0FBQztJQUVoRixnQkFBZ0I7SUFDaEIscUJBQXFCLENBQUksU0FBdUI7UUFDOUMsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBcUIsRUFBRSxFQUFFO1lBQ2pELFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFJLEVBQUUsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7WUFWa0Msb0JBQW9CO1lBQWlCLE1BQU07OztBQUZqRSxnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQVk1QjtTQVpZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7R29vZ2xlTWFwc0FQSVdyYXBwZXJ9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7QWdtU2VhcmNoQm94fSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3NlYXJjaC1ib3gnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hNYW5hZ2VyIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hcGlXcmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7fVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KHNlYXJjaEJveDogQWdtU2VhcmNoQm94KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIHNlYXJjaEJveC5nZXRTZWFyY2hCb3hFbCgpLmFkZExpc3RlbmVyKCdwbGFjZXNfY2hhbmdlZCcsIChlOiBUKSA9PiB7XG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==