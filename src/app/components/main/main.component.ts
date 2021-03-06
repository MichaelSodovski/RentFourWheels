import { Component, OnInit } from '@angular/core';
import { carsModel } from 'src/app/models/cars.model';
import { environment } from 'src/environments/environment';
import { CarsService } from 'src/services/cars.service';
import { NotificationS } from '../../../services/notificationService';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    public allCars?: carsModel[];
    options: any;
    a: any;
    b: any;
    c: any;
    public images: string[] = [];
    constructor(private carService: CarsService, private notificationService: NotificationS) { }

    async ngOnInit() {
        this.options = {
            center: { lat: 31.78458168042434, lng: 34.6530032157898 },
            zoom: 12
        };
        try {
            this.allCars = await this.carService.GetAllCars();
            for (const prop of this.allCars) {
                this.a = this.allCars[0].imageFileName;
                this.b = this.allCars[1].imageFileName;
                this.c = this.allCars[2].imageFileName;
            }

            this.images = [this.a, this.b, this.c].map((n) => `${environment.carsURL}/images/${n}`); 
        }
        catch (err) {
            this.notificationService.ErrMessage(err.message); 
        }
    }
}
