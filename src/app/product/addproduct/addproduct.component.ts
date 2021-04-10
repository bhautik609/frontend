import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatService } from 'src/app/cat.service';
import { cat } from 'src/app/cat/cat';
import { ProductService } from 'src/app/product.service';
import{product}from'../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
productform:FormGroup;
obj:cat[]=[];
selectedfile:File=null;
  constructor(private _productdata:ProductService,private _catdata:CatService,private _router:Router) { }

  ngOnInit(): void {
    this.productform= new FormGroup({
      product_id:new FormControl(null),
      product_name:new FormControl(null,Validators.required),
      product_color:new FormControl(null,Validators.required),
      product_mfd:new FormControl(null,Validators.required),
      product_price:new FormControl(null,Validators.required),
      product_warr:new FormControl(null,Validators.required),
      product_garr:new FormControl(null,Validators.required),
      product_desc:new FormControl(null,Validators.required),
      product_img1:new FormControl(null),
      product_img2:new FormControl(null),
      product_img3:new FormControl(null),
      cat_id_fk:new FormControl(null,Validators.required)

    });
    this._catdata.getAllCat().subscribe((data:cat[])=>{
      this.obj=data;
    });
  }
  onSaveClick(){
    const fd=new FormData();
    fd.append('product_name',this.productform.get('product_name').value);
    fd.append('product_color',this.productform.get('product_color').value);
    fd.append('product_mfd',this.productform.get('product_mfd').value);
    fd.append('product_price',this.productform.get('product_price').value);
    fd.append('product_warr',this.productform.get('product_warr').value);
    fd.append('product_garr',this.productform.get('product_garr').value);
    fd.append('product_desc',this.productform.get('product_desc').value);
    fd.append('product_img1',this.selectedfile,this.selectedfile.name);
    fd.append('product_img2',this.productform.get('product_img2').value);
    fd.append('product_img3',this.productform.get('product_img3').value);
    fd.append('cat_id_fk',this.productform.get('cat_id_fk').value);
    console.log(fd);

    this._productdata.addproduct(fd).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data inserted succesfully');
        
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
    });
  
  }
  cancle(){
   this._router.navigate(['/home/product']);
  }
  onFileAdd(value){
    this.selectedfile=<File>value.target.files[0];
   }
  


}
