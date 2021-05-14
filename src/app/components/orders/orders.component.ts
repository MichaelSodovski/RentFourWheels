import { Component, OnInit } from '@angular/core';
import { ordersModel } from 'src/app/models/orders.model';
import { OrdersService } from 'src/services/ordersService';
import { NotificationS } from '../../../services/notificationService';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    public Orders?: ordersModel[];
    public order = new ordersModel();
    public selected: number = null as any;
    public selectedRow: string = null as any;
    public original: ordersModel[] = [];

    constructor(private OrdersService: OrdersService, private notificationService: NotificationS) { }

    async ngOnInit() {
        this.GetAllOrders();
        this.original = await this.OrdersService.GetAllOrders();
        this.Orders = this.original;
    }
    async GetAllOrders() {
        try {
            this.Orders = await this.OrdersService.GetAllOrders();
        }
        catch (err) {
            this.notificationService.ErrMessage(err.message);
        }
    }
    public Selected(id: any) {
        this.selected = id;
    }
    public async DeleteOrder() {
        try {
            const confirmDeletion = confirm("Are you sure you want to delete this Order?");
            if (!confirmDeletion) {
                return;
            }
            if (this.selected !== null) {
                await this.OrdersService.OrderDelete(this.selected!);
                this.notificationService.ShowDeleteOrder();
            }
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            this.notificationService.ErrMessage(err.message);
        }
    }
    public OnTextChange(event: Event) {
        let searchPhrase: any;
        if (event.target !== null) {
            searchPhrase = event.target;
            this.Orders = this.original.filter(o => o.orderId == searchPhrase.value);
        }
        if (searchPhrase.value == "") {
            this.Orders = this.original;
        }
    }
}
