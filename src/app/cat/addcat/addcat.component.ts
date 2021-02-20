import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatService } from 'src/app/cat.service';
import{cat}from '../cat';
@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
})
export class AddcatComponent implements OnInit {
catform:FormGroup;
obj:cat[]=[];

  constructor(private _catdata:CatService,private _router:Router) { }

  ngOnInit(): void {
    this.catform= new FormGroup({
      cat_id:new FormControl(null,Validators.required),
      cat_name:new FormControl(null,Validators.required)
     });
  }
  onSaveClick(){
    this._catdata.addcat(this.catform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data inserted succesfully');
        this.obj.push(this.catform.value);
        this._router.navigate(['/home/cat']);
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
      this.catform.reset({});
    });
 }
cancle(){
 this._router.navigate(['/home/cat']);
}  

}
