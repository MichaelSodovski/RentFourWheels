import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/services/cars.service';
import { addCarModel } from 'src/app/models/addCarModel';
import { carsModel } from 'src/app/models/cars.model';
import { environment } from 'src/environments/environment';
import { NotificationS } from '../../../services/notificationService';

@Component({
    selector: 'app-add-car-form',
    templateUrl: './add-car-form.component.html',
    styleUrls: ['./add-car-form.component.css']
})
export class AddCarFormComponent implements OnInit {
    public cars: string = "cars";
    public allCars?: carsModel[];
    public car = new addCarModel();
    public ImageCarsURL: string = environment.carsURL + "/images/";
    public filesCar: any = null as any;
    public previewCar?: string;

    constructor(private carService: CarsService, private notificationService: NotificationS) { }

    ngOnInit(): void {}

    public async AddCar() {
        try {
            await this.carService.AddCar(this.car);
            this.notificationService.ShowAddCar();
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            alert(err.message);
        }
    }
    public DisplayPreviewAddCar(e: Event): void {
        const target = e.target as HTMLInputElement;
        this.filesCar = target.files?.[0];
        this.car.image = this.filesCar;
        const fileReader = new FileReader();
        fileReader.onload = args => this.previewCar = args.target?.result?.toString();
        fileReader.readAsDataURL(this.filesCar);
    }
}
