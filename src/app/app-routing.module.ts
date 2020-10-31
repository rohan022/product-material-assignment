import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './modules/home/components/products/products/products.component';
import { ProductAddComponent } from './modules/home/components/products-add/product-add/product-add.component';


const routes: Routes = [
  {
    path: '',
    component:ProductsComponent,
    pathMatch: 'full',
  },
  {
    path: 'product',
    component:ProductAddComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
