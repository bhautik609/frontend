import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private _orderdetaildata:OrderdetailService,private _product:ProductService,private _router:Router) { }

  ngOnInit(): void {
    this.orderdetailform= new FormGroup({
      order_detail_id:new FormControl(null,Validators.required),
      order_id_fk:new FormControl(null,Validators.required),
      product_id_fk:new FormControl(null,Validators.required),
      order_qty:new FormControl(null,Validators.required)
    });
    this._product.getAllproduct().subscribe((data:product[])=>{
      this.obj=data;
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
