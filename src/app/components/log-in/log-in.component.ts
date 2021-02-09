import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsModel } from 'src/app/models/Credentials.model';
import { AuthService } from 'src/services/auth.service';
import { NotificationS } from '../../../services/notificationService';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

    public credentials = new CredentialsModel();

    constructor(private MyAuthService: AuthService, private router: Router, private notificationService: NotificationS) { }

    public async Login() {
        const success = await this.MyAuthService.Login(this.credentials);
        if (success) {
            this.notificationService.LoggedInNotification();
            setTimeout(() => {
                this.router.navigateByUrl("/home");
            }, 1000);
        }
        else this.notificationService.ErrorNotification();
    }
}
