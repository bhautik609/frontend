import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import{user}from"../user";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
userform:FormGroup;
  constructor(private _userdata:UserService) { }

  ngOnInit(): void {
    this.userform= new FormGroup({
      user_id:new FormControl(null,[Validators.required]),
      user_password:new FormControl(null,[Validators.required]),
      user_name:new FormControl(null,Validators.required),
      user_email:new FormControl(null,[Validators.required,Validators.email]),
      user_age:new FormControl(null),
      user_gender:new FormControl(null),
      user_mob:new FormControl(null),
      user_address:new FormControl(null)

    });
  }
  onSaveClick(){
    console.log(this.userform.value);
    this._userdata.adduser(this.userform.value).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data inserted succesfully');
        
      }
      else{
        alert('something went wrong');
        console.log(data);
      }
      this.userform.reset({});

    });

  }

}
