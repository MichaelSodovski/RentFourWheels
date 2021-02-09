import { Component } from '@angular/core';
import { CarsService } from 'src/services/cars.service';
import { environment } from 'src/environments/environment';
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

    public filesCar: any = null as any;
    public previewCar?: string;

    constructor(private carService: CarsService){}

    async ngOnInit(){}

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
            this.car.kilometrage = Number(this.car.kilometrage);
            this.car.vin = Number(this.car.vin);
            this.car.branch = Number(this.car.branch);
            await this.carService.updatePartialCar(this.car);
            alert("car has been updated");
            location.reload()
        }
        catch (err) {
            alert(err.message);
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

    //   public DisplayPreviewAddCar(e: Event): void {
    //     const target = e.target as HTMLInputElement;
    //     this.filesCar = target.files?.[0];
    //     this.car.image = this.filesCar;
    //     const fileReader = new FileReader();
    //     fileReader.onload = args => this.previewCar = args.target?.result?.toString();
    //     fileReader.readAsDataURL(this.filesCar);
    // }
      
}
