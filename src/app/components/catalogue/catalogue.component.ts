import { Component, OnInit } from '@angular/core';
import { carsModel } from 'src/app/models/cars.model';
// import { store } from 'src/app/redux/store';
import { CarsService } from 'src/services/cars.service';
import { environment } from 'src/environments/environment';
import { NotificationS } from '../../../services/notificationService';

@Component({
    selector: 'app-catalogue',
    templateUrl: './catalogue.component.html',
    styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
    public allCars: carsModel[] = [];
    public cars?: carsModel[];
    public original: carsModel[] = [];
    public textToSearch: string = '';
    public ImageCarsURL: string = environment.carsURL + "/images/";
    a: any;
    b: any;
    c: any;
    public images: string[] = [];
    // private unsubscribe!: Unsubscribe;
    public responsiveOptions: any = null as any;
    public option?: any;

    constructor(private carsService: CarsService, private notificationService: NotificationS) {
        this.responsiveOptions = [
            {
                breakpoint: '1000px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '100px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '100px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
    async ngOnInit() {
        this.GetAllCars();
        this.original = await this.carsService.getAllCars();
        this.allCars = this.original;
        for (const prop of this.allCars) {
            this.a = this.allCars[0].imageFileName;
            this.b = this.allCars[1].imageFileName;
            this.c = this.allCars[2].imageFileName;
        }
        this.images = [this.a, this.b, this.c].map((n) => `https://localhost:44370/api/cars/images/${n}`);

        //     this.unsubscribe = store.subscribe(() => {
        //         this.cars = store.getState().cars;
        //     });
        //     if (store.getState().cars.length > 0) {
        //         this.cars = store.getState().cars;
        //     }
        //     else {
        //         setTimeout(async () => {
        //             try {
        //                 await this.carsService.getAllCars();
        //             }
        //             catch (err) {
        //                 alert(err.message)
        //             }
        //         }, 1000);
        //     }
        // }
        // public ngOnDestroy(): void {
        //     this.unsubscribe();
        // }
    }

    public localStorageCar() {
        
    }

    async GetAllCars() {
        try {
            this.allCars = await this.carsService.getAllCars();
        }
        catch (err) {
            alert(err.message);
        }
    }
    public onTextChange(event: any) {
        let searchPhrase: any;
        if(event.target.value == "" || null || " ") this.notificationService.ShowErrorEnterTextSearchNotification();
        else searchPhrase = event.target;
        switch (this.option) {
            case "0": this.notificationService.ShowSearchPraseNotification();
                break;
            case "1": this.allCars = this.original.filter(c => c.manufacturer?.toLowerCase().includes(searchPhrase.value.toLowerCase()));
                break;
            case "2": this.allCars = this.original.filter(c => c.model?.toLowerCase().includes(searchPhrase.value.toLowerCase()));
                break;
            case "3": this.allCars = this.original.filter(c => c.yearOfManufacture?.toString().includes(searchPhrase.value));
                break;
            case "4": this.allCars = this.original.filter(c => c.gearBox?.toLowerCase().includes(searchPhrase.value.toLowerCase()));
                break;
        }
    }
    public GetOptionValue(event: any): any {
        this.option = event.target.value;
    }
}

