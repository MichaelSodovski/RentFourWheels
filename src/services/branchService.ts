import { Injectable } from '@angular/core';
import { carsModel } from '../app/models/cars.model';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class BranchService {

    constructor(private myHttpClient: HttpClient) { }

    public GetAllBranches(): Promise<carsModel[]> {
        const observable = this.myHttpClient.get<carsModel[]>(environment.branchURL + "/");
        return observable.toPromise();
    }
}