import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';
import { user } from '../user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userform:FormGroup;
  user_id;
  selectedfile:File=null;
   photourl; 
  constructor(private _userdata:UserService,private _router:Router) { }

  ngOnInit(): void {
    this.user_id=localStorage.getItem("id");
    console.log(this.user_id);
    this._userdata.getuserbyId(this.user_id).subscribe((data:user[])=>{
      console.log(data);
      this.onbind(data[0]);

      //this.userform.patchValue({
        //user_id:data[0].user_id,
      //user_password:data[0].user_password,
        //user_name:data[0].user_name,
        //user_email:data[0].user_email,
        //user_age:data[0].user_age,
        //user_gender:data[0].user_gender,
        //user_mob:data[0].user_mob,
        //user_address:data[0].user_address,
      //user_type:data[0].user_type
     // });
       
    });
    this.userform= new FormGroup({
      user_id:new FormControl(null),
      user_password:new FormControl(null),
      user_name:new FormControl(null),
      user_email:new FormControl(null),
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
      alert('data updated succesfully');
      this._router.navigate(['/home']);
    }
    else{
      alert('something went wrong');
      console.log(data);
    }
  });
}
cancle(){
  this._router.navigate(['/home']);
}
onChange(value){
  this.selectedfile=<File>value.target.files[0];
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
}
