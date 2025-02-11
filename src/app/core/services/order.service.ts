import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private base_url = environment.base_url;

  constructor(private http : HttpClient) { }

  getAllOrderList(data : any): Observable<any[]> {
      return this.http.get<any[]>(`${this.base_url}carts?startdate=${data.startDate}&enddate=${data.endDate}`).pipe(map((orders) =>
        orders.map((order) => ({
          ...order,
          totalItems: order.products.reduce((sum : any, p:any) => sum + p.quantity, 0),
          status: 'Pending',
        }))
      ))
    }
}
