import { Component, OnInit } from '@angular/core';
import { ordersModel } from 'src/app/models/orders.model';
import { OrdersService } from 'src/services/ordersService';
import { NotificationS } from '../../../services/notificationService';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update-order-form',
    templateUrl: './update-order-form.component.html',
    styleUrls: ['./update-order-form.component.css']
})
export class UpdateOrderFormComponent implements OnInit {
    public Orders?: ordersModel[];
    public order = new ordersModel();
    public updatedOrder = new ordersModel();

    constructor(private OrdersService: OrdersService, 
        private notificationService: NotificationS, 
        private activetedRoute: ActivatedRoute) { }

    async ngOnInit() {
        const id =+this.activetedRoute.snapshot.params.id;
        try {
            this.order = await this.OrdersService.getOrder(id);
        }
        catch (err) {
            alert(err.message);
        }
    }

    public async UpdateOrder() {
        this.order.orderId =+this.activetedRoute.snapshot.params.id; // לא סגור למה כברירת מחדל הפונ' קיבלה 0 אז אילצתי אותה לקבל אידי כראוי
        try {
            const confirmUpdate = confirm("Are you sure you want to update the details of this order?");
            if (!confirmUpdate) {
                return;
            }
            this.updatedOrder = await this.OrdersService.UpdateOrder(this.order);
            this.notificationService.UpdateOrderNotification();
            location.reload()
        }
        catch (err) {
            alert(err.message);
        }
    }

}
