import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailService } from 'src/app/orderdetail.service';
import{orderdetail}from '../orderdetail';
@Component({
  selector: 'app-editorderdetail',
  templateUrl: './editorderdetail.component.html',
  styleUrls: ['./editorderdetail.component.css']
})
export class EditorderdetailComponent implements OnInit {
orderdetailform:FormGroup;
order_detail_id;
  constructor(private _actRoute:ActivatedRoute,private _orderdetail:OrderdetailService) { }

  ngOnInit(): void {
    this.orderdetailform= new FormGroup({
      order_detail_id:new FormControl(null),
      order_id_fk:new FormControl(null),
      product_id_fk:new FormControl(null),
      order_qty:new FormControl(null)
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
  }
  onSaveClick(){
    this._orderdetail.editorderdetail(this.orderdetailform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data updated succesfully');
    
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
      this.orderdetailform.reset({});
    });
    
  }

}
