import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cardDataList:any=[];
  productList = new BehaviorSubject<any>([])

  constructor(private http:HttpClient) { }
  
  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cardDataList.push(...product);
    this.productList.next(product);
  }

  addToCart(product:any){
    this.cardDataList.push(product);
    this.productList.next(this.cardDataList);
    this.getTotalAmount();
  }

  getTotalAmount(){
    let producttotal=0;
    this.cardDataList.map((a:any)=>{
      producttotal+=a.total;
    })
    return producttotal;
  }

  removeCartData(product:any){
    this.cardDataList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cardDataList.splice(index,1);
      }
    })
    this.cardDataList.next(this.cardDataList)
  }

  removeAllCart(){
    this.cardDataList=[];
    this.productList.next(this.cardDataList);
  }

  getProductById(id:any){
    return this.http.get("https://fakestoreapi.com/products/"+id);
  } 
}
