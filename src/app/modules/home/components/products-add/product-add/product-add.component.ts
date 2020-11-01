import { Component, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import Swal from 'sweetalert2';
import { MatChipInputEvent } from "@angular/material/chips";
import { AuthService } from "src/app/core/services/auth.service";
import { Router } from '@angular/router';
export interface Fruit {
  name: string;
}
export  interface  Tag {
  name:string;
}

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.scss"],
})
export class ProductAddComponent implements OnInit {
  prod_name: any;
  quantity:any;
  price:any;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [];
  tags: Tag[] = [];
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || "").trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }
  addTags(event: MatChipInputEvent){
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || "").trim()) {
      this.tags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }

  }


  remove(fruit: Fruit): void {
   
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  removeTags(tag: Tag){
   
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }

  }
 
 
  constructor(private auth: AuthService,public router:Router) {}

  ngOnInit() {}
  SaveProduct() {
    if(this.prod_name == null || this.prod_name  == undefined || this.prod_name == ""){
      
      Swal.fire('Error!','Product Name Cannot be Empty', 'warning');
      return;
    }
    else if (this.fruits.length == 0) {
      Swal.fire('Error!','Categories Cannot be Empty', 'warning');
      return;
      
    } else if (this.tags.length == 0) {
      Swal.fire('Error!','Tags Cannot be Empty', 'warning');
      return;
    }else if( this.price == null || this.price == undefined || this.price == ""){
      Swal.fire('Error!','Price Cannot be Empty', 'warning');
      return;
    }else if(this.quantity == null || this.quantity  == undefined || this.quantity == ""){
      Swal.fire('Error!','Quantity Cannot be Empty', 'warning');
      return;
    }
     else {
      this.auth.postProduct().subscribe((res: any) => {

        console.log("Message", res);
        Swal.fire('Done!',res.message, 'success');
        this.router.navigate(['/']);
      });
    }
   
   
  }
}
