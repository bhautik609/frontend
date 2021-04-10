import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { feedback } from './feedback';
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['user_email_fk','feed_msg','feed_date','action'];
  dataSource: MatTableDataSource<feedback>;
  obj:feedback[]=[];
  value="";
  @ViewChild(MatPaginator) paginator:MatPaginator;
@ViewChild(MatSort)sort:MatSort;
  constructor( private _feedata:FeedbackService) { 
    this.dataSource=new MatTableDataSource();
  }
  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  

  ngOnInit(): void {
    this._feedata.getAllfeedback().subscribe((data:feedback[])=>{
      this.obj=data;
      console.log(data);
      this.dataSource.data=data;
    });
  }
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ondelete(item:feedback){
    this._feedata.delfeedback(item.feed_id).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        this.obj.splice(this.obj.indexOf(item),1);
        this.dataSource.data=this.obj;
        alert('deleted Successfully');
      }
      else{
        alert('Something went wrong');
        console.log(data);
     }
    });
  }

}
