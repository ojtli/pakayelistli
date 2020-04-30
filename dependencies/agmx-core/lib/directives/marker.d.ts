import { EventEmitter, OnChanges, OnDestroy, SimpleChange, AfterContentInit, QueryList } from '@angular/core';
import { MouseEvent } from '../map-types';
import { MarkerManager } from '../services/managers/marker-manager';
import { AgmInfoWindow } from './info-window';
import { MarkerLabel } from '../map-types';
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
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
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class AgmMarker implements OnDestroy, OnChanges, AfterContentInit {
    private _markerManager;
    /**
     * The latitude position of the marker.
     */
    latitude: number;
    /**
     * The longitude position of the marker.
     */
    longitude: number;
    /**
     * The title of the marker.
     */
    title: string;
    /**
     * The label (a single uppercase character) for the marker.
     */
    label: string | MarkerLabel;
    /**
     * If true, the marker can be dragged. Default value is false.
     */
    draggable: boolean;
    /**
     * Icon (the URL of the image) for the foreground.
     */
    iconUrl: string;
    /**
     * If true, the marker is visible
     */
    visible: boolean;
    /**
     * Whether to automatically open the child info window when the marker is clicked.
     */
    openInfoWindow: boolean;
    /**
     * The marker's opacity between 0.0 and 1.0.
     */
    opacity: number;
    /**
     * All markers are displayed on the map in order of their zIndex, with higher values displaying in
     * front of markers with lower values. By default, markers are displayed according to their
     * vertical position on screen, with lower markers appearing in front of markers further up the
     * screen.
     */
    zIndex: number;
    /**
     * If true, the marker can be clicked. Default value is true.
     */
    clickable: boolean;
    /**
     * Which animation to play when marker is added to a map.
     * This can be 'BOUNCE' or 'DROP'
     */
    animation: 'BOUNCE' | 'DROP' | null;
    /**
     * This event emitter gets emitted when the user clicks on the marker.
     */
    markerClick: EventEmitter<void>;
    /**
     * This event is fired when the user stops dragging the marker.
     */
    dragEnd: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user mouses over the marker.
     */
    mouseOver: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user mouses outside the marker.
     */
    mouseOut: EventEmitter<MouseEvent>;
    /**
     * @internal
     */
    infoWindow: QueryList<AgmInfoWindow>;
    private _markerAddedToManger;
    private _id;
    private _observableSubscriptions;
    constructor(_markerManager: MarkerManager);
    ngAfterContentInit(): void;
    /** @internal */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    /** @internal */
    id(): string;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
    private handleInfoWindowUpdate;
    private _addEventListeners;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmMarker, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmMarker, "agm-marker", never, { "latitude": "latitude"; "longitude": "longitude"; "title": "title"; "label": "label"; "draggable": "markerDraggable"; "iconUrl": "iconUrl"; "openInfoWindow": "openInfoWindow"; "opacity": "opacity"; "visible": "visible"; "zIndex": "zIndex"; "animation": "animation"; "clickable": "markerClickable"; }, { "markerClick": "markerClick"; "dragEnd": "dragEnd"; "mouseOver": "mouseOver"; "mouseOut": "mouseOut"; }, ["infoWindow"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmQudHMiLCJzb3VyY2VzIjpbIm1hcmtlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZSwgQWZ0ZXJDb250ZW50SW5pdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb3VzZUV2ZW50IH0gZnJvbSAnLi4vbWFwLXR5cGVzJztcbmltcG9ydCB7IE1hcmtlck1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9tYXJrZXItbWFuYWdlcic7XG5pbXBvcnQgeyBBZ21JbmZvV2luZG93IH0gZnJvbSAnLi9pbmZvLXdpbmRvdyc7XG5pbXBvcnQgeyBNYXJrZXJMYWJlbCB9IGZyb20gJy4uL21hcC10eXBlcyc7XG4vKipcbiAqIEFnbU1hcmtlciByZW5kZXJzIGEgbWFwIG1hcmtlciBpbnNpZGUgYSB7QGxpbmsgQWdtTWFwfS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICAuYWdtLW1hcC1jb250YWluZXIge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgICAgPGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW2xhYmVsXT1cIidNJ1wiPlxuICogICAgICA8L2FnbS1tYXJrZXI+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZ21NYXJrZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHJpdmF0ZSBfbWFya2VyTWFuYWdlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIG1hcmtlci5cbiAgICAgKi9cbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBsb25naXR1ZGUgcG9zaXRpb24gb2YgdGhlIG1hcmtlci5cbiAgICAgKi9cbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIG1hcmtlci5cbiAgICAgKi9cbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCAoYSBzaW5nbGUgdXBwZXJjYXNlIGNoYXJhY3RlcikgZm9yIHRoZSBtYXJrZXIuXG4gICAgICovXG4gICAgbGFiZWw6IHN0cmluZyB8IE1hcmtlckxhYmVsO1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBtYXJrZXIgY2FuIGJlIGRyYWdnZWQuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICovXG4gICAgZHJhZ2dhYmxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEljb24gKHRoZSBVUkwgb2YgdGhlIGltYWdlKSBmb3IgdGhlIGZvcmVncm91bmQuXG4gICAgICovXG4gICAgaWNvblVybDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBtYXJrZXIgaXMgdmlzaWJsZVxuICAgICAqL1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IG9wZW4gdGhlIGNoaWxkIGluZm8gd2luZG93IHdoZW4gdGhlIG1hcmtlciBpcyBjbGlja2VkLlxuICAgICAqL1xuICAgIG9wZW5JbmZvV2luZG93OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXJrZXIncyBvcGFjaXR5IGJldHdlZW4gMC4wIGFuZCAxLjAuXG4gICAgICovXG4gICAgb3BhY2l0eTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEFsbCBtYXJrZXJzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIG1hcCBpbiBvcmRlciBvZiB0aGVpciB6SW5kZXgsIHdpdGggaGlnaGVyIHZhbHVlcyBkaXNwbGF5aW5nIGluXG4gICAgICogZnJvbnQgb2YgbWFya2VycyB3aXRoIGxvd2VyIHZhbHVlcy4gQnkgZGVmYXVsdCwgbWFya2VycyBhcmUgZGlzcGxheWVkIGFjY29yZGluZyB0byB0aGVpclxuICAgICAqIHZlcnRpY2FsIHBvc2l0aW9uIG9uIHNjcmVlbiwgd2l0aCBsb3dlciBtYXJrZXJzIGFwcGVhcmluZyBpbiBmcm9udCBvZiBtYXJrZXJzIGZ1cnRoZXIgdXAgdGhlXG4gICAgICogc2NyZWVuLlxuICAgICAqL1xuICAgIHpJbmRleDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBtYXJrZXIgY2FuIGJlIGNsaWNrZWQuIERlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cbiAgICAgKi9cbiAgICBjbGlja2FibGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogV2hpY2ggYW5pbWF0aW9uIHRvIHBsYXkgd2hlbiBtYXJrZXIgaXMgYWRkZWQgdG8gYSBtYXAuXG4gICAgICogVGhpcyBjYW4gYmUgJ0JPVU5DRScgb3IgJ0RST1AnXG4gICAgICovXG4gICAgYW5pbWF0aW9uOiAnQk9VTkNFJyB8ICdEUk9QJyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgbWFya2VyLlxuICAgICAqL1xuICAgIG1hcmtlckNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIHRoZSBtYXJrZXIuXG4gICAgICovXG4gICAgZHJhZ0VuZDogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBtb3VzZXMgb3ZlciB0aGUgbWFya2VyLlxuICAgICAqL1xuICAgIG1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBtb3VzZXMgb3V0c2lkZSB0aGUgbWFya2VyLlxuICAgICAqL1xuICAgIG1vdXNlT3V0OiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgaW5mb1dpbmRvdzogUXVlcnlMaXN0PEFnbUluZm9XaW5kb3c+O1xuICAgIHByaXZhdGUgX21hcmtlckFkZGVkVG9NYW5nZXI7XG4gICAgcHJpdmF0ZSBfaWQ7XG4gICAgcHJpdmF0ZSBfb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnM7XG4gICAgY29uc3RydWN0b3IoX21hcmtlck1hbmFnZXI6IE1hcmtlck1hbmFnZXIpO1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZTtcbiAgICB9KTogdm9pZDtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgaWQoKTogc3RyaW5nO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBoYW5kbGVJbmZvV2luZG93VXBkYXRlO1xuICAgIHByaXZhdGUgX2FkZEV2ZW50TGlzdGVuZXJzO1xufVxuIl19