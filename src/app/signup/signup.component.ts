import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
      mobile: this.mobile,
      address: this.address,
      gender: this.gender
      //role: ['user']
    };
    console.log('Registering user:', user);

    this.authService.register(user)
      .then(response => {
        this.successMessage = 'Sign up successful!';
        this.errorMessage = '';
        setTimeout(() => {
        this.router.navigate(['/home']);
        }, 2000);
      })
      .catch(error => {
        this.errorMessage = 'Sign up failed. Please try again.';
        this.successMessage = '';
      });
  }
}
