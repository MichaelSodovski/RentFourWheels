import { Component, OnInit } from '@angular/core';
import { CarTypesModel } from 'src/app/models/carTypes.model';
import { CarTypeService } from 'src/services/carTypeService';
import { environment } from 'src/environments/environment';
import { NotificationService } from '@progress/kendo-angular-notification';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update-car-type-form',
    templateUrl: './update-car-type-form.component.html',
    styleUrls: ['./update-car-type-form.component.css']
})
export class UpdateCarTypeFormComponent implements OnInit {
    public type = new CarTypesModel();
    public ImageCarsTypeURL: string = environment.carTypesURL + "/images/";
    public previewCarType?: string;
    public filesCarType: any = null as any;

    constructor(private carTypeService: CarTypeService,
        private notification: NotificationService, private activetedRoute:ActivatedRoute) { }

    async ngOnInit() { 
        const id=+this.activetedRoute.snapshot.params.id;
        try {
            this.type = await this.carTypeService.getCarType(id);
        }
        catch(err) {
            alert(err.message);
        }
    }
    
    public async UpdateCarType() {
        try {
            const confirmUpdate = confirm("Are you sure you want to update the details of this car Type?");
            if (!confirmUpdate) {
                return;
            }
            await this.carTypeService.UpdateCarType(this.type);
            alert("Car type has been updated");
            location.reload()
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
