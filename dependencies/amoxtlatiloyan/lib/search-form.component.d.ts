import { EventEmitter, OnInit } from '@angular/core';
import { Reference } from './reference';
import { FormControl, NgForm } from '@angular/forms';
import { Address } from './address';
import * as ɵngcc0 from '@angular/core';
export declare class SearchFormComponent implements OnInit {
    address: Address;
    ref: Reference;
    cityCtrl: FormControl;
    filteredCities: any;
    searchForm: NgForm;
    copyAddress: string;
    submitText: string;
    autoClear: boolean;
    submitted: EventEmitter<Address>;
    constructor();
    ngOnInit(): void;
    addSegment(index?: number): void;
    deleteSegment(): void;
    clear(): void;
    search(): void;
    isSameAddress(): boolean;
    addressToString(address: Address, coloquial?: boolean): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SearchFormComponent, "lib-search-form", never, { "submitText": "submitText"; "autoClear": "autoClear"; }, { "submitted": "submitted"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInNlYXJjaC1mb3JtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVmZXJlbmNlIH0gZnJvbSAnLi9yZWZlcmVuY2UnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuL2FkZHJlc3MnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2VhcmNoRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYWRkcmVzczogQWRkcmVzcztcbiAgICByZWY6IFJlZmVyZW5jZTtcbiAgICBjaXR5Q3RybDogRm9ybUNvbnRyb2w7XG4gICAgZmlsdGVyZWRDaXRpZXM6IGFueTtcbiAgICBzZWFyY2hGb3JtOiBOZ0Zvcm07XG4gICAgY29weUFkZHJlc3M6IHN0cmluZztcbiAgICBzdWJtaXRUZXh0OiBzdHJpbmc7XG4gICAgYXV0b0NsZWFyOiBib29sZWFuO1xuICAgIHN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPEFkZHJlc3M+O1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBhZGRTZWdtZW50KGluZGV4PzogbnVtYmVyKTogdm9pZDtcbiAgICBkZWxldGVTZWdtZW50KCk6IHZvaWQ7XG4gICAgY2xlYXIoKTogdm9pZDtcbiAgICBzZWFyY2goKTogdm9pZDtcbiAgICBpc1NhbWVBZGRyZXNzKCk6IGJvb2xlYW47XG4gICAgYWRkcmVzc1RvU3RyaW5nKGFkZHJlc3M6IEFkZHJlc3MsIGNvbG9xdWlhbD86IGJvb2xlYW4pOiBzdHJpbmc7XG59XG4iXX0=