import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from "@angular/common/http";
import { environment } from "../environments/environment";
import{order}from"./order/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url:string='http://localhost:3000/order/';
  public deleteUrl: string = environment.url + "orderdel/";
  public urlOrderStatus = environment.url + 'UserOrderCheck/';
  public urlMyOrderNotAssign = environment.url + 'MyOrderNotAssign/';
  
  constructor(private _http:HttpClient) { }
  getAllorder(){
    return this._http.get(this.url);
  }
  addorder(obj:order){
    let body=JSON.stringify(obj);
    let head=new HttpHeaders().set(environment.headname,environment.headvalue);
    return this._http.post(this.url,body,{headers:head});
}
delorder( order_id:number){
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.delete(this.url+order_id,{headers:head});
}
getorderbyId(order_id:number){
  return this._http.get(this.url+order_id);
}
editorder(obj:order){
  let body=JSON.stringify(obj);
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.put(this.url,body,{headers:head});
}
deleteAll(item: number[]) {
  let body = JSON.stringify(item);
  let head = new HttpHeaders().set(environment.headname, environment.headvalue);
  return this._http.post(this.deleteUrl, body, { headers: head });
}
getOrderStatus(order_id: number) {
  return this._http.get(this.urlOrderStatus + order_id);
}
getMyOrderByIdNotAssign(order_id) {
  return this._http.get(this.urlMyOrderNotAssign + order_id)
}
getPtroductById(order_id: number) {
  return this._http.get(this.deleteUrl + order_id);
}

}
