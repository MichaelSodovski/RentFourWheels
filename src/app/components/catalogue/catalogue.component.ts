import { Component, OnInit } from '@angular/core';
import { carsModel } from 'src/app/models/cars.model';
// import { store } from 'src/app/redux/store';
import { CarsService } from 'src/services/cars.service';
import { environment } from 'src/environments/environment';
import { NotificationS } from '../../../services/notificationService';

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
    public images: string[] = [];
    // private unsubscribe!: Unsubscribe;
    public responsiveOptions: any = null as any;
    public option?: any;
    
    constructor(private carsService: CarsService, private notificationService: NotificationS) {
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    async ngOnInit() {
        this.GetAllCars();
        this.original = await this.carsService.GetAllCars();
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
            this.allCars = await this.carsService.GetAllCars();
        }
        catch (err) {
            this.notificationService.ErrMessage(err.message);
        }
    }

    // reach by options: ---------------------------------------------------------------------------------------------------------------------------------------------------
    public OnTextChange(event: any) {
        let searchPhrase: any;
        if (event.target.value !== null) { searchPhrase = event.target.value; } // if there is something in the target value it becomes what we search. 
        switch (this.option) { // receives the value of the option that the used choose 
            case "0": this.notificationService.ShowSearchPraseNotification();
                break;
            case "1": this.allCars = this.original.filter(c => c.manufacturer?.toLowerCase().includes(searchPhrase.toLowerCase()));
                this.SetLocalStorageValues()
                break;
            case "2": this.allCars = this.original.filter(c => c.model?.toLowerCase().includes(searchPhrase.toLowerCase()));
                this.SetLocalStorageValues()
                break;
            case "3": this.allCars = this.original.filter(c => c.yearOfManufacture?.toString().includes(searchPhrase));
                this.SetLocalStorageValues()
                break;
            case "4": this.allCars = this.original.filter(c => c.gearBox?.toLowerCase().includes(searchPhrase.toLowerCase()));
                this.SetLocalStorageValues()
                break;
        }
    }
    public GetOptionValue(event: any): any {
        this.option = event.target.value;
    }
    // set last : ---------------------------------------------------------------------------------------------------------------------------------------------------


    public SetLocalStorageValues() {
        for (const car of this.allCars) {
            localStorage.setItem("ManufacturerName", this.allCars[0].manufacturer!);
            localStorage.setItem("ModelName", this.allCars[0].model!);
            localStorage.setItem("ImageFileName", this.allCars[0].imageFileName!);
            localStorage.setItem("Availability", this.allCars[0].availability!);
            localStorage.setItem("Usability", this.allCars[0].usability!);
            localStorage.setItem("BranchName", String(this.allCars[0].branchName!));
            localStorage.setItem("GearBox", String(this.allCars[0].gearBox)!);
            localStorage.setItem("Kilometrage", String(this.allCars[0].kilometrage)!);
            localStorage.setItem("VehicleIdentificationNumber", String(this.allCars[0].vin)!);
            localStorage.setItem("YearOfManufacture", String(this.allCars[0].yearOfManufacture)!);
        }
    }
    public ManufacturerName: any = localStorage.getItem("ManufacturerName");
    public ModelName: any = localStorage.getItem("ModelName");
    public ImageFileName: any = localStorage.getItem("ImageFileName");
    public Availability: any = localStorage.getItem("Availability");
    public Usability: any = localStorage.getItem("Usability");
    public BranchName: any = localStorage.getItem("BranchName");
    public GearBox: any = localStorage.getItem("GearBox");
    public Kilometrage: any = localStorage.getItem("Kilometrage");
    public VehicleIdentificationNumber: any = localStorage.getItem("VehicleIdentificationNumber");
    public yearOfManufacture: any = localStorage.getItem("YearOfManufacture");
}

