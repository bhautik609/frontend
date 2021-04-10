import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import { order } from 'src/app/order/order';
import { OrderdetailService } from 'src/app/orderdetail.service';
import { ProductService } from 'src/app/product.service';
import { product } from 'src/app/product/product';
import{orderdetail}from '../orderdetail';
@Component({
  selector: 'app-editorderdetail',
  templateUrl: './editorderdetail.component.html',
  styleUrls: ['./editorderdetail.component.css']
})
export class EditorderdetailComponent implements OnInit {
orderdetailform:FormGroup;
order_detail_id;
obj:product[]=[];
obj1:order[]=[];
  constructor(private _actRoute:ActivatedRoute,private _orderdetail:OrderdetailService,private _product:ProductService,private _router:Router,private _orderdata:OrderService) { }

  ngOnInit(): void {
    this.orderdetailform= new FormGroup({
      order_detail_id:new FormControl(null,Validators.required),
      order_id_fk:new FormControl(null,Validators.required),
      product_id_fk:new FormControl(null,Validators.required),
      order_qty:new FormControl(null,Validators.required)
    });
    this.order_detail_id=this._actRoute.snapshot.params['order_detail_id'];
    console.log(this.order_detail_id);
    this._orderdetail.getorderdetailbyId(this.order_detail_id).subscribe((data:orderdetail[])=>{
      console.log(data);
      this.orderdetailform.patchValue({
        order_detail_id:data[0].order_detail_id,
        order_id_fk:data[0].order_id_fk,
        product_id_fk:data[0].product_id_fk,
        order_qty:data[0].order_qty
       });

    });
    this._product.getAllproduct().subscribe((data:product[])=>{
      this.obj=data;
    });
    this._orderdata.getAllorder().subscribe((data:order[])=>{
      this.obj1=data;
    });


  }
  onSaveClick(){
    this._orderdetail.editorderdetail(this.orderdetailform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data updated succesfully');
        this._router.navigate(['home/orderdetail']);
    
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
      this.orderdetailform.reset({});
    });
    
  }
  cancle(){
    this._router.navigate(['home/orderdetail']);
  }

}
