import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from "@angular/common/http";
import { environment } from "../environments/environment";
import{product}from "./product/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string='http://localhost:3000/product/';
  constructor(private _http:HttpClient) { }
  getAllproduct(){
    return this._http.get(this.url);
  }
  addproduct(obj:product){
    let body=JSON.stringify(obj);
    let head=new HttpHeaders().set(environment.headname,environment.headvalue);
    return this._http.post(this.url,body,{headers:head});
}
delproduct( product_id:number){
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.delete(this.url+product_id,{headers:head});
}
getproductbyId(product_id:number){
  return this._http.get(this.url+product_id);
}
editproduct(obj:product){
  let body=JSON.stringify(obj);
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.put(this.url,body,{headers:head});
}
}
