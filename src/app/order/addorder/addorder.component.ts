import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import { ProductService } from 'src/app/product.service';
import { product } from 'src/app/product/product';
import { UserService } from 'src/app/user.service';
import { user } from 'src/app/user/user';
import{order}from '../order';
@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
orderform:FormGroup;
obj:order[]=[];
obj1:user[]=[];
obj2:product[]=[];
payment:string[]=["done","pending"];
payment_type:string[]=["cash","credit card","debit card","other payment method"];
  constructor(private _orderdata:OrderService,private _user:UserService,private _router:Router,private _productdata:ProductService) { }

  ngOnInit(): void {
    this.orderform= new FormGroup({
      //order_id:new FormControl(null,Validators.required),
      order_date:new FormControl(null,Validators.required),
      order_amount:new FormControl(null,Validators.required),
      product_id_fk:new FormControl(null,Validators.required),
      user_id_fk:new FormControl(null,Validators.required),
      payment_type:new FormControl(null,Validators.required),
      payment_status:new FormControl(null,Validators.required)
    });
    this._user.getAlluser().subscribe((data:user[])=>{
      this.obj1=data;
    });
    this._productdata.getAllproduct().subscribe((data:product[])=>{
      this.obj2=data;
    });
  }
  onSaveClick(){
    this._orderdata.addorder(this.orderform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data inserted succesfully');
        
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
      this.orderform.reset({});

    });

  }
  cancle(){
    this._router.navigate(['/home/order']);
  }

}
