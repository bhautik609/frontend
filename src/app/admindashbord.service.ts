import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdmindashbordService {
 public url: string = environment.url + 'dashboard/';
  public urlStatus: string = environment.url + 'DashboardTrackingStatus/';
  public barurl: string = environment.url + 'dashboardCustomerData/';
  public TopProducturl: string = environment.url + 'TopSellingProducts/';
  public TotalCutomerCounturl: string = environment.url + 'TotalCustomer/';
  public feedbackCounturl: string = environment.url + 'FeedbacksCount/';
  public TodaysOrderCounturl: string = environment.url + 'TodaysOrders/';
  public TodaysCashTotalurl: string = environment.url + 'TodaysCash/';
  public urlBirthday:string=environment.url+'mail/';

  constructor(public _http:HttpHeaders) { }
  getAllUseremail() {
    return this._http.get(this.urlBirthday);
  }

  getAllSimpleCustomer() {
    return this._http.get(this.barurl);
  }
  getOrder(selectedYear: number) {
    return this._http.get(this.url + selectedYear);
  }
  getStatus() {
    return this._http.get(this.urlStatus);
  }
  getTopProducts() {
    return this._http.get(this.TopProducturl);
  }
  getTotalCutomer() {
    return this._http.get(this.TotalCutomerCounturl);
  }
  getTotalFeedback() {
    return this._http.get(this.feedbackCounturl);
  }
  getTodaysOrderCount() {
    return this._http.get(this.TodaysOrderCounturl);
  }
  getTodaysCash(){
    return this._http.get(this.TodaysCashTotalurl);
  }
}
