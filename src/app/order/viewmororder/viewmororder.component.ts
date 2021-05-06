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
  }

}
