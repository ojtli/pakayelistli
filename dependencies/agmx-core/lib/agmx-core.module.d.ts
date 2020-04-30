import { ModuleWithProviders } from '@angular/core';
import { LazyMapsAPILoaderConfigLiteral } from './services/maps-api-loader/lazy-maps-api-loader';
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './directives/map';
import * as ɵngcc2 from './directives/marker';
import * as ɵngcc3 from './directives/info-window';
import * as ɵngcc4 from './directives/circle';
import * as ɵngcc5 from './directives/polygon';
import * as ɵngcc6 from './directives/polyline';
import * as ɵngcc7 from './directives/polyline-point';
import * as ɵngcc8 from './directives/kml-layer';
import * as ɵngcc9 from './directives/data-layer';
import * as ɵngcc10 from './directives/search-box';
import * as ɵngcc11 from './directives/control';
import * as ɵngcc12 from './directives/route';
export declare class AgmxCoreModule {
    /**
     * Please use this method when you register the module at the root level.
     */
    static forRoot(lazyMapsAPILoaderConfig?: LazyMapsAPILoaderConfigLiteral): ModuleWithProviders<AgmxCoreModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<AgmxCoreModule, [typeof ɵngcc1.AgmMap, typeof ɵngcc2.AgmMarker, typeof ɵngcc3.AgmInfoWindow, typeof ɵngcc4.AgmCircle, typeof ɵngcc5.AgmPolygon, typeof ɵngcc6.AgmPolyline, typeof ɵngcc7.AgmPolylinePoint, typeof ɵngcc8.AgmKmlLayer, typeof ɵngcc9.AgmDataLayer, typeof ɵngcc10.AgmSearchBox, typeof ɵngcc11.AgmControl, typeof ɵngcc12.AgmRoute], never, [typeof ɵngcc1.AgmMap, typeof ɵngcc2.AgmMarker, typeof ɵngcc3.AgmInfoWindow, typeof ɵngcc4.AgmCircle, typeof ɵngcc5.AgmPolygon, typeof ɵngcc6.AgmPolyline, typeof ɵngcc7.AgmPolylinePoint, typeof ɵngcc8.AgmKmlLayer, typeof ɵngcc9.AgmDataLayer, typeof ɵngcc10.AgmSearchBox, typeof ɵngcc11.AgmControl, typeof ɵngcc12.AgmRoute]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<AgmxCoreModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdteC1jb3JlLm1vZHVsZS5kLnRzIiwic291cmNlcyI6WyJhZ214LWNvcmUubW9kdWxlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF6eU1hcHNBUElMb2FkZXJDb25maWdMaXRlcmFsIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbGF6eS1tYXBzLWFwaS1sb2FkZXInO1xuLyoqXG4gKiBUaGUgYW5ndWxhci1nb29nbGUtbWFwcyBjb3JlIG1vZHVsZS4gQ29udGFpbnMgYWxsIERpcmVjdGl2ZXMvU2VydmljZXMvUGlwZXNcbiAqIG9mIHRoZSBjb3JlIG1vZHVsZS4gUGxlYXNlIHVzZSBgQWdtQ29yZU1vZHVsZS5mb3JSb290KClgIGluIHlvdXIgYXBwIG1vZHVsZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWdteENvcmVNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIFBsZWFzZSB1c2UgdGhpcyBtZXRob2Qgd2hlbiB5b3UgcmVnaXN0ZXIgdGhlIG1vZHVsZSBhdCB0aGUgcm9vdCBsZXZlbC5cbiAgICAgKi9cbiAgICBzdGF0aWMgZm9yUm9vdChsYXp5TWFwc0FQSUxvYWRlckNvbmZpZz86IExhenlNYXBzQVBJTG9hZGVyQ29uZmlnTGl0ZXJhbCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QWdteENvcmVNb2R1bGU+O1xufVxuIl19