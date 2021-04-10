import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderdetailService } from '../orderdetail.service';
import{orderdetail}from './orderdetail';
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";
import { Router } from "@angular/router";
@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit ,AfterViewInit{
  displayedColumns: string[] = ['product_name','order_qty','action','edit'];
  dataSource: MatTableDataSource<orderdetail>;
orderdetailform:FormGroup;
obj:orderdetail[]=[];
value="";
@ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort)sort:MatSort;
  constructor(private _orderdetaildata:OrderdetailService,private _router:Router) { 
    this.dataSource=new MatTableDataSource();
  }
  ngAfterViewInit():void{
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

  }

  ngOnInit(): void {
   this._orderdetaildata.getAllorderdetail().subscribe((data:orderdetail[])=>{
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
  
  ondelete(item:orderdetail){
    this._orderdetaildata.delorderdetail(item.order_detail_id).subscribe((data:any)=>{
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
  edit(item:orderdetail){
    this._router.navigate(['/home/editorderdetail',item.order_detail_id]);
  }
  addclik(){
    this._router.navigate(['/home/addorderdetail']);

  }
}
