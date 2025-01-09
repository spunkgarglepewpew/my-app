import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {GreetComponent} from './greet/greet.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'greet',title: 'Greet', component: GreetComponent },
  { path: 'logout',title: 'Logout', component: LogoutComponent },
  { path: 'home',title: 'Home',component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
