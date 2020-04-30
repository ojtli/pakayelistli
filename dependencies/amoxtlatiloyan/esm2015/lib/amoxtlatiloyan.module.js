var AmoxtlatiloyanModule_1;
import { __decorate } from "tslib";
import { InjectionToken, NgModule } from '@angular/core';
import { SearchFormComponent } from './search-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SearchInputComponent } from './search-input/search-input.component';
import { AuthInterceptor } from './AuthInterceptor';
export const BASE_URL = new InjectionToken('BASE_URL');
export const TOKEN = new InjectionToken('TOKEN');
let AmoxtlatiloyanModule = AmoxtlatiloyanModule_1 = class AmoxtlatiloyanModule {
    static forRoot(host, apiToken) {
        return {
            ngModule: AmoxtlatiloyanModule_1,
            providers: [
                {
                    provide: BASE_URL,
                    useValue: host
                },
                {
                    provide: TOKEN,
                    useValue: apiToken
                }
            ]
        };
    }
};
AmoxtlatiloyanModule = AmoxtlatiloyanModule_1 = __decorate([
    NgModule({
        declarations: [SearchFormComponent, SearchInputComponent],
        imports: [
            CommonModule,
            BrowserAnimationsModule,
            HttpClientModule,
            MatFormFieldModule,
            ReactiveFormsModule,
            MatAutocompleteModule,
            MatIconModule,
            FormsModule,
            MatInputModule,
            MatButtonModule
        ],
        providers: [
            { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, deps: [TOKEN] }
        ],
        exports: [SearchFormComponent, SearchInputComponent]
    })
], AmoxtlatiloyanModule);
export { AmoxtlatiloyanModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1veHRsYXRpbG95YW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW1veHRsYXRpbG95YW4vIiwic291cmNlcyI6WyJsaWIvYW1veHRsYXRpbG95YW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLElBQUksY0FBYyxDQUFTLFVBQVUsQ0FBQyxDQUFDO0FBQy9ELE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLGNBQWMsQ0FBUyxPQUFPLENBQUMsQ0FBQztBQXFCekQsSUFBYSxvQkFBb0IsNEJBQWpDLE1BQWEsb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBWSxFQUFFLFFBQWdCO1FBQzNDLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsUUFBUTtvQkFDakIsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFFLFFBQVE7aUJBQ25CO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFoQlksb0JBQW9CO0lBbkJoQyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsQ0FBQztRQUN6RCxPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixhQUFhO1lBQ2IsV0FBVztZQUNYLGNBQWM7WUFDZCxlQUFlO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFDO1NBQ3BGO1FBQ0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUM7S0FDckQsQ0FBQztHQUNXLG9CQUFvQixDQWdCaEM7U0FoQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3Rpb25Ub2tlbiwgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgU2VhcmNoSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7QXV0aEludGVyY2VwdG9yfSBmcm9tICcuL0F1dGhJbnRlcmNlcHRvcic7XG5cbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdCQVNFX1VSTCcpO1xuZXhwb3J0IGNvbnN0IFRPS0VOID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ1RPS0VOJyk7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NlYXJjaEZvcm1Db21wb25lbnQsIFNlYXJjaElucHV0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBBdXRoSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlLCBkZXBzOiBbVE9LRU5dfVxuICBdLFxuICBleHBvcnRzOiBbU2VhcmNoRm9ybUNvbXBvbmVudCwgU2VhcmNoSW5wdXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFtb3h0bGF0aWxveWFuTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoaG9zdDogc3RyaW5nLCBhcGlUb2tlbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbW94dGxhdGlsb3lhbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQkFTRV9VUkwsXG4gICAgICAgICAgdXNlVmFsdWU6IGhvc3RcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFRPS0VOLFxuICAgICAgICAgIHVzZVZhbHVlOiBhcGlUb2tlblxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19