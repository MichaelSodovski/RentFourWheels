import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { store } from 'src/app/redux/store';
import { NotificationService } from '@progress/kendo-angular-notification';

@Injectable({
    providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

    constructor(private notification: NotificationService) { }

    public canActivate(): boolean {
        if (store.getState().user) {
            return true;
        }
        this.noAccessNotification();

        return false;
    }

    public noAccessNotification(): void {
        this.notification.show({
            content: `you suppose to be logged in in order to get access to this section. please log in or register.`,
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }
}
