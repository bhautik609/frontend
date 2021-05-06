import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSequence } from 'protractor';
import { DeliveryService } from 'src/app/delivery.service';
import { EmpService } from 'src/app/emp.service';
import { emp } from 'src/app/emp/emp';
import { OrderService } from 'src/app/order.service';
import { order } from 'src/app/order/order';
import{delivery}from'../delivery';

@Component({
  selector: 'app-editdelivery',
  templateUrl: './editdelivery.component.html',
  styleUrls: ['./editdelivery.component.css']
})
export class EditdeliveryComponent implements OnInit {
  deliveryform:FormGroup;
  del_id;
  obj1:order[]=[]; 
  obj:emp[]=[];
  dels:string[]=['done','pending'];
  constructor(private _actRoute:ActivatedRoute,private _diliverydata:DeliveryService,private _empdata:EmpService,private _router:Router,private _orderdata:OrderService) { }

  ngOnInit(): void {
    this.deliveryform= new FormGroup({
      del_id:new FormControl(null),
      order_id_fk:new FormControl(null,Validators.required),
     del_date:new FormControl(null,Validators.required),
      del_status:new FormControl(null,Validators.required),
      emp_id_fk:new FormControl(null,Validators.required)
    });
    this.del_id=this._actRoute.snapshot.params['del_id'];
    console.log(this.del_id);
    this._diliverydata.getdeliveryBy(this.del_id).subscribe((data:delivery[])=>{
      console.log(data);
      this.deliveryform.patchValue({
       del_id:data[0].del_id,
       order_id_fk:data[0].order_id_fk,
      
       del_date:data[0].del_date,
      
      });
      this._empdata.getAllemp().subscribe((data:emp[])=>{
        this.obj=data;
      });
      this._orderdata.getAllorder().subscribe((data:order[])=>{
        this.obj1=data;
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
      this.deliveryform.reset({});
    });

  }
  cancle(){
    this._router.navigate(['/home/delivery']);
  }

}
