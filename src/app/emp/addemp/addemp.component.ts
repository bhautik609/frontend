import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from 'src/app/emp.service';
import{emp}from'../emp';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  empform:FormGroup;
  obj:emp[]=[];
  constructor(private _empdata:EmpService,private _router:Router) { }

  ngOnInit(): void {
    this.empform= new FormGroup({
     // emp_id:new FormControl(null,Validators.required),
      emp_name:new FormControl(null,Validators.required),
      emp_email:new FormControl(null,[Validators.required,Validators.email]),
      emp_salary:new FormControl(null,Validators.required),
      emp_join_date:new FormControl(null,Validators.required)
    });
  }
  onSaveClick(){
    this._empdata.addemp(this.empform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data inserted succesfully');
        this.obj.push(this.empform.value);
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
      this.empform.reset({});
    });

  }
  cancle(){
    this._router.navigate(['/home/emp']);
  }

}
