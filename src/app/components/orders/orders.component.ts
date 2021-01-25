import { Component, OnInit } from '@angular/core';
import { ordersModel } from 'src/app/models/orders.model';
import { OrdersService } from 'src/services/ordersService';
import { NotificationService } from '@progress/kendo-angular-notification';

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

    constructor(private OrdersService: OrdersService, private notification: NotificationService) { }

    async ngOnInit() {
        this.GetAllOrders();
        this.original = await this.OrdersService.getAllOrders();
        this.Orders = this.original;
    }
    async GetAllOrders() {
        try {
            this.Orders = await this.OrdersService.getAllOrders();

        }
        catch (err) {
            alert(err.message);
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
                this.showDeleteOrder();
            }
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            alert(err.message);
        }
    }
    public showDeleteOrder(): void {
        this.notification.show({
            content: 'Order has been Deleted',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }
    public onTextChange(event: Event) {
        let searchPhrase: any;
        if (event.target !== null) {
            searchPhrase = event.target;
            this.Orders = this.original.filter(o => o.orderId == searchPhrase.value);
        }
        if(searchPhrase.value == "") {
            this.Orders = this.original;
        }
    }
}
