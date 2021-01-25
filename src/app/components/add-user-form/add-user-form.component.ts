import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/models/user.model';
import { UserService } from 'src/services/userService';
import { environment } from 'src/environments/environment';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
    public users: string = "users";
    public Users?: userModel[];
    public user = new userModel();
    public ImageURL: string = environment.usersURL + "/images/";
    public previewUser?: string;
    public filesUser: any = null as any;

  constructor(private userService: UserService, private notification: NotificationService) { }

  ngOnInit(): void {
  }

  public async AddUser() {
    try {
        await this.userService.AddUser(this.user);
        this.showAddUser();
        setTimeout(() => {
            location.reload()
        }, 1500);
    }
    catch (err) {
        alert(err.message);
    }
}

public showAddUser(): void {
    this.notification.show({
        content: 'User has been added',
        cssClass: 'button-notification',
        animation: { type: 'slide', duration: 400 },
        position: { horizontal: 'center', vertical: 'top' },
        type: { style: 'success', icon: true },
        closable: true
    });
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
