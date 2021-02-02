import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/services/ordersService';
import { NotificationService } from '@progress/kendo-angular-notification';
import { ordersModel } from 'src/app/models/orders.model';
import * as moment from 'moment';
import { addCarModel } from 'src/app/models/addCarModel';
import { CarsService } from 'src/services/cars.service';
import { CarTypesModel } from 'src/app/models/carTypes.model';
import { CarTypeService } from 'src/services/carTypeService';
import { userModel } from 'src/app/models/user.model';
import { UserService } from 'src/services/userService';
import { carsModel } from 'src/app/models/cars.model';

@Component({
    selector: 'app-discount',
    templateUrl:'./discount.component.html',
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
    public startD?: Date = new Date("2020-02-02"); 
    public endD?: Date = new Date("2020-02-02"); 
    public start: Date = null as any;
    public end: Date = null as any;

    public allCars?: carsModel[];
    options: any;
    a: any;
    b: any;
    c: any;
    public images:string[] = [];


    constructor(private OrdersService: OrdersService,
        private notification: NotificationService,
        private carsService: CarsService,
        private carTypeService: CarTypeService,
        private userService: UserService
    ) { }

    async ngOnInit() { 
        this.allCars = await this.carsService.getAllCars();
        for(const prop of this.allCars) {
            this.a = this.allCars[0].imageFileName;
            this.b = this.allCars[1].imageFileName;
            this.c = this.allCars[2].imageFileName;
        }
        this.images = [this.a, this.b, this.c].map((n) => `https://localhost:44370/api/cars/images/${n}`); }
    async SubmitOrder() {
        this.order.carId = this.car.id;
        this.order.userId = this.user.userId;
        this.order.actualReturnDate = this.endD;
        this.order.endDate = this.endD;
        this.order.startDate = this.startD;
        try {
            await this.OrdersService.AddOrder(this.order);
            this.showAddOrder();
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            alert(err.message);
        }
    }
    public showAddOrder(): void {
        this.notification.show({
            content: 'Order has been added',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }
    public setStartDate(event: any) {
        this.start = event.target.value;
        sessionStorage.setItem('end', this.start.toString());
    }
    public setEndDate(event: any) {
        this.end = event.target.value;
        sessionStorage.setItem('end', this.end.toString());
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
            console.log(this.user);
        }
        catch (err) {
            alert("something went wrong! GetUser");
        }
    }
    public async GetCar(vin: number) {
        try {
            this.car = await this.carsService.getCarByVin(vin);
            this.typeID = this.car.typeId;
        }
        catch (err) {
            alert("something went wrong! GerCar");
        }

        this.GetCarType(this.typeID);
    }
    public async GetCarType(typeID: any) {
        try {
            this.carType = await this.carTypeService.getCarType(typeID);
        }
        catch (err) {
            alert("something went wrong!");
        }
    }
    public CalculateTotalPrice(): number {
        let totalPrice = this.TotalRentalDays(this.order.startDate!, this.order.endDate!) * this.carType.dailyCost!;
        return totalPrice;
    }
    public onStartDateSelect(event: any) {
        let year = event.year.toString();
        let month = event.month <= 9 ? '0' + event.month : event.month;
        let day = event.day <= 9 ? '0' + event.day : event.day;
        let StartDate = `${year}-${month}-${day}`;
        this.s = StartDate;
       }
       public onEndDateSelect(event: any) {
        let year = event.year;
        let month = event.month <= 9 ? '0' + event.month : event.month;
        let day = event.day <= 9 ? '0' + event.day : event.day;
        let EndDate = year + "-" + month + "-" + day;
        this.e = EndDate;
        console.log(this.e);
       }

}
