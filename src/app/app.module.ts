import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { GMapModule } from 'primeng/gmap';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { DiscountComponent } from './components/discount/discount.component';
import { SignupComponent } from './components/signup/signup.component';
import { AgentsSignInComponent } from './components/agents-sign-in/agents-sign-in.component';
import { AdministrationSignInComponent } from './components/administration-sign-in/administration-sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { CarComponent } from './components/car/car.component';
import { CarTypeComponent } from './components/car-type/car-type.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UpdateCarFormComponent } from './components/update-car-form/update-car-form.component';
import { UpdateCarTypeFormComponent } from './components/update-car-type-form/update-car-type-form.component';
import { UpdateUserFormComponent } from './components/update-user-form/update-user-form.component';
import { UpdateOrderFormComponent } from './components/update-order-form/update-order-form.component';
import { AddCarFormComponent } from './components/add-car-form/add-car-form.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { AddCarTypeFormComponent } from './components/add-car-type-form/add-car-type-form.component';
import { AddOrderFormComponent } from './components/add-order-form/add-order-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
import { VinPipePipe } from './pipes/vin-pipe.pipe';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { EditCarFormComponent } from './components/edit-car-form/edit-car-form.component';
import { EditCarTypeFormComponent } from './components/edit-car-type-form/edit-car-type-form.component';
import { EditUserFormComponent } from './components/edit-user-form/edit-user-form.component';
import { EditOrderFormComponent } from './components/edit-order-form/edit-order-form.component';
import { LogoutComponent } from './components/logout/logout.component';
import { JwtInterceptorService } from 'src/services/jwt-interceptor.service';

@NgModule({
    declarations: [
        LayoutComponent, 
        HeaderComponent, 
        MainComponent, 
        FooterComponent, 
        CatalogueComponent, 
        DiscountComponent, 
        SignupComponent, 
        AgentsSignInComponent, 
        AdministrationSignInComponent, 
        LogInComponent, 
        UserSignInComponent, 
        CarComponent, CarTypeComponent, 
        UsersComponent, OrdersComponent, 
        UpdateCarFormComponent, 
        UpdateCarTypeFormComponent, 
        UpdateUserFormComponent, 
        UpdateOrderFormComponent, 
        AddCarFormComponent, 
        AddUserFormComponent, 
        AddCarTypeFormComponent, 
        AddOrderFormComponent, 
        VinPipePipe, EditCarFormComponent, EditCarTypeFormComponent, EditUserFormComponent, EditOrderFormComponent, LogoutComponent,
    ],
    imports: [
        BrowserModule, 
        TableModule, 
        AppRoutingModule, 
        GMapModule, 
        ButtonModule, 
        HttpClientModule, 
        CommonModule, 
        AccordionModule, 
        DataViewModule, 
        DropdownModule, 
        BrowserAnimationsModule, 
        PanelModule, 
        DialogModule, 
        InputTextModule, 
        RatingModule, 
        RippleModule, 
        FormsModule, 
        ReactiveFormsModule, 
        NotificationModule, 
        CarouselModule,
        NgbModule, 
        MessagesModule,
        MessageModule
],exports: [
    RouterModule
],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptorService,
        multi: true
    }],
    bootstrap: [LayoutComponent]
})

export class AppModule { }
