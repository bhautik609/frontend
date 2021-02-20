import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/delivery.service';
import { EmpService } from 'src/app/emp.service';
import { emp } from 'src/app/emp/emp';
import{delivery}from '../delivery';

@Component({
  selector: 'app-adddelivery',
  templateUrl: './adddelivery.component.html',
  styleUrls: ['./adddelivery.component.css']
})
export class AdddeliveryComponent implements OnInit {
  obj:delivery[]=[];
  obj1:emp[]=[];
  dels:string[]=["done","pending"];
  
  deliveryform:FormGroup;
  constructor(private _deliverydata:DeliveryService,private _empdata:EmpService,private _router:Router) { }

  ngOnInit(): void {
    this.deliveryform= new FormGroup({
      del_id:new FormControl(null,Validators.required),
      order_id_fk:new FormControl(null,Validators.required),
       del_date:new FormControl(null,Validators.required),
      del_status:new FormControl(null,Validators.required),
      emp_id_fk:new FormControl(null,Validators.required),
      
    });
    this._empdata.getAllemp().subscribe((data:emp[])=>{
      this.obj1=data;
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
