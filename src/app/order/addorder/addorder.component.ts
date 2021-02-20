import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/order.service';
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
payment:string[]=["done","pending"];
payment_type:string[]=["cash","credit card","debit card","other payment method"];
  constructor(private _orderdata:OrderService,private _user:UserService,private _router:Router) { }

  ngOnInit(): void {
    this.orderform= new FormGroup({
      order_id:new FormControl(null),
      order_date:new FormControl(null),
      order_amount:new FormControl(null),
      product_id_fk:new FormControl(null),
      user_id_fk:new FormControl(null),
      payment_type:new FormControl(null),
      payment_status:new FormControl(null)
    });
    this._user.getAlluser().subscribe((data:user[])=>{
      this.obj1=data;
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
