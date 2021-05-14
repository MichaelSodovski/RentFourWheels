import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { ordersModel } from 'src/app/models/orders.model';

@Injectable({
    providedIn: 'root'
})

export class OrdersService {
    constructor(private myHttpClient: HttpClient) { }
    public orderCar: ordersModel = new ordersModel();
    public orderToUpdate: ordersModel = new ordersModel();
    public order: ordersModel = new ordersModel();

    public GetAllOrders(): Promise<ordersModel[]> {
        const observable = this.myHttpClient.get<ordersModel[]>(environment.ordersURL + "/");
        return observable.toPromise();
    }

    public GetOrder(id: number): Promise<ordersModel> {
        const observable = this.myHttpClient.get<ordersModel>(environment.ordersURL + "/" + id);
        return observable.toPromise();
    }
    public GetOrderHistoryByID(userId: number): Promise<ordersModel[]> {
        const observable = this.myHttpClient.get<ordersModel[]>(environment.ordersURL + "/GetOrderHistoryByUserID/" + userId);
        return observable.toPromise();
    }
    public AddOrder(order: ordersModel): Promise<ordersModel> {
        this.orderCar = {
            userId: Number(order.userId),
            vin: Number(order.vin),
            carId: Number(order.carId),
            startDate: order.startDate, 
            endDate: order.endDate,
            actualReturnDate: order.actualReturnDate
        }
        const observable = this.myHttpClient.post<ordersModel>(environment.ordersURL + "/OrderAdd", this.orderCar);
        return observable.toPromise();
    }
    public UpdateOrder(order: ordersModel): Promise<ordersModel> {
        this.orderToUpdate = {
            userId: Number(order.userId),
            vin: Number(order.vin),
            carId: Number(order.carId),
            startDate: order.startDate,
            endDate: order.endDate,
            actualReturnDate: order.actualReturnDate
        }
        const observable = this.myHttpClient.put<ordersModel>(environment.ordersURL + "/UpdateFullOrder"  + "/" + order.orderId, this.orderToUpdate);
        return observable.toPromise();
    }

    public PartialUpdateOrder(order: ordersModel): Promise<ordersModel> {
        this.orderToUpdate = {
            userId: Number(order.userId),
            vin: Number(order.vin),
            carId: Number(order.carId),
            startDate: order.startDate,
            endDate: order.endDate,
            actualReturnDate: order.actualReturnDate
        }
        const observable = this.myHttpClient.patch<ordersModel>(environment.ordersURL + "/PartialUpdateOrder"  + "/" + order.orderId, this.orderToUpdate);
        return observable.toPromise();
    }

    public OrderDelete(id: number): Promise<undefined> {
        const observable = this.myHttpClient.delete<undefined>(environment.ordersURL + "/" + id);
        return observable.toPromise();
    }
}