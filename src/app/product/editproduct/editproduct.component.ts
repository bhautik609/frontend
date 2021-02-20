import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import{product}from'../product';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
productform:FormGroup;
product_id;
  constructor(private _actRoute:ActivatedRoute,private _productdata:ProductService,private _router:Router) { }

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
      this.productform.patchValue({
        product_id:data[0].product_id,
      product_name:data[0].product_name,
        product_icolor:data[0].product_color,
        product_mfd:data[0].product_mfd,
        product_price:data[0].product_price,
        product_warr:data[0].product_warr,
        product_garr:data[0].product_garr,
        product_desc:data[0].product_desc,
        product_img1:data[0].product_img1,
        product_img2:data[0].product_img2,
        product_img3:data[0].product_img3,
        cat_id_fk:data[0].cat_id_fk
       });
    });
  }
  onSaveClick(){
    this._productdata.editproduct(this.productform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data updated succesfully');
    
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
      this.productform.reset({});

    });

  }
cancle(){
this._router.navigate(['/home/product']);
}
}
