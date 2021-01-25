import { Component, OnInit } from '@angular/core';
import { CarTypesModel } from 'src/app/models/carTypes.model';
import { CarTypeService } from 'src/services/carTypeService';
import { environment } from 'src/environments/environment';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
    selector: 'app-car-type',
    templateUrl: './car-type.component.html',
    styleUrls: ['./car-type.component.css']
})
export class CarTypeComponent implements OnInit {
    public selected: number = null as any;
    public selectedRow: string = null as any;
    public type = new CarTypesModel();
    public CarTypes?: CarTypesModel[];
    public ImageCarsTypeURL: string = environment.carTypesURL + "/images/";
    public previewCarType?: string;
    public filesCarType: any = null as any;
    public original: CarTypesModel[] = [];

    constructor(private carTypeService: CarTypeService,
        private notification: NotificationService) { }

    async ngOnInit() {
        this.GetAllCarTypes();
        this.original = await this.carTypeService.GetAllCarTypes();
        this.CarTypes = this.original;
    }
    public Selected(id: any) {
        this.selected = id;
    }
    async GetAllCarTypes() {
        try {
            this.CarTypes = await this.carTypeService.GetAllCarTypes();
        }
        catch (err) {
            alert(err.message);
        }
    }
    public async DeleteCarType() {
        try {
            const confirmDeletion = confirm("Are you sure you want to delete this Car Type?");
            if (!confirmDeletion) {
                return;
            }
            if (this.selected !== null) {
                await this.carTypeService.DeleteCarType(this.selected!);
                this.showDeleteCarType();
            }
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            alert(err.message);
        }
    }
    public showDeleteCarType(): void {
        this.notification.show({
            content: 'Car Type has been Deleted',
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
            this.CarTypes = this.original.filter(ct => ct.manufacturer?.toLowerCase().includes(searchPhrase.value.toLowerCase()));
        }
        if(searchPhrase.value == "") {
            this.CarTypes = this.original;
        }
    }
}
