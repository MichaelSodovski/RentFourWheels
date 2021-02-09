import { Component, OnInit } from '@angular/core';
import { CarTypesModel } from 'src/app/models/carTypes.model';
import { CarTypeService } from 'src/services/carTypeService';
import { environment } from 'src/environments/environment';
import { NotificationS } from '../../../services/notificationService';

@Component({
    selector: 'app-add-car-type-form',
    templateUrl: './add-car-type-form.component.html',
    styleUrls: ['./add-car-type-form.component.css']
})
export class AddCarTypeFormComponent implements OnInit {
    public carTypes: string = "carTypes";
    public type = new CarTypesModel();
    public ImageCarsTypeURL: string = environment.carTypesURL + "/images/";
    public previewCarType?: string;
    public filesCarType: any = null as any;

    constructor(private carTypeService: CarTypeService,
        private notificationService: NotificationS) { }

    ngOnInit(): void { }

    public async AddCarType() {
        try {
            await this.carTypeService.AddCarType(this.type);
            this.notificationService.showAddCarType();
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
        catch (err) {
            alert(err.message);
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
