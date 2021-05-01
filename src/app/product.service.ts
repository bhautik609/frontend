import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from "@angular/common/http";
import { environment } from "../environments/environment";
import{product}from "./product/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string='http://localhost:3000/product/';
  public deleteUrl: string = environment.url + "productdel/";
  constructor(private _http:HttpClient) { }
  getAllproduct(){
    return this._http.get(this.url);
  }
  addproduct(obj:FormData){
     return this._http.post(this.url,obj);
}
delproduct( product_id:number){
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.delete(this.url+product_id,{headers:head});
}
getproductbyId(product_id:number){
  return this._http.get(this.url+product_id);
}
// editproduct(obj:product){
//   let body=JSON.stringify(obj);
//   let head=new HttpHeaders().set(environment.headname,environment.headvalue);
//   return this._http.put(this.url,body,{headers:head});
// }
//editproduct(obj:FormData){
  //return this._http.put(this.url,obj);
//}
editproduct(product_id, item) {
  return this._http.put(this.url + product_id, item);
}
deleteAll(item: number[]) {
  let body = JSON.stringify(item);
  let head = new HttpHeaders().set(environment.headname, environment.headvalue);
  return this._http.post(this.deleteUrl, body, { headers: head });
}
}
