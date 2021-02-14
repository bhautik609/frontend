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
  displayedColumns: string[] = ['cat_id','cat_name','action','edit','add'];
  dataSource: MatTableDataSource<cat>;


  catform:FormGroup;
  obj:cat[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort)sort:MatSort;
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
    });
  }
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
   ondelete(item:cat){

  if(confirm("Are you sure you want to delete?"))
   {
     console.log(item.cat_id);
    this._catdata.deletecat(item.cat_id).subscribe((data:any)=>{
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
}
editcat(item:cat){
this._router.navigate(['/editcat',item.cat_id]);

}
addcat(){
  this._router.navigate(["/addcat"]);
}


}
