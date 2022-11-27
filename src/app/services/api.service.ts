import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  item:any;
  Product:any=[];
  
  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get("https://fakestoreapi.com/products").pipe(map((res:any)=>{
      return res;
    }))
  }

  getProductById(id:any){
    return this.http.get("https://fakestoreapi.com/products"+id);
  }

  getAllCategories(){
    return this.http.get("https://fakestoreapi.com/products/categories");
  }

  getProductsByCategory(keyword:string){
    return this.http.get('https://fakestoreapi.com/products/categories/'+keyword);
  }
}
