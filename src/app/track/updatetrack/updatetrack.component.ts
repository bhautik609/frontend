import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Track } from '../track';
import { TrackdataService } from '../trackdata.service';

@Component({
  selector: 'app-updatetrack',
  templateUrl: './updatetrack.component.html',
  styleUrls: ['./updatetrack.component.css']
})
export class UpdatetrackComponent implements OnInit {
  track_id: number;
  track_update: FormGroup;
  name: string[] = ['packing', 'on the way ', 'delivered'];
  constructor(public _ac_routes: ActivatedRoute, public _rou: Router, public _trackData: TrackdataService) { }

  ngOnInit(): void {
    this.track_id = this._ac_routes.snapshot.params['track_id'];
    this.track_update = new FormGroup({
      track_id: new FormControl(null),
      status: new FormControl(null),
      fk_detail_id: new FormControl(null)
    });
    this._trackData.getByIdTrack(this.track_id).subscribe(
      (data: Track[]) => {
        this.formDataBind(data[0]);
      }
    );
  }
  formDataBind(item: Track) {
    this.track_update.patchValue({
      track_id: item.track_id,
      status: item.status,
      fk_detail_id: item.delivery_id_fk
    });
  }

  onTrackSubmit() {
    this._trackData.updateTrack(this.track_update.value).subscribe(
      (data: Track) => {
        console.log(data);
        this._rou.navigate(['/home/track']);
      }
    );
  }

  onTrackCancel() {
    this._rou.navigate(['/home/track']);
  }

}
