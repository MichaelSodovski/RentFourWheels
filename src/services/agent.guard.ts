import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NotificationService } from '@progress/kendo-angular-notification';
import { store } from 'src/app/redux/store';

@Injectable({
  providedIn: 'root'
})
export class AgentGuard implements CanActivate {
    constructor(private notification: NotificationService) { }

    public canActivate(): boolean {
        if (store.getState().user?.role === "Agent") {
            return true;
        }
        this.noAccessNotification();

        return false;
    }

    public noAccessNotification(): void {
        this.notification.show({
            content: `Forbidden: Only an Agent or an Administrator can access this section.`,
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }
  
}
