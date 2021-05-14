import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { ordersModel } from 'src/app/models/orders.model';
import { OrdersService } from 'src/services/ordersService';
import { NotificationS } from 'src/services/notificationService';

@Component({
    selector: 'app-user-sign-in',
    templateUrl: './user-sign-in.component.html',
    styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
    public user = new userModel();
    public ImageURL: any = environment.usersURL + "/images/";
    public Orders?: ordersModel[];

    constructor(private OrdersService: OrdersService, private notificationService: NotificationS) { }

    ngOnInit() {
        this.user = JSON.parse(sessionStorage.GetItem("user")!);
        this.ImageURL = environment.usersURL + "/images/" + this.user.imageFileName;
        this.GetUserOrderHistory();
    }
    async GetUserOrderHistory() {
        try {
            this.Orders = await this.OrdersService.GetOrderHistoryByID(Number(this.user.userId)!);
        }
        catch (err) {
            this.notificationService.ErrMessage(err.message);
        }
    }
}
