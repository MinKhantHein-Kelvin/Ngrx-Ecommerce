import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private base_url = environment.base_url;

  constructor(private http : HttpClient) { }

  getAllOrderList(): Observable<any[]> {
      return this.http.get<any[]>(this.base_url + 'products');
    }
}
