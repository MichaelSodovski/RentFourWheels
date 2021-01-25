import { Component, Injectable, ViewEncapsulation } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
    selector: 'my-app',
    template: `
       <button class="k-button" (click)="show()"> Save data </button>
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
    
    public show(): void {
        this.notificationService.show({
            content: 'User has been added',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }

    
}

