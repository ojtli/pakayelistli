import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
// import {AgmMap} from './directives/map';
import { AgmCircle } from './directives/circle';
import { AgmInfoWindow } from './directives/info-window';
import { AgmMarker } from './directives/marker';
import { AgmPolygon } from './directives/polygon';
import { AgmPolyline } from './directives/polyline';
import { AgmPolylinePoint } from './directives/polyline-point';
import { AgmKmlLayer } from './directives/kml-layer';
import { AgmDataLayer } from './directives/data-layer';
import { AgmSearchBox } from './directives/search-box';
import { AgmControl } from './directives/control';
import { LazyMapsAPILoader } from './services/maps-api-loader/lazy-maps-api-loader';
import { LAZY_MAPS_API_CONFIG } from './services/maps-api-loader/lazy-maps-api-loader';
import { MapsAPILoader } from './services/maps-api-loader/maps-api-loader';
import { BROWSER_GLOBALS_PROVIDERS } from './utils/browser-globals';
import { AgmMap } from './directives/map';
import { AgmRoute } from './directives/route';
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmxCoreModule = /** @class */ (function () {
    function AgmxCoreModule() {
    }
    AgmxCoreModule_1 = AgmxCoreModule;
    /**
     * Please use this method when you register the module at the root level.
     */
    AgmxCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmxCoreModule_1,
            providers: __spread(BROWSER_GLOBALS_PROVIDERS, [
                { provide: MapsAPILoader, useClass: LazyMapsAPILoader },
                { provide: LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig }
            ]),
        };
    };
    var AgmxCoreModule_1;
    AgmxCoreModule = AgmxCoreModule_1 = __decorate([
        NgModule({ declarations: [
                AgmMap, AgmMarker, AgmInfoWindow, AgmCircle,
                AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmKmlLayer,
                AgmDataLayer,
                AgmSearchBox, AgmControl, AgmRoute
            ],
            exports: [
                AgmMap, AgmMarker, AgmInfoWindow, AgmCircle,
                AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmKmlLayer,
                AgmDataLayer,
                AgmSearchBox, AgmControl, AgmRoute
            ],
        })
    ], AgmxCoreModule);
    return AgmxCoreModule;
}());
export { AgmxCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdteC1jb3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnbXgtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hZ214LWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCwyQ0FBMkM7QUFDM0MsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDbEYsT0FBTyxFQUFDLG9CQUFvQixFQUFpQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JILE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDeEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRTVDOzs7R0FHRztBQWVIO0lBQUE7SUFjQSxDQUFDO3VCQWRZLGNBQWM7SUFDekI7O09BRUc7SUFDSSxzQkFBTyxHQUFkLFVBQWUsdUJBQXdEO1FBQ3JFLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxXQUNKLHlCQUF5QjtnQkFDNUIsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBQztnQkFDckQsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO2NBQ25FO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBYlUsY0FBYztRQWQxQixRQUFRLENBQUMsRUFBQyxZQUFZLEVBQUU7Z0JBQ3JCLE1BQU0sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVM7Z0JBQzNDLFVBQVUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVztnQkFDdEQsWUFBWTtnQkFDWixZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVE7YUFDbkM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsU0FBUztnQkFDM0MsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXO2dCQUN0RCxZQUFZO2dCQUNaLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUTthQUNuQztTQUNBLENBQ0Y7T0FDWSxjQUFjLENBYzFCO0lBQUQscUJBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQge0FnbU1hcH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hcCc7XG5pbXBvcnQge0FnbUNpcmNsZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2NpcmNsZSc7XG5pbXBvcnQge0FnbUluZm9XaW5kb3d9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmZvLXdpbmRvdyc7XG5pbXBvcnQge0FnbU1hcmtlcn0gZnJvbSAnLi9kaXJlY3RpdmVzL21hcmtlcic7XG5pbXBvcnQge0FnbVBvbHlnb259IGZyb20gJy4vZGlyZWN0aXZlcy9wb2x5Z29uJztcbmltcG9ydCB7QWdtUG9seWxpbmV9IGZyb20gJy4vZGlyZWN0aXZlcy9wb2x5bGluZSc7XG5pbXBvcnQge0FnbVBvbHlsaW5lUG9pbnR9IGZyb20gJy4vZGlyZWN0aXZlcy9wb2x5bGluZS1wb2ludCc7XG5pbXBvcnQge0FnbUttbExheWVyfSBmcm9tICcuL2RpcmVjdGl2ZXMva21sLWxheWVyJztcbmltcG9ydCB7QWdtRGF0YUxheWVyfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGF0YS1sYXllcic7XG5pbXBvcnQge0FnbVNlYXJjaEJveH0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlYXJjaC1ib3gnO1xuaW1wb3J0IHtBZ21Db250cm9sfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29udHJvbCc7XG5pbXBvcnQge0xhenlNYXBzQVBJTG9hZGVyfSBmcm9tICcuL3NlcnZpY2VzL21hcHMtYXBpLWxvYWRlci9sYXp5LW1hcHMtYXBpLWxvYWRlcic7XG5pbXBvcnQge0xBWllfTUFQU19BUElfQ09ORklHLCBMYXp5TWFwc0FQSUxvYWRlckNvbmZpZ0xpdGVyYWx9IGZyb20gJy4vc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL2xhenktbWFwcy1hcGktbG9hZGVyJztcbmltcG9ydCB7TWFwc0FQSUxvYWRlcn0gZnJvbSAnLi9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbWFwcy1hcGktbG9hZGVyJztcbmltcG9ydCB7QlJPV1NFUl9HTE9CQUxTX1BST1ZJREVSU30gZnJvbSAnLi91dGlscy9icm93c2VyLWdsb2JhbHMnO1xuaW1wb3J0IHtBZ21NYXB9IGZyb20gJy4vZGlyZWN0aXZlcy9tYXAnO1xuaW1wb3J0IHtBZ21Sb3V0ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JvdXRlJztcblxuLyoqXG4gKiBUaGUgYW5ndWxhci1nb29nbGUtbWFwcyBjb3JlIG1vZHVsZS4gQ29udGFpbnMgYWxsIERpcmVjdGl2ZXMvU2VydmljZXMvUGlwZXNcbiAqIG9mIHRoZSBjb3JlIG1vZHVsZS4gUGxlYXNlIHVzZSBgQWdtQ29yZU1vZHVsZS5mb3JSb290KClgIGluIHlvdXIgYXBwIG1vZHVsZS5cbiAqL1xuQE5nTW9kdWxlKHtkZWNsYXJhdGlvbnM6IFtcbiAgICBBZ21NYXAsIEFnbU1hcmtlciwgQWdtSW5mb1dpbmRvdywgQWdtQ2lyY2xlLFxuICAgIEFnbVBvbHlnb24sIEFnbVBvbHlsaW5lLCBBZ21Qb2x5bGluZVBvaW50LCBBZ21LbWxMYXllcixcbiAgICBBZ21EYXRhTGF5ZXIsXG4gICAgQWdtU2VhcmNoQm94LCBBZ21Db250cm9sLCBBZ21Sb3V0ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQWdtTWFwLCBBZ21NYXJrZXIsIEFnbUluZm9XaW5kb3csIEFnbUNpcmNsZSxcbiAgICBBZ21Qb2x5Z29uLCBBZ21Qb2x5bGluZSwgQWdtUG9seWxpbmVQb2ludCwgQWdtS21sTGF5ZXIsXG4gICAgQWdtRGF0YUxheWVyLFxuICAgIEFnbVNlYXJjaEJveCwgQWdtQ29udHJvbCwgQWdtUm91dGVcbiAgXSxcbiAgfVxuKVxuZXhwb3J0IGNsYXNzIEFnbXhDb3JlTW9kdWxlIHtcbiAgLyoqXG4gICAqIFBsZWFzZSB1c2UgdGhpcyBtZXRob2Qgd2hlbiB5b3UgcmVnaXN0ZXIgdGhlIG1vZHVsZSBhdCB0aGUgcm9vdCBsZXZlbC5cbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGxhenlNYXBzQVBJTG9hZGVyQ29uZmlnPzogTGF6eU1hcHNBUElMb2FkZXJDb25maWdMaXRlcmFsKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBZ214Q29yZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWdteENvcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uQlJPV1NFUl9HTE9CQUxTX1BST1ZJREVSUyxcbiAgICAgICAge3Byb3ZpZGU6IE1hcHNBUElMb2FkZXIsIHVzZUNsYXNzOiBMYXp5TWFwc0FQSUxvYWRlcn0sXG4gICAgICAgIHtwcm92aWRlOiBMQVpZX01BUFNfQVBJX0NPTkZJRywgdXNlVmFsdWU6IGxhenlNYXBzQVBJTG9hZGVyQ29uZmlnfVxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=