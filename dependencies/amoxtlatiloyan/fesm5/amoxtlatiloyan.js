import { __assign, __spread, __decorate, __param } from 'tslib';
import { EventEmitter, ViewChild, Input, Output, Component, Injector, Injectable, InjectionToken, NgModule, Optional, Inject, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { startWith, map, catchError } from 'rxjs/operators';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

/**
 * Created by jgutix on 29/5/17.
 */
var cities = [
    ['Caribe Norte', 'Bilwi', 'Bilwi (sede del gobierno regional autónomo)'],
    ['Caribe Norte', 'Bonanza', 'Bonanza'],
    ['Caribe Norte', 'Mulukukú', 'Mulukukú'],
    ['Caribe Norte', 'Prinzapolka', 'Prinzapolka'],
    ['Caribe Norte', 'Rosita', 'Rosita'],
    ['Caribe Norte', 'Siuna', 'Siuna'],
    ['Caribe Norte', 'Waslala', 'Waslala'],
    ['Caribe Norte', 'Waspán', 'Waspán'],
    ['Caribe Sur', 'Bluefields', 'Bluefields (sede del gobierno regional autónomo)'],
    ['Caribe Sur', 'Corn Island', 'Corn Island'],
    ['Caribe Sur', 'Desembocadura de Río Grande', 'Karawala'],
    ['Caribe Sur', 'El Ayote', 'El Ayote'],
    ['Caribe Sur', 'El Tortuguero', 'El Tortuguero'],
    ['Caribe Sur', 'Kukra Hill', 'Kukra Hill'],
    ['Caribe Sur', 'La Cruz de Río Grande', 'La Cruz de Río Grande'],
    ['Caribe Sur', 'Laguna de Perlas', 'Laguna de Perlas'],
    ['Caribe Sur', 'Muelle de los Bueyes', 'Muelle de los Bueyes'],
    ['Caribe Sur', 'Nueva Guinea', 'Nueva Guinea'],
    ['Caribe Sur', 'Paiwas', 'Paiwas'],
    ['Caribe Sur', 'El Rama', 'El Rama'],
    ['Boaco', 'Boaco', 'Boaco (cabecera departamental)'],
    ['Boaco', 'Camoapa', 'Camoapa'],
    ['Boaco', 'San Lorenzo', 'San Lorenzo'],
    ['Boaco', 'San José de Los Remates', 'Los Remates'],
    ['Boaco', 'Santa Lucía', 'Santa Lucía'],
    ['Boaco', 'Teustepe', 'Teustepe'],
    ['Carazo', 'Diriamba', 'Diriamba'],
    ['Carazo', 'Dolores', 'Dolores'],
    ['Carazo', 'El Rosario', 'El Rosario'],
    ['Carazo', 'Jinotepe', 'Jinotepe (cabecera departamental)'],
    ['Carazo', 'La Conquista', 'La Conquista'],
    ['Carazo', 'La Paz de Oriente', 'La Paz de Oriente'],
    ['Carazo', 'San Marcos', 'San Marcos'],
    ['Carazo', 'Santa Teresa', 'Santa Teresa'],
    ['Chinandega', 'Chichigalpa', 'Chichigalpa'],
    ['Chinandega', 'Chinandega', 'Chinandega (cabecera departamental)'],
    ['Chinandega', 'Cinco Pinos', 'Cinco Pinos'],
    ['Chinandega', 'Corinto', 'Corinto'],
    ['Chinandega', 'El Realejo', 'El Realejo'],
    ['Chinandega', 'El Viejo', 'El Viejo'],
    ['Chinandega', 'Posoltega', 'Posoltega'],
    ['Chinandega', 'San Francisco del Norte', 'San Francisco del Norte'],
    ['Chinandega', 'San Pedro del Norte', 'San Pedro del Norte'],
    ['Chinandega', 'Santo Tomás del Norte', 'Santo Tomás del Norte'],
    ['Chinandega', 'Somotillo', 'Somotillo'],
    ['Chinandega', 'Puerto Morazán', 'Puerto Morazán'],
    ['Chinandega', 'Villanueva', 'Villanueva'],
    ['Chontales', 'Acoyapa', 'Acoyapa'],
    ['Chontales', 'Comalapa', 'Comalapa'],
    ['Chontales', 'San Francisco de Cuapa', 'Cuapa'],
    ['Chontales', 'El Coral', 'El Coral'],
    ['Chontales', 'Juigalpa', 'Juigalpa (cabecera departamental)'],
    ['Chontales', 'La Libertad', 'La Libertad'],
    ['Chontales', 'San Pedro de Lóvago', 'San Pedro de Lóvago'],
    ['Chontales', 'Santo Domingo', 'Santo Domingo'],
    ['Chontales', 'Santo Tomás', 'Santo Tomás'],
    ['Chontales', 'Villa Sandino', 'Villa Sandino'],
    ['Estelí', 'Condega', 'Condega'],
    ['Estelí', 'Estelí', 'Estelí (cabecera departamental)'],
    ['Estelí', 'La Trinidad', 'La Trinidad'],
    ['Estelí', 'Pueblo Nuevo', 'Pueblo Nuevo'],
    ['Estelí', 'San Juan de Limay', 'San Juan de Limay'],
    ['Estelí', 'San Nicolás', 'San Nicolás'],
    ['Granada', 'Diriá', 'Diriá'],
    ['Granada', 'Diriomo', 'Diriomo'],
    ['Granada', 'Granada', 'Granada (cabecera departamental)'],
    ['Granada', 'Nandaime', 'Nandaime'],
    ['Jinotega', 'El Cuá', 'El Cuá'],
    ['Jinotega', 'Jinotega', 'Jinotega (cabecera departamental)'],
    ['Jinotega', 'La Concordia', 'La Concordia'],
    ['Jinotega', 'San José de Bocay', 'Bocay'],
    ['Jinotega', 'San Rafael del Norte', 'San Rafael del Norte'],
    ['Jinotega', 'San Sebastián de Yalí', 'Yalí'],
    ['Jinotega', 'Santa María de Pantasma', 'Las Praderas'],
    ['Jinotega', 'Wiwilí de Jinotega', 'Wiwilí'],
    ['León', 'Achuapa', 'Achuapa'],
    ['León', 'El Jicaral', 'El Jicaral'],
    ['León', 'El Sauce', 'El Sauce'],
    ['León', 'La Paz Centro', 'La Paz Centro'],
    ['León', 'Larreynaga', 'Malpaisillo'],
    ['León', 'León', 'León (cabecera departamental)'],
    ['León', 'Nagarote', 'Nagarote'],
    ['León', 'Quezalguaque', 'Quezalguaque'],
    ['León', 'Santa Rosa del Peñón', 'Santa Rosa del Peñón'],
    ['León', 'Telica', 'Telica'],
    ['Madriz', 'Las Sabanas', 'Las Sabanas'],
    ['Madriz', 'Palacagüina', 'Palacagüina'],
    ['Madriz', 'San José de Cusmapa', 'Cusmapa'],
    ['Madriz', 'San Juan de Río Coco', 'San Juan de Río Coco'],
    ['Madriz', 'San Lucas', 'San Lucas'],
    ['Madriz', 'Somoto', 'Somoto (cabecera departamental)'],
    ['Madriz', 'Telpaneca', 'Telpaneca'],
    ['Madriz', 'Totogalpa', 'Totogalpa'],
    ['Madriz', 'Yalagüina', 'Yalagüina'],
    ['Managua', 'Ciudad Sandino', 'Ciudad Sandino'],
    ['Managua', 'El Crucero', 'El Crucero'],
    ['Managua', 'Managua', 'Managua (cabecera departamental)'],
    ['Managua', 'Mateare', 'Mateare'],
    ['Managua', 'San Francisco Libre', 'San Francisco Libre'],
    ['Managua', 'San Rafael del Sur', 'San Rafael del Sur'],
    ['Managua', 'Ticuantepe', 'Ticuantepe'],
    ['Managua', 'Tipitapa', 'Tipitapa'],
    ['Managua', 'Villa El Carmen', 'Villa El Carmen'],
    ['Masaya', 'Catarina', 'Catarina'],
    ['Masaya', 'La Concepción', 'La Concepción (La Concha)'],
    ['Masaya', 'Masatepe', 'Masatepe'],
    ['Masaya', 'Masaya', 'Masaya (cabecera departamental)'],
    ['Masaya', 'Nandasmo', 'Nandasmo'],
    ['Masaya', 'Nindirí', 'Nindirí'],
    ['Masaya', 'Niquinohomo', 'Niquinohomo'],
    ['Masaya', 'San Juan de Oriente', 'San Juan de Oriente'],
    ['Masaya', 'Tisma', 'Tisma'],
    ['Matagalpa', 'Ciudad Darío', 'Ciudad Darío'],
    ['Matagalpa', 'El Tuma - La Dalia', 'La Dalia'],
    ['Matagalpa', 'Esquipulas', 'Esquipulas'],
    ['Matagalpa', 'Matagalpa', 'Matagalpa (cabecera departamental)'],
    ['Matagalpa', 'Matiguás', 'Matiguas'],
    ['Matagalpa', 'Muy Muy', 'Muy Muy'],
    ['Matagalpa', 'Rancho Grande', 'Rancho Grande'],
    ['Matagalpa', 'Río Blanco', 'Río Blanco'],
    ['Matagalpa', 'San Dionisio', 'San Dionisio'],
    ['Matagalpa', 'San Isidro', 'San Isidro'],
    ['Matagalpa', 'San Ramón', 'San Ramón'],
    ['Matagalpa', 'Sébaco', 'Sébaco'],
    ['Matagalpa', 'Terrabona', 'Terrabona'],
    ['Nueva Segovia', 'Ciudad Antigua', 'Ciudad Antigua'],
    ['Nueva Segovia', 'Dipilto', 'Dipilto'],
    ['Nueva Segovia', 'El Jícaro', 'El Jícaro'],
    ['Nueva Segovia', 'Güigüilí', 'Wiwilí'],
    ['Nueva Segovia', 'Jalapa', 'Jalapa'],
    ['Nueva Segovia', 'Macuelizo', 'Macuelizo'],
    ['Nueva Segovia', 'Mozonte', 'Mozonte'],
    ['Nueva Segovia', 'Murra', 'Murra'],
    ['Nueva Segovia', 'Ocotal', 'Ocotal (cabecera departamental)'],
    ['Nueva Segovia', 'Quilalí', 'Quilalí'],
    ['Nueva Segovia', 'San Fernando', 'San Fernando'],
    ['Nueva Segovia', 'Santa María', 'Santa María'],
    ['Río San Juan', 'El Almendro', 'El Almendro'],
    ['Río San Juan', 'El Castillo', 'Boca de Sábalos'],
    ['Río San Juan', 'Morrito', 'Morrito'],
    ['Río San Juan', 'San Carlos', 'San Carlos (cabecera departamental)'],
    ['Río San Juan', 'San Juan del Norte', 'San Juan del Norte'],
    ['Río San Juan', 'San Miguelito', 'San Miguelito'],
    ['Rivas', 'Altagracia', 'Altagracia'],
    ['Rivas', 'Belén', 'Belén'],
    ['Rivas', 'Buenos Aires', 'Buenos Aires'],
    ['Rivas', 'Cárdenas', 'Cárdenas'],
    ['Rivas', 'Moyogalpa', 'Moyogalpa'],
    ['Rivas', 'Potosí', 'Potosí'],
    ['Rivas', 'Rivas', 'Rivas (cabecera departamental)'],
    ['Rivas', 'San Jorge', 'San Jorge'],
    ['Rivas', 'San Juan del Sur', 'San Juan del Sur'],
    ['Rivas', 'Tola', 'Tola'],
];

/**
 * expect the transliterated value as key, and a string with replacements
 */
var MAPPINGS = {
    'a': String.fromCharCode(65, 97, 192, 224, 193, 225, 194, 226, 195, 227, 196, 228, 229, 258, 259),
    'e': String.fromCharCode(69, 101, 200, 232, 201, 233, 202, 234, 203, 235),
    'i': String.fromCharCode(73, 105, 204, 236, 205, 237, 206, 238, 207, 239),
    'o': String.fromCharCode(79, 111, 210, 242, 211, 243, 212, 244, 213, 245, 214, 246),
    'n': String.fromCharCode(78, 110, 209, 241),
    'u': String.fromCharCode(85, 117, 217, 249, 218, 250, 219, 251, 220, 252),
    'c': String.fromCharCode(67, 99, 199, 231),
    'y': String.fromCharCode(89, 121, 221, 253, 159, 255),
};
var DiacriticRegex = /** @class */ (function () {
    function DiacriticRegex() {
    }
    /** Generate a that returns a RegExp, that can be reused with the same options */
    DiacriticRegex.prototype.toRegex = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var innerMappings = this.mergeMappings(typeof options.mappings === 'object' ? options.mappings : null);
        return function (input) {
            return new RegExp(_this.replacer(input, innerMappings), typeof options.flags === 'string' ? options.flags : 'i');
        };
    };
    /** Generate a that returns a string, that can be reused with the same options */
    DiacriticRegex.prototype.toString = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var innerMappings = this.mergeMappings(typeof options.mappings === 'object' ? options.mappings : null);
        return function (input) {
            return _this.replacer(input, innerMappings);
        };
    };
    DiacriticRegex.prototype.mergeMappings = function (innerMappings) {
        var base = {};
        for (var mapping in MAPPINGS) {
            if (MAPPINGS.hasOwnProperty(mapping)) {
                base[mapping] = MAPPINGS[mapping];
            }
        }
        if (innerMappings) {
            for (var mapping in innerMappings) {
                if (innerMappings.hasOwnProperty(mapping)) {
                    base[mapping] = innerMappings[mapping];
                }
            }
        }
        return base;
    };
    DiacriticRegex.prototype.replacer = function (input, mappings) {
        return input.split('').map(function (letter) {
            for (var mapping in mappings) {
                if (mapping && mapping !== mappings[mapping] && (mapping === letter || mappings[mapping].indexOf(letter) !== -1)) {
                    letter = Array.isArray(mappings[mapping]) ? mappings[mapping].join('') : "[" + mappings[mapping] + "]";
                    break;
                }
            }
            return letter;
        }).join('');
    };
    return DiacriticRegex;
}());

