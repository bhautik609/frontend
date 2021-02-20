import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from 'src/app/emp.service';
import{emp}from '../emp';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
empform:FormGroup;
emp_id;
  constructor(private _editemp:EmpService,private _actRoute:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {

    this.emp_id=this._actRoute.snapshot.params['emp_id'];
    console.log(this.emp_id);
    this._editemp.getempbyId(this.emp_id).subscribe((data:emp[])=>{
      console.log(data);
      this.empform.patchValue({
        emp_id:data[0].emp_id,
        emp_name:data[0].emp_name,
        emp_email:data[0].emp_email,
        emp_salary:data[0].emp_salary,
        emp_join_date:data[0].emp_join_date,
       });
    });


    this.empform= new FormGroup({
      emp_id:new FormControl(null),
      emp_name:new FormControl(null),
      emp_email:new FormControl(null),
      emp_salary:new FormControl(null),
      emp_join_date:new FormControl(null)
    });
  }
  onSaveClick(){
    this._editemp.editemp(this.empform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data updated succesfully');
    
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
