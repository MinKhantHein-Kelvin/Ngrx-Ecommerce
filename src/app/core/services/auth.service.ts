import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/auth';
import { Observable } from 'rxjs';
import { CONSTANTS } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_url = "https://fakestoreapi.com/";

  constructor(private http : HttpClient) {

  }

  private getToken = () => localStorage.getItem(CONSTANTS.auth_token) ?? '';

  public isAdminAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.base_url + 'auth/login', data);
  }
}
