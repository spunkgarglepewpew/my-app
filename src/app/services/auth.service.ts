import { Injectable } from '@angular/core';
import axios from 'axios';  

interface SigninRequest {
  username: string;
  password: string;
}

interface SignupRequest {
  username: string;
  email: string;
  password: string;
  mobile: string;
  address: string;
  gender: string;
  role: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';  

  constructor() { }

  register(user: any) {
    return axios.post(`${this.apiUrl}/signup`, user)
      .then(response => {
        console.log('Sign up Successful:', response.data);
        return response.data;
      })
      .catch(error => {
        console.error('Sign up Error:', error);
        throw error;
      });
  }

  login(credentials: any) {
    return axios.post(`${this.apiUrl}/signin`, credentials)
      .then(response => {
       console.log('Login Successful:', response.data);
        return response.data;
      })
      .catch(error => {
        console.error('Login Error:', error);
        throw error;
      });
  }
}
