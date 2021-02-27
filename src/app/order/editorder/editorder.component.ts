import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import { UserService } from 'src/app/user.service';
import { user } from 'src/app/user/user';
import{order}from'../order';
@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {
orderform:FormGroup;
payment:string[]=["done","pending"];
payment_type:string[]=["cash","credit card","debit card","other payment method"];
  constructor(private _actRoute:ActivatedRoute,private _orderdata:OrderService,private _user:UserService,private _router:Router) { }
  order_id;
  obj1:user[]=[];
  ngOnInit(): void {
    this.orderform= new FormGroup({
      order_id:new FormControl(null,Validators.required),
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

    this.order_id=this._actRoute.snapshot.params['order_id'];
    console.log(this.order_id);
    this._orderdata.getorderbyId(this.order_id).subscribe((data:order[])=>{
      console.log(data);
      this.orderform.patchValue({
        order_id:data[0].order_id,
        order_date:data[0].order_date,
        order_amount:data[0].order_amount,
        product_id_fk:data[0].product_id_fk,
        user_id_fk:data[0].user_id_fk,
        payment_type:data[0].payment_type,
        payment_status:data[0].payment_status
       });
    
    });

  }
  onSaveClick(){
    this._orderdata.editorder(this.orderform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data updated succesfully');
    
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
