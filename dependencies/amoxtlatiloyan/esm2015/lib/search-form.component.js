import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CitiesHelper } from './cities-helper';
let SearchFormComponent = class SearchFormComponent {
    constructor() {
        this.address = { city: 'Managua', reference: '', segments: [{ name: '' }], type: null };
        this.ref = null;
        this.submitText = 'Buscar';
        this.autoClear = true;
        this.submitted = new EventEmitter();
        this.cityCtrl = new FormControl();
        const citiesHelper = new CitiesHelper(this.cityCtrl);
        this.filteredCities = citiesHelper.getFilteredCitiesObservable();
    }
    ngOnInit() {
    }
    addSegment(index = null) {
        if (index === null || index === this.address.segments.length - 1) {
            this.address.segments.push({ name: '' });
        }
        return;
    }
    deleteSegment() {
        this.address.segments.splice(this.address.segments.length - 1, 1);
    }
    clear() {
        this.address = { city: this.address.city, reference: '', segments: [{ name: '' }], type: null };
        this.ref = null;
    }
    search() {
        if (!!this.searchForm && this.searchForm.valid && this.cityCtrl.valid && !this.isSameAddress()) {
            const address = Object.assign({}, this.address);
            let localSegments = [...address.segments];
            console.log(localSegments);
            if (localSegments.length > 1) {
                localSegments = localSegments
                    .filter((el) => !!el && !!el.name);
            }
            localSegments = localSegments
                .map((el) => el.name.trim())
                .join(',')
                .split(',')
                .map(el => ({ name: el.trim() }));
            address.segments = localSegments;
            address.fullAddress = this.addressToString(address, true);
            this.submitted.emit(address);
            this.copyAddress = address.fullAddress;
            if (this.autoClear) {
                this.clear();
            }
        }
    }
    isSameAddress() {
        return this.addressToString(this.address) === this.copyAddress;
    }
    addressToString(address, coloquial = false) {
        if (coloquial) {
            const segments = !!address.segments ? address.segments.filter(i => !!i.name.trim().length) : [];
            return `${address.reference.trim()}${segments.length ? ', ' + segments.map(i => i.name).join(', ') : ''}. ${address.city}`;
        }
        return `${address.city}${address.reference}${address.segments.map(i => i.name).join('')}`;
    }
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
export { SearchFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW1veHRsYXRpbG95YW4vIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RixPQUFPLEVBQUMsV0FBVyxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBUTdDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBYTlCO1FBWkEsWUFBTyxHQUNMLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3ZFLFFBQUcsR0FBYyxJQUFJLENBQUM7UUFNYixlQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFHaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFnQixJQUFJO1FBQzdCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxH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RUFBRSxDQUFDO1lBQ3RILE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM1SDtRQUVELE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUksT0FBTyxDQUFDLFFBQTZCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2xILENBQUM7Q0FDRixDQUFBO0FBckUwQjtJQUF4QixTQUFTLENBQUMsWUFBWSxDQUFDO3VEQUFvQjtBQUduQztJQUFSLEtBQUssRUFBRTt1REFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7c0RBQWtCO0FBQ2hCO0lBQVQsTUFBTSxFQUFFO3NEQUF5QztBQVh2QyxtQkFBbUI7SUFML0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQix1aEVBQTJDOztLQUU1QyxDQUFDO0dBQ1csbUJBQW1CLENBMkUvQjtTQTNFWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSAnLi9yZWZlcmVuY2UnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgTmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NpdGllc0hlbHBlcn0gZnJvbSAnLi9jaXRpZXMtaGVscGVyJztcbmltcG9ydCB7QWRkcmVzc30gZnJvbSAnLi9hZGRyZXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNlYXJjaC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWZvcm0uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZHJlc3M6IEFkZHJlc3MgPSAvLyBUT0RPOiBjcmVhdGUgaW50ZXJmYWNlXG4gICAge2NpdHk6ICdNYW5hZ3VhJywgcmVmZXJlbmNlOiAnJywgc2VnbWVudHM6IFt7bmFtZTogJyd9XSwgdHlwZTogbnVsbH07XG4gIHJlZjogUmVmZXJlbmNlID0gbnVsbDtcbiAgY2l0eUN0cmw6IEZvcm1Db250cm9sO1xuICBmaWx0ZXJlZENpdGllczogYW55O1xuICBAVmlld0NoaWxkKCdzZWFyY2hGb3JtJykgc2VhcmNoRm9ybTogTmdGb3JtO1xuICBjb3B5QWRkcmVzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHN1Ym1pdFRleHQgPSAnQnVzY2FyJztcbiAgQElucHV0KCkgYXV0b0NsZWFyID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QWRkcmVzcz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNpdHlDdHJsID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgY29uc3QgY2l0aWVzSGVscGVyID0gbmV3IENpdGllc0hlbHBlcih0aGlzLmNpdHlDdHJsKTtcbiAgICB0aGlzLmZpbHRlcmVkQ2l0aWVzID0gY2l0aWVzSGVscGVyLmdldEZpbHRlcmVkQ2l0aWVzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBhZGRTZWdtZW50KGluZGV4OiBudW1iZXIgPSBudWxsKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ID09PSBudWxsIHx8IGluZGV4ID09PSB0aGlzLmFkZHJlc3Muc2VnbWVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgKHRoaXMuYWRkcmVzcy5zZWdtZW50cyBhcyB7bmFtZTogc3RyaW5nfVtdKS5wdXNoKHtuYW1lOiAnJ30pO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBkZWxldGVTZWdtZW50KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzcy5zZWdtZW50cy5zcGxpY2UodGhpcy5hZGRyZXNzLnNlZ21lbnRzLmxlbmd0aCAtIDEsIDEpO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzID0ge2NpdHk6IHRoaXMuYWRkcmVzcy5jaXR5LCByZWZlcmVuY2U6ICcnLCBzZWdtZW50czogW3tuYW1lOiAnJ31dLCB0eXBlOiBudWxsfTtcbiAgICB0aGlzLnJlZiA9IG51bGw7XG4gIH1cblxuICBzZWFyY2goKSB7XG4gICAgaWYgKCEhdGhpcy5zZWFyY2hGb3JtICYmIHRoaXMuc2VhcmNoRm9ybS52YWxpZCAmJiB0aGlzLmNpdHlDdHJsLnZhbGlkICYmICF0aGlzLmlzU2FtZUFkZHJlc3MoKSkge1xuICAgICAgY29uc3QgYWRkcmVzcyA9IHsuLi50aGlzLmFkZHJlc3N9O1xuICAgICAgbGV0IGxvY2FsU2VnbWVudHMgPSBbLi4uYWRkcmVzcy5zZWdtZW50c10gYXMge25hbWU6IHN0cmluZ31bXTtcbiAgICAgIGNvbnNvbGUubG9nKGxvY2FsU2VnbWVudHMpO1xuXG4gICAgICBpZiAobG9jYWxTZWdtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGxvY2FsU2VnbWVudHMgPSBsb2NhbFNlZ21lbnRzXG4gICAgICAgICAgLmZpbHRlcigoZWw6IHtuYW1lOiBzdHJpbmd9KSA9PiAhIWVsICYmICEhZWwubmFtZSk7XG4gICAgICB9XG4gICAgICBsb2NhbFNlZ21lbnRzID0gbG9jYWxTZWdtZW50c1xuICAgICAgICAubWFwKChlbDoge25hbWU6IHN0cmluZ30pID0+IGVsLm5hbWUudHJpbSgpKVxuICAgICAgICAuam9pbignLCcpXG4gICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgIC5tYXAoZWwgPT4gKHtuYW1lOiBlbC50cmltKCl9KSk7XG4gICAgICBhZGRyZXNzLnNlZ21lbnRzID0gbG9jYWxTZWdtZW50cztcbiAgICAgIGFkZHJlc3MuZnVsbEFkZHJlc3MgPSB0aGlzLmFkZHJlc3NUb1N0cmluZyhhZGRyZXNzLCB0cnVlKTtcbiAgICAgIHRoaXMuc3VibWl0dGVkLmVtaXQoYWRkcmVzcyk7XG4gICAgICB0aGlzLmNvcHlBZGRyZXNzID0gYWRkcmVzcy5mdWxsQWRkcmVzcztcbiAgICAgIGlmICh0aGlzLmF1dG9DbGVhcikge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNTYW1lQWRkcmVzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hZGRyZXNzVG9TdHJpbmcodGhpcy5hZGRyZXNzKSA9PT0gdGhpcy5jb3B5QWRkcmVzcztcbiAgfVxuXG4gIGFkZHJlc3NUb1N0cmluZyhhZGRyZXNzOiBBZGRyZXNzLCBjb2xvcXVpYWwgPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgaWYgKGNvbG9xdWlhbCkge1xuICAgICAgY29uc3Qgc2VnbWVudHMgPSAhIWFkZHJlc3Muc2VnbWVudHMgPyAoYWRkcmVzcy5zZWdtZW50cyBhcyB7bmFtZTogc3RyaW5nfVtdKS5maWx0ZXIoaSA9PiAhIWkubmFtZS50cmltKCkubGVuZ3RoKSA6IFtdO1xuICAgICAgcmV0dXJuIGAke2FkZHJlc3MucmVmZXJlbmNlLnRyaW0oKX0ke3NlZ21lbnRzLmxlbmd0aCA/ICcsICcgKyBzZWdtZW50cy5tYXAoaSA9PiBpLm5hbWUpLmpvaW4oJywgJykgOiAnJ30uICR7YWRkcmVzcy5jaXR5fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke2FkZHJlc3MuY2l0eX0ke2FkZHJlc3MucmVmZXJlbmNlfSR7KGFkZHJlc3Muc2VnbWVudHMgYXMge25hbWU6IHN0cmluZ31bXSkubWFwKGkgPT4gaS5uYW1lKS5qb2luKCcnKX1gO1xuICB9XG59XG4iXX0=