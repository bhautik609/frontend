import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import{product}from'../product';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
productform:FormGroup;
obj:product[]=[];
  constructor(private _productdata:ProductService) { }

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
  }
  onSaveClick(){
    this._productdata.addproduct(this.productform.value).subscribe((data:any)=>{
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

}
