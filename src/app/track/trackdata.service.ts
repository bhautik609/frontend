import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Track } from './track';

@Injectable({
  providedIn: 'root'
})
export class TrackdataService {

  public url: string = environment.url + "track/";
  public deleteUrl: string = environment.url + "track_Delete/";
  constructor(private _http: HttpClient) { }
  deleteAll(item: number[]) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set(environment.headname, environment.headvalue);
    return this._http.post(this.deleteUrl, body, { headers: head });
  }

  getAllTrack() {
    return this._http.get(this.url);
  }

  deleteTrack(track_id: number) {
    let x = new HttpHeaders().set(environment.headname, environment.headvalue);
    return this._http.delete(this.url + track_id, { headers: x });
  }

  getByIdTrack(track_id: number) {
    return this._http.get(this.url + track_id);
  }

  addTrack(item) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set(environment.headname, environment.headvalue);
    return this._http.post(this.url, body, { headers: head1 });
  }

  updateTrack(item:Track) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set(environment.headname, environment.headvalue);
    return this._http.put(this.url + item.track_id, body, { headers: head1 });
  }
}
