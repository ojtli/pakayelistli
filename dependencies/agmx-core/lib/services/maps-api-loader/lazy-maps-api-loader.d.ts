import { InjectionToken } from '@angular/core';
import { DocumentRef, WindowRef } from '../../utils/browser-globals';
import { MapsAPILoader } from './maps-api-loader';
import * as ɵngcc0 from '@angular/core';
export declare enum GoogleMapsScriptProtocol {
    HTTP = 1,
    HTTPS = 2,
    AUTO = 3
}
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
export declare const LAZY_MAPS_API_CONFIG: InjectionToken<LazyMapsAPILoaderConfigLiteral>;
/**
 * Configuration for the {@link LazyMapsAPILoader}.
 */
export interface LazyMapsAPILoaderConfigLiteral {
    /**
     * The Google Maps API Key (see:
     * https://developers.google.com/maps/documentation/javascript/get-api-key)
     */
    apiKey?: string;
    /**
     * The Google Maps client ID (for premium plans).
     * When you have a Google Maps APIs Premium Plan license, you must authenticate
     * your application with either an API key or a client ID.
     * The Google Maps API will fail to load if both a client ID and an API key are included.
     */
    clientId?: string;
    /**
     * The Google Maps channel name (for premium plans).
     * A channel parameter is an optional parameter that allows you to track usage under your client
     * ID by assigning a distinct channel to each of your applications.
     */
    channel?: string;
    /**
     * Google Maps API version.
     */
    apiVersion?: string;
    /**
     * Host and Path used for the `<script>` tag.
     */
    hostAndPath?: string;
    /**
     * Protocol used for the `<script>` tag.
     */
    protocol?: GoogleMapsScriptProtocol;
    /**
     * Defines which Google Maps libraries should get loaded.
     */
    libraries?: string[];
    /**
     * The default bias for the map behavior is US.
     * If you wish to alter your application to serve different map tiles or bias the
     * application, you can overwrite the default behavior (US) by defining a `region`.
     * See https://developers.google.com/maps/documentation/javascript/basics#Region
     */
    region?: string;
    /**
     * The Google Maps API uses the browser's preferred language when displaying
     * textual information. If you wish to overwrite this behavior and force the API
     * to use a given language, you can use this setting.
     * See https://developers.google.com/maps/documentation/javascript/basics#Language
     */
    language?: string;
}
export declare class LazyMapsAPILoader extends MapsAPILoader {
    private localeId;
    protected _scriptLoadingPromise: Promise<void>;
    protected _config: LazyMapsAPILoaderConfigLiteral;
    protected _windowRef: WindowRef;
    protected _documentRef: DocumentRef;
    protected readonly _SCRIPT_ID: string;
    protected readonly callbackName: string;
    constructor(config: any, w: WindowRef, d: DocumentRef, localeId: string);
    load(): Promise<void>;
    protected _getScriptSrc(callbackName: string): string;
    private _assignScriptLoadingPromise;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LazyMapsAPILoader, [{ optional: true; }, null, null, null]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1tYXBzLWFwaS1sb2FkZXIuZC50cyIsInNvdXJjZXMiOlsibGF6eS1tYXBzLWFwaS1sb2FkZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvY3VtZW50UmVmLCBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi91dGlscy9icm93c2VyLWdsb2JhbHMnO1xuaW1wb3J0IHsgTWFwc0FQSUxvYWRlciB9IGZyb20gJy4vbWFwcy1hcGktbG9hZGVyJztcbmV4cG9ydCBkZWNsYXJlIGVudW0gR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sIHtcbiAgICBIVFRQID0gMSxcbiAgICBIVFRQUyA9IDIsXG4gICAgQVVUTyA9IDNcbn1cbi8qKlxuICogVG9rZW4gZm9yIHRoZSBjb25maWcgb2YgdGhlIExhenlNYXBzQVBJTG9hZGVyLiBQbGVhc2UgcHJvdmlkZSBhbiBvYmplY3Qgb2YgdHlwZSB7QGxpbmtcbiAqIExhenlNYXBzQVBJTG9hZGVyQ29uZmlnfS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgTEFaWV9NQVBTX0FQSV9DT05GSUc6IEluamVjdGlvblRva2VuPExhenlNYXBzQVBJTG9hZGVyQ29uZmlnTGl0ZXJhbD47XG4vKipcbiAqIENvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgTGF6eU1hcHNBUElMb2FkZXJ9LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIExhenlNYXBzQVBJTG9hZGVyQ29uZmlnTGl0ZXJhbCB7XG4gICAgLyoqXG4gICAgICogVGhlIEdvb2dsZSBNYXBzIEFQSSBLZXkgKHNlZTpcbiAgICAgKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9nZXQtYXBpLWtleSlcbiAgICAgKi9cbiAgICBhcGlLZXk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIEdvb2dsZSBNYXBzIGNsaWVudCBJRCAoZm9yIHByZW1pdW0gcGxhbnMpLlxuICAgICAqIFdoZW4geW91IGhhdmUgYSBHb29nbGUgTWFwcyBBUElzIFByZW1pdW0gUGxhbiBsaWNlbnNlLCB5b3UgbXVzdCBhdXRoZW50aWNhdGVcbiAgICAgKiB5b3VyIGFwcGxpY2F0aW9uIHdpdGggZWl0aGVyIGFuIEFQSSBrZXkgb3IgYSBjbGllbnQgSUQuXG4gICAgICogVGhlIEdvb2dsZSBNYXBzIEFQSSB3aWxsIGZhaWwgdG8gbG9hZCBpZiBib3RoIGEgY2xpZW50IElEIGFuZCBhbiBBUEkga2V5IGFyZSBpbmNsdWRlZC5cbiAgICAgKi9cbiAgICBjbGllbnRJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgR29vZ2xlIE1hcHMgY2hhbm5lbCBuYW1lIChmb3IgcHJlbWl1bSBwbGFucykuXG4gICAgICogQSBjaGFubmVsIHBhcmFtZXRlciBpcyBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBhbGxvd3MgeW91IHRvIHRyYWNrIHVzYWdlIHVuZGVyIHlvdXIgY2xpZW50XG4gICAgICogSUQgYnkgYXNzaWduaW5nIGEgZGlzdGluY3QgY2hhbm5lbCB0byBlYWNoIG9mIHlvdXIgYXBwbGljYXRpb25zLlxuICAgICAqL1xuICAgIGNoYW5uZWw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogR29vZ2xlIE1hcHMgQVBJIHZlcnNpb24uXG4gICAgICovXG4gICAgYXBpVmVyc2lvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBIb3N0IGFuZCBQYXRoIHVzZWQgZm9yIHRoZSBgPHNjcmlwdD5gIHRhZy5cbiAgICAgKi9cbiAgICBob3N0QW5kUGF0aD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBQcm90b2NvbCB1c2VkIGZvciB0aGUgYDxzY3JpcHQ+YCB0YWcuXG4gICAgICovXG4gICAgcHJvdG9jb2w/OiBHb29nbGVNYXBzU2NyaXB0UHJvdG9jb2w7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB3aGljaCBHb29nbGUgTWFwcyBsaWJyYXJpZXMgc2hvdWxkIGdldCBsb2FkZWQuXG4gICAgICovXG4gICAgbGlicmFyaWVzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYmlhcyBmb3IgdGhlIG1hcCBiZWhhdmlvciBpcyBVUy5cbiAgICAgKiBJZiB5b3Ugd2lzaCB0byBhbHRlciB5b3VyIGFwcGxpY2F0aW9uIHRvIHNlcnZlIGRpZmZlcmVudCBtYXAgdGlsZXMgb3IgYmlhcyB0aGVcbiAgICAgKiBhcHBsaWNhdGlvbiwgeW91IGNhbiBvdmVyd3JpdGUgdGhlIGRlZmF1bHQgYmVoYXZpb3IgKFVTKSBieSBkZWZpbmluZyBhIGByZWdpb25gLlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9iYXNpY3MjUmVnaW9uXG4gICAgICovXG4gICAgcmVnaW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBHb29nbGUgTWFwcyBBUEkgdXNlcyB0aGUgYnJvd3NlcidzIHByZWZlcnJlZCBsYW5ndWFnZSB3aGVuIGRpc3BsYXlpbmdcbiAgICAgKiB0ZXh0dWFsIGluZm9ybWF0aW9uLiBJZiB5b3Ugd2lzaCB0byBvdmVyd3JpdGUgdGhpcyBiZWhhdmlvciBhbmQgZm9yY2UgdGhlIEFQSVxuICAgICAqIHRvIHVzZSBhIGdpdmVuIGxhbmd1YWdlLCB5b3UgY2FuIHVzZSB0aGlzIHNldHRpbmcuXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2Jhc2ljcyNMYW5ndWFnZVxuICAgICAqL1xuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGF6eU1hcHNBUElMb2FkZXIgZXh0ZW5kcyBNYXBzQVBJTG9hZGVyIHtcbiAgICBwcml2YXRlIGxvY2FsZUlkO1xuICAgIHByb3RlY3RlZCBfc2NyaXB0TG9hZGluZ1Byb21pc2U6IFByb21pc2U8dm9pZD47XG4gICAgcHJvdGVjdGVkIF9jb25maWc6IExhenlNYXBzQVBJTG9hZGVyQ29uZmlnTGl0ZXJhbDtcbiAgICBwcm90ZWN0ZWQgX3dpbmRvd1JlZjogV2luZG93UmVmO1xuICAgIHByb3RlY3RlZCBfZG9jdW1lbnRSZWY6IERvY3VtZW50UmVmO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBfU0NSSVBUX0lEOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNhbGxiYWNrTmFtZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55LCB3OiBXaW5kb3dSZWYsIGQ6IERvY3VtZW50UmVmLCBsb2NhbGVJZDogc3RyaW5nKTtcbiAgICBsb2FkKCk6IFByb21pc2U8dm9pZD47XG4gICAgcHJvdGVjdGVkIF9nZXRTY3JpcHRTcmMoY2FsbGJhY2tOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfYXNzaWduU2NyaXB0TG9hZGluZ1Byb21pc2U7XG59XG4iXX0=