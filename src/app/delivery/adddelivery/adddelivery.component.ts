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
  
  constructor(private _deliverydata:DeliveryService,private _empdata:EmpService,private _router:Router,private _order_data:OrderService) { }

  ngOnInit(): void {
    
    
   }



}
