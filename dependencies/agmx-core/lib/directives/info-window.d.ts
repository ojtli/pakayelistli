import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { InfoWindowManager } from '../services/managers/info-window-manager';
import { AgmMarker } from './marker';
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class AgmInfoWindow implements OnDestroy, OnChanges, OnInit {
    private _infoWindowManager;
    private _el;
    private static _infoWindowOptionsInputs;
    /**
     * The latitude position of the info window (only usefull if you use it ouside of a {@link
     * AgmMarker}).
     */
    latitude: number;
    /**
     * The longitude position of the info window (only usefull if you use it ouside of a {@link
     * AgmMarker}).
     */
    longitude: number;
    /**
     * Disable auto-pan on open. By default, the info window will pan the map so that it is fully
     * visible when it opens.
     */
    disableAutoPan: boolean;
    /**
     * All InfoWindows are displayed on the map in order of their zIndex, with higher values
     * displaying in front of InfoWindows with lower values. By default, InfoWindows are displayed
     * according to their latitude, with InfoWindows of lower latitudes appearing in front of
     * InfoWindows at higher latitudes. InfoWindows are always displayed in front of markers.
     */
    zIndex: number;
    /**
     * Maximum width of the infowindow, regardless of content's width. This value is only considered
     * if it is set before a call to open. To change the maximum width when changing content, call
     * close, update maxWidth, and then open.
     */
    maxWidth: number;
    /**
     * Holds the marker that is the host of the info window (if available)
     */
    hostMarker: AgmMarker;
    /**
     * Holds the native element that is used for the info window content.
     */
    content: Node;
    /**
     * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
     */
    isOpen: boolean;
    /**
     * Emits an event when the info window is closed.
     */
    infoWindowClose: EventEmitter<void>;
    private _infoWindowAddedToManager;
    private _id;
    constructor(_infoWindowManager: InfoWindowManager, _el: ElementRef);
    ngOnInit(): void;
    /** @internal */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    /**
     * Opens the info window.
     */
    open(): Promise<void>;
    /**
     * Closes the info window.
     */
    close(): Promise<void>;
    /** @internal */
    id(): string;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
    private _registerEventListeners;
    private _updateOpenState;
    private _setInfoWindowOptions;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmInfoWindow, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AgmInfoWindow, "agm-info-window", never, { "isOpen": "isOpen"; "latitude": "latitude"; "longitude": "longitude"; "disableAutoPan": "disableAutoPan"; "zIndex": "zIndex"; "maxWidth": "maxWidth"; }, { "infoWindowClose": "infoWindowClose"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby13aW5kb3cuZC50cyIsInNvdXJjZXMiOlsiaW5mby13aW5kb3cuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmZvV2luZG93TWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL2luZm8td2luZG93LW1hbmFnZXInO1xuaW1wb3J0IHsgQWdtTWFya2VyIH0gZnJvbSAnLi9tYXJrZXInO1xuLyoqXG4gKiBBZ21JbmZvV2luZG93IHJlbmRlcnMgYSBpbmZvIHdpbmRvdyBpbnNpZGUgYSB7QGxpbmsgQWdtTWFya2VyfSBvciBzdGFuZGFsb25lLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICBzZWxlY3RvcjogJ215LW1hcC1jbXAnLFxuICogIHN0eWxlczogW2BcbiAqICAgIC5hZ20tbWFwLWNvbnRhaW5lciB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgICA8YWdtLW1hcmtlciBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbbGFiZWxdPVwiJ00nXCI+XG4gKiAgICAgICAgPGFnbS1pbmZvLXdpbmRvdyBbZGlzYWJsZUF1dG9QYW5dPVwidHJ1ZVwiPlxuICogICAgICAgICAgSGksIHRoaXMgaXMgdGhlIGNvbnRlbnQgb2YgdGhlIDxzdHJvbmc+aW5mbyB3aW5kb3c8L3N0cm9uZz5cbiAqICAgICAgICA8L2FnbS1pbmZvLXdpbmRvdz5cbiAqICAgICAgPC9hZ20tbWFya2VyPlxuICogICAgPC9hZ20tbWFwPlxuICogIGBcbiAqIH0pXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWdtSW5mb1dpbmRvdyBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICAgIHByaXZhdGUgX2luZm9XaW5kb3dNYW5hZ2VyO1xuICAgIHByaXZhdGUgX2VsO1xuICAgIHByaXZhdGUgc3RhdGljIF9pbmZvV2luZG93T3B0aW9uc0lucHV0cztcbiAgICAvKipcbiAgICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIGluZm8gd2luZG93IChvbmx5IHVzZWZ1bGwgaWYgeW91IHVzZSBpdCBvdXNpZGUgb2YgYSB7QGxpbmtcbiAgICAgKiBBZ21NYXJrZXJ9KS5cbiAgICAgKi9cbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBsb25naXR1ZGUgcG9zaXRpb24gb2YgdGhlIGluZm8gd2luZG93IChvbmx5IHVzZWZ1bGwgaWYgeW91IHVzZSBpdCBvdXNpZGUgb2YgYSB7QGxpbmtcbiAgICAgKiBBZ21NYXJrZXJ9KS5cbiAgICAgKi9cbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIGF1dG8tcGFuIG9uIG9wZW4uIEJ5IGRlZmF1bHQsIHRoZSBpbmZvIHdpbmRvdyB3aWxsIHBhbiB0aGUgbWFwIHNvIHRoYXQgaXQgaXMgZnVsbHlcbiAgICAgKiB2aXNpYmxlIHdoZW4gaXQgb3BlbnMuXG4gICAgICovXG4gICAgZGlzYWJsZUF1dG9QYW46IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQWxsIEluZm9XaW5kb3dzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIG1hcCBpbiBvcmRlciBvZiB0aGVpciB6SW5kZXgsIHdpdGggaGlnaGVyIHZhbHVlc1xuICAgICAqIGRpc3BsYXlpbmcgaW4gZnJvbnQgb2YgSW5mb1dpbmRvd3Mgd2l0aCBsb3dlciB2YWx1ZXMuIEJ5IGRlZmF1bHQsIEluZm9XaW5kb3dzIGFyZSBkaXNwbGF5ZWRcbiAgICAgKiBhY2NvcmRpbmcgdG8gdGhlaXIgbGF0aXR1ZGUsIHdpdGggSW5mb1dpbmRvd3Mgb2YgbG93ZXIgbGF0aXR1ZGVzIGFwcGVhcmluZyBpbiBmcm9udCBvZlxuICAgICAqIEluZm9XaW5kb3dzIGF0IGhpZ2hlciBsYXRpdHVkZXMuIEluZm9XaW5kb3dzIGFyZSBhbHdheXMgZGlzcGxheWVkIGluIGZyb250IG9mIG1hcmtlcnMuXG4gICAgICovXG4gICAgekluZGV4OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogTWF4aW11bSB3aWR0aCBvZiB0aGUgaW5mb3dpbmRvdywgcmVnYXJkbGVzcyBvZiBjb250ZW50J3Mgd2lkdGguIFRoaXMgdmFsdWUgaXMgb25seSBjb25zaWRlcmVkXG4gICAgICogaWYgaXQgaXMgc2V0IGJlZm9yZSBhIGNhbGwgdG8gb3Blbi4gVG8gY2hhbmdlIHRoZSBtYXhpbXVtIHdpZHRoIHdoZW4gY2hhbmdpbmcgY29udGVudCwgY2FsbFxuICAgICAqIGNsb3NlLCB1cGRhdGUgbWF4V2lkdGgsIGFuZCB0aGVuIG9wZW4uXG4gICAgICovXG4gICAgbWF4V2lkdGg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBIb2xkcyB0aGUgbWFya2VyIHRoYXQgaXMgdGhlIGhvc3Qgb2YgdGhlIGluZm8gd2luZG93IChpZiBhdmFpbGFibGUpXG4gICAgICovXG4gICAgaG9zdE1hcmtlcjogQWdtTWFya2VyO1xuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBuYXRpdmUgZWxlbWVudCB0aGF0IGlzIHVzZWQgZm9yIHRoZSBpbmZvIHdpbmRvdyBjb250ZW50LlxuICAgICAqL1xuICAgIGNvbnRlbnQ6IE5vZGU7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgb3BlbiBzdGF0ZSBmb3IgdGhlIEluZm9XaW5kb3cuIFlvdSBjYW4gYWxzbyBjYWxsIHRoZSBvcGVuKCkgYW5kIGNsb3NlKCkgbWV0aG9kcy5cbiAgICAgKi9cbiAgICBpc09wZW46IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgaW5mbyB3aW5kb3cgaXMgY2xvc2VkLlxuICAgICAqL1xuICAgIGluZm9XaW5kb3dDbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIHByaXZhdGUgX2luZm9XaW5kb3dBZGRlZFRvTWFuYWdlcjtcbiAgICBwcml2YXRlIF9pZDtcbiAgICBjb25zdHJ1Y3RvcihfaW5mb1dpbmRvd01hbmFnZXI6IEluZm9XaW5kb3dNYW5hZ2VyLCBfZWw6IEVsZW1lbnRSZWYpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlO1xuICAgIH0pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSBpbmZvIHdpbmRvdy5cbiAgICAgKi9cbiAgICBvcGVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBpbmZvIHdpbmRvdy5cbiAgICAgKi9cbiAgICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBpZCgpOiBzdHJpbmc7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcbiAgICAvKiogQGludGVybmFsICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBwcml2YXRlIF9yZWdpc3RlckV2ZW50TGlzdGVuZXJzO1xuICAgIHByaXZhdGUgX3VwZGF0ZU9wZW5TdGF0ZTtcbiAgICBwcml2YXRlIF9zZXRJbmZvV2luZG93T3B0aW9ucztcbn1cbiJdfQ==