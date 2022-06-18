import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient) { }

  url: string = "assets/data/products.json";

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }
}
