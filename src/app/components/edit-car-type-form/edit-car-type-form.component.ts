import { Component, OnInit } from '@angular/core';
import { CarTypesModel } from 'src/app/models/carTypes.model';
import { CarTypeService } from 'src/services/carTypeService';
import { environment } from 'src/environments/environment';
import { NotificationS } from '../../../services/notificationService';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-car-type-form',
    templateUrl: './edit-car-type-form.component.html',
    styleUrls: ['./edit-car-type-form.component.css']
})
export class EditCarTypeFormComponent implements OnInit {
    public type = new CarTypesModel();
    public ImageCarsTypeURL: string = environment.carTypesURL + "/images/";
    public previewCarType?: string;
    public filesCarType: any = null as any;
    public picURL: string = null as any;
    public fileName?: string = "default_car.jpg";

    constructor(private carTypeService: CarTypeService,
        private notificationService: NotificationS, private activetedRoute: ActivatedRoute) { }

    async ngOnInit() {
        const id = +this.activetedRoute.snapshot.params.id;
        try {
            this.type = await this.carTypeService.GetCarType(id);
            this.previewCarType = "https://localhost:44370/api/cars/images/" + this.type.iconFileName;
            this.fileName = this.type.iconFileName;
        }
        catch (err) {
            this.notificationService.ErrMessage(err.message);
        }
    }
    public async UpdateCarType() {
        try {
            const confirmUpdate = confirm("Are you sure you want to update the details of this car Type?");
            if (!confirmUpdate) {
                return;
            }
            this.type.iconFileName = this.fileName;
            await this.carTypeService.PartialUpdateCarType(this.type);
            setTimeout(() => {
                location.reload();
            }, 1500);
            this.notificationService.ShowEditCarTypeNotification();
        }
        catch (err) {
            this.notificationService.ErrMessage(err.message);
        }
    }
    public DisplayPreviewAddCarType(e: Event): void {
        const target = e.target as HTMLInputElement;
        this.filesCarType = target.files?.[0];
        this.type.icon = this.filesCarType;
        const fileReader = new FileReader();
        fileReader.onload = args => this.previewCarType = args.target?.result?.toString();
        fileReader.readAsDataURL(this.filesCarType);
    }
}
