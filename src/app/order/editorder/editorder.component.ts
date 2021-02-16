import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import{order}from'../order';
@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {
orderform:FormGroup
  constructor(private _actRoute:ActivatedRoute,private _orderdata:OrderService) { }
  order_id;
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
    this.order_id=this._actRoute.snapshot.params['order_id'];
    console.log(this.order_id);
    this._orderdata.getorderbyId(this.order_id).subscribe((data:order[])=>{
      console.log(data);
      this.orderform.patchValue({
        order_id:data[0].order_id,
        order_date:data[0].order_amount,
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

}
