import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from "@angular/common/http";
import { environment } from "../environments/environment";
import{user}from "./user/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='http://localhost:3000/_user/';
  public deleteUrl: string = environment.url + "userdel/";
  public urlType: string = environment.url + 'usertype/';
  constructor(private _http:HttpClient) { }
  getAlluser(){
    return this._http.get(this.url);
  }
  adduser(obj:FormData){
       
        return this._http.post(this.url,obj);
   }
   deleteAll(item: number[]) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set(environment.headname, environment.headvalue);
    return this._http.post(this.deleteUrl, body, { headers: head });
  }
//   adduser(obj:user){
//     let body=JSON.stringify(obj);
//     let head=new HttpHeaders().set(environment.headname,environment.headvalue);
//     return this._http.post(this.url,body,{headers:head});
// }
deluser( user_id:number){
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.delete(this.url+user_id,{headers:head});
}
getuserbyId(user_id:number){
  return this._http.get(this.url+user_id);
}
// edituser(obj:user){
//   let body=JSON.stringify(obj);
//   let head=new HttpHeaders().set(environment.headname,environment.headvalue);
//   return this._http.put(this.url,body,{headers:head});
// }
edituser(user_id, item) {
  return this._http.put(this.url + user_id, item);
}
getUserAccoringToType(type: string) {
  return this._http.get(this.urlType + type);
}

}
