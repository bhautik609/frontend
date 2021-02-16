import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderService } from 'src/app/order.service';
import{order}from '../order';
@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
orderform:FormGroup;
obj:order[]=[];
  constructor(private _orderdata:OrderService) { }

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
  }
  onSaveClick(){
    this._orderdata.addorder(this.orderform.value).subscribe((data:any)=>{
      console.log(data);});

  }

}
