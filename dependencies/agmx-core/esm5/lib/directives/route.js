import { __decorate, __read } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
var AgmRoute = /** @class */ (function () {
    function AgmRoute(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.optimized = false;
        this.displayed = new EventEmitter();
    }
    AgmRoute.prototype.ngOnInit = function () {
    };
    AgmRoute.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.nodes && this.nodes.length > 25) {
            alert('No es posible mostrar mas de 25 puntos por ruta.');
            alert('Google does not allow more than 25 points bt route.');
            return;
        }
        if (!!this.directionsDisplay) {
            this.directionsDisplay.setMap(null); // reset route
        }
        this.gmapsApi.getNativeMap().then(function (map) {
            var directionsService = new google.maps.DirectionsService;
            _this.directionsDisplay = new google.maps.DirectionsRenderer({
                // draggable: true,
                map: map,
            });
            if (!!_this.nodes) {
                var _a = __read(_this.nodes), first = _a[0], others = _a.slice(1);
                // ;
                var options = {
                    origin: first,
                    destination: _this.nodes[_this.nodes.length - 1],
                    optimizeWaypoints: _this.optimized,
                    // strokeColor: this.strokeColor,
                    travelMode: google.maps.TravelMode.DRIVING
                };
                if (_this.nodes.length > 2) {
                    var _b = __read(others.reverse()), last = _b[0], middle = _b.slice(1);
                    options.waypoints = middle.reverse() // reverse back because it needs to keep the positions
                        .map(function (item) { return ({
                        location: item,
                        stopover: true,
                    }); });
                }
                if (!!options.origin) {
                    directionsService.route(options, function (response, status) {
                        if (status === google.maps.DirectionsStatus.OK) {
                            _this.directionsDisplay.setDirections(response);
                            _this.displayed.emit(response);
                            // this.computeTotalDistance(response);
                            if (!!_this.model) {
                                _this.model.directionResult = response;
                            }
                        }
                        else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    });
                }
            }
            else if (!!_this.display) {
                _this.directionsDisplay.setDirections(_this.display);
                // this.computeTotalDistance(this.display);
            }
        });
    };
    // computeTotalDistance(result: any): void {
    //     if (this.info) {
    //         moment.locale('es');
    //
    //         let totalKm = 0;
    //         let totalTime = 0;
    //         const myRoute = result.routes[0];
    //         for (let i = 0; i < myRoute.legs.length; i++) {
    //             totalKm += myRoute.legs[i].distance.value;
    //             totalTime += myRoute.legs[i].duration.value;
    //         }
    //         const duration = moment.duration(totalTime, 'seconds');
    //         totalKm = totalKm / 1000;
    //         this.info.innerHTML = `Distancia: ${totalKm}km. Tiempo: ${duration.humanize()}`;
    //     }
    //
    // }
    AgmRoute.prototype.ngOnDestroy = function () {
        this.directionsDisplay.setMap(null);
        // unsubscribe all registered observable subscriptions
        // this._subscriptions.forEach((s) => s.unsubscribe());
    };
    AgmRoute.ctorParameters = function () { return [
        { type: GoogleMapsAPIWrapper }
    ]; };
    __decorate([
        Input()
    ], AgmRoute.prototype, "nodes", void 0);
    __decorate([
        Input()
    ], AgmRoute.prototype, "optimized", void 0);
    __decorate([
        Input()
    ], AgmRoute.prototype, "info", void 0);
    __decorate([
        Input()
    ], AgmRoute.prototype, "model", void 0);
    __decorate([
        Input()
    ], AgmRoute.prototype, "display", void 0);
    __decorate([
        Input()
    ], AgmRoute.prototype, "strokeColor", void 0);
    __decorate([
        Output()
    ], AgmRoute.prototype, "displayed", void 0);
    AgmRoute = __decorate([
        Directive({
            selector: 'agm-route'
        })
    ], AgmRoute);
    return AgmRoute;
}());
export { AgmRoute };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkcsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFRekU7SUFXSSxrQkFBb0IsUUFBOEI7UUFBOUIsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7UUFUekMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQU9qQixjQUFTLEdBQStDLElBQUksWUFBWSxFQUFnQyxDQUFDO0lBR25ILENBQUM7SUFFRCwyQkFBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFBQSxpQkF5REM7UUF4REcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUN0QyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztZQUMxRCxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztZQUM3RCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWM7U0FDdEQ7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDakMsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDNUQsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDMUQsbUJBQW1CO2dCQUNuQixHQUFHLEVBQUUs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LFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1NBQ3hCLENBQUM7T0FFVyxRQUFRLENBbUdwQjtJQUFELGVBQUM7Q0FBQSxBQW5HRCxJQW1HQztTQW5HWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7R29vZ2xlTWFwc0FQSVdyYXBwZXJ9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcblxuZGVjbGFyZSBsZXQgZ29vZ2xlOiBhbnk7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnYWdtLXJvdXRlJ1xufSlcblxuZXhwb3J0IGNsYXNzIEFnbVJvdXRlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgbm9kZXM6IHN0cmluZ1tdIHwgZ29vZ2xlLm1hcHMuTGF0TG5nW10gfCBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsW10gfCBnb29nbGUubWFwcy5QbGFjZVtdO1xuICAgIEBJbnB1dCgpIG9wdGltaXplZCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGluZm87XG4gICAgQElucHV0KCkgbW9kZWw7XG4gICAgQElucHV0KCkgZGlzcGxheTtcbiAgICBASW5wdXQoKSBzdHJva2VDb2xvcjtcbiAgICBkaXJlY3Rpb25zRGlzcGxheTogZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyO1xuXG4gICAgQE91dHB1dCgpIGRpc3BsYXllZDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZXN1bHQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVzdWx0PigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBnbWFwc0FwaTogR29vZ2xlTWFwc0FQSVdyYXBwZXIpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZXMgJiYgdGhpcy5ub2Rlcy5sZW5ndGggPiAyNSkge1xuICAgICAgICAgICAgYWxlcnQoJ05vIGVzIHBvc2libGUgbW9zdHJhciBtYXMgZGUgMjUgcHVudG9zIHBvciBydXRhLicpO1xuICAgICAgICAgICAgYWxlcnQoJ0dvb2dsZSBkb2VzIG5vdCBhbGxvdyBtb3JlIHRoYW4gMjUgcG9pbnRzIGJ0IHJvdXRlLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghIXRoaXMuZGlyZWN0aW9uc0Rpc3BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uc0Rpc3BsYXkuc2V0TWFwKG51bGwpOyAvLyByZXNldCByb3V0ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nbWFwc0FwaS5nZXROYXRpdmVNYXAoKS50aGVuKG1hcCA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZTtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKHtcbiAgICAgICAgICAgICAgLy8gZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICAgICAgLy8gcGFuZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1wYW5lbCcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghIXRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgW2ZpcnN0LCAuLi5vdGhlcnNdID0gdGhpcy5ub2RlcztcbiAgICAgICAgICAgICAgLy8gO1xuICAgICAgICAgICAgICBjb25zdCBvcHRpb25zOiBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICAgIG9yaWdpbjogZmlyc3QsXG4gICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogdGhpcy5ub2Rlc1t0aGlzLm5vZGVzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgICAgb3B0aW1pemVXYXlwb2ludHM6IHRoaXMub3B0aW1pemVkLFxuICAgICAgICAgICAgICAgICAgLy8gc3Ryb2tlQ29sb3I6IHRoaXMuc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsYXN0LCAuLi5taWRkbGVdID0gb3RoZXJzLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLndheXBvaW50cyA9IG1pZGRsZS5yZXZlcnNlKCkgLy8gcmV2ZXJzZSBiYWNrIGJlY2F1c2UgaXQgbmVlZHMgdG8ga2VlcCB0aGUgcG9zaXRpb25zXG4gICAgICAgICAgICAgICAgICAubWFwKChpdGVtKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBpdGVtIGFzIGdvb2dsZS5tYXBzLkxhdExuZyxcbiAgICAgICAgICAgICAgICAgICAgICBzdG9wb3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghIW9wdGlvbnMub3JpZ2luKSB7XG5cbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKG9wdGlvbnMsIChyZXNwb25zZSwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXllZC5lbWl0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jb21wdXRlVG90YWxEaXN0YW5jZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMubW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uUmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnRGlyZWN0aW9ucyByZXF1ZXN0IGZhaWxlZCBkdWUgdG8gJyArIHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmICghIXRoaXMuZGlzcGxheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyh0aGlzLmRpc3BsYXkpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY29tcHV0ZVRvdGFsRGlzdGFuY2UodGhpcy5kaXNwbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY29tcHV0ZVRvdGFsRGlzdGFuY2UocmVzdWx0OiBhbnkpOiB2b2lkIHtcbiAgICAvLyAgICAgaWYgKHRoaXMuaW5mbykge1xuICAgIC8vICAgICAgICAgbW9tZW50LmxvY2FsZSgnZXMnKTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgbGV0IHRvdGFsS20gPSAwO1xuICAgIC8vICAgICAgICAgbGV0IHRvdGFsVGltZSA9IDA7XG4gICAgLy8gICAgICAgICBjb25zdCBteVJvdXRlID0gcmVzdWx0LnJvdXRlc1swXTtcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlSb3V0ZS5sZWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICAgICAgdG90YWxLbSArPSBteVJvdXRlLmxlZ3NbaV0uZGlzdGFuY2UudmFsdWU7XG4gICAgLy8gICAgICAgICAgICAgdG90YWxUaW1lICs9IG15Um91dGUubGVnc1tpXS5kdXJhdGlvbi52YWx1ZTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gbW9tZW50LmR1cmF0aW9uKHRvdGFsVGltZSwgJ3NlY29uZHMnKTtcbiAgICAvLyAgICAgICAgIHRvdGFsS20gPSB0b3RhbEttIC8gMTAwMDtcbiAgICAvLyAgICAgICAgIHRoaXMuaW5mby5pbm5lckhUTUwgPSBgRGlzdGFuY2lhOiAke3RvdGFsS219a20uIFRpZW1wbzogJHtkdXJhdGlvbi5odW1hbml6ZSgpfWA7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAobnVsbCk7XG4gICAgICAvLyB1bnN1YnNjcmliZSBhbGwgcmVnaXN0ZXJlZCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbnNcbiAgICAgIC8vIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaCgocykgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=