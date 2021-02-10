import { Component, OnInit } from '@angular/core';
import { ordersModel } from 'src/app/models/orders.model';
import { OrdersService } from 'src/services/ordersService';
import { NotificationS } from '../../../services/notificationService';

@Component({
    selector: 'app-add-order-form',
    templateUrl: './add-order-form.component.html',
    styleUrls: ['./add-order-form.component.css']
})
export class AddOrderFormComponent implements OnInit {
    public Orders?: ordersModel[];
    public order = new ordersModel();

    constructor(private OrdersService: OrdersService, private notificationService: NotificationS) { }

    ngOnInit(): void { }

    async AddOrder() {
        try {
            await this.OrdersService.AddOrder(this.order);
            this.notificationService.showAddOrder();
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            this.notificationService.errMessage(err.message);
        }
    }
}
