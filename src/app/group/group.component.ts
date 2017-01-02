import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupModel } from '../shared/group-model';
import { GroupDataService } from '../shared/group-data.service';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  allGroup:GroupModel[]=[];
  constructor(public _group_data:GroupDataService,public _router:Router) { }

  ngOnInit() {
    
       this._group_data.getAllGroups().subscribe(

      (data:GroupModel[])=>{
        this.allGroup=data;
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

deletegroup(group:GroupModel)
{
  this._group_data.deleteGroup(group.grp_id).subscribe(
    (data:any)=>{
      this.allGroup.splice(this.allGroup.indexOf(group),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }

  );
}





}
