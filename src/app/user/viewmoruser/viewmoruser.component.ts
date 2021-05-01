import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  constructor(public dialogref:MatDialogRef<ViewmoruserComponent>,private _userdata:UserService,@Inject(MAT_DIALOG_DATA)  public data:any) { 
    this.dataSource=new MatTableDataSource()
  }
user_id;
u_EmailId:string;
  u_Name:string;
  u_Address:string;
  u_type:string;
  u_password:string;
  u_mobileno:number;
  u_dob:string;
  u_img:string;
  u_gender:string;
  ngOnInit(): void {
    console.log(this.data.name);
    this.user_id=this.data.user_id;
    this._userdata.getuserbyId(this.user_id).subscribe((data:user[])=>{
      console.log(data);
      this.dataSource.data=data;
    });
    this.u_EmailId=this.data.user_email;
    this.u_Name=this.data.user_name;
    this.u_img=this.data.user_img;
    this.u_Address=this.data.user_address;
    this.u_img=this.data.user_img;
    this.u_password=this.data.user_password;
    this.u_mobileno=this.data.user_mob;
    this.u_type=this.data.user_type;
    this.u_gender=this.data.user_gender;
  }
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onCancelClick(){
    this.dialogref.close();
  }
}
