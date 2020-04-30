/// <reference types="googlemaps" />
import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
import { SearchBoxManager } from '../services/managers/search-box-manager';
/**
 * AgmSearchBox allows to add a search box to the map
 *
 * ### Example
 *
 * ```
 * <agm-search-box [placeholder]="'Search'" [position]="ControlPosition.TOP_LEFT"
 *   (placesChange)="updateRef($event)"></agm-search-box>
 * ```
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class AgmSearchBox implements OnInit, OnChanges {
    private gmapsApi;
    private _manager;
    /**
     * @internal
     */
    panel: ElementRef;
    /**
     * Placeholder for the search box input
     */
    placeholder: string;
    /**
     * Position in which the control is going to placed
     * This input is required otherwise the box won't be added to the map
     */
    position: google.maps.ControlPosition;
    /**
     * Will automatically center the map to the clicked result
     */
    autoBoundResults: boolean;
    /**
     * The area towards which to bias query predictions. Predictions are biased towards, but not restricted to, queries targeting these bounds.
     */
    bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral;
    /**
     * This event is fired when the user selects a query, will return the places matching that query.
     */
    placesChange: EventEmitter<Array<google.maps.places.PlaceResult>>;
    private searchBox;
    constructor(gmapsApi: GoogleMapsAPIWrapper, _manager: SearchBoxManager);
    /** @internal */
    ngOnInit(): void;
    /** @internal */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    /** @internal */
    getSearchBoxEl(): google.maps.places.SearchBox;
    /** @internal */
    updatePosition(position: google.maps.ControlPosition): void;
    /** @internal */
    autoBound(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmSearchBox, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AgmSearchBox, "agm-search-box", never, { "autoBoundResults": "autoBoundResults"; "placeholder": "placeholder"; "position": "position"; "bounds": "bounds"; }, { "placesChange": "placesChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5kLnRzIiwic291cmNlcyI6WyJzZWFyY2gtYm94LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImdvb2dsZW1hcHNcIiAvPlxuaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7IFNlYXJjaEJveE1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9zZWFyY2gtYm94LW1hbmFnZXInO1xuLyoqXG4gKiBBZ21TZWFyY2hCb3ggYWxsb3dzIHRvIGFkZCBhIHNlYXJjaCBib3ggdG8gdGhlIG1hcFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiA8YWdtLXNlYXJjaC1ib3ggW3BsYWNlaG9sZGVyXT1cIidTZWFyY2gnXCIgW3Bvc2l0aW9uXT1cIkNvbnRyb2xQb3NpdGlvbi5UT1BfTEVGVFwiXG4gKiAgIChwbGFjZXNDaGFuZ2UpPVwidXBkYXRlUmVmKCRldmVudClcIj48L2FnbS1zZWFyY2gtYm94PlxuICogYGBgXG4gKlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZ21TZWFyY2hCb3ggaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBnbWFwc0FwaTtcbiAgICBwcml2YXRlIF9tYW5hZ2VyO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHBhbmVsOiBFbGVtZW50UmVmO1xuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIGZvciB0aGUgc2VhcmNoIGJveCBpbnB1dFxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gaW4gd2hpY2ggdGhlIGNvbnRyb2wgaXMgZ29pbmcgdG8gcGxhY2VkXG4gICAgICogVGhpcyBpbnB1dCBpcyByZXF1aXJlZCBvdGhlcndpc2UgdGhlIGJveCB3b24ndCBiZSBhZGRlZCB0byB0aGUgbWFwXG4gICAgICovXG4gICAgcG9zaXRpb246IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbjtcbiAgICAvKipcbiAgICAgKiBXaWxsIGF1dG9tYXRpY2FsbHkgY2VudGVyIHRoZSBtYXAgdG8gdGhlIGNsaWNrZWQgcmVzdWx0XG4gICAgICovXG4gICAgYXV0b0JvdW5kUmVzdWx0czogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgYXJlYSB0b3dhcmRzIHdoaWNoIHRvIGJpYXMgcXVlcnkgcHJlZGljdGlvbnMuIFByZWRpY3Rpb25zIGFyZSBiaWFzZWQgdG93YXJkcywgYnV0IG5vdCByZXN0cmljdGVkIHRvLCBxdWVyaWVzIHRhcmdldGluZyB0aGVzZSBib3VuZHMuXG4gICAgICovXG4gICAgYm91bmRzOiBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMgfCBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHNMaXRlcmFsO1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIGEgcXVlcnksIHdpbGwgcmV0dXJuIHRoZSBwbGFjZXMgbWF0Y2hpbmcgdGhhdCBxdWVyeS5cbiAgICAgKi9cbiAgICBwbGFjZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VSZXN1bHQ+PjtcbiAgICBwcml2YXRlIHNlYXJjaEJveDtcbiAgICBjb25zdHJ1Y3RvcihnbWFwc0FwaTogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIF9tYW5hZ2VyOiBTZWFyY2hCb3hNYW5hZ2VyKTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2U7XG4gICAgfSk6IHZvaWQ7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGdldFNlYXJjaEJveEVsKCk6IGdvb2dsZS5tYXBzLnBsYWNlcy5TZWFyY2hCb3g7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uOiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24pOiB2b2lkO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBhdXRvQm91bmQoKTogdm9pZDtcbn1cbiJdfQ==