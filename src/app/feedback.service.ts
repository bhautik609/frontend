import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from "@angular/common/http";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url:string='http://localhost:3000/feedback/';
  constructor(private _http:HttpClient) { }
  getAllfeedback(){
    return this._http.get(this.url);
  }
  delfeedback( feed_id:number){
    let head=new HttpHeaders().set(environment.headname,environment.headvalue);
    return this._http.delete(this.url+feed_id,{headers:head});
  }
}
