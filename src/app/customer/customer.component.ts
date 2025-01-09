import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customer.service'; 

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: any[] = []; 
  errorMessage: string = ''; 
  successMessage: string = ''; 
  isAdmin: boolean = false; 
  isLoggedIn: boolean = false;

  constructor(
    private customerService: CustomerserviceService, 
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.checkUserRole(); 
    this.loadCustomers(); 
    this.checkLoginStatus(); 
  }

  checkLoginStatus() {
    const token = localStorage.getItem('accessToken');
    this.isLoggedIn = token ? true : false; 
  }

 
  checkUserRole() {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin) {
      this.isAdmin = isAdmin === 'true'; 
    } else {
      this.isAdmin = false;
    }
  }
  
  

  async loadCustomers() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      console.log(token);
      try {
        this.customers = await this.customerService.getCustomers(token); 
        console.log(this.customers);
        this.successMessage = 'Customer data loaded successfully!';
      } catch (error) {
        this.errorMessage = 'Failed to load customers.';
      }
    } else {
      this.errorMessage = 'You are not logged in.';
    }
  }

 
  viewCustomer(id: number) {
    this.router.navigate(['/customer/view', id]); 
  }

  
  editCustomer(id: number) {
    this.router.navigate(['/customer/edit', id]); 
  }

  
  async deleteCustomer(id: number) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        await this.customerService.deleteCustomer(token, id); 
        this.loadCustomers(); 
        this.successMessage = 'Customer deleted successfully.';
      } catch (error) {
        this.errorMessage = 'Failed to delete customer.';
      }
    }
  }

 
  addCustomer() {
    this.router.navigate(['/customer/add']); 
  }

  logout() {
    localStorage.removeItem('accessToken'); 
    this.isLoggedIn = false; 
    this.router.navigate(['/login']); 
  }
}
