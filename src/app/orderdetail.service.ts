import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from "@angular/common/http";
import { environment } from "../environments/environment";
import{orderdetail}from "./orderdetail/orderdetail";

@Injectable({
  providedIn: 'root'
})
export class OrderdetailService {
  url:string='http://localhost:3000/orderdetail/';

  constructor(private _http:HttpClient) { }
  getAllorderdetail(){
    return this._http.get(this.url);
  }
  addorderdetail(obj:orderdetail){
    let body=JSON.stringify(obj);
    let head=new HttpHeaders().set(environment.headname,environment.headvalue);
    return this._http.post(this.url,body,{headers:head});
}
delorderdetail( order_detail_id:number){
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.delete(this.url+order_detail_id,{headers:head});
}
getorderdetailbyId(order_detail_id:number){
  return this._http.get(this.url+order_detail_id);
}
editorderdetail(obj:orderdetail){
  let body=JSON.stringify(obj);
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.put(this.url,body,{headers:head});
}


}