var CitiesHelper = /** @class */ (function () {
    function CitiesHelper(cityCtrl) {
        this.cities = cities;
        this.cities = this.cities.sort(function (a, b) {
            if (a[1] < b[1]) {
                return -1;
            }
            if (a[1] > b[1]) {
                return 1;
            }
            return 0;
        });
        this.cityCtrl = cityCtrl;
        this.regex = new DiacriticRegex();
    }
    CitiesHelper.isValidCity = function (city) {
        return cities.map(function (item) { return item[1]; }).indexOf(city) !== -1;
    };
    CitiesHelper.prototype.getFilteredCitiesObservable = function () {
        var _this = this;
        // TODO: crear directiva
        return this.cityCtrl.valueChanges.pipe(startWith(null), map(function (name) { return _this.filterCities(name); }));
    };
    CitiesHelper.prototype.filterCities = function (val) {
        var _this = this;
        return val ? this.cities.filter(function (c) { return _this.regex.toRegex({ flags: 'gi' })(val).test(c[1]); })
            : this.cities;
    };
    return CitiesHelper;
}());

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

var BASE_URL = new InjectionToken('BASE_URL');
var TOKEN = new InjectionToken('TOKEN');
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
    AddressService.ɵprov = ɵɵdefineInjectable({ factory: function AddressService_Factory() { return new AddressService(ɵɵinject(HttpClient), ɵɵinject(BASE_URL, 8)); }, token: AddressService, providedIn: "root" });
    AddressService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(1, Optional()), __param(1, Inject(BASE_URL))
    ], AddressService);
    return AddressService;
}());

var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());

var PosModifier = /** @class */ (function () {
    function PosModifier() {
    }
    return PosModifier;
}());
var Reference = /** @class */ (function () {
    function Reference() {
        return { id: null, name: null, pos: { lat: null, lng: null }, city: '', alias: [''], posModifiers: [] };
    }
    return Reference;
}());

/*
 * Public API Surface of amoxtlatiloyan
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Address, AddressService, AmoxtlatiloyanModule, BASE_URL, CitiesHelper, Reference, SearchFormComponent, SearchInputComponent, TOKEN, AuthInterceptor as ɵa, cities as ɵb };
//# sourceMappingURL=amoxtlatiloyan.js.map
