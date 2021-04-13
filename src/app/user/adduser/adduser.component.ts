import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import{user}from"../user";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
userform:FormGroup;
selectedfile:File=null;
  constructor(private _userdata:UserService,private _router:Router) { }

  ngOnInit(): void {
    this.userform= new FormGroup({
      //user_id:new FormControl(null,[Validators.required]),
      user_password:new FormControl(null,[Validators.required]),
      user_name:new FormControl(null,Validators.required),
      user_email:new FormControl(null,[Validators.required,Validators.email]),
      user_age:new FormControl(null),
      user_gender:new FormControl(null),
      user_mob:new FormControl(null),
      user_address:new FormControl(null),
      user_type:new FormControl(null)

    });
  }
  onSaveClick(){
    const fd=new FormData();
    fd.append('user_password',this.userform.get('user_password').value);
    fd.append('user_name',this.userform.get('user_name').value);
    fd.append('user_email',this.userform.get('user_email').value);
    fd.append('user_age',this.userform.get('user_age').value);
    fd.append('user_gender',this.userform.get('user_gender').value);
    fd.append('user_mob',this.userform.get('user_mob').value);
    fd.append('user_address',this.userform.get('user_address').value);
    
    fd.append('user_type',this.userform.get('user_type').value);
    fd.append('user_img',this.selectedfile,this.selectedfile.name);
    
    console.log(fd);

    
    this._userdata.adduser(fd).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        alert('data inserted succesfully');
        this._router.navigate(['home/user']);
        
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
  onFileAdd(value){
    this.selectedfile=<File>value.target.files[0];
   }

}
