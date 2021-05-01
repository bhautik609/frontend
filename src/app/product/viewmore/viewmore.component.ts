import { AfterViewInit, Component, OnInit, ViewChild,inject, Inject} from '@angular/core';
import { Router } from '@angular/router';
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";
import { ProductService } from 'src/app/product.service';
import { product } from '../product';
import{MatDialogRef, MAT_DIALOG_DATA}from '@angular/material/dialog';
import { cat } from 'src/app/cat/cat';
import { CatService } from 'src/app/cat.service';
@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent implements OnInit,AfterViewInit {
  obj:product[]=[];
  displayedColumns: string[] = ['product_desc','product_img1','cat_name'];
  dataSource: MatTableDataSource<product>;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort)sort:MatSort;
  product_id;
  pro_name:string="";
  pro_price:number=0;
  pro_mfg:string="";
  pro_img:string="";
  pro_info:string="";
  pro_garr:string="";
  pro_warr:string="";
  pro_color:string="";
   photo:string;
  obj2:cat[]=[];
  constructor(public dialogref:MatDialogRef<ViewmoreComponent>,private _catdata:CatService,private _router:Router,private _productdata:ProductService, @Inject(MAT_DIALOG_DATA)  public data:any){ 
    this.dataSource=new MatTableDataSource()
  }
  ngAfterViewInit():void{
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

  }

  ngOnInit(): void {
    console.log(this.data.name);
    this.product_id=this.data.product_id;
      //this._productdata.getAllproduct().subscribe((data:product[])=>{
    this._productdata.getproductbyId(this.product_id).subscribe((data:product[])=>{
      console.log(data);
      this.obj=data;
      
      this.dataSource.data=data;
      console.log(this.data.name);

  });
  this._catdata.getAllCat().subscribe((data:cat[])=>{
    this.obj2=data;
    console.log(data);

  });
  this.pro_name=this.data.product_name;
  this.pro_price=this.data.product_price;
  this.pro_mfg=this.data.product_mfd;
  this.pro_img=this.data.product_img1;
  this.pro_warr=this.data.product_warr;
  this.pro_garr=this.data.product_garr;
  this.pro_color=this.data.product_color;
  this.pro_info=this.data.product_desc;
  }
  close(){ 
    this._router.navigate(['home/product']);
  }
  onCancelClick() {
    this.dialogref.close();
}


}
