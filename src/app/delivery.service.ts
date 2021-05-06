import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from "@angular/common/http";
import { environment } from "../environments/environment";
import{delivery}from "./delivery/delivery";
import { OrderBoyAssign } from './delivery/orderassignBoy';
import { deliverdetails } from './delivery/deliverydetail';
@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  url:string='http://localhost:3000/delivery/';
  public deleteUrl: string = environment.url + "deliverydel/";
  public urlorderNotAssigned: string = environment.url + 'orderNotAssigned/';
  public urlorderAssigned: string = environment.url + 'orderassign/';
  public urlDboy: string = environment.url + 'getallboy/';
  public urlAddAsignOrders: string = environment.url + 'AddAssignedOrder/';
  constructor(private _http:HttpClient) { }
  getAlldelivery(){
    return this._http.get(this.url);
  }
  adddelivery(obj:delivery){
    let body=JSON.stringify(obj);
    let head=new HttpHeaders().set(environment.headname,environment.headvalue);
    return this._http.post(this.url,body,{headers:head});
}
deletedelivery( del_id:number){
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.delete(this.url+del_id,{headers:head});
}
getdeliveryBy(id:number){
  return this._http.get(this.url+id);

}
editdelivery(obj:delivery){
  let body=JSON.stringify(obj);
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.put(this.url,body,{headers:head});
}
getAllAssignOrders() {
  return this._http.get(this.urlorderAssigned);
}
getnotAssignedOrders() {
  return this._http.get<OrderBoyAssign[]>(this.urlorderNotAssigned);
}
getAllDboy() {
  return this._http.get<deliverdetails[]>(this.urlDboy);
}
addOrderAssigned(item) {
  return this._http.post(this.urlAddAsignOrders, item);
}
deleteAll(item: number[]) {
  let body = JSON.stringify(item);
  let head = new HttpHeaders().set(environment.headname, environment.headvalue);
  return this._http.post(this.deleteUrl, body, { headers: head });
}

 
}
