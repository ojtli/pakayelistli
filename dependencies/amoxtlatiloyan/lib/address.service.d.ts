import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Address } from './address';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class AddressService {
    private http;
    private readonly api;
    constructor(http: HttpClient, api?: string);
    static isValid(address: Address): string | true;
    validate(address: string): Observable<Object>;
    analyze(address: string): Observable<Object>;
    search(address: Address): Observable<any>;
    detailSearch(address: Address): Observable<any>;
    protected handleError(err: HttpErrorResponse): Observable<never>;
    isMaybeAnAddress(input: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressService, [null, { optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImFkZHJlc3Muc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi9hZGRyZXNzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFkZHJlc3NTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGh0dHA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBhcGk7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgYXBpPzogc3RyaW5nKTtcbiAgICBzdGF0aWMgaXNWYWxpZChhZGRyZXNzOiBBZGRyZXNzKTogc3RyaW5nIHwgdHJ1ZTtcbiAgICB2YWxpZGF0ZShhZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9iamVjdD47XG4gICAgYW5hbHl6ZShhZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9iamVjdD47XG4gICAgc2VhcmNoKGFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZGV0YWlsU2VhcmNoKGFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgcHJvdGVjdGVkIGhhbmRsZUVycm9yKGVycjogSHR0cEVycm9yUmVzcG9uc2UpOiBPYnNlcnZhYmxlPG5ldmVyPjtcbiAgICBpc01heWJlQW5BZGRyZXNzKGlucHV0OiBzdHJpbmcpOiBib29sZWFuO1xufVxuIl19