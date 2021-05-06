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
  displayedColumns: string[] = ['check','order_date','order_amount','user_name','payment_type','payment_status','action'];
  dataSource: MatTableDataSource<order>;
orderform:FormGroup;
obj:order[]=[];
value="";
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
  onViewMore(order_id) {
    this._router.navigate(['/home/ordermore', order_id]);
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
    if (confirm("are you want to delete ?")){
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
  }
  edit(item:order){
    this._router.navigate(['/home/editorder',item.order_id]);
  }
  addclik(){
    this._router.navigate(["/home/addorder"]);
  }
  del_arr: number[] = [];

  onchecheckboxchange(row) {
    if (this.del_arr.find(x => x == row.order_id)) {
      this.del_arr.splice(this.del_arr.indexOf(row.order_id), 1);
    }
    else {
      this.del_arr.push(row.order_id);
    }
  }
  onDeleteAll() {
    this._orderdata.deleteAll(this.del_arr).subscribe(
        (data1) => {
          console.log(data1);
          for (let i = 0; i < this.del_arr.length; i++) {
        let x = this.obj.find(x => x.order_id == this.del_arr[i]);
            this.obj.splice(this.obj.indexOf(x), 1);
            this.dataSource.data = this.obj;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        }
      );
   }
  
 
}
