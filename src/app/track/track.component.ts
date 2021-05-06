import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Track } from './track';
import { TrackdataService } from './trackdata.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  tracknamearr:Track[] = [];
  trackAddForm: FormGroup;
  fk_detail_id: number;
  constructor(private _trackser: TrackdataService, private _router: Router) { }

  ngOnInit(): void {
    this._trackser.getAllTrack().subscribe(
      (data: Track[]) => {
        console.log(data);
        this.tracknamearr = data;
      }
    );
    this.trackAddForm = new FormGroup({
      status: new FormControl(null),
      fk_detail_id: new FormControl(null)
    });
    
  }
  ontrackAdd() {
    this._trackser.addTrack(this.trackAddForm.value).subscribe(
      (x) => {
        console.log(x);
        this._router.navigate(['/home/track']);
      });
  }

  ontrackCancel(): void {
    this._router.navigate(['/home/track']);
  }

}
