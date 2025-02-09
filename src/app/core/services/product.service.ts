import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private base_url = environment.base_url;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.base_url + 'products/categories');
  }

  getAllProductsList(): Observable<Products[]> {
    return this.http.get<Products[]>(this.base_url + 'products');
  }

  getAllProductsListByCategory(category : string): Observable<Products[]> {
    return this.http.get<Products[]>(this.base_url + 'products/category/'+category);
  }
}
