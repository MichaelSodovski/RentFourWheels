import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { CarTypesModel } from 'src/app/models/carTypes.model';

@Injectable({
    providedIn: 'root'
})

export class CarTypeService {

    constructor(private myHttpClient: HttpClient) { }

    public GetAllCarTypes(): Promise<CarTypesModel[]> {
        const observable = this.myHttpClient.get<CarTypesModel[]>(environment.carTypesURL + "/");
        return observable.toPromise();
    }
    public getCarType(id: number): Promise<CarTypesModel> {
        const observable = this.myHttpClient.get<CarTypesModel>(environment.carTypesURL + "/" + id);
        return observable.toPromise();
    }
    public AddCarType(carType: CarTypesModel): Promise<CarTypesModel> {
        const formData = new FormData();
        formData.append("manufacturer", carType.manufacturer as string);
        formData.append("model", carType.model as string);
        formData.append("dailyCost", carType.dailyCost as any);
        formData.append("delayCost", carType.delayCost as any);
        formData.append("yearOfManufacture", carType.yearOfManufacture as any);
        formData.append("gearBox", carType.gearBox as string);
        formData.append("icon", carType.icon as any, carType.icon?.name);
        const observable = this.myHttpClient.post<CarTypesModel>(environment.carTypesURL + "/CarTypeAdd", formData);
        return observable.toPromise();
    }
    public UpdateCarType(carType: CarTypesModel): Promise<CarTypesModel> {
        const formData = new FormData();
        formData.append("manufacturer", carType.manufacturer as string);
        formData.append("model", carType.model as string);
        formData.append("dailyCost", carType.dailyCost as any);
        formData.append("delayCost", carType.delayCost as any);
        formData.append("yearOfManufacture", carType.yearOfManufacture as any);
        formData.append("gearBox", carType.gearBox as string);
        formData.append("icon", carType.icon as any, carType.icon?.name);
        const observable = this.myHttpClient.put<CarTypesModel>(environment.carTypesURL + "/UpdateFullCarType" + "/" + carType.carTypeId, formData);
        return observable.toPromise();
    }
    public PartialUpdateCarType(carType: CarTypesModel): Promise<CarTypesModel> {
        const formData = new FormData();
        if (!carType.icon) {
            formData.append("manufacturer", carType.manufacturer as string);
            formData.append("model", carType.model as string);
            formData.append("dailyCost", carType.dailyCost as any);
            formData.append("delayCost", carType.delayCost as any);
            formData.append("yearOfManufacture", carType.yearOfManufacture as any);
            formData.append("gearBox", carType.gearBox as string);
            formData.append("iconFileName", carType.iconFileName as string);
        }
        if (carType.icon != null) {
            formData.append("manufacturer", carType.manufacturer as string);
            formData.append("model", carType.model as string);
            formData.append("dailyCost", carType.dailyCost as any);
            formData.append("delayCost", carType.delayCost as any);
            formData.append("yearOfManufacture", carType.yearOfManufacture as any);
            formData.append("gearBox", carType.gearBox as string);
            formData.append("iconFileName", carType.iconFileName as string);
            formData.append("icon", carType.icon as any, carType.icon?.name);
        }
        const observable = this.myHttpClient.patch<CarTypesModel>(environment.carTypesURL + "/UpdatePartialCarType" + "/" + carType.carTypeId, formData);
        return observable.toPromise(); 
    }
    public DeleteCarType(id: number): Promise<undefined> {
        const observable = this.myHttpClient.delete<undefined>(environment.carTypesURL + "/" + id);
        return observable.toPromise(); 
    }
}