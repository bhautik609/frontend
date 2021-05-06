import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import{DeliveryService} from'../delivery.service';
import{delivery}from "./delivery";
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { OrderBoyAssign } from './orderassignBoy';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit ,AfterViewInit{
  // displayedColumns: string[] = ['emp_name','del_date','del_status','action','edit'];
  // dataSource: MatTableDataSource<delivery>;
  // deliveryform:FormGroup;
  //  obj:delivery[]=[];
  //  flag:boolean=false;
  //  value="";
  //  @ViewChild(MatPaginator) paginator:MatPaginator;
  // @ViewChild(MatSort)sort:MatSort;
  
  displayedColumns: string[] = ['check', 'order_id', 'DeliveryBoy_Name', 'DeliveryBoyId', 'del_date', 'Action'];
  dataSource: MatTableDataSource<OrderBoyAssign>;
  ordersArr: OrderBoyAssign[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

constructor( private _deliverydata:DeliveryService,private _router:Router) { 
    this.dataSource=new MatTableDataSource();
  }
  ngAfterViewInit():void{
    //this.dataSource.paginator=this.paginator;
    //this.dataSource.sort=this.sort;
  }


  ngOnInit(): void {
    //this._deliverydata.getAlldelivery().subscribe((data:delivery[])=>{
      //this.obj=data;
      //console.log(data);
      //this.dataSource.data=data;
  //});
  this.dataSource.paginator = this.paginator;
    this._deliverydata.getAllAssignOrders().subscribe(
      (data: OrderBoyAssign[]) => {
        console.log(data);
        this.ordersArr = data;
        this.dataSource.data = this.ordersArr;
      }
    );
  }

  applyFilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onAddClick() {
    this._router.navigate(['/home/addAssignOrders']);
  }

  onDelete(row) {
    if (confirm("are you want to delete ?")){
    this._deliverydata.deletedelivery(row.del_id).subscribe(
      (data: any) => {
        console.log(data);
        this.ordersArr.splice(this.ordersArr.indexOf(row), 1);
        this.dataSource.data = this.ordersArr;
      }
    );
  }
}
  del_arr: number[] = [];

  onchecheckboxchange(row) {
    if (this.del_arr.find(x => x == row.del_id)) {
      this.del_arr.splice(this.del_arr.indexOf(row.del_id), 1);
    }
    else {
      this.del_arr.push(row.del_id);
    }
  }
  onViewMore(row) {
    // this._dailog.open(DeliveryboyViewmoreComponent, {
    //   data: row
    // });
  }

  onDeleteAll() {
   this._deliverydata.deleteAll(this.del_arr).subscribe(
       (data1) => {
         console.log(data1);
         for (let i = 0; i < this.del_arr.length; i++) {
       let x = this.ordersArr.find(x => x.del_id == this.del_arr[i]);
           this.ordersArr.splice(this.ordersArr.indexOf(x), 1);
           this.dataSource.data = this.ordersArr;
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
         }
       }
     );
  }

  onEdit(row) {
    this._router.navigate(['/nav/deliverdetailsupdate/', row.detail_id]);
  }
  // applyFilter(event:Event){
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  // onSaveClick(){
  //   this._deliverydata.adddelivery(this.deliveryform.value).subscribe((data:any)=>{
  //     console.log(data);
  //     if(data.affectedRows==1)
  //     {
  //       alert('data inserted succesfully');
  //       this.obj.push(this.deliveryform.value);
  //       this.dataSource.data=this.obj;
  //     }
  //     else{
  //       alert('something went wrong');
  //       console.log(data);
  //     }
  //      //console.log(this.deliveryform.value)
  //   });
  // }
  //   ondelete(item:delivery){
  //     console.log(item.del_id);
  //     this._deliverydata.deletedelivery(item.del_id).subscribe((data:any)=>{
  //       console.log(data);
  //       if(data.affectedRows==1)
  //      {
  //        this.obj.splice(this.obj.indexOf((item),1));
  //        this.dataSource.data=this.obj;
  //        alert('deleted Successfully');
  //      }
  //      else{
  //        alert('Something went wrong');
  //        console.log(data);
  //     }

  //   });
  //   }
  //   edit(item:delivery){
  //     console.log(item.del_id);
  //     this._router.navigate(['/home/editdelivery',item.del_id]);
  //   }
  //   addclik(){
  //     this._router.navigate(['/home/adddelivery']);
  //   }
  //   cancle(){
  //     this.flag=false;
  //   }
    
}
