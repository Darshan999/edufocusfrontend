import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SubjectModel } from '../shared/subject-model';
import { SubjectDataService } from '../shared/subject-data.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {


  sub_id:number;
  sub_name:string='';
  sub_photo:string='';
  fk_course_id:number;
  fk_u_email_id:string='';

    private _subscription:Subscription;
    
  constructor(private _subject_data:SubjectDataService,public _router:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {

    
    this._subscription=this._acroute.params.subscribe(    
        (params:any)=>{

          this.sub_id =params["sub_id"];
          }
    );

    if(this.sub_id!=0)
    {
      this._subject_data.getSubjectById(this.sub_id).subscribe(

        (data:SubjectModel[])=>{
          this.sub_name=data[0].sub_name,
          this.sub_photo=data[0].sub_photo;
        }
      );
    }


  }



   addsubject()
  {

    if(this.sub_id==0)
    {
    this._subject_data.addSubject(new SubjectModel(this.sub_id,this.sub_name,this.sub_photo,this.fk_course_id,this.fk_u_email_id))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allsubjects']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }
  else{

    this._subject_data.updateSubject(new SubjectModel(this.sub_id,this.sub_name,this.sub_photo,this.fk_course_id,this.fk_u_email_id))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/allsubjects']); 
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

}
