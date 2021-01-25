import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/services/cars.service';
import { addCarModel } from 'src/app/models/addCarModel';
import { carsModel } from 'src/app/models/cars.model';
import { environment } from 'src/environments/environment';
import { NotificationService } from '@progress/kendo-angular-notification';

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

    constructor(private carService: CarsService, private notification: NotificationService) { }

    ngOnInit(): void {

    }

    public async AddCar() {
        try {
            await this.carService.addCar(this.car);
            this.showAddCar();
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            alert(err.message);
        }
    }

    public showAddCar(): void {
        this.notification.show({
            content: 'Car has been added',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
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
