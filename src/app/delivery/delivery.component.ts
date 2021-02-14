import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import{DeliveryService} from'../delivery.service';
import{delivery}from './delivery';
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit ,AfterViewInit{
  displayedColumns: string[] = ['del_id','order_id_fk','emp_id_fk','del_date','del_status','action','edit','add'];
  dataSource: MatTableDataSource<delivery>;
  deliveryform:FormGroup;
   obj:delivery[]=[];
   flag:boolean=false;
   @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort)sort:MatSort;
  

  constructor( private _deliverydata:DeliveryService,private _router:Router) { 
    this.dataSource=new MatTableDataSource();
  }
  ngAfterViewInit():void{
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }


  ngOnInit(): void {
    this._deliverydata.getAlldelivery().subscribe((data:delivery[])=>{
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
  onSaveClick(){
    this._deliverydata.adddelivery(this.deliveryform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data inserted succesfully');
        this.obj.push(this.deliveryform.value);
        this.dataSource.data=this.obj;
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
       //console.log(this.deliveryform.value)
    });
  }
    ondelete(item:delivery){
      console.log(item.del_id);
      this._deliverydata.deletedelivery(item.del_id).subscribe((data:any)=>{
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
    edit(item:delivery){
      console.log(item.del_id);
      this._router.navigate(['/editdelivery',item.del_id]);
    }
    addclik(){
      this._router.navigate(['/adddelivery']);
    }
    cancle(){
      this.flag=false;
    }
    
}
