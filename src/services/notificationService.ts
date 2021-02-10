import { Component, Injectable, ViewEncapsulation } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
    selector: 'my-app',
    template: `
       <button class="k-button" (click)="UserAddedNotification()"> Save data </button>
    `,
    styles: [`
        .button-notification {
            padding: 10px 5px;
            color: #313536;
        }
    `],
    encapsulation: ViewEncapsulation.None,
})

@Injectable({
    providedIn: 'root'
})

export class NotificationS {

    constructor(private notificationService: NotificationService) { }

    public UserAddedNotification(): void {
        this.notificationService.show({
            content: 'User has been added',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }
    public ErrorNotification(): void {
        this.notificationService.show({
            content: `Incorrect Username or Password.`,
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'error', icon: true },
            closable: true
        });
    }
    public RegisterErrorNotification(): void {
        this.notificationService.show({
            content: `Error: Registration Failed.`,
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'error', icon: true },
            closable: true
        });
    }
    public LoggedInNotification(): void {
        this.notificationService.show({
            content: `You are now logged in.`,
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }

    public showAddCar(): void {
        this.notificationService.show({
            content: 'Car has been added',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }
    public showAddCarType(): void {
        this.notificationService.show({
            content: 'Car Type has been added',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }
    public showAddOrder(): void {
        this.notificationService.show({
            content: 'Order has been added',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }
    public showAddUser(): void {
        this.notificationService.show({
            content: 'User has been added',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }

    public showDeleteCar(): void {
        this.notificationService.show({
            content: 'Car has been Deleted',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'error', icon: true },
            closable: true
        });
    }
    public showDeleteCarType(): void {
        this.notificationService.show({
            content: 'Car Type has been Deleted',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'error', icon: true },
            closable: true
        });
    }
    public ShowDeleteUserNotification(): void {
        this.notificationService.show({
            content: 'User has been Deleted',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'error', icon: true },
            closable: true
        });
    }
    public showDeleteOrder(): void {
        this.notificationService.show({
            content: 'Order has been Deleted',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'error', icon: true },
            closable: true
        });
    }

    public UpdateCarNotification(): void {
        this.notificationService.show({
            content: 'Car has been updated',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'info', icon: true },
            closable: true
        });
    }
    public UpdateCarTypeNotification(): void {
        this.notificationService.show({
            content: 'Car Type has been updated',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'info', icon: true },
            closable: true
        });
    }
    public UpdateUserNotification(): void {
        this.notificationService.show({
            content: 'User has been updated',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'info', icon: true },
            closable: true
        });
    }
    public UpdateOrderNotification(): void {
        this.notificationService.show({
            content: 'Order has been updated',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'info', icon: true },
            closable: true
        });
    }

    public ShowEditCarNotification(): void {
        this.notificationService.show({
            content: 'Car has been edited',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'warning', icon: true },
            closable: true
        });
    }
    public ShowEditCarTypeNotification(): void {
        this.notificationService.show({
            content: 'Car Type has been edited',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'warning', icon: true },
            closable: true
        });
    }
    public ShowEditUserNotification(): void {
        this.notificationService.show({
            content: 'User has been edited',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'warning', icon: true },
            closable: true
        });
    }
    public ShowEditOrderNotification(): void {
        this.notificationService.show({
            content: 'Order been edited',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'warning', icon: true },
            closable: true
        });
    }
    public ShowSearchPraseNotification(): void {
        this.notificationService.show({
            content: 'Please Choose an option',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'error', icon: true },
            closable: true
        });
    }
    public ShowErrorUserNotification(): void {
        this.notificationService.show({
            content: 'A user with this id is not found: Please enter the same Identification number you entered while registering.',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'error', icon: true },
            closable: true
        });
    }
    public ShowErrorEnterTextSearchNotification(): void {
        this.notificationService.show({
            content: 'The text input is empty, Please enter your search phrase..',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'error', icon: true },
            closable: true
        });
    }
    public errMessage(err: string): void {
        this.notificationService.show({
            content: err,
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'error', icon: true },
            closable: true
        });
    }
    public errMessageGetCar(): void {
        this.notificationService.show({
            content: "Error: The Vehicle Identification number you provided is either invalid or non existent. please provide a valid Vin number..",
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'error', icon: true },
            closable: true
        });
    }
}

