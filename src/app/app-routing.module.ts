import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/services/admin.guard';
import { AgentGuard } from 'src/services/agent.guard';
import { LoginGuardService } from 'src/services/login-guard.service';
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
import { EditCarFormComponent } from './components/edit-car-form/edit-car-form.component';
import { EditCarTypeFormComponent } from './components/edit-car-type-form/edit-car-type-form.component';
import { EditOrderFormComponent } from './components/edit-order-form/edit-order-form.component';
import { EditUserFormComponent } from './components/edit-user-form/edit-user-form.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogoutComponent } from './components/logout/logout.component';
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

    { path: "home", component: MainComponent },
    { path: "agentsSignIn", canActivate: [AgentGuard], component: AgentsSignInComponent },
    { path: "administrationSignIn", canActivate: [AdminGuard], component: AdministrationSignInComponent },
    { path: "userSignIn", component: UserSignInComponent },
    { path: "signUp", component: SignupComponent },
    { path: "login", component: LogInComponent },
    { path: "logout", component: LogoutComponent },
    { path: "browseCarCatalogue", component: CatalogueComponent },
    { path: "discount", canActivate: [LoginGuardService], component: DiscountComponent },

    { path: "carsArea", canActivate: [AdminGuard], component: CarComponent },
    { path: "carTypesArea", canActivate: [AdminGuard], component: CarTypeComponent },
    { path: "usersArea", canActivate: [AdminGuard], component: UsersComponent },
    { path: "ordersArea", canActivate: [AdminGuard], component: OrdersComponent },

    { path: "AddCarForm", canActivate: [AdminGuard], component: AddCarFormComponent },
    { path: "AddCarTypeForm", canActivate: [AdminGuard], component: AddCarTypeFormComponent },
    { path: "AddUserForm", canActivate: [AdminGuard], component: AddUserFormComponent },
    { path: "AddOrderForm", canActivate: [AdminGuard], component: AddOrderFormComponent },

    { path: "UpdateCarForm/:id", canActivate: [AdminGuard], component: UpdateCarFormComponent },
    { path: "UpdateCarTypeForm/:id", canActivate: [AdminGuard], component: UpdateCarTypeFormComponent },
    { path: "UpdateUserForm/:id", canActivate: [AdminGuard], component: UpdateUserFormComponent },
    { path: "UpdateOrderForm/:id", canActivate: [AdminGuard], component: UpdateOrderFormComponent },

    { path: "editCarForm/:id", canActivate: [AdminGuard], component: EditCarFormComponent },
    { path: "editCarTypeForm/:id", canActivate: [AdminGuard], component: EditCarTypeFormComponent },
    { path: "editUserForm/:id", canActivate: [AdminGuard], component: EditUserFormComponent },
    { path: "editOrderForm/:id", canActivate: [AdminGuard], component: EditOrderFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
