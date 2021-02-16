import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderdetailService } from 'src/app/orderdetail.service';

@Component({
  selector: 'app-addorderdetail',
  templateUrl: './addorderdetail.component.html',
  styleUrls: ['./addorderdetail.component.css']
})
export class AddorderdetailComponent implements OnInit {
  orderdetailform:FormGroup;
  constructor(private _orderdetaildata:OrderdetailService) { }

  ngOnInit(): void {
    this.orderdetailform= new FormGroup({
      order_detail_id:new FormControl(null),
      order_id_fk:new FormControl(null),
      product_id_fk:new FormControl(null),
      order_qty:new FormControl(null)
    });

  }
  onSaveClick(){
  this._orderdetaildata.addorderdetail(this.orderdetailform.value).subscribe((data:any)=>{
    console.log(data);
    if(data.affectedRows==1)
    {
      alert('data inserted succesfully');
    }
    else{
      alert('something went wrong');
      console.log(data);
    }
  });
  }

}
