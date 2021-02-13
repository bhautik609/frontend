import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from "@angular/common/http";
import { environment } from "../environments/environment";
import{delivery}from "./delivery/delivery";
@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  url:string='http://localhost:3000/delivery/';
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

 
}
