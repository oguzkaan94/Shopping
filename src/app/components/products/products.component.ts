import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:any;
  Categories:any[]=[];
  constructor(private api:ApiService,private cartApi:CartapiService){}
  
  ngOnInit(){
    this.getCategories();
    this.getProducts();
  }

  addToCart(item:any){
    this.cartApi.addToCart(item);
  }

  getCategories(){
    this.api.getAllCategories().subscribe((res:any)=>{
      this.Categories = res;
    },error=>{
      alert(error);
    })
  }

  filterCategory(event:any){
    let value = event.target.value;
    if(value=="all"){
      this.getProducts();
    } else {
      this.getProductsCategory(value);
    }
    
  }

  getProductsCategory(keyword:string){
    this.api.getProductsByCategory(keyword).subscribe((res:any)=>{
      this.productList =res;
    })
  }

  getProducts(){
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
}
