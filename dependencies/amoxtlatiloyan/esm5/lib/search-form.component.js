import { __assign, __decorate, __read, __spread } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CitiesHelper } from './cities-helper';
var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent() {
        this.address = { city: 'Managua', reference: '', segments: [{ name: '' }], type: null };
        this.ref = null;
        this.submitText = 'Buscar';
        this.autoClear = true;
        this.submitted = new EventEmitter();
        this.cityCtrl = new FormControl();
        var citiesHelper = new CitiesHelper(this.cityCtrl);
        this.filteredCities = citiesHelper.getFilteredCitiesObservable();
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent.prototype.addSegment = function (index) {
        if (index === void 0) { index = null; }
        if (index === null || index === this.address.segments.length - 1) {
            this.address.segments.push({ name: '' });
        }
        return;
    };
    SearchFormComponent.prototype.deleteSegment = function () {
        this.address.segments.splice(this.address.segments.length - 1, 1);
    };
    SearchFormComponent.prototype.clear = function () {
        this.address = { city: this.address.city, reference: '', segments: [{ name: '' }], type: null };
        this.ref = null;
    };
    SearchFormComponent.prototype.search = function () {
        if (!!this.searchForm && this.searchForm.valid && this.cityCtrl.valid && !this.isSameAddress()) {
            var address = __assign({}, this.address);
            var localSegments = __spread(address.segments);
            console.log(localSegments);
            if (localSegments.length > 1) {
                localSegments = localSegments
                    .filter(function (el) { return !!el && !!el.name; });
            }
            localSegments = localSegments
                .map(function (el) { return el.name.trim(); })
                .join(',')
                .split(',')
                .map(function (el) { return ({ name: el.trim() }); });
            address.segments = localSegments;
            address.fullAddress = this.addressToString(address, true);
            this.submitted.emit(address);
            this.copyAddress = address.fullAddress;
            if (this.autoClear) {
                this.clear();
            }
        }
    };
    SearchFormComponent.prototype.isSameAddress = function () {
        return this.addressToString(this.address) === this.copyAddress;
    };
    SearchFormComponent.prototype.addressToString = function (address, coloquial) {
        if (coloquial === void 0) { coloquial = false; }
        if (coloquial) {
            var segments = !!address.segments ? address.segments.filter(function (i) { return !!i.name.trim().length; }) : [];
            return "" + address.reference.trim() + (segments.length ? ', ' + segments.map(function (i) { return i.name; }).join(', ') : '') + ". " + address.city;
        }
        return "" + address.city + address.reference + address.segments.map(function (i) { return i.name; }).join('');
    };
    __decorate([
        ViewChild('searchForm')
    ], SearchFormComponent.prototype, "searchForm", void 0);
    __decorate([
        Input()
    ], SearchFormComponent.prototype, "submitText", void 0);
    __decorate([
        Input()
    ], SearchFormComponent.prototype, "autoClear", void 0);
    __decorate([
        Output()
    ], SearchFormComponent.prototype, "submitted", void 0);
    SearchFormComponent = __decorate([
        Component({
            selector: 'lib-search-form',
            template: "<form #searchForm=\"ngForm\" (ngSubmit)=\"search()\" autocomplete=\"off\" fxLayout=\"column\">\n  <mat-form-field>\n    <input [(ngModel)]=\"address.city\" [formControl]=\"cityCtrl\" [matAutocomplete]=\"auto\" appMatchCity matInput\n           name=\"city\" placeholder=\"Municipio\" required>\n  </mat-form-field>\n  <mat-autocomplete #auto=\"matAutocomplete\">\n    <mat-option *ngFor=\"let city of filteredCities | async\" [value]=\"city[1]\">\n      {{ city[1] }}\n    </mat-option>\n  </mat-autocomplete>\n  <mat-form-field class=\"reference-text\">\n    <input [(ngModel)]=\"address.reference\" matInput name=\"reference\" placeholder=\"Referencia\"\n           required>\n    <mat-hint>Ej. De la Farmacia Don Bosco</mat-hint>\n  </mat-form-field>\n    <div *ngFor=\"let s of address.segments; let i = index\"\n         class=\"segments\">\n      <mat-form-field class=\"segment-text\">\n        <input (keydown.Tab)=\"addSegment(i)\" [(ngModel)]=\"s.name\" matInput\n               name=\"name{{i}}\"\n               placeholder=\"{{address.segments.length === 1 ? 'Segmentos' : 'Segmento ' + (i * 1)}}\">\n        <mat-hint *ngIf=\"address.segments.length - 1 === i\">\n          Divide cada segmento con una coma, ej. 1 cuadra al lago, 1 c abajo.\n        </mat-hint>\n      </mat-form-field>\n      <button (click)=\"addSegment()\" *ngIf=\"i === address.segments.length - 1\"\n              mat-icon-button mat-secondary>\n        <mat-icon>add_circle_outline</mat-icon>\n      </button>\n      <button (click)=\"deleteSegment()\" *ngIf=\"address.segments.length > 1\" mat-icon-button\n              mat-secondary>\n        <mat-icon>remove_circle_outline</mat-icon>\n      </button>\n    </div>\n  <div class=\"actions\">\n    <button [disabled]=\"!searchForm.valid\" color=\"primary\" mat-raised-button type=\"submit\">{{submitText}}</button>\n    <button (click)=\"clear()\" *ngIf=\"address.reference\" mat-raised-button>Limpiar</button>\n<!--    <button (click)=\"help()\" mat-flat-button type=\"button\">Ayuda</button>-->\n  </div>\n\n</form>\n",
            styles: [":host{display:flex;flex-direction:column;flex-grow:1}.mat-form-field{display:block}.segments .mat-form-field{display:inline-block}.actions{margin-top:20px}.actions button{margin-bottom:5px}@media all and (min-width:960px){.segment-text{width:85%}.actions{flex-direction:row;box-sizing:border-box;display:flex;justify-content:space-around}}"]
        })
    ], SearchFormComponent);
    return SearchFormComponent;
}());
export { SearchFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW1veHRsYXRpbG95YW4vIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RixPQUFPLEVBQUMsV0FBVyxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBUTdDO0lBYUU7UUFaQSxZQUFPLEdBQ0wsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDdkUsUUFBRyxHQUFjLElBQUksQ0FBQztRQU1iLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFDdEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUdoRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDbkUsQ0FBQztJQUVELHNDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLEtBQW9CO1FBQXBCLHNCQUFBLEVBQUEsWUFBb0I7UUFDN0IsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdB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QUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUF0QixDQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN0SCxPQUFPLEtBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQUssT0FBTyxDQUFDLElBQU0sQ0FBQztTQUM1SDtRQUVELE9BQU8sS0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUksT0FBTyxDQUFDLFFBQTZCLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFHLENBQUM7SUFDbEgsQ0FBQztJQXBFd0I7UUFBeEIsU0FBUyxDQUFDLFlBQVksQ0FBQzsyREFBb0I7SUFHbkM7UUFBUixLQUFLLEVBQUU7MkRBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFOzBEQUFrQjtJQUNoQjtRQUFULE1BQU0sRUFBRTswREFBeUM7SUFYdkMsbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsdWhFQUEyQzs7U0FFNUMsQ0FBQztPQUNXLG1CQUFtQixDQTJFL0I7SUFBRCwwQkFBQztDQUFBLEFBM0VELElBMkVDO1NBM0VZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tICcuL3JlZmVyZW5jZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q2l0aWVzSGVscGVyfSBmcm9tICcuL2NpdGllcy1oZWxwZXInO1xuaW1wb3J0IHtBZGRyZXNzfSBmcm9tICcuL2FkZHJlc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VhcmNoLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtZm9ybS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWRkcmVzczogQWRkcmVzcyA9IC8vIFRPRE86IGNyZWF0ZSBpbnRlcmZhY2VcbiAgICB7Y2l0eTogJ01hbmFndWEnLCByZWZlcmVuY2U6ICcnLCBzZWdtZW50czogW3tuYW1lOiAnJ31dLCB0eXBlOiBudWxsfTtcbiAgcmVmOiBSZWZlcmVuY2UgPSBudWxsO1xuICBjaXR5Q3RybDogRm9ybUNvbnRyb2w7XG4gIGZpbHRlcmVkQ2l0aWVzOiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaEZvcm0nKSBzZWFyY2hGb3JtOiBOZ0Zvcm07XG4gIGNvcHlBZGRyZXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc3VibWl0VGV4dCA9ICdCdXNjYXInO1xuICBASW5wdXQoKSBhdXRvQ2xlYXIgPSB0cnVlO1xuICBAT3V0cHV0KCkgc3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjxBZGRyZXNzPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2l0eUN0cmwgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgICBjb25zdCBjaXRpZXNIZWxwZXIgPSBuZXcgQ2l0aWVzSGVscGVyKHRoaXMuY2l0eUN0cmwpO1xuICAgIHRoaXMuZmlsdGVyZWRDaXRpZXMgPSBjaXRpZXNIZWxwZXIuZ2V0RmlsdGVyZWRDaXRpZXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGFkZFNlZ21lbnQoaW5kZXg6IG51bWJlciA9IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoaW5kZXggPT09IG51bGwgfHwgaW5kZXggPT09IHRoaXMuYWRkcmVzcy5zZWdtZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAodGhpcy5hZGRyZXNzLnNlZ21lbnRzIGFzIHtuYW1lOiBzdHJpbmd9W10pLnB1c2goe25hbWU6ICcnfSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGRlbGV0ZVNlZ21lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzLnNlZ21lbnRzLnNwbGljZSh0aGlzLmFkZHJlc3Muc2VnbWVudHMubGVuZ3RoIC0gMSwgMSk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3MgPSB7Y2l0eTogdGhpcy5hZGRyZXNzLmNpdHksIHJlZmVyZW5jZTogJycsIHNlZ21lbnRzOiBbe25hbWU6ICcnfV0sIHR5cGU6IG51bGx9O1xuICAgIHRoaXMucmVmID0gbnVsbDtcbiAgfVxuXG4gIHNlYXJjaCgpIHtcbiAgICBpZiAoISF0aGlzLnNlYXJjaEZvcm0gJiYgdGhpcy5zZWFyY2hGb3JtLnZhbGlkICYmIHRoaXMuY2l0eUN0cmwudmFsaWQgJiYgIXRoaXMuaXNTYW1lQWRkcmVzcygpKSB7XG4gICAgICBjb25zdCBhZGRyZXNzID0gey4uLnRoaXMuYWRkcmVzc307XG4gICAgICBsZXQgbG9jYWxTZWdtZW50cyA9IFsuLi5hZGRyZXNzLnNlZ21lbnRzXSBhcyB7bmFtZTogc3RyaW5nfVtdO1xuICAgICAgY29uc29sZS5sb2cobG9jYWxTZWdtZW50cyk7XG5cbiAgICAgIGlmIChsb2NhbFNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbG9jYWxTZWdtZW50cyA9IGxvY2FsU2VnbWVudHNcbiAgICAgICAgICAuZmlsdGVyKChlbDoge25hbWU6IHN0cmluZ30pID0+ICEhZWwgJiYgISFlbC5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU2VnbWVudHMgPSBsb2NhbFNlZ21lbnRzXG4gICAgICAgIC5tYXAoKGVsOiB7bmFtZTogc3RyaW5nfSkgPT4gZWwubmFtZS50cmltKCkpXG4gICAgICAgIC5qb2luKCcsJylcbiAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgLm1hcChlbCA9PiAoe25hbWU6IGVsLnRyaW0oKX0pKTtcbiAgICAgIGFkZHJlc3Muc2VnbWVudHMgPSBsb2NhbFNlZ21lbnRzO1xuICAgICAgYWRkcmVzcy5mdWxsQWRkcmVzcyA9IHRoaXMuYWRkcmVzc1RvU3RyaW5nKGFkZHJlc3MsIHRydWUpO1xuICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdChhZGRyZXNzKTtcbiAgICAgIHRoaXMuY29weUFkZHJlc3MgPSBhZGRyZXNzLmZ1bGxBZGRyZXNzO1xuICAgICAgaWYgKHRoaXMuYXV0b0NsZWFyKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc1NhbWVBZGRyZXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFkZHJlc3NUb1N0cmluZyh0aGlzLmFkZHJlc3MpID09PSB0aGlzLmNvcHlBZGRyZXNzO1xuICB9XG5cbiAgYWRkcmVzc1RvU3RyaW5nKGFkZHJlc3M6IEFkZHJlc3MsIGNvbG9xdWlhbCA9IGZhbHNlKTogc3RyaW5nIHtcbiAgICBpZiAoY29sb3F1aWFsKSB7XG4gICAgICBjb25zdCBzZWdtZW50cyA9ICEhYWRkcmVzcy5zZWdtZW50cyA/IChhZGRyZXNzLnNlZ21lbnRzIGFzIHtuYW1lOiBzdHJpbmd9W10pLmZpbHRlcihpID0+ICEhaS5uYW1lLnRyaW0oKS5sZW5ndGgpIDogW107XG4gICAgICByZXR1cm4gYCR7YWRkcmVzcy5yZWZlcmVuY2UudHJpbSgpfSR7c2VnbWVudHMubGVuZ3RoID8gJywgJyArIHNlZ21lbnRzLm1hcChpID0+IGkubmFtZSkuam9pbignLCAnKSA6ICcnfS4gJHthZGRyZXNzLmNpdHl9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7YWRkcmVzcy5jaXR5fSR7YWRkcmVzcy5yZWZlcmVuY2V9JHsoYWRkcmVzcy5zZWdtZW50cyBhcyB7bmFtZTogc3RyaW5nfVtdKS5tYXAoaSA9PiBpLm5hbWUpLmpvaW4oJycpfWA7XG4gIH1cbn1cbiJdfQ==