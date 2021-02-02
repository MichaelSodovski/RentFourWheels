import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/services/cars.service';
import { carsModel } from 'src/app/models/cars.model';
import { environment } from 'src/environments/environment';
import { NotificationService } from '@progress/kendo-angular-notification';
import { EventEmitterService } from '../../../services/event-emitter.service'

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
    public allCars?: carsModel[];
    public ImageCarsURL: string = environment.carsURL + "/images/";
    public previewCar?: string;
    public selected: number = null as any;
    public original: carsModel[] = [];

    constructor(private carService: CarsService, private notification: NotificationService, private eventEmitterService: EventEmitterService) { }

    async ngOnInit() {
        this.GetAllCars();
        this.original = await this.carService.getAllCars();
        this.allCars = this.original;
    }

    async GetAllCars() {
        try {
            this.allCars = await this.carService.getAllCars();
        }
        catch (err) {
            alert(err.message);
        }
    }
    public Selected(id: any) {
        this.selected = id;
    }
    public async CarDelete() {
        try {
            const confirmDeletion = confirm("Are you sure you want to delete this car?");
            if (!confirmDeletion) {
                return;
            }
            if (this.selected !== null) {
                await this.carService.DeleteCar(this.selected!);
                this.showDeleteCar();
            }
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            alert(err.message);
        }
    }
    public showDeleteCar(): void {
        this.notification.show({
            content: 'Car has been Deleted',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'top' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }

    public onTextChange(event: Event) {
        let searchPhrase: any;
        if (event.target !== null) {
            searchPhrase = event.target;
            this.allCars = this.original.filter(c => c.vin == searchPhrase.value);
        }
        if(searchPhrase.value == "") {
            this.allCars = this.original;
        }
    }
}
