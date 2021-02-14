import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(private _catdata:CatService) { }

  ngOnInit(): void {
    this.catform= new FormGroup({
      cat_id:new FormControl(null),
      cat_name:new FormControl(null)
     });
  }
  onSaveClick(){
    this._catdata.addcat(this.catform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data inserted succesfully');
        this.obj.push(this.catform.value);
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
      this.catform.reset({});
    });
    
  }
  

}
