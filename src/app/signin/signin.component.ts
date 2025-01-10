import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    console.log('Logging in with:', this.username, this.password);

    this.authService.login({ username: this.username, password: this.password })
      .then(response => {
        console.log('Login successful:', response);
        this.errorMessage = ''; 
        this.successMessage = 'Login successful! Welcome back!'; 

        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("roles", JSON.stringify(response.roles));

        const isAdmin = response.roles.includes('ROLE_ADMIN');
        localStorage.setItem('isAdmin', isAdmin.toString());

        this.router.navigate(['/customer']);
      })
      .catch(error => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid username or password. Please try again.'; 
        this.successMessage = ''; 
      });
  }
}
