import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{product}from"./product";
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewmoreComponent } from './viewmore/viewmore.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit ,AfterViewInit {
  displayedColumns: string[] = ['product_name','product_color','product_mfd','product_price','product_warr','product_garr','action','edit'];
  dataSource: MatTableDataSource<product>;
productform:FormGroup;
obj:product[]=[];
value="";
@ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort)sort:MatSort;
  constructor(private _productdata:ProductService,private _router:Router,public dialog: MatDialog) {
    this.dataSource=new MatTableDataSource()
   }
   ngAfterViewInit():void{
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

  }


  ngOnInit(): void {
    this._productdata.getAllproduct().subscribe((data:product[])=>{
      this.obj=data;
      console.log(data);
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
 
  addclik(){
    this._router.navigate(['/home/addproduct']);

  }
  ondelete(item:product){
    this._productdata.delproduct(item.product_id).subscribe((data:any)=>{
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
  edit(item:product){
    this._router.navigate(['/home/editproduct',item.product_id]);
  }
  openDialog(item:product) {
    const dialogRef = this.dialog.open(ViewmoreComponent,
      {data:{name:item.product_id}});


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

