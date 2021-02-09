import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
    selector: 'app-logout',
    template: "",
})
export class LogoutComponent implements OnInit {

    constructor(private myAuthService: AuthService, private Router: Router, private notification: NotificationService) { }

    ngOnInit(): void {
        this.myAuthService.LogOut();
        setTimeout(() => {
            this.Router.navigateByUrl("/home");
        }, 2000);
        this.logOutNotification();
    }
    public logOutNotification(): void {
        this.notification.show({
            content: 'Successfully logged out.',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }
}
