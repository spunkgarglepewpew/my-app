import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CustomerserviceService {
  private apiUrl = 'http://localhost:8080/api/customer'; 

  constructor() {}

  
  async getCustomers(token: string): Promise<any[]> {
    try {
      const response = await axios.get(`${this.apiUrl}/customers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching customers: ' + error);
    }
  }

  
  async getCustomerById(token: string, id: number): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching customer details: ' + error);
    }
  }

  
  async addCustomer(token: string, customer: any): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/new`, customer, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error adding customer: ' + error);
    }
  }

  async updateCustomer(token: string, customer: any): Promise<any> {
    try {
      const response = await axios.put(`${this.apiUrl}/update`, customer, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error updating customer: ' + error);
    }
  }

 
  async deleteCustomer(token: string, id: number): Promise<any> {
    try {
      const response = await axios.delete(`${this.apiUrl}/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error deleting customer: ' + error);
    }
  }
}

