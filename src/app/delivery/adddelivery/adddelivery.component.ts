import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/delivery.service';
import { EmpService } from 'src/app/emp.service';
import { emp } from 'src/app/emp/emp';
import { OrderService } from 'src/app/order.service';'@angular/material-moment-adapter'
import { order } from 'src/app/order/order';
import{delivery}from '../delivery';
//import {MomentDateAdapter} from '@angular/material-moment-adapter';
//import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
//import * as _moment from 'moment';
//import {defaultFormat as _rollupMoment} from 'moment';

//const moment = _rollupMoment || _moment;
//export const MY_FORMATS = {
  //parse: {
   // dateInput: 'LL',
  //},
  //display: {
    //dateInput: 'YYYY-MM-DD',
    //monthYearLabel: 'YYYY',
    //dateA11yLabel: 'LL',
    //monthYearA11yLabel: 'YYYY',
 // },
//};

@Component({
  selector: 'app-adddelivery',
  templateUrl: './adddelivery.component.html',
  styleUrls: ['./adddelivery.component.css'],
  //providers:[
    //{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    //{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  //],
})
export class AdddeliveryComponent implements OnInit {
  //date = new FormControl(moment());

  //flightSchedule = {
    //date: new Date()
  //}
  obj:delivery[]=[];
  obj1:emp[]=[];
  dels:string[]=["done","pending"];
  obj2:order[]=[];
  public somedate:Date;
  deliveryform:FormGroup;
  public d=new Date();
  constructor(private _deliverydata:DeliveryService,private _empdata:EmpService,private _router:Router,private _order_data:OrderService) { }

  ngOnInit(): void {
    this.deliveryform= new FormGroup({
     // del_id:new FormControl(null,Validators.required),
      order_id_fk:new FormControl(null,Validators.required),
       del_date:new FormControl(null,Validators.required),
      del_status:new FormControl(null,Validators.required),
      emp_id_fk:new FormControl(null,Validators.required),
      
    });
    this._empdata.getAllemp().subscribe((data:emp[])=>{
      this.obj1=data;
    });
    this._order_data.getAllorder().subscribe((data:order[])=>{
      this.obj2=data;
    });
   }
  onSaveClick(){
    this._deliverydata.adddelivery(this.deliveryform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data inserted succesfully');
        this.obj.push(this.deliveryform.value);
        this._router.navigate(['/home/delivery']);  
        
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
