import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { store } from 'src/app/redux/store';
import { NotificationS } from '../services/notificationService';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(private Notification: NotificationS) { }

    public canActivate(): boolean {
        if (store.getState().user?.role === "Admin") {
            return true;
        }
        this.Notification.NoAccessNotification();
        return false;
    }
}
