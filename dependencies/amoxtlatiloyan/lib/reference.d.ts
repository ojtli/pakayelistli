/// <reference types="googlemaps" />
declare class PosModifier {
    name: string;
    pos: google.maps.LatLng | google.maps.LatLngLiteral;
}
export declare class Reference {
    id: string;
    name: string;
    pos: google.maps.LatLng | google.maps.LatLngLiteral;
    snappedPos: google.maps.LatLng;
    city: string;
    addedBy: string;
    revised: boolean;
    alias: Array<string>;
    posModifiers: Array<PosModifier>;
    accuracy?: number;
    constructor();
}
export {};
