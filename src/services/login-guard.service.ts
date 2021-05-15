import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { store } from 'src/app/redux/store';
import { NotificationS } from '../services/notificationService';

@Injectable({
    providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

    constructor(private notification: NotificationS) { }

    public canActivate(): boolean {
        if (store.getState().user) {
            return true;
        }
        this.notification.NoAccessNotification();
        return false;
    }
}
