import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
var SearchBoxManager = /** @class */ (function () {
    function SearchBoxManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
    }
    /** @internal */
    SearchBoxManager.prototype.createEventObservable = function (searchBox) {
        var _this = this;
        return Observable.create(function (observer) {
            searchBox.getSearchBoxEl().addListener('places_changed', function (e) {
                _this._zone.run(function () { return observer.next(e); });
            });
        });
    };
    SearchBoxManager.ctorParameters = function () { return [
        { type: GoogleMapsAPIWrapper },
        { type: NgZone }
    ]; };
    SearchBoxManager.ɵprov = i0.ɵɵdefineInjectable({ factory: function SearchBoxManager_Factory() { return new SearchBoxManager(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); }, token: SearchBoxManager, providedIn: "root" });
    SearchBoxManager = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], SearchBoxManager);
    return SearchBoxManager;
}());
export { SearchBoxManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdteC1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL21hbmFnZXJzL3NlYXJjaC1ib3gtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFDLFVBQVUsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUUxQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBTWhFO0lBRUUsMEJBQW9CLFdBQWlDLEVBQVUsS0FBYTtRQUF4RCxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQUcsQ0FBQztJQUVoRixnQkFBZ0I7SUFDaEIsZ0RBQXFCLEdBQXJCLFVBQXlCLFNBQXVCO1FBQWhELGlCQU1DO1FBTEMsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBcUI7WUFDN0MsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLENBQUk7Z0JBQzVELEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQVRnQyxvQkFBb0I7Z0JBQWlCLE1BQU07OztJQUZqRSxnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQVk1QjsyQkF0QkQ7Q0FzQkMsQUFaRCxJQVlDO1NBWlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtHb29nbGVNYXBzQVBJV3JhcHBlcn0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuaW1wb3J0IHtBZ21TZWFyY2hCb3h9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvc2VhcmNoLWJveCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveE1hbmFnZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwaVdyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBwcml2YXRlIF96b25lOiBOZ1pvbmUpIHt9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oc2VhcmNoQm94OiBBZ21TZWFyY2hCb3gpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4ge1xuICAgICAgc2VhcmNoQm94LmdldFNlYXJjaEJveEVsKCkuYWRkTGlzdGVuZXIoJ3BsYWNlc19jaGFuZ2VkJywgKGU6IFQpID0+IHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4gb2JzZXJ2ZXIubmV4dChlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19