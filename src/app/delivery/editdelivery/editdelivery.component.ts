import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ActionSequence } from 'protractor';
import { DeliveryService } from 'src/app/delivery.service';
import{delivery}from'../delivery';

@Component({
  selector: 'app-editdelivery',
  templateUrl: './editdelivery.component.html',
  styleUrls: ['./editdelivery.component.css']
})
export class EditdeliveryComponent implements OnInit {
  deliveryform:FormGroup;
  del_id;
  constructor(private _actRoute:ActivatedRoute,private _diliverydata:DeliveryService) { }

  ngOnInit(): void {
    this.deliveryform= new FormGroup({
      del_id:new FormControl(null),
      order_id_fk:new FormControl(null),
      emp_id_fk:new FormControl(null),
      del_date:new FormControl(null),
      del_status:new FormControl(null)
    });
    this.del_id=this._actRoute.snapshot.params['del_id'];
    console.log(this.del_id);
    this._diliverydata.getdeliveryBy(this.del_id).subscribe((data:delivery[])=>{
      console.log(data);
      this.deliveryform.patchValue({
       del_id:data[0].del_id,
       order_id_fk:data[0].order_id_fk,
       emp_id_fk:data[0].emp_id_fk,
       del_date:data[0].del_date,
       del_status:data[0].del_status,
      });

    });

  }
  onSaveClick(){
    
    this._diliverydata.editdelivery(this.deliveryform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data updated succesfully');
    
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
    });

  }

}
