import { Component } from '@angular/core';
import { userModel } from 'src/app/models/user.model';
import { UserService } from 'src/services/userService';
import { NotificationS } from '../../../services/notificationService';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],

})
export class SignupComponent {
    public user = new userModel();
    public preview?: string;
    public files: any = null as any;
    public defaultUserRole: number = 3;

    constructor(private userService: UserService, private notification: NotificationS) { }

    public DisplayPreview(e: Event): void {
        const target = e.target as HTMLInputElement;
        this.files = target.files?.[0];
            this.user.image = this.files;
            const fileReader = new FileReader();
            fileReader.onload = args => this.preview = args.target?.result?.toString();
            fileReader.readAsDataURL(this.files);
    }

    public async AddUser() {
        this.user.roleId = this.defaultUserRole;
        try {
            await this.userService.AddUser(this.user);
            this.notification.show();
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            alert(err.message);
        }
    }
}
