import { AfterViewInit, Component, OnInit ,ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";
import{order}from './order';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit ,AfterViewInit{
  displayedColumns: string[] = ['order_id','order_date','order_amount','product_id_fk','user_id_fk','payment_type','payment_status','action','edit','add'];
  dataSource: MatTableDataSource<order>;
orderform:FormGroup;
obj:order[]=[];
@ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort)sort:MatSort;
  constructor( private _orderdata:OrderService,private _router:Router) { 
    this.dataSource=new MatTableDataSource();
  }
  ngAfterViewInit():void{
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }


  ngOnInit(): void {
    this._orderdata.getAllorder().subscribe((data:order[])=>{
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
 
  ondelete(item:order)

  {
    this._orderdata.delorder(item.order_id).subscribe((data:any)=>{
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
  edit(item:order){
    this._router.navigate(['/home/editorder',item.order_id]);
  }
  addclik(){
    this._router.navigate(["/home/addorder"]);
  }
 
}
