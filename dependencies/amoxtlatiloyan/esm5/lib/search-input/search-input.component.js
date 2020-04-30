import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.hint = false;
        this.submitted = new EventEmitter();
        this.addressField = new FormControl();
    }
    SearchInputComponent.prototype.ngOnInit = function () {
        if (this.fullAddress) {
            this.address = this.fullAddress; // TODO: fix: textarea not resizing when adding initial value
        }
    };
    SearchInputComponent.prototype.reset = function () {
        this.address = '';
    };
    SearchInputComponent.prototype.propagate = function () {
        this.addressField.markAsTouched();
        this.submitted.emit(this.address);
    };
    SearchInputComponent.prototype.preventEnter = function ($event) {
        $event.preventDefault();
    };
    SearchInputComponent.prototype.isString = function (hint) {
        return typeof hint === 'string';
    };
    SearchInputComponent.prototype.ngOnChanges = function (changes) {
        if (changes['error'] && this.error) {
            this.addressField.setErrors({ anyError: true });
        }
    };
    __decorate([
        Input()
    ], SearchInputComponent.prototype, "fullAddress", void 0);
    __decorate([
        Input()
    ], SearchInputComponent.prototype, "hint", void 0);
    __decorate([
        Input()
    ], SearchInputComponent.prototype, "error", void 0);
    __decorate([
        Output()
    ], SearchInputComponent.prototype, "submitted", void 0);
    SearchInputComponent = __decorate([
        Component({
            selector: 'lib-search-input',
            template: "<mat-form-field appearance=\"outline\">\n  <mat-label>Direcci\u00F3n</mat-label>\n  <textarea (keydown.enter)=\"preventEnter($event)\" (keyup.enter)=\"propagate()\" [(ngModel)]=\"address\" [formControl]=\"addressField\"\n            cdkTextareaAutosize matInput name=\"address\" required></textarea>\n  <button (click)=\"reset()\" [disabled]=\"!address\" aria-label=\"Limpiar\" mat-icon-button matSuffix style=\"display: inline-block\"\n    type=\"reset\">\n    <mat-icon>backspace</mat-icon>\n  </button>\n  <button (click)=\"propagate()\" [disabled]=\"!address\" aria-label=\"buscar\" color=\"primary\"\n     mat-icon-button matSuffix style=\"display: inline-block\" type=\"submit\"><mat-icon>search</mat-icon></button>\n  <mat-hint *ngIf=\"hint\">\n    <span *ngIf=\"isString(hint); else elseBlock\">{{hint}}</span>\n    <ng-template #elseBlock><span class=\"longHint\">Puedes buscar direcciones completas,</span>&nbsp;\n      <span class=\"ejem\">ejem</span>: <strong>Donde fue la vicky 2c. al lago. Managua</strong>.</ng-template>\n  </mat-hint>\n  <mat-error *ngIf=\"addressField.hasError('anyError')\">{{error}}</mat-error>\n</mat-form-field>\n",
            styles: [".longHint{display:none}.ejem{text-transform:capitalize}@media all and (min-width:960px){.longHint{display:inline}.ejem{text-transform:none}}"]
        })
    ], SearchInputComponent);
    return SearchInputComponent;
}());
export { SearchInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Ftb3h0bGF0aWxveWFuLyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFHbEgsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBTzNDO0lBUUU7UUFMUyxTQUFJLEdBQXFCLEtBQUssQ0FBQztRQUU5QixjQUFTLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdkUsaUJBQVksR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBRWpCLENBQUM7SUFFakIsdUNBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyw2REFBNkQ7U0FDL0Y7SUFDSCxDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx3Q0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxNQUFXO1FBQ3RCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsdUNBQVEsR0FBUixVQUFTLElBQXNCO1FBQzdCLE9BQU8sT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQW5DUTtRQUFSLEtBQUssRUFBRTs2REFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7c0RBQWdDO0lBQy9CO1FBQVIsS0FBSyxFQUFFO3VEQUFlO0lBQ2I7UUFBVCxNQUFNLEVBQUU7MkRBQThEO0lBTDVELG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLDJvQ0FBNEM7O1NBRTdDLENBQUM7T0FDVyxvQkFBb0IsQ0FzQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXRDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SW5wdXR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNlYXJjaC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBASW5wdXQoKSBmdWxsQWRkcmVzczogc3RyaW5nO1xuICBASW5wdXQoKSBoaW50OiBib29sZWFuIHwgc3RyaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIGFkZHJlc3NGaWVsZCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZnVsbEFkZHJlc3MpIHtcbiAgICAgIHRoaXMuYWRkcmVzcyA9IHRoaXMuZnVsbEFkZHJlc3M7IC8vIFRPRE86IGZpeDogdGV4dGFyZWEgbm90IHJlc2l6aW5nIHdoZW4gYWRkaW5nIGluaXRpYWwgdmFsdWVcbiAgICB9XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmFkZHJlc3MgPSAnJztcbiAgfVxuXG4gIHByb3BhZ2F0ZSgpIHtcbiAgICB0aGlzLmFkZHJlc3NGaWVsZC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLmFkZHJlc3MpO1xuICB9XG5cbiAgcHJldmVudEVudGVyKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBpc1N0cmluZyhoaW50OiBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBoaW50ID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snZXJyb3InXSAmJiB0aGlzLmVycm9yKSB7XG4gICAgICB0aGlzLmFkZHJlc3NGaWVsZC5zZXRFcnJvcnMoe2FueUVycm9yOiB0cnVlfSk7XG4gICAgfVxuICB9XG59XG4iXX0=