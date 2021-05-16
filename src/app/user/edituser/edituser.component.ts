import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { environment } from 'src/environments/environment';
import{user}from'../user';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
userform:FormGroup;
user_id;
photourl;
selectedfile:File=null;
notValid: boolean = false;
  constructor(private _actRoute:ActivatedRoute,private _userdata:UserService,private _router:Router) { }

  ngOnInit(): void {
    this.user_id=this._actRoute.snapshot.params['user_id'];
    console.log(this.user_id);
    this._userdata.getuserbyId(this.user_id).subscribe((data:user[])=>{
      console.log(data);
      this.onbind(data[0]);
      //this.userform.patchValue({
       // user_id:data[0].user_id,
      //user_password:data[0].user_password,
        //user_name:data[0].user_name,
        //user_email:data[0].user_email,
        //user_age:data[0].user_age,
        //user_gender:data[0].user_gender,
        //user_mob:data[0].user_mob,
        //ser_address:data[0].user_address
      //});
       


    });

    this.userform= new FormGroup({
      user_id:new FormControl(null),
      
      user_name:new FormControl(null,[Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
      user_password:new FormControl(null,[Validators.required]),
      user_email:new FormControl(null,[Validators.required,Validators.email]),
      user_age:new FormControl(null,Validators.required),
      user_gender:new FormControl(null),
      user_mob:new FormControl(null,[Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      user_address:new FormControl(null,Validators.required),
      user_type:new FormControl(null)
    });
  }
  onSaveClick(){
    const fd=new FormData();
    
    fd.append('user_name',this.userform.get('user_name').value);
    fd.append('user_password',this.userform.get('user_password').value);
    fd.append('user_email',this.userform.get('user_email').value);
    fd.append('user_age',this.userform.get('user_age').value);
    fd.append('user_gender',this.userform.get('user_gender').value);
    fd.append('user_mob',this.userform.get('user_mob').value);
    fd.append('user_address',this.userform.get('user_address').value);
    fd.append('user_type',this.userform.get('user_type').value);
    if (this.selectedfile != null) {
      fd.append('user_img',this.selectedfile,this.selectedfile.name);
    }
    else {
      fd.append('user_img', this.userform.get('user_img').value);
    }
    console.log(fd);
      this._userdata.edituser(this.user_id,fd).subscribe((data:any)=>{
      console.log(data);
      if(data.affectedRows==1)
      {
        //this.notValid = true;
        alert('data updated succesfully');
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
    this.notValid = true;
    this._router.navigate(['home/user']);
  }
  onbind(item:user){
    this.photourl = environment.url + "/images/user/" + item.user_img; 
    this.userform.patchValue({
      user_id:item.user_id,
    user_password:item.user_password,
      user_name:item.user_name,
      user_email:item.user_email,
      user_age:item.user_age,
      user_gender:item.user_gender,
      user_mob:item.user_mob,
      user_address:item.user_address,
      user_type:item.user_type,
      user_img:item.user_img

    });
  }
  onChange(value){
    this.selectedfile=<File>value.target.files[0];
  }
}
