import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
let SearchInputComponent = class SearchInputComponent {
    constructor() {
        this.hint = false;
        this.submitted = new EventEmitter();
        this.addressField = new FormControl();
    }
    ngOnInit() {
        if (this.fullAddress) {
            this.address = this.fullAddress; // TODO: fix: textarea not resizing when adding initial value
        }
    }
    reset() {
        this.address = '';
    }
    propagate() {
        this.addressField.markAsTouched();
        this.submitted.emit(this.address);
    }
    preventEnter($event) {
        $event.preventDefault();
    }
    isString(hint) {
        return typeof hint === 'string';
    }
    ngOnChanges(changes) {
        if (changes['error'] && this.error) {
            this.addressField.setErrors({ anyError: true });
        }
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
export { SearchInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Ftb3h0bGF0aWxveWFuLyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFHbEgsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBTzNDLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBUS9CO1FBTFMsU0FBSSxHQUFxQixLQUFLLENBQUM7UUFFOUIsY0FBUyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3ZFLGlCQUFZLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUVqQixDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsNkRBQTZEO1NBQy9GO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBVztRQUN0QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFzQjtRQUM3QixPQUFPLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7Q0FDRixDQUFBO0FBcENVO0lBQVIsS0FBSyxFQUFFO3lEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTtrREFBZ0M7QUFDL0I7SUFBUixLQUFLLEVBQUU7bURBQWU7QUFDYjtJQUFULE1BQU0sRUFBRTt1REFBOEQ7QUFMNUQsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsMm9DQUE0Qzs7S0FFN0MsQ0FBQztHQUNXLG9CQUFvQixDQXNDaEM7U0F0Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEZvcm1GaWVsZH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdElucHV0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZWFyY2gtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgQElucHV0KCkgZnVsbEFkZHJlc3M6IHN0cmluZztcbiAgQElucHV0KCkgaGludDogYm9vbGVhbiB8IHN0cmluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nO1xuICBAT3V0cHV0KCkgc3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBhZGRyZXNzRmllbGQgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZ1bGxBZGRyZXNzKSB7XG4gICAgICB0aGlzLmFkZHJlc3MgPSB0aGlzLmZ1bGxBZGRyZXNzOyAvLyBUT0RPOiBmaXg6IHRleHRhcmVhIG5vdCByZXNpemluZyB3aGVuIGFkZGluZyBpbml0aWFsIHZhbHVlXG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5hZGRyZXNzID0gJyc7XG4gIH1cblxuICBwcm9wYWdhdGUoKSB7XG4gICAgdGhpcy5hZGRyZXNzRmllbGQubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuc3VibWl0dGVkLmVtaXQodGhpcy5hZGRyZXNzKTtcbiAgfVxuXG4gIHByZXZlbnRFbnRlcigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaXNTdHJpbmcoaGludDogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHJldHVybiB0eXBlb2YgaGludCA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ2Vycm9yJ10gJiYgdGhpcy5lcnJvcikge1xuICAgICAgdGhpcy5hZGRyZXNzRmllbGQuc2V0RXJyb3JzKHthbnlFcnJvcjogdHJ1ZX0pO1xuICAgIH1cbiAgfVxufVxuIl19