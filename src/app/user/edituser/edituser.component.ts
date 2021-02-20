import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import{user}from'../user';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
userform:FormGroup;
user_id;
  constructor(private _actRoute:ActivatedRoute,private _userdata:UserService,private _router:Router) { }

  ngOnInit(): void {
    this.user_id=this._actRoute.snapshot.params['user_id'];
    console.log(this.user_id);
    this._userdata.getuserbyId(this.user_id).subscribe((data:user[])=>{
      console.log(data);
      this.userform.patchValue({
        user_id:data[0].user_id,
      user_password:data[0].user_password,
        user_name:data[0].user_name,
        user_email:data[0].user_email,
        user_age:data[0].user_age,
        user_gender:data[0].user_gender,
        user_mob:data[0].user_mob,
        user_address:data[0].user_address
      });
       


    });

    this.userform= new FormGroup({
      user_id:new FormControl(null),
      user_password:new FormControl(null),
      user_name:new FormControl(null),
      user_email:new FormControl(null),
      user_age:new FormControl(null),
      user_gender:new FormControl(null),
      user_mob:new FormControl(null),
      user_address:new FormControl(null)

    });
  }
  onSaveClick(){
    this._userdata.edituser(this.userform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data updated succesfully');
    
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
      this.userform.reset({});

    });

  }
  cancle(){
    this._router.navigate(['home/user']);
  }

}
