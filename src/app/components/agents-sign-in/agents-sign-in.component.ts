import { Component } from '@angular/core';
import { CarsService } from 'src/services/cars.service';
import { environment } from 'src/environments/environment';
import { addCarModel } from 'src/app/models/addCarModel';
import { NotificationS } from '../../../services/notificationService';

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
    public filesCar: any = null as any;

    constructor(private carService: CarsService, private notificationService: NotificationS) { }

    public GetIpnut(event: any) {
        this.inputID = event.target.value;
    }
    public async GetCar(vin: number) {
        try {
            this.car = await this.carService.GetCarByVin(vin);
            this.fileName = this.car.imageFileName;
        }
        catch (err) {
            this.notificationService.ErrMessageGetCar();
        }
        this.changeAvailabilityStatus();
        this.changeUsabilityStatus();
    }
    public changeAvailabilityStatus() {
        if (this.car.availability == "y") {
            this.AvailabilityStatus = this.available;
        }
        else this.AvailabilityStatus = this.notAvailable;
    }
    public changeUsabilityStatus() {
        if (this.car.usability == "y") {
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
            this.car.kilometrage = Number(this.car.kilometrage);
            this.car.vin = Number(this.car.vin);
            this.car.branch = Number(this.car.branch);
            this.car.imageFileName = this.fileName;
            await this.carService.UpdatePartialCar(this.car);
            this.notificationService.UpdateCarNotification();
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            this.notificationService.ErrMessage(err.message);
        }
    }
    public KilomentrageToggleInputVisibility() {
        var x = document.getElementById("editKilometrageID");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
    }
    public VINToggleInputVisibility() {
        var x = document.getElementById("editVINiD");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
    }
    public BranchToggleInputVisibility() {
        var x = document.getElementById("editBranchID");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
    }
    public AvailabilityToggleInputVisibility() {
        var x = document.getElementById("editAvailabilityID");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
    }
    public UsabilityToggleInputVisibility() {
        var x = document.getElementById("editUsabilityID");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
    }
}
