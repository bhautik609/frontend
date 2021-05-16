import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import { order } from '../order';

@Component({
  selector: 'app-viewmororder',
  templateUrl: './viewmororder.component.html',
  styleUrls: ['./viewmororder.component.css']
})
export class ViewmororderComponent implements OnInit {
  order_id: number;
  order_total: number;
  ordermultiple:order[] = [];
  constructor(public orderService: OrderService, public _activated_routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.order_id = this._activated_routes.snapshot.params['order_id'];
    this.order_id = this._activated_routes.snapshot.params['order_id'];
    this.orderService.getOrderStatus(this.order_id).subscribe(
      (dataOrderStauts: any[]) => {
        console.log(dataOrderStauts);
        if (dataOrderStauts.length > 0) {
          this.orderService.getPtroductById(this.order_id).subscribe(
            (data: order[]) => {

              console.log(data);
              this.ordermultiple = data;

            });
        }
        else {
          this.orderService.getMyOrderByIdNotAssign(this.order_id).subscribe(
            (data2: order[]) => {
              console.log(data2);
              this.ordermultiple = data2;
            });
        }
      });

  }
  }


