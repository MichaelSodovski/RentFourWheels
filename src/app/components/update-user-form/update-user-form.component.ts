import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/models/user.model';
import { UserService } from 'src/services/userService';
import { environment } from 'src/environments/environment';
import { NotificationS } from '../../../services/notificationService';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update-user-form',
    templateUrl: './update-user-form.component.html',
    styleUrls: ['./update-user-form.component.css']
})
export class UpdateUserFormComponent implements OnInit {
    public Users?: userModel[];
    public user = new userModel();
    public ImageURL: string = environment.usersURL + "/images/";
    public previewUser?: string;
    public filesUser: any = null as any;

    constructor(private userService: UserService, private notificationService: NotificationS, private activetedRoute: ActivatedRoute) { }

    async ngOnInit() {
        const id = +this.activetedRoute.snapshot.params.id;
        try {
            this.user = await this.userService.GetSingleUser(id);
        }
        catch (err) {
            alert(err.message);
        }
    }
    public async UpdateUser() {
        try {
            const confirmUpdate = confirm("Are you sure you want to update the details of this user?");
            if (!confirmUpdate) {
                return;
            }
            await this.userService.UpdateFullUser(this.user);
            this.notificationService.UpdateUserNotification();
            location.reload()
        }
        catch (err) {
            alert(err.message);
        }
    }
    public DisplayPreviewAddUser(e: Event): void {
        const target = e.target as HTMLInputElement;
        this.filesUser = target.files?.[0];
        this.user.image = this.filesUser;
        const fileReader = new FileReader();
        fileReader.onload = args => this.previewUser = args.target?.result?.toString();
        fileReader.readAsDataURL(this.filesUser);
    }

}
