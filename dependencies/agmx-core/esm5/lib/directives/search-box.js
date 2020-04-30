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
var AgmSearchBox = /** @class */ (function () {
    function AgmSearchBox(gmapsApi, _manager) {
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
    AgmSearchBox.prototype.ngOnInit = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            _this._manager.createEventObservable(_this).subscribe(function () {
                _this.placesChange.emit(_this.getSearchBoxEl().getPlaces());
                if (_this.autoBoundResults) {
                    _this.autoBound();
                }
            });
        });
    };
    /** @internal */
    AgmSearchBox.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            if (changes['bounds']) {
                _this.getSearchBoxEl().setBounds(_this.bounds);
            }
            if (changes['position']) {
                _this.updatePosition(_this.position);
            }
        });
    };
    /** @internal */
    AgmSearchBox.prototype.getSearchBoxEl = function () {
        if (this.searchBox === undefined) {
            this.searchBox = new google.maps.places.SearchBox(this.panel.nativeElement, {
                bounds: this.bounds
            });
        }
        return this.searchBox;
    };
    /** @internal */
    AgmSearchBox.prototype.updatePosition = function (position) {
        var _this = this;
        if (position) {
            this.gmapsApi.getControls().then(function (controls) {
                controls[position].push(_this.panel.nativeElement);
            });
        }
    };
    /** @internal */
    AgmSearchBox.prototype.autoBound = function () {
        var places = this.getSearchBoxEl().getPlaces();
        if (places.length === 0) {
            return;
        }
        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
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
    };
    AgmSearchBox.ctorParameters = function () { return [
        { type: GoogleMapsAPIWrapper },
        { type: SearchBoxManager }
    ]; };
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
            styles: [".search-box {\n        background-color: #fff;\n        font-family: Roboto;\n        font-size: 15px;\n        font-weight: 300;\n        margin-left: 12px;\n        padding: 0 11px 0 13px;\n        text-overflow: ellipsis;\n        width: 300px;\n        margin-top: 10px;\n        height: 26px;\n      }\n\n      .search-box:focus {\n        border-color: #4d90fe;\n      }"]
        })
    ], AgmSearchBox);
    return AgmSearchBox;
}());
export { AgmSearchBox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnbXgtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3NlYXJjaC1ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBSXpFOzs7Ozs7Ozs7O0dBVUc7QUF1Qkg7SUE0QkUsc0JBQW9CLFFBQThCLEVBQVUsUUFBMEI7UUFBbEUsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQWR0Rjs7V0FFRztRQUNNLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUsxQzs7V0FFRztRQUNPLGlCQUFZLEdBQXdELElBQUksWUFBWSxFQUF5QyxDQUFDO0lBRy9DLENBQUM7SUFDMUYsZ0JBQWdCO0lBQ2hCLCtCQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEtBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDbEQsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQzFELElBQUksS0FBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ2xCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIs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O0NBQUEsQUEvRkQsSUErRkM7U0EvRlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dvb2dsZU1hcHNBUElXcmFwcGVyfSBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQge1NlYXJjaEJveE1hbmFnZXJ9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3NlYXJjaC1ib3gtbWFuYWdlcic7XG5cbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xuXG4vKipcbiAqIEFnbVNlYXJjaEJveCBhbGxvd3MgdG8gYWRkIGEgc2VhcmNoIGJveCB0byB0aGUgbWFwXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIDxhZ20tc2VhcmNoLWJveCBbcGxhY2Vob2xkZXJdPVwiJ1NlYXJjaCdcIiBbcG9zaXRpb25dPVwiQ29udHJvbFBvc2l0aW9uLlRPUF9MRUZUXCJcbiAqICAgKHBsYWNlc0NoYW5nZSk9XCJ1cGRhdGVSZWYoJGV2ZW50KVwiPjwvYWdtLXNlYXJjaC1ib3g+XG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnbS1zZWFyY2gtYm94JyxcbiAgdGVtcGxhdGU6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInNlYXJjaC1ib3hcIiAjcGFuZWwgcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyfX1cIj4nLFxuICBzdHlsZXM6IFtcbiAgICBgLnNlYXJjaC1ib3gge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDExcHggMCAxM3B4O1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICB9XG5cbiAgICAgIC5zZWFyY2gtYm94OmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNGQ5MGZlO1xuICAgICAgfWBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZ21TZWFyY2hCb3ggaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJykgcGFuZWw6IEVsZW1lbnRSZWY7XG4gIC8qKlxuICAgKiBQbGFjZWhvbGRlciBmb3IgdGhlIHNlYXJjaCBib3ggaW5wdXRcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQb3NpdGlvbiBpbiB3aGljaCB0aGUgY29udHJvbCBpcyBnb2luZyB0byBwbGFjZWRcbiAgICogVGhpcyBpbnB1dCBpcyByZXF1aXJlZCBvdGhlcndpc2UgdGhlIGJveCB3b24ndCBiZSBhZGRlZCB0byB0aGUgbWFwXG4gICAqL1xuICBASW5wdXQoKSBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uO1xuICAvKipcbiAgICogV2lsbCBhdXRvbWF0aWNhbGx5IGNlbnRlciB0aGUgbWFwIHRvIHRoZSBjbGlja2VkIHJlc3VsdFxuICAgKi9cbiAgQElucHV0KCkgYXV0b0JvdW5kUmVzdWx0czogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiBUaGUgYXJlYSB0b3dhcmRzIHdoaWNoIHRvIGJpYXMgcXVlcnkgcHJlZGljdGlvbnMuIFByZWRpY3Rpb25zIGFyZSBiaWFzZWQgdG93YXJkcywgYnV0IG5vdCByZXN0cmljdGVkIHRvLCBxdWVyaWVzIHRhcmdldGluZyB0aGVzZSBib3VuZHMuXG4gICAqL1xuICBASW5wdXQoKSBib3VuZHM6IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcyB8IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kc0xpdGVyYWw7XG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhIHF1ZXJ5LCB3aWxsIHJldHVybiB0aGUgcGxhY2VzIG1hdGNoaW5nIHRoYXQgcXVlcnkuXG4gICAqL1xuICBAT3V0cHV0KCkgcGxhY2VzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8Z29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlUmVzdWx0Pj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZVJlc3VsdD4+KCk7XG4gIHByaXZhdGUgc2VhcmNoQm94OiBnb29nbGUubWFwcy5wbGFjZXMuU2VhcmNoQm94O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ21hcHNBcGk6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBwcml2YXRlIF9tYW5hZ2VyOiBTZWFyY2hCb3hNYW5hZ2VyKSB7fVxuICAvKiogQGludGVybmFsICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ21hcHNBcGkuZ2V0TmF0aXZlTWFwKCkudGhlbihtYXAgPT4ge1xuICAgICAgdGhpcy5fbWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUodGhpcykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5wbGFjZXNDaGFuZ2UuZW1pdCh0aGlzLmdldFNlYXJjaEJveEVsKCkuZ2V0UGxhY2VzKCkpO1xuICAgICAgICBpZiAodGhpcy5hdXRvQm91bmRSZXN1bHRzKSB7XG4gICAgICAgICAgdGhpcy5hdXRvQm91bmQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG4gICAgdGhpcy5nbWFwc0FwaS5nZXROYXRpdmVNYXAoKS50aGVuKG1hcCA9PiB7XG4gICAgICBpZiAoY2hhbmdlc1snYm91bmRzJ10pIHtcbiAgICAgICAgdGhpcy5nZXRTZWFyY2hCb3hFbCgpLnNldEJvdW5kcyh0aGlzLmJvdW5kcyk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlc1sncG9zaXRpb24nXSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgZ2V0U2VhcmNoQm94RWwoKTogZ29vZ2xlLm1hcHMucGxhY2VzLlNlYXJjaEJveCB7XG4gICAgaWYgKHRoaXMuc2VhcmNoQm94ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2VhcmNoQm94ID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5TZWFyY2hCb3godGhpcy5wYW5lbC5uYXRpdmVFbGVtZW50LCB7XG4gICAgICAgIGJvdW5kczogdGhpcy5ib3VuZHNcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZWFyY2hCb3g7XG4gIH1cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICB1cGRhdGVQb3NpdGlvbihwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uKSB7XG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmdtYXBzQXBpLmdldENvbnRyb2xzKCkudGhlbigoY29udHJvbHM6IGdvb2dsZS5tYXBzLk1WQ0FycmF5PE5vZGU+W10pID0+IHtcbiAgICAgICAgY29udHJvbHNbcG9zaXRpb25dLnB1c2godGhpcy5wYW5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGF1dG9Cb3VuZCgpIHtcbiAgICBjb25zdCBwbGFjZXMgPSB0aGlzLmdldFNlYXJjaEJveEVsKCkuZ2V0UGxhY2VzKCk7XG5cbiAgICBpZiAocGxhY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZvciBlYWNoIHBsYWNlLCBnZXQgdGhlIGljb24sIG5hbWUgYW5kIGxvY2F0aW9uLlxuICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICBwbGFjZXMuZm9yRWFjaCgocGxhY2U6IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZVJlc3VsdCkgPT4ge1xuICAgICAgaWYgKCFwbGFjZS5nZW9tZXRyeSkge1xuICAgICAgICBjb25zb2xlLmxvZygnUGxhY2UgZG9lcyBub3QgY29udGFpbiBhIGdlb21ldHJ5Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KSB7XG4gICAgICAgIC8vIE9ubHkgZ2VvY29kZXMgaGF2ZSB2aWV3cG9ydC5cbiAgICAgICAgYm91bmRzLnVuaW9uKHBsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvdW5kcy5leHRlbmQocGxhY2UuZ2VvbWV0cnkubG9jYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZ21hcHNBcGkuZml0Qm91bmRzKGJvdW5kcyk7XG4gIH1cblxufVxuIl19