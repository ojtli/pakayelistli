import { __decorate } from "tslib";
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { TOKEN } from './amoxtlatiloyan.module';
let AuthInterceptor = class AuthInterceptor {
    constructor(inj /*, @Optional() @Inject(TOKEN) private readonly apiToken: string = null*/) {
        this.apiToken = inj.get(TOKEN);
    }
    intercept(req, next) {
        const authReq = req.clone({
            headers: req.headers.set('Authorization', this.apiToken)
        });
        return next.handle(authReq);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: Injector /*, @Optional() @Inject(TOKEN) private readonly apiToken: string = null*/ }
];
AuthInterceptor = __decorate([
    Injectable()
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW1veHRsYXRpbG95YW4vIiwic291cmNlcyI6WyJsaWIvQXV0aEludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUk5QyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBRTFCLFlBQVksR0FBYSxDQUFBLHlFQUF5RTtRQUNoRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBQ2hELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDeEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3pELENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0YsQ0FBQTs7WUFWa0IsUUFBUSxDQUFBLHlFQUF5RTs7QUFGdkYsZUFBZTtJQUQzQixVQUFVLEVBQUU7R0FDQSxlQUFlLENBWTNCO1NBWlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1RPS0VOfSBmcm9tICcuL2Ftb3h0bGF0aWxveWFuLm1vZHVsZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSBhcGlUb2tlbjogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihpbmo6IEluamVjdG9yLyosIEBPcHRpb25hbCgpIEBJbmplY3QoVE9LRU4pIHByaXZhdGUgcmVhZG9ubHkgYXBpVG9rZW46IHN0cmluZyA9IG51bGwqLykge1xuICAgIHRoaXMuYXBpVG9rZW4gPSBpbmouZ2V0KFRPS0VOKTtcbiAgfVxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBhdXRoUmVxID0gcmVxLmNsb25lKHtcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsIHRoaXMuYXBpVG9rZW4pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUoYXV0aFJlcSk7XG4gIH1cbn1cbiJdfQ==