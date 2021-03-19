import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { user } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform:FormGroup;
value = '';
hide = true;
obj:user[];
message:string='';
username:String;
useremail:string;
  password:String;
  //hide:boolean=true;
  constructor(private _router:Router,private _logdata:LoginService) { }

  ngOnInit(): void {
    this.loginform=new FormGroup({
      login_username:new FormControl(null),
      login_password:new FormControl(null)
    });
   
  }
  onclick(){
    this._router.navigate(['/home']);
  }
  onsubmitClick(){
console.log(this.loginform.value)
    this._logdata.getAdmin(this.loginform.value).subscribe((data:user[])=>{
      this.obj=data;
      console.log(data);
      if(data.length==1){
        if(this.obj[0].user_type==0){
          localStorage.setItem("username",this.obj[0].user_email);
          this._router.navigate(['/home']);
        }
        else{
          alert('username or password incorrect');
      }
      }
      else{
         alert("username or password incorrect");
      }

    });
    
  }

}
