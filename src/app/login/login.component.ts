import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  valid: boolean = false;
  notValid: boolean = false;
  noDetails: boolean = false;
  error: string;

  //hide:boolean=true;
  constructor(private _router:Router,private _logdata:LoginService) { }

  ngOnInit(): void {
    this.loginform=new FormGroup({
      login_username:new FormControl(null, [Validators.required, Validators.email]),
      login_password:new FormControl(null,Validators.required)
    });
   
  }
  onclick(){
    this._router.navigate(['/home']);
  }
  onsubmitClick(){
console.log(this.loginform.value)
if (this.loginform.get('login_username').value != null && this.loginform.get('login_password').value != null) {
    this._logdata.getAdmin(this.loginform.value).subscribe((data:user[])=>{
      this.obj=data;
      console.log(data);
      if(data.length==1){
        if(this.obj[0].user_type==0){
          this.valid = true;
          localStorage.setItem("username",this.obj[0].user_email);
          localStorage.setItem('id',this.obj[0].user_id+'');
          this._router.navigate(['/home']);
        }
        else{
          alert('username or password are incorrect');
      }
      }
      else{
        alert('username or password are inccorrect');
      }
    });
}
    
      else{
        alert('username or password  was empty');
      }

    
    
  }

}
