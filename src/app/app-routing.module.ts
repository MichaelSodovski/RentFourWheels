import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCarFormComponent } from './components/add-car-form/add-car-form.component';
import { AddCarTypeFormComponent } from './components/add-car-type-form/add-car-type-form.component';
import { AddOrderFormComponent } from './components/add-order-form/add-order-form.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { AdministrationSignInComponent } from './components/administration-sign-in/administration-sign-in.component';
import { AgentsSignInComponent } from './components/agents-sign-in/agents-sign-in.component';
import { CarTypeComponent } from './components/car-type/car-type.component';
import { CarComponent } from './components/car/car.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { DiscountComponent } from './components/discount/discount.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainComponent } from './components/main/main.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateCarFormComponent } from './components/update-car-form/update-car-form.component';
import { UpdateCarTypeFormComponent } from './components/update-car-type-form/update-car-type-form.component';
import { UpdateOrderFormComponent } from './components/update-order-form/update-order-form.component';
import { UpdateUserFormComponent } from './components/update-user-form/update-user-form.component';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [

    {path:"home", component: MainComponent},
    {path:"agentsSignIn", component: AgentsSignInComponent},
    {path:"administrationSignIn", component: AdministrationSignInComponent},
    {path:"userSignIn", component: UserSignInComponent},
    {path:"signUp", component: SignupComponent},
    {path:"login", component: LogInComponent},
    {path:"browseCarCatalogue", component: CatalogueComponent},
    {path:"discount", component: DiscountComponent},

    {path:"carsArea", component: CarComponent},
    {path:"carTypesArea", component: CarTypeComponent },
    {path:"usersArea", component: UsersComponent},
    {path:"ordersArea", component: OrdersComponent},

    {path:"AddCarForm", component: AddCarFormComponent},
    {path:"AddCarTypeForm", component: AddCarTypeFormComponent},
    {path:"AddUserForm", component: AddUserFormComponent},
    {path:"AddOrderForm", component: AddOrderFormComponent},
    
    {path:"UpdateCarForm/:id", component: UpdateCarFormComponent},
    {path:"UpdateCarTypeForm/:id", component: UpdateCarTypeFormComponent},
    {path:"UpdateUserForm/:id", component: UpdateUserFormComponent},
    {path:"UpdateOrderForm/:id", component: UpdateOrderFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
