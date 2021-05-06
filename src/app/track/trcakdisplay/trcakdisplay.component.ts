import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Track } from '../track';
import { TrackdataService } from '../trackdata.service';

@Component({
  selector: 'app-trcakdisplay',
  templateUrl: './trcakdisplay.component.html',
  styleUrls: ['./trcakdisplay.component.css']
})
export class TrcakdisplayComponent implements OnInit {
  trackarr:Track[] = [];
  displayedColumns: string[] = ['track_id', 'status', 'delivery_id_fk', 'Action'];
  dataSource: MatTableDataSource<Track>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _trackdata:TrackdataService, public _rou: Router) { 
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this._trackdata.getAllTrack().subscribe(
      (data: Track[]) => {
        console.log(data);
        this.trackarr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  del_arr: number[] = [];

  onCheckBoxChange(row) {
    if (this.del_arr.find(x => x == row.track_id)) {
      this.del_arr.splice(this.del_arr.indexOf(row.track_id), 1);
    }
    else {
      this.del_arr.push(row.track_id);
    }
    
  }
  ontrackadd() {
    this._rou.navigate(['/home/addtrack']);
  }
  onDeleteAllClick() {
    this._trackdata.deleteAll(this.del_arr).subscribe(
      (data) => {
        for (let i = 0; i < this.del_arr.length; i++) {
          let x = this.trackarr.find(x => x.track_id == this.del_arr[i]);
          this.trackarr.splice(this.trackarr.indexOf(x), 1);
          this.dataSource.data = this.trackarr;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    );
  }

  onDelet(row) {
    if (confirm("Are you sure you want to delete?")) {
      this._trackdata.deleteTrack(row.track_id).subscribe(
        (data: any) => {
          this.trackarr.splice(this.trackarr.indexOf(row), 1);
          this.dataSource.data = this.trackarr;
        }
      );
    }
  }

  onEdit(track_id) {
    this._rou.navigate(['/nav/edittrack', track_id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onupadate(){
    this._rou.navigate(['/home/updatatrack',1]);
  }
}
