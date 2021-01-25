import { Injectable } from '@angular/core';
import { carsModel } from '../app/models/cars.model';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { CarTypeService } from './carTypeService';
import { CarTypesModel } from 'src/app/models/carTypes.model';

@Injectable({
    providedIn: 'root'
})

export class UserTypeService {

    constructor(private myHttpClient: HttpClient) { }

    public GetAllUserTypes(): Promise<CarTypesModel[]> {
        const observable = this.myHttpClient.get<CarTypesModel[]>(environment.userTypesURL + "/");
        return observable.toPromise();
    }
}