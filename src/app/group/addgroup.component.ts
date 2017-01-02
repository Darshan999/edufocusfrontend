import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { GroupModel } from '../shared/group-model';
import { GroupDataService } from '../shared/group-data.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {

private _subscription:Subscription;

  grp_id:number;
  grp_date:string='';
  fk_sub_id:number;
  fk_u_email_id:string='';

  constructor(private _agroute:ActivatedRoute,private _group_data:GroupDataService,public _router:Router) { }

  ngOnInit() {

    
    
  }

  addgroup()
  {
  
   
    this._group_data.addGroup(new GroupModel(this.grp_id,this.grp_date,this.fk_sub_id,this.fk_u_email_id))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allgroups']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }
 
}