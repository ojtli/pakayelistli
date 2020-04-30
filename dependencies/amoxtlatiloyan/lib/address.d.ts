/// <reference types="googlemaps" />
export declare class Address {
    fullAddress?: string;
    position?: google.maps.LatLng;
    city?: string;
    reference?: string;
    segments?: {
        name: string;
    }[] | string[];
    road?: string;
    roadKm?: string;
    neighborhood?: string;
    houseNumber?: string;
    type?: string;
    accuracy?: number;
}
