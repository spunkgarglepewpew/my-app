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
        localStorage.setItem("roles", response.roles);
        /**const userRole = response.roles.find((role: string) => role === 'ROLE_USER');
        const adminRole = response.roles.find((role: string) => role === 'ROLE_ADMIN');

  
        if (adminRole) {
          localStorage.setItem('isAdmin', 'true'); 
        } else {
          localStorage.setItem('isAdmin', 'false'); 
        }


        if (userRole || adminRole) {
          this.router.navigate(['/customer']);
        } else {
          this.router.navigate(['/home']);
        }**/
          this.router.navigate(['/customer']);
      })
      .catch(error => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid username or password. Please try again.'; 
        this.successMessage = ''; 
      });
  }
}
