import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { UserModel } from '../shared/user-model';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  u_email_id:string='';
  u_name:string='';
  u_password:string='';
  u_photo:string='';
  u_mobile_no:string='';
  u_gender:string='';
  u_active:string='';
  u_status:string='';
  u_type:string='';
  flag:boolean=false;
private _subscription:Subscription;

  constructor(private _user_data:UserDataService,public _router:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {
     this._subscription=this._acroute.params.subscribe(

      (params:any)=>{

       this.u_email_id=params["u_email_id"];
      }
    );
  
    if(this.u_email_id!='0')
    {
      this.flag=true;
      this._user_data.getUserById(this.u_email_id).subscribe(

        (data:UserModel[])=>{
          this.u_name=data[0].u_name,
          this.u_photo=data[0].u_photo;
          this.u_mobile_no=data[0].u_mobile_no;
          
          this.u_gender=data[0].u_gender;
        }
      );
    }
  }

  adduser()
  {
    this._user_data.addUser(new UserModel(this.u_email_id,this.u_name,'1234',this.u_photo,this.u_mobile_no,this.u_gender,'approve','on','admin'))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allusers']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }


  updateuser()
  {
     this._user_data.updateUser(new UserModel(this.u_email_id,this.u_name,this.u_password,this.u_photo,this.u_mobile_no,this.u_gender,this.u_active,this.u_status,this.u_type))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/allusers']); 
    },
    function(error){

      alert(error);
    },
    function(){
      alert('Updated');
      }
    );
  }

  



}
