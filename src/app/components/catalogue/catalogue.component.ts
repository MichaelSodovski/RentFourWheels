import { Component, OnInit } from '@angular/core';
import { carsModel } from 'src/app/models/cars.model';
// import { store } from 'src/app/redux/store';
import { CarsService } from 'src/services/cars.service';
import { environment } from 'src/environments/environment';

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
    // private unsubscribe!: Unsubscribe;

    constructor(private carsService: CarsService) { }

    async ngOnInit() {
        this.GetAllCars();
        this.original = await this.carsService.getAllCars();
        this.allCars = this.original;

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
    async GetAllCars() {
        try {
            this.allCars = await this.carsService.getAllCars();
        }
        catch (err) {
            alert(err.message);
        }
    }
    public onTextChange(event: Event) {
        let searchPhrase : any;
        if( event.target !== null){
            searchPhrase = event.target;
        }
            this.allCars = this.original.filter(c => c.manufacturer?.toLowerCase().includes(searchPhrase.value.toLowerCase()));
    }
}
