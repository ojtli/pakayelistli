import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmMarker } from './../../directives/marker';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import { Marker } from './../google-maps-types';
import * as ɵngcc0 from '@angular/core';
export declare class MarkerManager {
    protected _mapsWrapper: GoogleMapsAPIWrapper;
    protected _zone: NgZone;
    protected _markers: Map<AgmMarker, Promise<Marker>>;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    deleteMarker(marker: AgmMarker): Promise<void>;
    updateMarkerPosition(marker: AgmMarker): Promise<void>;
    updateTitle(marker: AgmMarker): Promise<void>;
    updateLabel(marker: AgmMarker): Promise<void>;
    updateDraggable(marker: AgmMarker): Promise<void>;
    updateIcon(marker: AgmMarker): Promise<void>;
    updateOpacity(marker: AgmMarker): Promise<void>;
    updateVisible(marker: AgmMarker): Promise<void>;
    updateZIndex(marker: AgmMarker): Promise<void>;
    updateClickable(marker: AgmMarker): Promise<void>;
    updateAnimation(marker: AgmMarker): Promise<void>;
    addMarker(marker: AgmMarker): void;
    getNativeMarker(marker: AgmMarker): Promise<Marker>;
    createEventObservable<T>(eventName: string, marker: AgmMarker): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MarkerManager, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLW1hbmFnZXIuZC50cyIsInNvdXJjZXMiOlsibWFya2VyLW1hbmFnZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBZ21NYXJrZXIgfSBmcm9tICcuLy4uLy4uL2RpcmVjdGl2ZXMvbWFya2VyJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzLXR5cGVzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hcmtlck1hbmFnZXIge1xuICAgIHByb3RlY3RlZCBfbWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyO1xuICAgIHByb3RlY3RlZCBfem9uZTogTmdab25lO1xuICAgIHByb3RlY3RlZCBfbWFya2VyczogTWFwPEFnbU1hcmtlciwgUHJvbWlzZTxNYXJrZXI+PjtcbiAgICBjb25zdHJ1Y3RvcihfbWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBfem9uZTogTmdab25lKTtcbiAgICBkZWxldGVNYXJrZXIobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHVwZGF0ZU1hcmtlclBvc2l0aW9uKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPjtcbiAgICB1cGRhdGVUaXRsZShtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD47XG4gICAgdXBkYXRlTGFiZWwobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHVwZGF0ZURyYWdnYWJsZShtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD47XG4gICAgdXBkYXRlSWNvbihtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD47XG4gICAgdXBkYXRlT3BhY2l0eShtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD47XG4gICAgdXBkYXRlVmlzaWJsZShtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD47XG4gICAgdXBkYXRlWkluZGV4KG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPjtcbiAgICB1cGRhdGVDbGlja2FibGUobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHVwZGF0ZUFuaW1hdGlvbihtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD47XG4gICAgYWRkTWFya2VyKG1hcmtlcjogQWdtTWFya2VyKTogdm9pZDtcbiAgICBnZXROYXRpdmVNYXJrZXIobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPE1hcmtlcj47XG4gICAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBtYXJrZXI6IEFnbU1hcmtlcik6IE9ic2VydmFibGU8VD47XG59XG4iXX0=