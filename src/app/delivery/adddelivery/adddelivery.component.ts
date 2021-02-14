import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeliveryService } from 'src/app/delivery.service';
import{delivery}from '../delivery';

@Component({
  selector: 'app-adddelivery',
  templateUrl: './adddelivery.component.html',
  styleUrls: ['./adddelivery.component.css']
})
export class AdddeliveryComponent implements OnInit {
  obj:delivery[]=[];
  deliveryform:FormGroup;
  constructor(private _deliverydata:DeliveryService) { }

  ngOnInit(): void {
    this.deliveryform= new FormGroup({
      del_id:new FormControl(null),
      order_id_fk:new FormControl(null),
      emp_id_fk:new FormControl(null),
      del_date:new FormControl(null),
      del_status:new FormControl(null)
    });
  
  }
  onSaveClick(){
    this._deliverydata.adddelivery(this.deliveryform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data inserted succesfully');
        this.obj.push(this.deliveryform.value);
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
      this.deliveryform.reset({});
    });
  }

}
