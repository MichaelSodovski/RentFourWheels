import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/models/user.model';
import { UserService } from 'src/services/userService';
import { environment } from 'src/environments/environment';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    public Users?: userModel[];
    public user = new userModel();
    public ImageURL: string = environment.usersURL + "/images/";
    public previewUser?: string;
    public filesUser: any = null as any;
    public selected: number = null as any;
    public selectedRow: string = null as any;
    public original: userModel[] = [];

    constructor(private userService: UserService, private notification: NotificationService) { }

    async ngOnInit() {
        this.GetAllUsers();
        this.original = await this.userService.GetAllUsers();
        this.Users = this.original;
    }

    public Selected(id: any) {
        this.selected = id;
    }

    public async GetAllUsers() {
        try {
            this.Users = await this.userService.GetAllUsers();
        }
        catch (err) {
            alert(err.message);
        }
    }
    public async GetSingleUser(id: number) {
        try {
            this.user = await this.userService.GetSingleUser(id);
        }
        catch (err) {
            alert(err.message);
        }
    }
    public async DeleteUser() {
        try {
            const confirmDeletion = confirm("Are you sure you want to delete this user?");
            if (!confirmDeletion) {
                return;
            }
            if (this.selected !== null) {
                await this.userService.DeleteUser(this.selected!);
                this.showDeleteUser();
            }
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            alert(err.message);
        }
    }
    public showDeleteUser(): void {
        this.notification.show({
            content: 'User has been Deleted',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }
    
    public onTextChange(event: Event) {
        let searchPhrase: any;
        if (event.target !== null) {
            searchPhrase = event.target;
            this.Users = this.original.filter(u => u.identificationNumber == searchPhrase.value);
        }
        if(searchPhrase.value == "") {
            this.Users = this.original;
        }
    }
}
