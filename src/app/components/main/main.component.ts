import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    constructor() { }

    options: any;

    ngOnInit(): void {
        this.options = {
            center: { lat: 31.78458168042434, lng: 34.6530032157898 },
            zoom: 12
        };

    }
}
