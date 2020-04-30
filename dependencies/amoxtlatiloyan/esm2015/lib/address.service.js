import { __decorate, __param } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BASE_URL } from './amoxtlatiloyan.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./amoxtlatiloyan.module";
let AddressService = class AddressService {
    constructor(http, api = null) {
        this.http = http;
        this.api = api;
    }
    static isValid(address) {
        return (!address.reference && (!address.road && !address.roadKm) && (!address.neighborhood && !address.houseNumber))
            || (address.road && !address.roadKm && !address.reference)
            || ((address.houseNumber && !address.neighborhood) || (!address.houseNumber && address.neighborhood));
    }
    validate(address) {
        return this.http.post(`${this.api}search/validate`, { address });
    }
    analyze(address) {
        return this.http.post(`${this.api}search/analyze`, { address }).pipe(catchError(this.handleError));
    }
    search(address) {
        return this.http.post(`${this.api}search`, address)
            .pipe(catchError(this.handleError));
    }
    detailSearch(address) {
        return this.http.post(`${this.api}search/detail`, address)
            .pipe(catchError(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            // errorMessage = `An error occurred: ${err.error.message}`;
            errorMessage = `Error de conexión`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            // errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
            errorMessage = err.status === 404 ? `Dirección no encontrada` : `Error en el servidor.`;
        }
        return throwError(errorMessage);
    }
    isMaybeAnAddress(input) {
        return /(costado|esquina)|(\d*.*(cuadra)?.*(norte|sur|este|oeste|abajo|arriba|lago))|(\d.*(C|metro).*(s|n|e|o))/gi.test(input);
    }
};
AddressService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_URL,] }] }
];
AddressService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AddressService_Factory() { return new AddressService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.BASE_URL, 8)); }, token: AddressService, providedIn: "root" });
AddressService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(1, Optional()), __param(1, Inject(BASE_URL))
], AddressService);
export { AddressService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW1veHRsYXRpbG95YW4vIiwic291cmNlcyI6WyJsaWIvYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRW5FLE9BQU8sRUFBYSxVQUFVLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUtqRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBR3pCLFlBQW9CLElBQWdCLEVBQ00sTUFBYyxJQUFJO1FBRHhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFFaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBZ0I7UUFDN0IsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztlQUMvRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztlQUN2RCxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsUUFBUSxDQUFDLE9BQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLGlCQUFpQixFQUNoRCxFQUFDLE9BQU8sRUFBQyxDQUNWLENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWU7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLGdCQUFnQixFQUMvQyxFQUFDLE9BQU8sRUFBQyxDQUNWLENBQUMsSUFBSSxDQUNKLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQWdCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ2hELElBQUksQ0FDSCxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO0lBQ04sQ0FBQztJQUVELFlBQVksQ0FBQyxPQUFnQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsZUFBZSxFQUFFLE9BQU8sQ0FBQzthQUN2RCxJQUFJLENBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDN0IsQ0FBQztJQUNOLENBQUM7SUFFUyxXQUFXLENBQUMsR0FBc0I7UUFDMUMsb0ZBQW9GO1FBQ3BGLDRDQUE0QztRQUM1QyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxHQUFHLENBQUMsS0FBSyxZQUFZLFVBQVUsRUFBRTtZQUNuQyxrRUFBa0U7WUFDbEUsNERBQTREO1lBQzVELFlBQVksR0FBRyxtQkFBbUIsQ0FBQztTQUNwQzthQUFNO1lBQ0wsc0RBQXNEO1lBQ3RELDZEQUE2RDtZQUM3RCwwRkFBMEY7WUFDMUYsWUFBWSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUM7U0FDekY7UUFDRCxPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBYTtRQUM1QixPQUFPLDJHQUEyRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqSSxDQUFDO0NBQ0YsQ0FBQTs7WUEzRDJCLFVBQVU7eUNBQ3ZCLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7O0FBSjdCLGNBQWM7SUFIMUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQUthLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtHQUo5QixjQUFjLENBOEQxQjtTQTlEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QWRkcmVzc30gZnJvbSAnLi9hZGRyZXNzJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgdGhyb3dFcnJvcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3J9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QkFTRV9VUkx9IGZyb20gJy4vYW1veHRsYXRpbG95YW4ubW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc1NlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGFwaTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChCQVNFX1VSTCkgYXBpOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgfVxuXG4gIHN0YXRpYyBpc1ZhbGlkKGFkZHJlc3M6IEFkZHJlc3MpIHtcbiAgICByZXR1cm4gKCFhZGRyZXNzLnJlZmVyZW5jZSAmJiAoIWFkZHJlc3Mucm9hZCAmJiAhYWRkcmVzcy5yb2FkS20pICYmICghYWRkcmVzcy5uZWlnaGJvcmhvb2QgJiYgIWFkZHJlc3MuaG91c2VOdW1iZXIpKVxuICAgICAgfHwgKGFkZHJlc3Mucm9hZCAmJiAhYWRkcmVzcy5yb2FkS20gJiYgIWFkZHJlc3MucmVmZXJlbmNlKVxuICAgICAgfHwgKChhZGRyZXNzLmhvdXNlTnVtYmVyICYmICFhZGRyZXNzLm5laWdoYm9yaG9vZCkgfHwgKCFhZGRyZXNzLmhvdXNlTnVtYmVyICYmIGFkZHJlc3MubmVpZ2hib3Job29kKSk7XG4gIH1cblxuICB2YWxpZGF0ZShhZGRyZXNzOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5hcGl9c2VhcmNoL3ZhbGlkYXRlYCxcbiAgICAgIHthZGRyZXNzfSxcbiAgICApO1xuICB9XG5cbiAgYW5hbHl6ZShhZGRyZXNzOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5hcGl9c2VhcmNoL2FuYWx5emVgLFxuICAgICAge2FkZHJlc3N9LFxuICAgICkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICApO1xuICB9XG5cbiAgc2VhcmNoKGFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmFwaX1zZWFyY2hgLCBhZGRyZXNzKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBkZXRhaWxTZWFyY2goYWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuYXBpfXNlYXJjaC9kZXRhaWxgLCBhZGRyZXNzKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlRXJyb3IoZXJyOiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgIC8vIGluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1heSBzZW5kIHRoZSBzZXJ2ZXIgdG8gc29tZSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgIC8vIGluc3RlYWQgb2YganVzdCBsb2dnaW5nIGl0IHRvIHRoZSBjb25zb2xlXG4gICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnO1xuICAgIGlmIChlcnIuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XG4gICAgICAvLyBBIGNsaWVudC1zaWRlIG9yIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQuIEhhbmRsZSBpdCBhY2NvcmRpbmdseS5cbiAgICAgIC8vIGVycm9yTWVzc2FnZSA9IGBBbiBlcnJvciBvY2N1cnJlZDogJHtlcnIuZXJyb3IubWVzc2FnZX1gO1xuICAgICAgZXJyb3JNZXNzYWdlID0gYEVycm9yIGRlIGNvbmV4acOzbmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxuICAgICAgLy8gVGhlIHJlc3BvbnNlIGJvZHkgbWF5IGNvbnRhaW4gY2x1ZXMgYXMgdG8gd2hhdCB3ZW50IHdyb25nLFxuICAgICAgLy8gZXJyb3JNZXNzYWdlID0gYFNlcnZlciByZXR1cm5lZCBjb2RlOiAke2Vyci5zdGF0dXN9LCBlcnJvciBtZXNzYWdlIGlzOiAke2Vyci5tZXNzYWdlfWA7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBlcnIuc3RhdHVzID09PSA0MDQgPyBgRGlyZWNjacOzbiBubyBlbmNvbnRyYWRhYCA6IGBFcnJvciBlbiBlbCBzZXJ2aWRvci5gO1xuICAgIH1cbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgaXNNYXliZUFuQWRkcmVzcyhpbnB1dDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIC8oY29zdGFkb3xlc3F1aW5hKXwoXFxkKi4qKGN1YWRyYSk/Lioobm9ydGV8c3VyfGVzdGV8b2VzdGV8YWJham98YXJyaWJhfGxhZ28pKXwoXFxkLiooQ3xtZXRybykuKihzfG58ZXxvKSkvZ2kudGVzdChpbnB1dCk7XG4gIH1cbn1cbiJdfQ==