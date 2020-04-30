import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
let AgmSearchBox = class AgmSearchBox {
    constructor(gmapsApi, _manager) {
        this.gmapsApi = gmapsApi;
        this._manager = _manager;
        /**
         * Will automatically center the map to the clicked result
         */
        this.autoBoundResults = true;
        /**
         * This event is fired when the user selects a query, will return the places matching that query.
         */
        this.placesChange = new EventEmitter();
    }
    /** @internal */
    ngOnInit() {
        this.gmapsApi.getNativeMap().then(map => {
            this._manager.createEventObservable(this).subscribe(() => {
                this.placesChange.emit(this.getSearchBoxEl().getPlaces());
                if (this.autoBoundResults) {
                    this.autoBound();
                }
            });
        });
    }
    /** @internal */
    ngOnChanges(changes) {
        this.gmapsApi.getNativeMap().then(map => {
            if (changes['bounds']) {
                this.getSearchBoxEl().setBounds(this.bounds);
            }
            if (changes['position']) {
                this.updatePosition(this.position);
            }
        });
    }
    /** @internal */
    getSearchBoxEl() {
        if (this.searchBox === undefined) {
            this.searchBox = new google.maps.places.SearchBox(this.panel.nativeElement, {
                bounds: this.bounds
            });
        }
        return this.searchBox;
    }
    /** @internal */
    updatePosition(position) {
        if (position) {
            this.gmapsApi.getControls().then((controls) => {
                controls[position].push(this.panel.nativeElement);
            });
        }
    }
    /** @internal */
    autoBound() {
        const places = this.getSearchBoxEl().getPlaces();
        if (places.length === 0) {
            return;
        }
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry) {
                console.log('Place does not contain a geometry');
                return;
            }
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            }
            else {
                bounds.extend(place.geometry.location);
            }
        });
        this.gmapsApi.fitBounds(bounds);
    }
};
AgmSearchBox.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: SearchBoxManager }
];
__decorate([
    ViewChild('panel')
], AgmSearchBox.prototype, "panel", void 0);
__decorate([
    Input()
], AgmSearchBox.prototype, "placeholder", void 0);
__decorate([
    Input()
], AgmSearchBox.prototype, "position", void 0);
__decorate([
    Input()
], AgmSearchBox.prototype, "autoBoundResults", void 0);
__decorate([
    Input()
], AgmSearchBox.prototype, "bounds", void 0);
__decorate([
    Output()
], AgmSearchBox.prototype, "placesChange", void 0);
AgmSearchBox = __decorate([
    Component({
        selector: 'agm-search-box',
        template: '<input type="text" class="search-box" #panel placeholder="{{placeholder}}">',
        styles: [`.search-box {
        background-color: #fff;
        font-family: Roboto;
        font-size: 15px;
        font-weight: 300;
        margin-left: 12px;
        padding: 0 11px 0 13px;
        text-overflow: ellipsis;
        width: 300px;
        margin-top: 10px;
        height: 26px;
      }

      .search-box:focus {
        border-color: #4d90fe;
      }`]
    })
], AgmSearchBox);
export { AgmSearchBox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnbXgtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3NlYXJjaC1ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBSXpFOzs7Ozs7Ozs7O0dBVUc7QUF1QkgsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQTRCdkIsWUFBb0IsUUFBOEIsRUFBVSxRQUEwQjtRQUFsRSxhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBZHRGOztXQUVHO1FBQ00scUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBSzFDOztXQUVHO1FBQ08saUJBQVksR0FBd0QsSUFBSSxZQUFZLEVBQXlDLENBQUM7SUFHL0MsQ0FBQztJQUMxRixnQkFBZ0I7SUFDaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQzFELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ2xCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNM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VyxZQUFZLENBK0Z4QjtTQS9GWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R29vZ2xlTWFwc0FQSVdyYXBwZXJ9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7U2VhcmNoQm94TWFuYWdlcn0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvc2VhcmNoLWJveC1tYW5hZ2VyJztcblxuZGVjbGFyZSB2YXIgZ29vZ2xlOiBhbnk7XG5cbi8qKlxuICogQWdtU2VhcmNoQm94IGFsbG93cyB0byBhZGQgYSBzZWFyY2ggYm94IHRvIHRoZSBtYXBcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogPGFnbS1zZWFyY2gtYm94IFtwbGFjZWhvbGRlcl09XCInU2VhcmNoJ1wiIFtwb3NpdGlvbl09XCJDb250cm9sUG9zaXRpb24uVE9QX0xFRlRcIlxuICogICAocGxhY2VzQ2hhbmdlKT1cInVwZGF0ZVJlZigkZXZlbnQpXCI+PC9hZ20tc2VhcmNoLWJveD5cbiAqIGBgYFxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWdtLXNlYXJjaC1ib3gnLFxuICB0ZW1wbGF0ZTogJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwic2VhcmNoLWJveFwiICNwYW5lbCBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fVwiPicsXG4gIHN0eWxlczogW1xuICAgIGAuc2VhcmNoLWJveCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTFweCAwIDEzcHg7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1ib3g6Zm9jdXMge1xuICAgICAgICBib3JkZXItY29sb3I6ICM0ZDkwZmU7XG4gICAgICB9YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFnbVNlYXJjaEJveCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgQFZpZXdDaGlsZCgncGFuZWwnKSBwYW5lbDogRWxlbWVudFJlZjtcbiAgLyoqXG4gICAqIFBsYWNlaG9sZGVyIGZvciB0aGUgc2VhcmNoIGJveCBpbnB1dFxuICAgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgLyoqXG4gICAqIFBvc2l0aW9uIGluIHdoaWNoIHRoZSBjb250cm9sIGlzIGdvaW5nIHRvIHBsYWNlZFxuICAgKiBUaGlzIGlucHV0IGlzIHJlcXVpcmVkIG90aGVyd2lzZSB0aGUgYm94IHdvbid0IGJlIGFkZGVkIHRvIHRoZSBtYXBcbiAgICovXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb247XG4gIC8qKlxuICAgKiBXaWxsIGF1dG9tYXRpY2FsbHkgY2VudGVyIHRoZSBtYXAgdG8gdGhlIGNsaWNrZWQgcmVzdWx0XG4gICAqL1xuICBASW5wdXQoKSBhdXRvQm91bmRSZXN1bHRzOiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIFRoZSBhcmVhIHRvd2FyZHMgd2hpY2ggdG8gYmlhcyBxdWVyeSBwcmVkaWN0aW9ucy4gUHJlZGljdGlvbnMgYXJlIGJpYXNlZCB0b3dhcmRzLCBidXQgbm90IHJlc3RyaWN0ZWQgdG8sIHF1ZXJpZXMgdGFyZ2V0aW5nIHRoZXNlIGJvdW5kcy5cbiAgICovXG4gIEBJbnB1dCgpIGJvdW5kczogZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzIHwgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzTGl0ZXJhbDtcbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIGEgcXVlcnksIHdpbGwgcmV0dXJuIHRoZSBwbGFjZXMgbWF0Y2hpbmcgdGhhdCBxdWVyeS5cbiAgICovXG4gIEBPdXRwdXQoKSBwbGFjZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VSZXN1bHQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8Z29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlUmVzdWx0Pj4oKTtcbiAgcHJpdmF0ZSBzZWFyY2hCb3g6IGdvb2dsZS5tYXBzLnBsYWNlcy5TZWFyY2hCb3g7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnbWFwc0FwaTogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIHByaXZhdGUgX21hbmFnZXI6IFNlYXJjaEJveE1hbmFnZXIpIHt9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5nbWFwc0FwaS5nZXROYXRpdmVNYXAoKS50aGVuKG1hcCA9PiB7XG4gICAgICB0aGlzLl9tYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSh0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnBsYWNlc0NoYW5nZS5lbWl0KHRoaXMuZ2V0U2VhcmNoQm94RWwoKS5nZXRQbGFjZXMoKSk7XG4gICAgICAgIGlmICh0aGlzLmF1dG9Cb3VuZFJlc3VsdHMpIHtcbiAgICAgICAgICB0aGlzLmF1dG9Cb3VuZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1trZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICB0aGlzLmdtYXBzQXBpLmdldE5hdGl2ZU1hcCgpLnRoZW4obWFwID0+IHtcbiAgICAgIGlmIChjaGFuZ2VzWydib3VuZHMnXSkge1xuICAgICAgICB0aGlzLmdldFNlYXJjaEJveEVsKCkuc2V0Qm91bmRzKHRoaXMuYm91bmRzKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzWydwb3NpdGlvbiddKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBnZXRTZWFyY2hCb3hFbCgpOiBnb29nbGUubWFwcy5wbGFjZXMuU2VhcmNoQm94IHtcbiAgICBpZiAodGhpcy5zZWFyY2hCb3ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZWFyY2hCb3ggPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLlNlYXJjaEJveCh0aGlzLnBhbmVsLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgICAgYm91bmRzOiB0aGlzLmJvdW5kc1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNlYXJjaEJveDtcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIHVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uOiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24pIHtcbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHRoaXMuZ21hcHNBcGkuZ2V0Q29udHJvbHMoKS50aGVuKChjb250cm9sczogZ29vZ2xlLm1hcHMuTVZDQXJyYXk8Tm9kZT5bXSkgPT4ge1xuICAgICAgICBjb250cm9sc1twb3NpdGlvbl0ucHVzaCh0aGlzLnBhbmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYXV0b0JvdW5kKCkge1xuICAgIGNvbnN0IHBsYWNlcyA9IHRoaXMuZ2V0U2VhcmNoQm94RWwoKS5nZXRQbGFjZXMoKTtcblxuICAgIGlmIChwbGFjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRm9yIGVhY2ggcGxhY2UsIGdldCB0aGUgaWNvbiwgbmFtZSBhbmQgbG9jYXRpb24uXG4gICAgY29uc3QgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgIHBsYWNlcy5mb3JFYWNoKChwbGFjZTogZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlUmVzdWx0KSA9PiB7XG4gICAgICBpZiAoIXBsYWNlLmdlb21ldHJ5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQbGFjZSBkb2VzIG5vdCBjb250YWluIGEgZ2VvbWV0cnknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpIHtcbiAgICAgICAgLy8gT25seSBnZW9jb2RlcyBoYXZlIHZpZXdwb3J0LlxuICAgICAgICBib3VuZHMudW5pb24ocGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm91bmRzLmV4dGVuZChwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5nbWFwc0FwaS5maXRCb3VuZHMoYm91bmRzKTtcbiAgfVxuXG59XG4iXX0=