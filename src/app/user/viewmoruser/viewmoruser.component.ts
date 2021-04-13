import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/user.service';
import { user } from '../user';
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";
@Component({
  selector: 'app-viewmoruser',
  templateUrl: './viewmoruser.component.html',
  styleUrls: ['./viewmoruser.component.css']
})
export class ViewmoruserComponent implements OnInit {
  displayedColumns: string[] = ['user_age','user_gender','user_mob','user_address','user_img'];
  dataSource: MatTableDataSource<user>;
  obj:user[]=[];
   value='';
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort)sort:MatSort;
  constructor(private _userdata:UserService,@Inject(MAT_DIALOG_DATA)  public data:{name:any},) { 
    this.dataSource=new MatTableDataSource()
  }
user_id;
  ngOnInit(): void {
    console.log(this.data.name);
    this.user_id=this.data.name;
    this._userdata.getuserbyId(this.user_id).subscribe((data:user[])=>{
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
}
