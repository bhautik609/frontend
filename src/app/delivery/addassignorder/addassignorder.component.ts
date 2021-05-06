import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/delivery.service';
import { TrackdataService } from 'src/app/track/trackdata.service';
import { user } from 'src/app/user/user';
import { deliverdetails } from '../deliverydetail';
import { OrderBoyAssign } from '../orderassignBoy';

@Component({
  selector: 'app-addassignorder',
  templateUrl: './addassignorder.component.html',
  styleUrls: ['./addassignorder.component.css']
})
export class AddassignorderComponent implements OnInit {

  displayedColumnsOrder: string[] = ['check', 'order_id', 'user_id_fk'];
  it: OrderBoyAssign;
  obj:user[]=[]
  selrectedOrderArr: number[] = [];
  notvalid: boolean = false;
  dataSourceOrder: MatTableDataSource<OrderBoyAssign>;
  displayedColumnsDelivery: string[] = ['check', 'user_name'];
  SelectedDboyId: number;
  dataSourceDelivery: MatTableDataSource<deliverdetails>;
  constructor(private _orderAssign: DeliveryService ,private _rout: Router,private _trackdata:TrackdataService) {
    this.dataSourceOrder = new MatTableDataSource();
    this.dataSourceDelivery = new MatTableDataSource();
   }

  ngOnInit(): void {
    this._orderAssign.getnotAssignedOrders().subscribe(
      (dataOrders: OrderBoyAssign[]) => {
        console.log(dataOrders);
        this.dataSourceOrder.data = dataOrders;
      }
    );
    this._orderAssign.getAllDboy().subscribe(
      (dataDelivery: deliverdetails[]) => {
        console.log(dataDelivery);
        this.dataSourceDelivery.data = dataDelivery;
      }
    );
  
  }
  onRadioBtnChangeDelivery(item: number) {
    console.log(item);
    this.SelectedDboyId = item;
  } 
  onSubmit() {
    if (this.dataSourceOrder.data.length > 0) {
      let objOrderAssigned = {
        'selectedOrderArr': this.selrectedOrderArr,
        'selectedDBoyId': this.SelectedDboyId
      };
      this._orderAssign.addOrderAssigned(objOrderAssigned).subscribe(
        (x: any) => {
          console.log(x);
          if (x.insertId > 0) {
            alert('Delivery boy Assigned Succesfully....!');
            let trackObject = {
              status: "Packing",
              fk_detail_id: x.insertId,
            };
            this._trackdata.addTrack(trackObject).subscribe(
              (y: any) => {
                console.log(y);
                // this._rout.navigate(['/nav/addAssignOrders']);
                this._rout.navigate(['/home/delivery']);
              }
            );
          }
        });
    }
  }
  onCheckboxChangeOrder(item: OrderBoyAssign) {
    if (this.selrectedOrderArr.find(x => x == item.order_id)) {
      this.selrectedOrderArr.splice(this.selrectedOrderArr.indexOf(item.order_id), 1);
    } else {
      this.selrectedOrderArr.push(item.order_id);
    }
  }

  onCancle() {
    this._rout.navigate(['/nav/deliverdetails']);
  }
}
