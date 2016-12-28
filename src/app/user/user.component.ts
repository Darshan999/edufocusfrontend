import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../shared/user-model';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

allUser:UserModel[]=[];

  constructor(public _user_data:UserDataService,public _router:Router) { }

  ngOnInit() {

    this._user_data.getAllUsers().subscribe(

      (data:UserModel[])=>{
        this.allUser=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New User Added');
      }
    );
  }  

  adduser()
  {
    this._router.navigate(['/adduser']);
  }

deleteuser(item:UserModel)
{
  this._user_data.deleteUser(item.u_email_id).subscribe(
    (data:any)=>{
      this.allUser.splice(this.allUser.indexOf(item),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }

  );
}


}
