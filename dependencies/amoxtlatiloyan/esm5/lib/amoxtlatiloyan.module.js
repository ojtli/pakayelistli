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
export var BASE_URL = new InjectionToken('BASE_URL');
export var TOKEN = new InjectionToken('TOKEN');
var AmoxtlatiloyanModule = /** @class */ (function () {
    function AmoxtlatiloyanModule() {
    }
    AmoxtlatiloyanModule_1 = AmoxtlatiloyanModule;
    AmoxtlatiloyanModule.forRoot = function (host, apiToken) {
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
    };
    var AmoxtlatiloyanModule_1;
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
    return AmoxtlatiloyanModule;
}());
export { AmoxtlatiloyanModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1veHRsYXRpbG95YW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW1veHRsYXRpbG95YW4vIiwic291cmNlcyI6WyJsaWIvYW1veHRsYXRpbG95YW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQVMsVUFBVSxDQUFDLENBQUM7QUFDL0QsTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHLElBQUksY0FBYyxDQUFTLE9BQU8sQ0FBQyxDQUFDO0FBcUJ6RDtJQUFBO0lBZ0JBLENBQUM7NkJBaEJZLG9CQUFvQjtJQUN4Qiw0QkFBTyxHQUFkLFVBQWUsSUFBWSxFQUFFLFFBQWdCO1FBQzNDLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsUUFBUTtvQkFDakIsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFFLFFBQVE7aUJBQ25CO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFmVSxvQkFBb0I7UUFuQmhDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDO1lBQ3pELE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLHVCQUF1QjtnQkFDdkIsZ0JBQWdCO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkIscUJBQXFCO2dCQUNyQixhQUFhO2dCQUNiLFdBQVc7Z0JBQ1gsY0FBYztnQkFDZCxlQUFlO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBQzthQUNwRjtZQUNELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDO1NBQ3JELENBQUM7T0FDVyxvQkFBb0IsQ0FnQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGlvblRva2VuLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRBdXRvY29tcGxldGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBTZWFyY2hJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoSW50ZXJjZXB0b3J9IGZyb20gJy4vQXV0aEludGVyY2VwdG9yJztcblxuZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ0JBU0VfVVJMJyk7XG5leHBvcnQgY29uc3QgVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignVE9LRU4nKTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2VhcmNoRm9ybUNvbXBvbmVudCwgU2VhcmNoSW5wdXRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEF1dGhJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUsIGRlcHM6IFtUT0tFTl19XG4gIF0sXG4gIGV4cG9ydHM6IFtTZWFyY2hGb3JtQ29tcG9uZW50LCBTZWFyY2hJbnB1dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW1veHRsYXRpbG95YW5Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChob3N0OiBzdHJpbmcsIGFwaVRva2VuOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFtb3h0bGF0aWxveWFuTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBCQVNFX1VSTCxcbiAgICAgICAgICB1c2VWYWx1ZTogaG9zdFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVE9LRU4sXG4gICAgICAgICAgdXNlVmFsdWU6IGFwaVRva2VuXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=