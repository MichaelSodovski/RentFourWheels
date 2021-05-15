import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NotificationS } from '../services/notificationService';
import { store } from 'src/app/redux/store';

@Injectable({
  providedIn: 'root'
})
export class AgentGuard implements CanActivate {
    constructor(private notification: NotificationS) { }

    public canActivate(): boolean {
        if (store.getState().user?.role === "Agent") {
            return true;
        }
        this.notification.NoAccessNotification();
        return false;
    } 
}
