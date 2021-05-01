import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{cat}from './cat';
import{CatService}from '../cat.service';
import { Router } from "@angular/router";
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['cat_id','cat_name','Action'];
  dataSource: MatTableDataSource<cat>;
  catform:FormGroup;
  obj:cat[]=[];
  value="";
  /**@ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort)sort:MatSort;**/
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _catdata:CatService,private _router:Router) {
    console.log(this.obj); 
  this.dataSource=new MatTableDataSource();
  }
  ngAfterViewInit():void{
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }


  ngOnInit(): void {
      this._catdata.getAllCat().subscribe((data:cat[])=>{
      this.obj=data;
      this.dataSource.data=data;
      console.log(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  /*applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }**/
   ondelete(item:cat){
    if (confirm("Are you sure you want to Delete?")){
    this._catdata.deletecat(item.cat_id).subscribe((data:any)=>{
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
editcat(item:cat){
this._router.navigate(['/home/editcat',item.cat_id]);

}
addcat(){
  this._router.navigate(["/home/addcat"]);
}
onDeleteAllClick(){
  this._catdata.deleteAll(this.del_arr).subscribe(
    (data) => {
      console.log(data);
      for (let i = 0; i < this.del_arr.length; i++) {
        let x = this.obj.find(x => x.cat_id == this.del_arr[i]);
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
  if (this.del_arr.find(x => x == row.u_EmailId)) {
    this.del_arr.splice(this.del_arr.indexOf(row.cat_id), 1);
  }
  else {
    this.del_arr.push(row.cat_id);
  }
}


}
