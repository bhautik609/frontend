import { AfterViewInit, Component, OnInit ,ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import{user}from"./user";
import { MatDialog } from '@angular/material/dialog';
import { ViewmoruserComponent } from './viewmoruser/viewmoruser.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit ,AfterViewInit{
userform:FormGroup;
displayedColumns: string[] = ['u_EmailId','user_name','user_type','user_img','action'];
  dataSource: MatTableDataSource<user>;
  obj:user[]=[];
  user_tbl: user[] = [];
  userType: string;
  value="";
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort)sort:MatSort;

  constructor(private _userdata:UserService,private _router:Router,public dialog:MatDialog) {
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
    if (confirm("are you want to delete ?")){
    this._userdata.deluser(item.user_id).subscribe((data:any)=>{
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
  edit(item:user){
    this._router.navigate(['/home/edituser',item.user_id]);
  }
  addclik(){
    this._router.navigate(['/home/adduser']);
  }
  openDialog(item:user){
    const dialogRef = this.dialog.open(ViewmoruserComponent,
      {data:item});


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onDeleteAllClick(){
    this._userdata.deleteAll(this.del_arr).subscribe(
      (data) => {
        console.log(data); 
        for (let i = 0; i < this.del_arr.length; i++) {
          let x = this.obj.find(x => x.user_id == this.del_arr[i]);
          this.obj.splice(this.obj.indexOf(x), 1);
          this.dataSource.data = this.obj;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    );
  }
  del_arr:number[]=[];
  onCheckBoxChange(row){
    if (this.del_arr.find(x => x == row.user_id)) {
      this.del_arr.splice(this.del_arr.indexOf(row.user_id), 1);
    }
    else {
      this.del_arr.push(row.user_id);
    }
  }
  AllClick(){
    this.userType = 'all';
    this.DropDown();
  }
  CustomerClick(){
    this.userType = '1';
    this.DropDown();
  }
  DeliveryBoyClick(){
    this.userType = 'employee';
    this.DropDown();
  }

  DropDown() {
    if (this.userType == 'all') {
      this._userdata.getAlluser().subscribe(
        (datatype: user[]) => {
          this.user_tbl = datatype;
          console.log(datatype);
          this.dataSource.data = this.user_tbl;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );
    }
    else {
      this._userdata.getUserAccoringToType(this.userType).subscribe(
        (dataSpecific: user[]) => {
          console.log(dataSpecific);
          this.user_tbl = dataSpecific;
        
          this.dataSource.data = this.user_tbl;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );
    }
  }
}
