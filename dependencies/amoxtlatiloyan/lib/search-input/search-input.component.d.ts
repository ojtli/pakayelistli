import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class SearchInputComponent implements OnInit, OnChanges {
    address: string;
    fullAddress: string;
    hint: boolean | string;
    error: string;
    submitted: EventEmitter<string>;
    addressField: FormControl;
    constructor();
    ngOnInit(): void;
    reset(): void;
    propagate(): void;
    preventEnter($event: any): void;
    isString(hint: boolean | string): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchInputComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SearchInputComponent, "lib-search-input", never, { "hint": "hint"; "fullAddress": "fullAddress"; "error": "error"; }, { "submitted": "submitted"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzZWFyY2gtaW5wdXQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2VhcmNoSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIGZ1bGxBZGRyZXNzOiBzdHJpbmc7XG4gICAgaGludDogYm9vbGVhbiB8IHN0cmluZztcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIHN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHN0cmluZz47XG4gICAgYWRkcmVzc0ZpZWxkOiBGb3JtQ29udHJvbDtcbiAgICBjb25zdHJ1Y3RvcigpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcmVzZXQoKTogdm9pZDtcbiAgICBwcm9wYWdhdGUoKTogdm9pZDtcbiAgICBwcmV2ZW50RW50ZXIoJGV2ZW50OiBhbnkpOiB2b2lkO1xuICAgIGlzU3RyaW5nKGhpbnQ6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xufVxuIl19