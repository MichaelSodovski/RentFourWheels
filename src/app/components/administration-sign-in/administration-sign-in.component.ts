import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';


@Component({
    selector: 'app-administration-sign-in',
    templateUrl: './administration-sign-in.component.html',
    styleUrls: ['./administration-sign-in.component.css']
})
export class AdministrationSignInComponent implements OnInit {

    constructor(private notification: NotificationService) { }

    ngOnInit(): void { }

}
