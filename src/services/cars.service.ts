import { Injectable } from '@angular/core';
import { carsModel } from '../app/models/cars.model';
import { HttpClient } from "@angular/common/http";
// import { action } from 'src/app/redux/action';
// import { actionType } from 'src/app/redux/action-type';
// import { store } from 'src/app/redux/store';
import { environment } from 'src/environments/environment';
import { addCarModel } from 'src/app/models/addCarModel';

@Injectable({
    providedIn: 'root'
})

export class CarsService {

    constructor(private myHttpClient: HttpClient) { }

    // public loadAllTheCarsAsync(): Promise<boolean> {
    //     return new Promise<boolean>((resolve, reject) => {
    //         this.myHttpClient
    //             .get<carsModel[]>(environment.carsURL + "/")
    //             .subscribe(cars => {
    //                 const action: action = { type: actionType.getAllCars, payLoad: cars };
    //                 store.dispatch(action);
    //                 resolve(true);
    //             }, err => {
    //                 reject(err);
    //             });
    //     })
    // }
    public getAllCars(): Promise<carsModel[]> {
        const observable = this.myHttpClient.get<carsModel[]>(environment.carsURL);
        return observable.toPromise();
    }
    public addCar(car: addCarModel): Promise<addCarModel> {
        const formData = new FormData();
        formData.append("typeId", Number(car.typeId) as any);
        formData.append("kilometrage", Number(car.kilometrage) as any);
        formData.append("usability", car.usability as string);
        formData.append("availability", car.availability as string);
        formData.append("vin", Number(car.vin) as any);
        formData.append("branch", Number(car.branch) as any);
        formData.append("image", car.image as any, car.image?.name);
        const observable = this.myHttpClient.post<addCarModel>(environment.carsURL + "/AddCar", formData);
        return observable.toPromise();
    }
    public updateCar(car: addCarModel): Promise<addCarModel> {
        const formData = new FormData();
        formData.append("typeId", Number(car.typeId) as any);
        formData.append("kilometrage", Number(car.kilometrage) as any);
        formData.append("usability", car.usability as string);
        formData.append("availability", car.availability as string);
        formData.append("vin", Number(car.vin) as any);
        formData.append("branch", Number(car.branch) as any);
        formData.append("image", car.image as any, car.image?.name);
        const observable = this.myHttpClient.put<addCarModel>(environment.carsURL + "/UpdateFullCar" + "/" + car.id, formData);
        return observable.toPromise();
    }
    public DeleteCar(id: number): Promise<undefined> {
        const observable = this.myHttpClient.delete<undefined>(environment.carsURL + "/" + id);
        return observable.toPromise();
    }
    public getCar(id: number): Promise<addCarModel> {
        const observable = this.myHttpClient.get<addCarModel>(environment.carsURL + "/" + id);
        return observable.toPromise();
    }

    public getCarByVin(vin: number): Promise<addCarModel> {
        const observable = this.myHttpClient.get<addCarModel>(environment.carsURL + "/GetCarByVehicleID/" + vin);
        return observable.toPromise();
    }
    public updatePartialCar(car: addCarModel): Promise<addCarModel> {
        const formData = new FormData();
        formData.append("typeId", Number(car.typeId) as any);
        formData.append("kilometrage", Number(car.kilometrage) as any);
        formData.append("usability", car.usability as string);
        formData.append("availability", car.availability as string);
        formData.append("vin", Number(car.vin) as any);
        formData.append("branch", Number(car.branch) as any);
        formData.append("image", car.image as any, car.image?.name);
        const observable = this.myHttpClient.patch<addCarModel>(environment.carsURL + "/UpdatePartialCar" + "/" + car.id, formData);
        return observable.toPromise();
    }

}
