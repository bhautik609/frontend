import { AfterViewInit, Component, OnInit,ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{EmpService}from'../emp.service';
import{emp}from'./emp';
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";
import { Router } from "@angular/router";
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit ,AfterViewInit{
  displayedColumns: string[] = ['emp_name','emp_email','emp_salary','emp_join_date','action','edit'];
  dataSource: MatTableDataSource<emp>;
empform:FormGroup;
obj:emp[]=[];
value="";
flage:boolean=false;
@ViewChild(MatPaginator) paginator:MatPaginator;
@ViewChild(MatSort)sort:MatSort;
  
  constructor(private _empdata:EmpService,private _router:Router) {
    this.dataSource=new MatTableDataSource();
   }
   ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
   }

  ngOnInit(): void {
    this._empdata.getAllemp().subscribe((data:emp[])=>{
      this.obj=data;
      this.dataSource.data=data

    });
    }
    applyFilter(event:Event){
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
  addclik(){
        this._router.navigate(['/home/addemp']);
  }
  can(){
    this.flage=false;
  }
  ondelete(item:emp){
    this._empdata.delemp(item.emp_id).subscribe((data:any)=>{
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
  edit(item:emp){
     this._router.navigate(['/home/editemp',item.emp_id]);
    
  }
  

}
