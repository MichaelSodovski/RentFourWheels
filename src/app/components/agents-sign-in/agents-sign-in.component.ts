import { Component } from '@angular/core';
import { CarsService } from 'src/services/cars.service';
import { environment } from 'src/environments/environment';
import { NotificationService } from '@progress/kendo-angular-notification';
import { addCarModel } from 'src/app/models/addCarModel';

@Component({
    selector: 'app-agents-sign-in',
    templateUrl: './agents-sign-in.component.html',
    styleUrls: ['./agents-sign-in.component.css']
})

export class AgentsSignInComponent {
    public car: addCarModel = new addCarModel();
    public inputID: number = null as any;
    public fileName?: string = "default_car.jpg";
    public ImageCarsURL: string = environment.carsURL + "/images/";
    public AvailabilityStatus: string = "blank.png";
    public available: string = "available.jpg"; 
    public notAvailable: string = "notAvailable.jpg"; 
    public UsabilityStatus: string = "blank.png";
    public usable: string = "Usable.jpg";
    public notUsable: string = "notUsable.jpg";  

    constructor(
        private carService: CarsService, 
        private notification: NotificationService
        ){}

    async ngOnInit() { 
    }

    public GetIpnut(event: any) {
        this.inputID = event.target.value;
    }
    public async GetCar(vin: number) {
        try {
            this.car = await this.carService.getCarByVin(vin);
            this.fileName = this.car.imageFileName;
            console.log(this.car);
        }
        catch (err) {
            alert("something went wrong! GerCar");
        }
        this.changeAvailabilityStatus();
        this.changeUsabilityStatus();
    }

    public changeAvailabilityStatus() {
        if(this.car.availability == "y") {
            this.AvailabilityStatus = this.available;
        }
        else this.AvailabilityStatus = this.notAvailable;
    }
    public changeUsabilityStatus() {
        if(this.car.usability == "y") {
            this.UsabilityStatus = this.usable;
        }
        else this.UsabilityStatus = this.notUsable;
    }

    public async updateCar() {
        try {
            const confirmUpdate = confirm("Are you sure you want to update the details of this car?");
            if (!confirmUpdate) {
                return;
            }
            const updatedCar = await this.carService.updatePartialCar(this.car);
            alert("car has been updated");
            location.reload()
        }
        catch (err) {
            alert(err.message);
        }
    }
}
