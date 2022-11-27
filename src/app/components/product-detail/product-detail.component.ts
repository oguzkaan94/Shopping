import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  products:any=[];
  allProducts:any=0;
  id:any;
  itemProd:any;
  constructor(private cartApi:CartapiService,private route:ActivatedRoute){}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
        this.id = params.get('id');
      });
      this.getProductById(this.id);
  }

  getProductById(id:any){
    this.cartApi.getProductById(id).subscribe((res)=>{
      this.itemProd = res;
    })
  }
}
