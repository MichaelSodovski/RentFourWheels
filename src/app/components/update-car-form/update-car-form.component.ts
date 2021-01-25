import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/services/cars.service';
import { addCarModel } from 'src/app/models/addCarModel';
import { NotificationService } from '@progress/kendo-angular-notification';
import { EventEmitterService } from '../../../services/event-emitter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update-car-form',
    templateUrl: './update-car-form.component.html',
    styleUrls: ['./update-car-form.component.css']
})
export class UpdateCarFormComponent implements OnInit {
    public car = new addCarModel();
    public updatedCar = new addCarModel();
    public filesCar: any = null as any;
    public previewCar?: string;

    constructor(private carService: CarsService, 
        private notification: NotificationService, 
        private eventEmitterService: EventEmitterService, 
        private activetedRoute:ActivatedRoute) { }

    async ngOnInit() {
        const id=+this.activetedRoute.snapshot.params.id;
        try {
            this.car = await this.carService.getCar(id);
        }
        catch(err) {
            alert(err.message);
        }
    }

    public async UpdateCar() {
        try {
            const confirmUpdate = confirm("Are you sure you want to update the details of this car?");
            if (!confirmUpdate) {
                return;
            }
            const updatedCar = await this.carService.updateCar(this.car);
            alert("car has been updated");
            location.reload()
        }
        catch (err) {
            alert(err.message);
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
