import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CatService } from 'src/app/cat.service';
import { cat  } from "../cat";

@Component({
  selector: 'app-editcat',
  templateUrl: './editcat.component.html',
  styleUrls: ['./editcat.component.css']
})
export class EditcatComponent implements OnInit {
  catform:FormGroup;
  cat_id;
  constructor( private _editcat:CatService,private _actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.catform=new FormGroup({
      cat_id:new FormControl(null),
      cat_name:new FormControl(null),
    });
    this.cat_id=this._actRoute.snapshot.params['cat_id'];
    console.log(this.cat_id);
    this._editcat.getcatById(this.cat_id).subscribe((data:cat[])=>{
      console.log(data);
      this.catform.patchValue({
       cat_id:data[0].cat_id,
       cat_name:data[0].cat_name,
      });

    });



  }
  onSaveClick(){
    this._editcat.editcat(this.catform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data updated succesfully');
    
      }
      else{
        alert('something went wrong');
        console.log(data);
      }

    });
  }

}
