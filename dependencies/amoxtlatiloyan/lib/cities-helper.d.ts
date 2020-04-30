import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
export declare class CitiesHelper {
    cityCtrl: any;
    private regex;
    private readonly cities;
    constructor(cityCtrl: FormControl);
    static isValidCity(city: string): boolean;
    getFilteredCitiesObservable(): Observable<string>;
    private filterCities;
}
