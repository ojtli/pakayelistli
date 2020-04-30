var AgmxCoreModule_1;
import { __decorate } from "tslib";
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
let AgmxCoreModule = AgmxCoreModule_1 = class AgmxCoreModule {
    /**
     * Please use this method when you register the module at the root level.
     */
    static forRoot(lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmxCoreModule_1,
            providers: [
                ...BROWSER_GLOBALS_PROVIDERS,
                { provide: MapsAPILoader, useClass: LazyMapsAPILoader },
                { provide: LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig }
            ],
        };
    }
};
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
export { AgmxCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdteC1jb3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnbXgtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hZ214LWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsMkNBQTJDO0FBQzNDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxvQkFBb0IsRUFBaUMsTUFBTSxpREFBaUQsQ0FBQztBQUNySCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUU1Qzs7O0dBR0c7QUFlSCxJQUFhLGNBQWMsc0JBQTNCLE1BQWEsY0FBYztJQUN6Qjs7T0FFRztJQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsdUJBQXdEO1FBQ3JFLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULEdBQUcseUJBQXlCO2dCQUM1QixFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFDO2dCQUNyRCxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7YUFDbkU7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFkWSxjQUFjO0lBZDFCLFFBQVEsQ0FBQyxFQUFDLFlBQVksRUFBRTtZQUNyQixNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxTQUFTO1lBQzNDLFVBQVUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVztZQUN0RCxZQUFZO1lBQ1osWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRO1NBQ25DO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsTUFBTSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsU0FBUztZQUMzQyxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFdBQVc7WUFDdEQsWUFBWTtZQUNaLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUTtTQUNuQztLQUNBLENBQ0Y7R0FDWSxjQUFjLENBYzFCO1NBZFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHtBZ21NYXB9IGZyb20gJy4vZGlyZWN0aXZlcy9tYXAnO1xuaW1wb3J0IHtBZ21DaXJjbGV9IGZyb20gJy4vZGlyZWN0aXZlcy9jaXJjbGUnO1xuaW1wb3J0IHtBZ21JbmZvV2luZG93fSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5mby13aW5kb3cnO1xuaW1wb3J0IHtBZ21NYXJrZXJ9IGZyb20gJy4vZGlyZWN0aXZlcy9tYXJrZXInO1xuaW1wb3J0IHtBZ21Qb2x5Z29ufSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWdvbic7XG5pbXBvcnQge0FnbVBvbHlsaW5lfSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWxpbmUnO1xuaW1wb3J0IHtBZ21Qb2x5bGluZVBvaW50fSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWxpbmUtcG9pbnQnO1xuaW1wb3J0IHtBZ21LbWxMYXllcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2ttbC1sYXllcic7XG5pbXBvcnQge0FnbURhdGFMYXllcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2RhdGEtbGF5ZXInO1xuaW1wb3J0IHtBZ21TZWFyY2hCb3h9IGZyb20gJy4vZGlyZWN0aXZlcy9zZWFyY2gtYm94JztcbmltcG9ydCB7QWdtQ29udHJvbH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbnRyb2wnO1xuaW1wb3J0IHtMYXp5TWFwc0FQSUxvYWRlcn0gZnJvbSAnLi9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbGF6eS1tYXBzLWFwaS1sb2FkZXInO1xuaW1wb3J0IHtMQVpZX01BUFNfQVBJX0NPTkZJRywgTGF6eU1hcHNBUElMb2FkZXJDb25maWdMaXRlcmFsfSBmcm9tICcuL3NlcnZpY2VzL21hcHMtYXBpLWxvYWRlci9sYXp5LW1hcHMtYXBpLWxvYWRlcic7XG5pbXBvcnQge01hcHNBUElMb2FkZXJ9IGZyb20gJy4vc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL21hcHMtYXBpLWxvYWRlcic7XG5pbXBvcnQge0JST1dTRVJfR0xPQkFMU19QUk9WSURFUlN9IGZyb20gJy4vdXRpbHMvYnJvd3Nlci1nbG9iYWxzJztcbmltcG9ydCB7QWdtTWFwfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWFwJztcbmltcG9ydCB7QWdtUm91dGV9IGZyb20gJy4vZGlyZWN0aXZlcy9yb3V0ZSc7XG5cbi8qKlxuICogVGhlIGFuZ3VsYXItZ29vZ2xlLW1hcHMgY29yZSBtb2R1bGUuIENvbnRhaW5zIGFsbCBEaXJlY3RpdmVzL1NlcnZpY2VzL1BpcGVzXG4gKiBvZiB0aGUgY29yZSBtb2R1bGUuIFBsZWFzZSB1c2UgYEFnbUNvcmVNb2R1bGUuZm9yUm9vdCgpYCBpbiB5b3VyIGFwcCBtb2R1bGUuXG4gKi9cbkBOZ01vZHVsZSh7ZGVjbGFyYXRpb25zOiBbXG4gICAgQWdtTWFwLCBBZ21NYXJrZXIsIEFnbUluZm9XaW5kb3csIEFnbUNpcmNsZSxcbiAgICBBZ21Qb2x5Z29uLCBBZ21Qb2x5bGluZSwgQWdtUG9seWxpbmVQb2ludCwgQWdtS21sTGF5ZXIsXG4gICAgQWdtRGF0YUxheWVyLFxuICAgIEFnbVNlYXJjaEJveCwgQWdtQ29udHJvbCwgQWdtUm91dGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFnbU1hcCwgQWdtTWFya2VyLCBBZ21JbmZvV2luZG93LCBBZ21DaXJjbGUsXG4gICAgQWdtUG9seWdvbiwgQWdtUG9seWxpbmUsIEFnbVBvbHlsaW5lUG9pbnQsIEFnbUttbExheWVyLFxuICAgIEFnbURhdGFMYXllcixcbiAgICBBZ21TZWFyY2hCb3gsIEFnbUNvbnRyb2wsIEFnbVJvdXRlXG4gIF0sXG4gIH1cbilcbmV4cG9ydCBjbGFzcyBBZ214Q29yZU1vZHVsZSB7XG4gIC8qKlxuICAgKiBQbGVhc2UgdXNlIHRoaXMgbWV0aG9kIHdoZW4geW91IHJlZ2lzdGVyIHRoZSBtb2R1bGUgYXQgdGhlIHJvb3QgbGV2ZWwuXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChsYXp5TWFwc0FQSUxvYWRlckNvbmZpZz86IExhenlNYXBzQVBJTG9hZGVyQ29uZmlnTGl0ZXJhbCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QWdteENvcmVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFnbXhDb3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLkJST1dTRVJfR0xPQkFMU19QUk9WSURFUlMsXG4gICAgICAgIHtwcm92aWRlOiBNYXBzQVBJTG9hZGVyLCB1c2VDbGFzczogTGF6eU1hcHNBUElMb2FkZXJ9LFxuICAgICAgICB7cHJvdmlkZTogTEFaWV9NQVBTX0FQSV9DT05GSUcsIHVzZVZhbHVlOiBsYXp5TWFwc0FQSUxvYWRlckNvbmZpZ31cbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19