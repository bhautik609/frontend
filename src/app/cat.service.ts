import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from "@angular/common/http";
import{cat}from './cat/cat';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CatService {
  url:string='http://localhost:3000/cat/';
  public deleteUrl:string=environment.url+"catdelete/";
  constructor(private _http:HttpClient) { }
  getAllCat(){
    return this._http.get(this.url);
  }
  addcat(obj:cat){
    let body=JSON.stringify(obj);
    let head=new HttpHeaders().set(environment.headname,environment.headvalue);
    return this._http.post(this.url,body,{headers:head});
}
deletecat(id:number){
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.delete(this.url+id,{headers:head});
}
getcatById(id:number){
  return this._http.get(this.url+id);

}
deleteAll(item:number[]){
  let body=JSON.stringify(item);
  let head=new HttpHeaders().set(environment.headname, environment.headvalue);
  return this._http.post(this.deleteUrl,body,{headers:head});
}
editcat(obj:cat){
  let body=JSON.stringify(obj);
  let head=new HttpHeaders().set(environment.headname,environment.headvalue);
  return this._http.put(this.url,body,{headers:head});
}

}