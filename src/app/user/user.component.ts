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
delarr:UserModel[]=[];

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
    this._router.navigate(['/adduser','0']);
  }

deleteuser(item:UserModel)
{
  if(confirm("Are You Sure want to delete?"))
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

    i:number=0;
    checkChange(item:UserModel)
    {
      
        if(this.delarr.find(x=>x==item))
        {
          this.delarr.splice(this.delarr.indexOf(item),1);
        }
        else
        {
          this.delarr.push(item);
        }
        console.log(this.delarr);
      
    }

    deleteAll()
    {
      /*if(confirm("Are You Sure want to delete?"))
      {
        for(this.i=0;this.i<=this.delarr.length;this.i++)
        {
          this.deleteUser1(this.delarr[this.i]);
        }
      }*/
      this._user_data.deleteAll(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allUser.find(x=>x==this.delarr[this.i]))
                {
                   this.allUser.splice(this.allUser.indexOf(this.delarr[this.i]),1);
                 }
            }
            this.delarr=[];
            
          },
          function(err){console.log(err);},
          function(){

            console.log("Complete");
          }
        
      );
    }
 


updateuser(item:UserModel)
  {
      this._router.navigate(['/adduser',item.u_email_id]);
  }



}
