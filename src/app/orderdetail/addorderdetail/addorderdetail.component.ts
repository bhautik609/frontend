import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import { order } from 'src/app/order/order';
import { OrderdetailService } from 'src/app/orderdetail.service';
import { ProductService } from 'src/app/product.service';
import { product } from 'src/app/product/product';

@Component({
  selector: 'app-addorderdetail',
  templateUrl: './addorderdetail.component.html',
  styleUrls: ['./addorderdetail.component.css']
})
export class AddorderdetailComponent implements OnInit {
  orderdetailform:FormGroup;
  obj:product[]=[];
  obj1:order[]=[];
  constructor(private _orderdetaildata:OrderdetailService,private _product:ProductService,private _router:Router,private _orderdata:OrderService) { }

  ngOnInit(): void {
    this.orderdetailform= new FormGroup({
      // order_detail_id:new FormControl(null,Validators.required),
      order_id_fk:new FormControl(null,Validators.required),
      product_id_fk:new FormControl(null,Validators.required),
      order_qty:new FormControl(null,Validators.required)
    });
    this._product.getAllproduct().subscribe((data:product[])=>{
      this.obj=data;
    });
    this._orderdata.getAllorder().subscribe((data:order[])=>{
      this.obj1=data;
    });

  }
  onSaveClick(){
  this._orderdetaildata.addorderdetail(this.orderdetailform.value).subscribe((data:any)=>{
    console.log(data);
    if(data.affectedRows==1)
    {
      alert('data inserted succesfully');
    }
    else{
      alert('something went wrong');
      console.log(data);
    }
  });
  }
  cancle(){
    this._router.navigate(['/home/orderdetail']);
  }
 
}
