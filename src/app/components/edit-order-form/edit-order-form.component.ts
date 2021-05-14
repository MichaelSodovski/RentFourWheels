import { Component, OnInit } from '@angular/core';
import { ordersModel } from 'src/app/models/orders.model';
import { OrdersService } from 'src/services/ordersService';
import { NotificationS } from '../../../services/notificationService';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-order-form',
    templateUrl: './edit-order-form.component.html',
    styleUrls: ['./edit-order-form.component.css']
})
export class EditOrderFormComponent implements OnInit {
    public Orders?: ordersModel[];
    public order = new ordersModel();
    public updatedOrder = new ordersModel();

    constructor(private OrdersService: OrdersService,
        private notificationService: NotificationS,
        private activetedRoute: ActivatedRoute) { }

    async ngOnInit() {
        const id = +this.activetedRoute.snapshot.params.id;
        try {
            this.order = await this.OrdersService.GetOrder(id);
        }
        catch (err) {
            alert(err.message);
        }
    }
    public async UpdateOrder() {
        this.order.orderId = +this.activetedRoute.snapshot.params.id;
        try {
            const confirmUpdate = confirm("Are you sure you want to update the details of this order?");
            if (!confirmUpdate) {
                return;
            }
            this.updatedOrder = await this.OrdersService.PartialUpdateOrder(this.order);
            setTimeout(() => {
                location.reload();
            }, 1500);
            this.notificationService.ShowEditOrderNotification();
        }
        catch (err) {
            alert(err.message);
        }
    }
}
