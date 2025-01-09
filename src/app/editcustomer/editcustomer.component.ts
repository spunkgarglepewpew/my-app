import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerId: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private customerService: CustomerserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCustomerDetails();
  }

  
  async loadCustomerDetails() {
    const token = localStorage.getItem('accessToken');
    if (token && this.customerId) {
      try {
        const customer = await this.customerService.getCustomerById(token, this.customerId);
        this.firstName = customer.firstName;
        this.lastName = customer.lastName;
        this.email = customer.email;
      } catch (error) {
        this.errorMessage = 'Error loading customer details!';
      }
    } else {
      this.errorMessage = 'You must be logged in to edit a customer.';
    }
  }

  
  async saveCustomer() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const updatedCustomer = { customerId: this.customerId, firstName: this.firstName, lastName: this.lastName, email: this.email };
      try {
        const response = await this.customerService.updateCustomer(token, updatedCustomer);
        this.successMessage = 'Customer updated successfully!';
        this.router.navigate(['/customer']);
      } catch (error) {
        this.errorMessage = 'Error updating customer!';
      }
    } else {
      this.errorMessage = 'You must be logged in to edit a customer.';
    }
  }
}
