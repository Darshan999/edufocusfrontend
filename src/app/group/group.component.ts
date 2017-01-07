import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupModel } from '../shared/group-model';
import { GroupDataService } from '../shared/group-data.service';
import { GroupJoinModel } from '../shared/group-join-model';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  allGroup:GroupModel[]=[];
  allGroupjoin:GroupJoinModel[]=[];
   delarr:GroupModel[]=[];
  constructor(public _group_data:GroupDataService,public _router:Router) { }

  ngOnInit() {
    
       this._group_data.getAllGroupsJoin().subscribe(

      (data:GroupJoinModel[])=>{
        this.allGroupjoin=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New member Added');
      }
    );
  
}

addgroup()
{
  this._router.navigate(['/addgroup']);
}

deletegroup(group:GroupJoinModel)
{
   if(confirm("Are You Sure want to delete?"))
    {
  this._group_data.deleteGroup(group.grp_id).subscribe(
    (data:any)=>{
      this.allGroupjoin.splice(this.allGroupjoin.indexOf(group),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }

  );
    }
}


i:number=0;
    checkChange(item:GroupModel)
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
      this._group_data.deleteAllGroup(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allGroup.find(x=>x==this.delarr[this.i]))
                {
                   this.allGroup.splice(this.allGroup.indexOf(this.delarr[this.i]),1);
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




}
