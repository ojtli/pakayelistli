/// <reference types="googlemaps" />
import { EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
import * as ɵngcc0 from '@angular/core';
export declare class AgmRoute implements OnInit, OnChanges, OnDestroy {
    private gmapsApi;
    nodes: string[] | google.maps.LatLng[] | google.maps.LatLngLiteral[] | google.maps.Place[];
    optimized: boolean;
    info: any;
    model: any;
    display: any;
    strokeColor: any;
    directionsDisplay: google.maps.DirectionsRenderer;
    displayed: EventEmitter<google.maps.DirectionsResult>;
    constructor(gmapsApi: GoogleMapsAPIWrapper);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmRoute, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmRoute, "agm-route", never, { "optimized": "optimized"; "nodes": "nodes"; "info": "info"; "model": "model"; "display": "display"; "strokeColor": "strokeColor"; }, { "displayed": "displayed"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuZC50cyIsInNvdXJjZXMiOlsicm91dGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImdvb2dsZW1hcHNcIiAvPlxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFnbVJvdXRlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBnbWFwc0FwaTtcbiAgICBub2Rlczogc3RyaW5nW10gfCBnb29nbGUubWFwcy5MYXRMbmdbXSB8IGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWxbXSB8IGdvb2dsZS5tYXBzLlBsYWNlW107XG4gICAgb3B0aW1pemVkOiBib29sZWFuO1xuICAgIGluZm86IGFueTtcbiAgICBtb2RlbDogYW55O1xuICAgIGRpc3BsYXk6IGFueTtcbiAgICBzdHJva2VDb2xvcjogYW55O1xuICAgIGRpcmVjdGlvbnNEaXNwbGF5OiBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXI7XG4gICAgZGlzcGxheWVkOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuRGlyZWN0aW9uc1Jlc3VsdD47XG4gICAgY29uc3RydWN0b3IoZ21hcHNBcGk6IEdvb2dsZU1hcHNBUElXcmFwcGVyKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==