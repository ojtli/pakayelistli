import { __decorate } from "tslib";
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { TOKEN } from './amoxtlatiloyan.module';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(inj /*, @Optional() @Inject(TOKEN) private readonly apiToken: string = null*/) {
        this.apiToken = inj.get(TOKEN);
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req.clone({
            headers: req.headers.set('Authorization', this.apiToken)
        });
        return next.handle(authReq);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: Injector /*, @Optional() @Inject(TOKEN) private readonly apiToken: string = null*/ }
    ]; };
    AuthInterceptor = __decorate([
        Injectable()
    ], AuthInterceptor);
    return AuthInterceptor;
}());
export { AuthInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW1veHRsYXRpbG95YW4vIiwic291cmNlcyI6WyJsaWIvQXV0aEludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUk5QztJQUVFLHlCQUFZLEdBQWEsQ0FBQSx5RUFBeUU7UUFDaEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxtQ0FBUyxHQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjtRQUNoRCxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN6RCxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBVGdCLFFBQVEsQ0FBQSx5RUFBeUU7O0lBRnZGLGVBQWU7UUFEM0IsVUFBVSxFQUFFO09BQ0EsZUFBZSxDQVkzQjtJQUFELHNCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1RPS0VOfSBmcm9tICcuL2Ftb3h0bGF0aWxveWFuLm1vZHVsZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSBhcGlUb2tlbjogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihpbmo6IEluamVjdG9yLyosIEBPcHRpb25hbCgpIEBJbmplY3QoVE9LRU4pIHByaXZhdGUgcmVhZG9ubHkgYXBpVG9rZW46IHN0cmluZyA9IG51bGwqLykge1xuICAgIHRoaXMuYXBpVG9rZW4gPSBpbmouZ2V0KFRPS0VOKTtcbiAgfVxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBhdXRoUmVxID0gcmVxLmNsb25lKHtcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsIHRoaXMuYXBpVG9rZW4pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUoYXV0aFJlcSk7XG4gIH1cbn1cbiJdfQ==