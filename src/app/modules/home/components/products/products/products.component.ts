import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any=[];
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.mockAPI();
  }
  mockAPI() {
    this.auth.api().subscribe(res => {
      this.products = res;
      console.log("products",this.products);
    });
  }
 

}
