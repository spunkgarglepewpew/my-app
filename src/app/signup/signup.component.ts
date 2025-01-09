import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  mobile: string = '';
  address: string = '';
  gender: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    console.log('Registering with:', {
      username: this.username,
      password: this.password,
      email: this.email,
      mobile: this.mobile,
      address: this.address,
      gender: this.gender
      
    });

 
    this.authService.signup({
      username: this.username,
      password: this.password,
      email: this.email,
      mobile: this.mobile,
      address: this.address,
      gender: this.gender,
      role: ['user']
    })
    .then(response => {
      console.log('Registration successful:', response);
      this.successMessage = 'Registration successful! You can now login.';
      this.errorMessage = '';  
    })
    .catch(error => {
      console.error('Registration failed:', error);
      if (error.response && error.response.data) {
        if (error.response.data.message === 'Error: Username is already taken!') {
          this.errorMessage = 'Username is already taken. Please choose another one.';
        } else if (error.response.data.message === 'Error: Email is already in use!') {
          this.errorMessage = 'Email is already in use. Please choose another one.';
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';  
        }
      } else {
        this.errorMessage = 'An error occurred. Please try again later.';
      }
      this.successMessage = '';  
    });
}
}
