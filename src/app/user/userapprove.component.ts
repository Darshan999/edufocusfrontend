import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../shared/user-model';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-userapprove',
  templateUrl: './userapprove.component.html',
  styleUrls: ['./userapprove.component.css']
})
export class UserapproveComponent implements OnInit {

allUser:UserModel[]=[];
 u_email_id:string='';
  u_name:string='';
  u_password:string='';
  u_photo:string='';
  u_mobile_no:string='';
  u_gender:string='';
  u_active:string='active';
  u_status:string='';
  u_type:string='';
  flag:boolean=false;

  constructor(public _user_data:UserDataService,public _router:Router) { }

  ngOnInit() {

    this._user_data.getAllUsersflag().subscribe(

      (data:UserModel[])=>{
        this.allUser=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New flag User Added');
      }
    );
  }

  approveuser(item:UserModel)
  {
    this.u_email_id=item.u_email_id;
     //console.log(this.u_email_id); 
    this._user_data.updateUserflag(new UserModel(this.u_email_id,this.u_name,this.u_password,this.u_photo,this.u_mobile_no,this.u_gender,this.u_active,this.u_status,this.u_type))
    .subscribe(
      (data:any)=>{

        
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
