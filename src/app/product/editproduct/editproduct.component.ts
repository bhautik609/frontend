import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatService } from 'src/app/cat.service';
import { cat } from 'src/app/cat/cat';
import { CatComponent } from 'src/app/cat/cat.component';
import { ProductService } from 'src/app/product.service';
import{product}from'../product';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
productform:FormGroup;
product_id;
photourl;
obj:cat[]=[];
obj1:product[]=[];
selectedfile:File=null;
valid: boolean = false;
  constructor(private _actRoute:ActivatedRoute,private _productdata:ProductService,private _router:Router,private _catdata:CatService) { }

  ngOnInit(): void {
    this.productform= new FormGroup({
      product_id:new FormControl(null),
      product_name:new FormControl(null),
      product_color:new FormControl(null),
      product_mfd:new FormControl(null),
      product_price:new FormControl(null),
      product_warr:new FormControl(null),
      product_garr:new FormControl(null),
      product_desc:new FormControl(null),
      product_img1:new FormControl(null),
      product_img2:new FormControl(null),
      product_img3:new FormControl(null),
      cat_id_fk:new FormControl(null)

    });
    this.product_id=this._actRoute.snapshot.params['product_id'];
    console.log(this.product_id);
    this._productdata.getproductbyId(this.product_id).subscribe((data:product[])=>{
      console.log(data);
      this.onbinddata(data[0]);
      //this.productform.patchValue({
        //product_id:data[0].product_id,
      //product_name:data[0].product_name,
        //product_color:data[0].product_color,
        //product_mfd:data[0].product_mfd,
        //product_price:data[0].product_price,
        //product_warr:data[0].product_warr,
        //product_garr:data[0].product_garr,
        //product_desc:data[0].product_desc,
        //product_img1:data[0].product_img1,
        //cat_id_fk:data[0].cat_id_fk
        
      // });
       
    });
    this._catdata.getAllCat().subscribe((data:cat[])=>{
      this.obj=data;
    });
    
  }
  

  
  onSaveClick(){

  //   const fd=new FormData();
  //   fd.append('product_name',this.productform.get('product_name').value);
  //   fd.append('product_color',this.productform.get('product_color').value);
  //   fd.append('product_mfd',this.productform.get('product_mfd').value);
  //   fd.append('product_price',this.productform.get('product_price').value);
  //   fd.append('product_warr',this.productform.get('product_warr').value);
  //   fd.append('product_garr',this.productform.get('product_garr').value);
  //   fd.append('product_desc',this.productform.get('product_desc').value);
  //   fd.append('product_img1',this.selectedfile,this.selectedfile.name);
  //   fd.append('cat_id_fk',this.productform.get('cat_id_fk').value);
  //   console.log(fd);

  //   this._productdata.editproduct(fd).subscribe((data:any)=>{
  //     console.log(data);
  //     if(data.affectedRows==1)
  //     {
  //       alert('data updated succesfully');
     
  //     }
  //     else{
  //       alert('something went wrong');
  //       console.log(data);
  //     }
  //     this.productform.reset({});

  //   });

    let fd = new FormData();
    
    fd.append('product_name',this.productform.get('product_name').value);
    fd.append('product_color',this.productform.get('product_color').value);
   fd.append('product_mfd',this.productform.get('product_mfd').value);
     fd.append('product_price',this.productform.get('product_price').value);
     fd.append('product_warr',this.productform.get('product_warr').value);
     fd.append('product_garr',this.productform.get('product_garr').value);
     fd.append('product_desc',this.productform.get('product_desc').value);
     if (this.selectedfile != null) {
      fd.append('product_img1', this.selectedfile, this.selectedfile.name);
    }
    else {
      fd.append('product_img1', this.productform.get('product_img1').value);
    }
    fd.append('cat_id_fk',this.productform.get('cat_id_fk').value);

    this._productdata.editproduct(this.product_id, fd).subscribe(
      (data: any) => {
        console.log(data);
        this.valid = true;
        if(data.affectedRows==1)
          {
               alert('data updated succesfully');
               this._router.navigate(['/home/product']);
           }
             else{
               alert('something went wrong');
               console.log(data);
          }
        
      }
  
    );
  

   }
cancle(){
this._router.navigate(['/home/product']);

}
onbinddata(item:product){
  this.photourl = environment.url + "/images/product/" + item.product_img1;
  this.productform.patchValue({
    product_id:item.product_id,
    product_name:item.product_name,
      product_color:item.product_color,
      product_mfd:item.product_mfd,
      product_price:item.product_price,
      product_warr:item.product_warr,
      product_garr:item.product_garr,
      product_desc:item.product_desc,
      product_img1:item.product_img1,
      cat_id_fk:item.cat_id_fk  
  });

  
}
onChange(value){
  this.selectedfile=<File>value.target.files[0];
}
}
