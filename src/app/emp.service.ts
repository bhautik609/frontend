import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from "@angular/common/http";
import{emp}from'./emp/emp';
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  url:string='http://localhost:3000/emp/';
  constructor(private _http:HttpClient) { }
  getAllemp(){
    return this._http.get(this.url);
  }
  addemp(obj:emp){
    let body=JSON.stringify(obj);
    let head=new HttpHeaders().set(environment.headname,environment.headvalue);
    return this._http.post(this.url,body,{headers:head});
}
delemp( emp_id:number){
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.delete(this.url+emp_id,{headers:head});
}
getempbyId(emp_id:number){
  return this._http.get(this.url+emp_id);

}
editemp(obj:emp){
  let body=JSON.stringify(obj);
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.put(this.url,body,{headers:head});
}



}
