import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerserviceService } from '../customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customerId: number = 0;
  customer: any = null;
  errorMessage: string = '';

  constructor(
    private customerService: CustomerserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCustomerDetails();
  }

  async loadCustomerDetails() {
    const token = localStorage.getItem('accessToken');
    if (token && this.customerId) {
      try {
        this.customer = await this.customerService.getCustomerById(token, this.customerId);
      } catch (error) {
        this.errorMessage = 'Error loading customer details!';
      }
    } else {
      this.errorMessage = 'You must be logged in to view customer details.';
    }
  }
}
