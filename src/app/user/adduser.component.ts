import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserModel } from '../shared/user-model';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  Id:string='';
  Name:string='';
  Password:string='';
  Photo:string='';
  Mobile_No:string='';
  Gender:string='';
  Active:string='';
  Status:string='';
  Type:string='';
addus:UserModel[]=[];

  constructor(private _user_data:UserDataService,public _router:Router) { }

  ngOnInit() {
  }

  adduser()
  {
    this._user_data.addUser(new UserModel(this.Id,this.Name,this.Password,this.Photo,this.Mobile_No,this.Gender,this.Active,this.Status,this.Type))
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

  



}
