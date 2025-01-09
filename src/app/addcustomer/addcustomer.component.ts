import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private customerService: CustomerserviceService, private router: Router) {}

  ngOnInit(): void {}

  async addCustomer() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const newCustomer = { firstName: this.firstName, lastName: this.lastName, email: this.email };
      try {
        const response = await this.customerService.addCustomer(token, newCustomer);
        this.successMessage = 'Customer added successfully!';
        this.router.navigate(['/customer']);
      } catch (error) {
        this.errorMessage = 'Error adding customer!';
      }
    } else {
      this.errorMessage = 'You must be logged in to add a customer.';
    }
  }
}
