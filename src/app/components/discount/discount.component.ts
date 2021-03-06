import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/services/ordersService';
import { ordersModel } from 'src/app/models/orders.model';
import * as moment from 'moment';
import { addCarModel } from 'src/app/models/addCarModel';
import { CarsService } from 'src/services/cars.service';
import { CarTypesModel } from 'src/app/models/carTypes.model';
import { CarTypeService } from 'src/services/carTypeService';
import { userModel } from 'src/app/models/user.model';
import { UserService } from 'src/services/userService';
import { carsModel } from 'src/app/models/cars.model';
import { HttpClient } from '@angular/common/http';
import { store } from 'src/app/redux/store';
import { actionType } from 'src/app/redux/action-type';
import { environment } from 'src/environments/environment';
import { NotificationS } from '../../../services/notificationService';

@Component({
    selector: 'app-discount',
    templateUrl: './discount.component.html',
    styleUrls: ['./discount.component.css']
})

export class DiscountComponent implements OnInit {
    public Orders?: ordersModel[];
    public order = new ordersModel();
    public car: addCarModel = new addCarModel();
    public carType: CarTypesModel = new CarTypesModel();
    public typeID: any;
    public user = new userModel();
    public s: any = null as any;
    public e: any = null as any;

    public vinLocalStorage: any = localStorage.getItem("VehicleIdentificationNumber");

    public allCars?: carsModel[];
    options: any;
    a: any;
    b: any;
    c: any;
    public images: string[] = [];

    constructor(private OrdersService: OrdersService,
        private notificationService: NotificationS,
        private carsService: CarsService,
        private carTypeService: CarTypeService,
        private userService: UserService,
        private http: HttpClient
    ) { }

    async ngOnInit() {
        this.allCars = await this.carsService.GetAllCars();
        for (const prop of this.allCars) {
            this.a = this.allCars[0].imageFileName;
            this.b = this.allCars[1].imageFileName;
            this.c = this.allCars[2].imageFileName;
        }
        this.images = [this.a, this.b, this.c].map((n) => `https://localhost:44370/api/cars/images/${n}`);
    }
    async SubmitOrder() {
        this.order.carId = this.car.id;
        this.order.userId = this.user.userId;
        this.order.actualReturnDate = this.order.endDate;
        this.order.vin = localStorage.getItem("VehicleIdentificationNumber") as any as number;
        try {
            await this.OrdersService.AddOrder(this.order);
            this.notificationService.ShowAddOrder();
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            this.notificationService.ErrMessage(err.message);
        }
    }
    public TotalRentalDays(start: Date, end: Date) {
        const s = moment(start);
        const e = moment(end);
        const days = e.diff(s, "days");
        return days;
    }
    public async GetUser(id: number) {
        try {
            this.user = await this.userService.GetSingleUserByIdentificationNumber(id);
        }
        catch (err) {
            this.notificationService.ShowErrorUserNotification();
        }
    }
    public async GetCar(vin: number) {
        try {
            this.car = await this.carsService.GetCarByVin(vin);
            this.typeID = this.car.typeId;
            this.GetCarType(this.typeID);
        }
        catch (err) {
            this.notificationService.ErrMessageGetCar();
        }
    }
    public async GetCarType(typeID: any) {
        try {
            this.carType = await this.carTypeService.GetCarType(typeID);
        }
        catch (err) {
            this.notificationService.ErrMessage(err.message);
        }
    }
    public CalculateTotalPrice(): number {
        let totalPrice = this.TotalRentalDays(this.order.startDate!, this.order.endDate!) * this.carType.dailyCost!;
        return totalPrice;
    }
    public async GetUserRedux(): Promise<boolean> {
        try {
            const options = { headers: { Authorization: "bearer" + store.getState().user.JwtToken } };
            const user = await this.http.get<userModel>(environment.usersURL, options).toPromise();
            store.dispatch({ type: actionType.GetUser, payLoad: user });
            return true;
        }
        catch (httpErrorResponse) {
            store.dispatch({ type: actionType.GotError, payLoad: httpErrorResponse });
            return false;
        }
    }
}
