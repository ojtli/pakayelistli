import { __decorate, __param } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BASE_URL } from './amoxtlatiloyan.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./amoxtlatiloyan.module";
var AddressService = /** @class */ (function () {
    function AddressService(http, api) {
        if (api === void 0) { api = null; }
        this.http = http;
        this.api = api;
    }
    AddressService.isValid = function (address) {
        return (!address.reference && (!address.road && !address.roadKm) && (!address.neighborhood && !address.houseNumber))
            || (address.road && !address.roadKm && !address.reference)
            || ((address.houseNumber && !address.neighborhood) || (!address.houseNumber && address.neighborhood));
    };
    AddressService.prototype.validate = function (address) {
        return this.http.post(this.api + "search/validate", { address: address });
    };
    AddressService.prototype.analyze = function (address) {
        return this.http.post(this.api + "search/analyze", { address: address }).pipe(catchError(this.handleError));
    };
    AddressService.prototype.search = function (address) {
        return this.http.post(this.api + "search", address)
            .pipe(catchError(this.handleError));
    };
    AddressService.prototype.detailSearch = function (address) {
        return this.http.post(this.api + "search/detail", address)
            .pipe(catchError(this.handleError));
    };
    AddressService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            // errorMessage = `An error occurred: ${err.error.message}`;
            errorMessage = "Error de conexi\u00F3n";
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            // errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
            errorMessage = err.status === 404 ? "Direcci\u00F3n no encontrada" : "Error en el servidor.";
        }
        return throwError(errorMessage);
    };
    AddressService.prototype.isMaybeAnAddress = function (input) {
        return /(costado|esquina)|(\d*.*(cuadra)?.*(norte|sur|este|oeste|abajo|arriba|lago))|(\d.*(C|metro).*(s|n|e|o))/gi.test(input);
    };
    AddressService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_URL,] }] }
    ]; };
    AddressService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AddressService_Factory() { return new AddressService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.BASE_URL, 8)); }, token: AddressService, providedIn: "root" });
    AddressService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(1, Optional()), __param(1, Inject(BASE_URL))
    ], AddressService);
    return AddressService;
}());
export { AddressService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW1veHRsYXRpbG95YW4vIiwic291cmNlcyI6WyJsaWIvYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRW5FLE9BQU8sRUFBYSxVQUFVLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUtqRDtJQUdFLHdCQUFvQixJQUFnQixFQUNNLEdBQWtCO1FBQWxCLG9CQUFBLEVBQUEsVUFBa0I7UUFEeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUVoQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRU0sc0JBQU8sR0FBZCxVQUFlLE9BQWdCO1FBQzdCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7ZUFDL0csQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7ZUFDdkQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxPQUFlO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLEdBQUcsb0JBQWlCLEVBQ2hELEVBQUMsT0FBTyxTQUFBLEVBQUMsQ0FDVixDQUFDO0lBQ0osQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxPQUFlO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLEdBQUcsbUJBQWdCLEVBQy9DLEVBQUMsT0FBTyxTQUFBLEVBQUMsQ0FDVixDQUFDLElBQUksQ0FDSixVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxPQUFnQjtRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxHQUFHLFdBQVEsRUFBRSxPQUFPLENBQUM7YUFDaEQsSUFBSSxDQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzdCLENBQUM7SUFDTixDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLE9BQWdCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLEdBQUcsa0JBQWUsRUFBRSxPQUFPLENBQUM7YUFDdkQsSUFBSSxDQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzdCLENBQUM7SUFDTixDQUFDO0lBRVMsb0NBQVcsR0FBckIsVUFBc0IsR0FBc0I7UUFDMUMsb0ZBQW9GO1FBQ3BGLDRDQUE0QztRQUM1QyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxHQUFHLENBQUMsS0FBSyxZQUFZLFVBQVUsRUFBRTtZQUNuQyxrRUFBa0U7WUFDbEUsNERBQTREO1lBQzVELFlBQVksR0FBRyx3QkFBbUIsQ0FBQztTQUNwQzthQUFNO1lBQ0wsc0RBQXNEO1lBQ3RELDZEQUE2RDtZQUM3RCwwRkFBMEY7WUFDMUYsWUFBWSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyw4QkFBeUIsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUM7U0FDekY7UUFDRCxPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQseUNBQWdCLEdBQWhCLFVBQWlCLEtBQWE7UUFDNUIsT0FBTywyR0FBMkcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakksQ0FBQzs7Z0JBMUR5QixVQUFVOzZDQUN2QixRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7OztJQUo3QixjQUFjO1FBSDFCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFLYSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7T0FKOUIsY0FBYyxDQThEMUI7eUJBeEVEO0NBd0VDLEFBOURELElBOERDO1NBOURZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtBZGRyZXNzfSBmcm9tICcuL2FkZHJlc3MnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCB0aHJvd0Vycm9yfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtCQVNFX1VSTH0gZnJvbSAnLi9hbW94dGxhdGlsb3lhbi5tb2R1bGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgYXBpOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEJBU0VfVVJMKSBhcGk6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgIHRoaXMuYXBpID0gYXBpO1xuICB9XG5cbiAgc3RhdGljIGlzVmFsaWQoYWRkcmVzczogQWRkcmVzcykge1xuICAgIHJldHVybiAoIWFkZHJlc3MucmVmZXJlbmNlICYmICghYWRkcmVzcy5yb2FkICYmICFhZGRyZXNzLnJvYWRLbSkgJiYgKCFhZGRyZXNzLm5laWdoYm9yaG9vZCAmJiAhYWRkcmVzcy5ob3VzZU51bWJlcikpXG4gICAgICB8fCAoYWRkcmVzcy5yb2FkICYmICFhZGRyZXNzLnJvYWRLbSAmJiAhYWRkcmVzcy5yZWZlcmVuY2UpXG4gICAgICB8fCAoKGFkZHJlc3MuaG91c2VOdW1iZXIgJiYgIWFkZHJlc3MubmVpZ2hib3Job29kKSB8fCAoIWFkZHJlc3MuaG91c2VOdW1iZXIgJiYgYWRkcmVzcy5uZWlnaGJvcmhvb2QpKTtcbiAgfVxuXG4gIHZhbGlkYXRlKGFkZHJlc3M6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmFwaX1zZWFyY2gvdmFsaWRhdGVgLFxuICAgICAge2FkZHJlc3N9LFxuICAgICk7XG4gIH1cblxuICBhbmFseXplKGFkZHJlc3M6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmFwaX1zZWFyY2gvYW5hbHl6ZWAsXG4gICAgICB7YWRkcmVzc30sXG4gICAgKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICk7XG4gIH1cblxuICBzZWFyY2goYWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuYXBpfXNlYXJjaGAsIGFkZHJlc3MpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIGRldGFpbFNlYXJjaChhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5hcGl9c2VhcmNoL2RldGFpbGAsIGFkZHJlc3MpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVFcnJvcihlcnI6IEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgLy8gaW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWF5IHNlbmQgdGhlIHNlcnZlciB0byBzb21lIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXG4gICAgLy8gaW5zdGVhZCBvZiBqdXN0IGxvZ2dpbmcgaXQgdG8gdGhlIGNvbnNvbGVcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgaWYgKGVyci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgLy8gZXJyb3JNZXNzYWdlID0gYEFuIGVycm9yIG9jY3VycmVkOiAke2Vyci5lcnJvci5tZXNzYWdlfWA7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBgRXJyb3IgZGUgY29uZXhpw7NuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIGJhY2tlbmQgcmV0dXJuZWQgYW4gdW5zdWNjZXNzZnVsIHJlc3BvbnNlIGNvZGUuXG4gICAgICAvLyBUaGUgcmVzcG9uc2UgYm9keSBtYXkgY29udGFpbiBjbHVlcyBhcyB0byB3aGF0IHdlbnQgd3JvbmcsXG4gICAgICAvLyBlcnJvck1lc3NhZ2UgPSBgU2VydmVyIHJldHVybmVkIGNvZGU6ICR7ZXJyLnN0YXR1c30sIGVycm9yIG1lc3NhZ2UgaXM6ICR7ZXJyLm1lc3NhZ2V9YDtcbiAgICAgIGVycm9yTWVzc2FnZSA9IGVyci5zdGF0dXMgPT09IDQwNCA/IGBEaXJlY2Npw7NuIG5vIGVuY29udHJhZGFgIDogYEVycm9yIGVuIGVsIHNlcnZpZG9yLmA7XG4gICAgfVxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yTWVzc2FnZSk7XG4gIH1cblxuICBpc01heWJlQW5BZGRyZXNzKGlucHV0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gLyhjb3N0YWRvfGVzcXVpbmEpfChcXGQqLiooY3VhZHJhKT8uKihub3J0ZXxzdXJ8ZXN0ZXxvZXN0ZXxhYmFqb3xhcnJpYmF8bGFnbykpfChcXGQuKihDfG1ldHJvKS4qKHN8bnxlfG8pKS9naS50ZXN0KGlucHV0KTtcbiAgfVxufVxuIl19