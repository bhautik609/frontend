import { AfterViewInit, Component, OnInit ,ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import{user}from"./user";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit ,AfterViewInit{
userform:FormGroup;
displayedColumns: string[] = ['user_id','user_password','user_name','user_email','user_age','user_gender','user_mob','user_address','action','edit'];
  dataSource: MatTableDataSource<user>;
  obj:user[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort)sort:MatSort;

  constructor(private _userdata:UserService,private _router:Router) {
    this.dataSource=new MatTableDataSource()
   }
   ngAfterViewInit():void{
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

  }


  ngOnInit(): void {
    this._userdata.getAlluser().subscribe((data:user[])=>{
      this.obj=data;
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
 
  
  ondelete(item:user){
    this._userdata.deluser(item.user_id).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        this.obj.splice(this.obj.indexOf((item),1));
        this.dataSource.data=this.obj;
        alert('deleted Successfully');
      }
      else{
        alert('Something went wrong');
        console.log(data);
     }

    });

  }
  edit(item:user){
    this._router.navigate(['/home/edituser',item.user_id]);
  }
  addclik(){
    this._router.navigate(['/home/adduser']);
  }

}
