import { AfterViewInit, Component, OnInit, ViewChild,inject, Inject} from '@angular/core';
import { Router } from '@angular/router';
import{MatPaginator}from "@angular/material/paginator";
import{MatTableDataSource}from "@angular/material/table";
import{MatSort}from "@angular/material/sort";
import { ProductService } from 'src/app/product.service';
import { product } from '../product';
import{MAT_DIALOG_DATA}from '@angular/material/dialog';
import { cat } from 'src/app/cat/cat';
import { CatService } from 'src/app/cat.service';
@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent implements OnInit,AfterViewInit {
  obj:product[]=[];
  displayedColumns: string[] = ['product_desc','product_img1','product_img2','product_img3','cat_name'];
  dataSource: MatTableDataSource<product>;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort)sort:MatSort;
  product_id;
  obj2:cat[]=[];
  constructor(private _catdata:CatService,private _router:Router,private _productdata:ProductService,@Inject(MAT_DIALOG_DATA)  public data:{name:any}){ 
    this.dataSource=new MatTableDataSource()
  }
  ngAfterViewInit():void{
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

  }

  ngOnInit(): void {
      this._productdata.getAllproduct().subscribe((data:product[])=>{
    // this._productdata.getproductbyId(this.data.name).subscribe((data:product[])=>{
      this.obj=data;
      console.log(data);
      this.dataSource.data=data;
      console.log(this.data.name);

  });
  this._catdata.getAllCat().subscribe((data:cat[])=>{
    this.obj2=data;
    console.log(data);
  });
  }
  close(){ 
    this._router.navigate(['home/product']);
  }


}