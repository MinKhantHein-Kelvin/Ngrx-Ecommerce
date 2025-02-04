import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserList } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private base_url = environment.base_url;

  constructor(private http : HttpClient) { }

  getAllUsers(): Observable<UserList[]>{
    return this.http.get<UserList[]>(this.base_url + 'users');
  }
}
