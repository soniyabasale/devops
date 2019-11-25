import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://13.235.23.20:9898/product'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url)
  }
}
