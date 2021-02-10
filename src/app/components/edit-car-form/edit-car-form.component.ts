import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/services/cars.service';
import { addCarModel } from 'src/app/models/addCarModel';
import { NotificationS } from '../../../services/notificationService';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-car-form',
    templateUrl: './edit-car-form.component.html',
    styleUrls: ['./edit-car-form.component.css']
})
export class EditCarFormComponent implements OnInit {
    public car = new addCarModel();
    public updatedCar = new addCarModel();
    public filesCar: any = null as any;
    public previewCar?: string;
    public formData = new FormData();
    public fileName?: string = "default_car.jpg";

    constructor(private carService: CarsService,
        private notificationService: NotificationS,
        private activetedRoute: ActivatedRoute) { }

    async ngOnInit() {
        const id = +this.activetedRoute.snapshot.params.id;
        try {
            this.car = await this.carService.getCar(id);
            this.previewCar = "https://localhost:44370/api/cars/images/" + this.car.imageFileName;
            this.fileName = this.car.imageFileName;
        }
        catch (err) {
            this.notificationService.errMessage(err.message);
        }
    }
    public async updateCar() {
        try {
            const confirmUpdate = confirm("Are you sure you want to update the details of this car?");
            if (!confirmUpdate) {
                return;
            }
            this.car.imageFileName = this.fileName;
            await this.carService.updatePartialCar(this.car);
            setTimeout(() => {
                location.reload();
            }, 1500);
            this.notificationService.ShowEditCarNotification();
        }
        catch (err) {
            this.notificationService.errMessage(err.message);
        }
    }
    public DisplayPreviewUpdateCar(e: Event): void {
        const target = e.target as HTMLInputElement;
        this.filesCar = target.files?.[0];
        this.car.image = this.filesCar;
        const fileReader = new FileReader();
        fileReader.onload = args => this.previewCar = args.target?.result?.toString();
        fileReader.readAsDataURL(this.filesCar);
        
    }
}
