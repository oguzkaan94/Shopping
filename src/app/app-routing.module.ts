import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { CannactiveGuard } from './cannactive.guard';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'products', component:ProductsComponent,canActivate:[CannactiveGuard]},
  {path:'products-detail/:id', component:ProductDetailComponent,canActivate:[CannactiveGuard]},
  {path:'cart', component:CartComponent,canActivate:[CannactiveGuard]},
  {path:'signup',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
