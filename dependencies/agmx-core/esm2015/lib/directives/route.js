import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
let AgmRoute = class AgmRoute {
    constructor(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.optimized = false;
        this.displayed = new EventEmitter();
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.nodes && this.nodes.length > 25) {
            alert('No es posible mostrar mas de 25 puntos por ruta.');
            alert('Google does not allow more than 25 points bt route.');
            return;
        }
        if (!!this.directionsDisplay) {
            this.directionsDisplay.setMap(null); // reset route
        }
        this.gmapsApi.getNativeMap().then(map => {
            const directionsService = new google.maps.DirectionsService;
            this.directionsDisplay = new google.maps.DirectionsRenderer({
                // draggable: true,
                map: map,
            });
            if (!!this.nodes) {
                const [first, ...others] = this.nodes;
                // ;
                const options = {
                    origin: first,
                    destination: this.nodes[this.nodes.length - 1],
                    optimizeWaypoints: this.optimized,
                    // strokeColor: this.strokeColor,
                    travelMode: google.maps.TravelMode.DRIVING
                };
                if (this.nodes.length > 2) {
                    const [last, ...middle] = others.reverse();
                    options.waypoints = middle.reverse() // reverse back because it needs to keep the positions
                        .map((item) => ({
                        location: item,
                        stopover: true,
                    }));
                }
                if (!!options.origin) {
                    directionsService.route(options, (response, status) => {
                        if (status === google.maps.DirectionsStatus.OK) {
                            this.directionsDisplay.setDirections(response);
                            this.displayed.emit(response);
                            // this.computeTotalDistance(response);
                            if (!!this.model) {
                                this.model.directionResult = response;
                            }
                        }
                        else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    });
                }
            }
            else if (!!this.display) {
                this.directionsDisplay.setDirections(this.display);
                // this.computeTotalDistance(this.display);
            }
        });
    }
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
    ngOnDestroy() {
        this.directionsDisplay.setMap(null);
        // unsubscribe all registered observable subscriptions
        // this._subscriptions.forEach((s) => s.unsubscribe());
    }
};
AgmRoute.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper }
];
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
export { AgmRoute };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ214LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkcsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFRekUsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUTtJQVdqQixZQUFvQixRQUE4QjtRQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQVR6QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBT2pCLGNBQVMsR0FBK0MsSUFBSSxZQUFZLEVBQWdDLENBQUM7SUFHbkgsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDdEMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7WUFDMUQsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7WUFDN0QsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjO1NBQ3REO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDNUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDMUQsbUJBQW1CO2dCQUNuQixHQUFH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LEtBQUssRUFBRTs2Q0FBYTtBQUdYO0lBQVQsTUFBTSxFQUFFOzJDQUEwRztBQVQxRyxRQUFRO0lBSnBCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO0tBQ3hCLENBQUM7R0FFVyxRQUFRLENBbUdwQjtTQW5HWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7R29vZ2xlTWFwc0FQSVdyYXBwZXJ9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcblxuZGVjbGFyZSBsZXQgZ29vZ2xlOiBhbnk7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnYWdtLXJvdXRlJ1xufSlcblxuZXhwb3J0IGNsYXNzIEFnbVJvdXRlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgbm9kZXM6IHN0cmluZ1tdIHwgZ29vZ2xlLm1hcHMuTGF0TG5nW10gfCBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsW10gfCBnb29nbGUubWFwcy5QbGFjZVtdO1xuICAgIEBJbnB1dCgpIG9wdGltaXplZCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGluZm87XG4gICAgQElucHV0KCkgbW9kZWw7XG4gICAgQElucHV0KCkgZGlzcGxheTtcbiAgICBASW5wdXQoKSBzdHJva2VDb2xvcjtcbiAgICBkaXJlY3Rpb25zRGlzcGxheTogZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyO1xuXG4gICAgQE91dHB1dCgpIGRpc3BsYXllZDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZXN1bHQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVzdWx0PigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBnbWFwc0FwaTogR29vZ2xlTWFwc0FQSVdyYXBwZXIpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZXMgJiYgdGhpcy5ub2Rlcy5sZW5ndGggPiAyNSkge1xuICAgICAgICAgICAgYWxlcnQoJ05vIGVzIHBvc2libGUgbW9zdHJhciBtYXMgZGUgMjUgcHVudG9zIHBvciBydXRhLicpO1xuICAgICAgICAgICAgYWxlcnQoJ0dvb2dsZSBkb2VzIG5vdCBhbGxvdyBtb3JlIHRoYW4gMjUgcG9pbnRzIGJ0IHJvdXRlLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghIXRoaXMuZGlyZWN0aW9uc0Rpc3BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uc0Rpc3BsYXkuc2V0TWFwKG51bGwpOyAvLyByZXNldCByb3V0ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nbWFwc0FwaS5nZXROYXRpdmVNYXAoKS50aGVuKG1hcCA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZTtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKHtcbiAgICAgICAgICAgICAgLy8gZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICAgICAgLy8gcGFuZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1wYW5lbCcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghIXRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgW2ZpcnN0LCAuLi5vdGhlcnNdID0gdGhpcy5ub2RlcztcbiAgICAgICAgICAgICAgLy8gO1xuICAgICAgICAgICAgICBjb25zdCBvcHRpb25zOiBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICAgIG9yaWdpbjogZmlyc3QsXG4gICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogdGhpcy5ub2Rlc1t0aGlzLm5vZGVzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgICAgb3B0aW1pemVXYXlwb2ludHM6IHRoaXMub3B0aW1pemVkLFxuICAgICAgICAgICAgICAgICAgLy8gc3Ryb2tlQ29sb3I6IHRoaXMuc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsYXN0LCAuLi5taWRkbGVdID0gb3RoZXJzLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLndheXBvaW50cyA9IG1pZGRsZS5yZXZlcnNlKCkgLy8gcmV2ZXJzZSBiYWNrIGJlY2F1c2UgaXQgbmVlZHMgdG8ga2VlcCB0aGUgcG9zaXRpb25zXG4gICAgICAgICAgICAgICAgICAubWFwKChpdGVtKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBpdGVtIGFzIGdvb2dsZS5tYXBzLkxhdExuZyxcbiAgICAgICAgICAgICAgICAgICAgICBzdG9wb3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghIW9wdGlvbnMub3JpZ2luKSB7XG5cbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKG9wdGlvbnMsIChyZXNwb25zZSwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXllZC5lbWl0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jb21wdXRlVG90YWxEaXN0YW5jZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMubW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uUmVzdWx0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnRGlyZWN0aW9ucyByZXF1ZXN0IGZhaWxlZCBkdWUgdG8gJyArIHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmICghIXRoaXMuZGlzcGxheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyh0aGlzLmRpc3BsYXkpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY29tcHV0ZVRvdGFsRGlzdGFuY2UodGhpcy5kaXNwbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY29tcHV0ZVRvdGFsRGlzdGFuY2UocmVzdWx0OiBhbnkpOiB2b2lkIHtcbiAgICAvLyAgICAgaWYgKHRoaXMuaW5mbykge1xuICAgIC8vICAgICAgICAgbW9tZW50LmxvY2FsZSgnZXMnKTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgbGV0IHRvdGFsS20gPSAwO1xuICAgIC8vICAgICAgICAgbGV0IHRvdGFsVGltZSA9IDA7XG4gICAgLy8gICAgICAgICBjb25zdCBteVJvdXRlID0gcmVzdWx0LnJvdXRlc1swXTtcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlSb3V0ZS5sZWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICAgICAgdG90YWxLbSArPSBteVJvdXRlLmxlZ3NbaV0uZGlzdGFuY2UudmFsdWU7XG4gICAgLy8gICAgICAgICAgICAgdG90YWxUaW1lICs9IG15Um91dGUubGVnc1tpXS5kdXJhdGlvbi52YWx1ZTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gbW9tZW50LmR1cmF0aW9uKHRvdGFsVGltZSwgJ3NlY29uZHMnKTtcbiAgICAvLyAgICAgICAgIHRvdGFsS20gPSB0b3RhbEttIC8gMTAwMDtcbiAgICAvLyAgICAgICAgIHRoaXMuaW5mby5pbm5lckhUTUwgPSBgRGlzdGFuY2lhOiAke3RvdGFsS219a20uIFRpZW1wbzogJHtkdXJhdGlvbi5odW1hbml6ZSgpfWA7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAobnVsbCk7XG4gICAgICAvLyB1bnN1YnNjcmliZSBhbGwgcmVnaXN0ZXJlZCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbnNcbiAgICAgIC8vIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaCgocykgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=