import { Component, OnInit } from '@angular/core';
import { ordersModel } from 'src/app/models/orders.model';
import { OrdersService } from 'src/services/ordersService';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
    selector: 'app-add-order-form',
    templateUrl: './add-order-form.component.html',
    styleUrls: ['./add-order-form.component.css']
})
export class AddOrderFormComponent implements OnInit {
    public Orders?: ordersModel[];
    public order = new ordersModel();
    public orders: string = "orders";

    constructor(private OrdersService: OrdersService, private notification: NotificationService) { }

    ngOnInit(): void { }


    async AddOrder() {
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
}
