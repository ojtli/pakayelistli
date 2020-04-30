import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { AgmSearchBox } from '../../directives/search-box';
import * as ɵngcc0 from '@angular/core';
export declare class SearchBoxManager {
    private _apiWrapper;
    private _zone;
    constructor(_apiWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    /** @internal */
    createEventObservable<T>(searchBox: AgmSearchBox): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchBoxManager, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1tYW5hZ2VyLmQudHMiLCJzb3VyY2VzIjpbInNlYXJjaC1ib3gtbWFuYWdlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQgeyBBZ21TZWFyY2hCb3ggfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3NlYXJjaC1ib3gnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2VhcmNoQm94TWFuYWdlciB7XG4gICAgcHJpdmF0ZSBfYXBpV3JhcHBlcjtcbiAgICBwcml2YXRlIF96b25lO1xuICAgIGNvbnN0cnVjdG9yKF9hcGlXcmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgX3pvbmU6IE5nWm9uZSk7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihzZWFyY2hCb3g6IEFnbVNlYXJjaEJveCk6IE9ic2VydmFibGU8VD47XG59XG4iXX0=