import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe } from 'redux';
import { store } from 'src/app/redux/store';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

    public user = store.getState().user;
    private unsubscribe?: Unsubscribe;

    constructor() { }

    ngOnInit(): void {
        this.unsubscribe = store.subscribe(() => {
            this.user = store.getState().user;
        });
    }

    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
}
