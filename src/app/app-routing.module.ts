import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { GreetComponent } from './greet/greet.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EditCustomerComponent } from './editcustomer/editcustomer.component';
import { ViewCustomerComponent } from './viewcustomer/viewcustomer.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'customer', component: CustomerComponent },  
  { path: 'customer/add', component: AddcustomerComponent },
  { path: 'customer/edit/:id', component: EditCustomerComponent }, 
  { path: 'customer/view/:id', component: ViewCustomerComponent },
  { path: 'greet', component: GreetComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
