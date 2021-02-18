import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform:FormGroup;
  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.loginform=new FormGroup({
      user_id:new FormControl(null),
      user_password:new FormControl(null)

    });
  }
  onclick(){
    this._router.navigate(['/home']);
  }
  onLogin(){}

}
