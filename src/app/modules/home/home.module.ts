import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductsComponent } from './components/products/products/products.component';
import { ProductAddComponent } from './components/products-add/product-add/product-add.component';;

@NgModule({
  declarations: [ProductsComponent, ProductAddComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
