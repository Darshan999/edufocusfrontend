import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CourseModel } from '../shared/course-model';
import { CourseDataService } from '../shared/course-data.service';

import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  course_id:number;
  course_name:string='';
 
  
  private _subscription:Subscription;  
  

  constructor(private _course_data:CourseDataService,public _router:Router,public _acroute:ActivatedRoute) { }

  ngOnInit() {

    this._subscription=this._acroute.params.subscribe(

      (params:any)=>{

       this.course_id =params["course_id"];
      }
    );

    
if(this.course_id!=0)
    {
      this._course_data.getCourseById(this.course_id).subscribe(

        (data:CourseModel[])=>{
          this.course_name=data[0].course_name;
          
        }
      );
    }


  }

   addcourse()
  {

    if(this.course_id==0)
    {
            this._course_data.addCourse(new CourseModel(this.course_id,this.course_name))
        .subscribe(
          (data:any)=>{
            console.log(data);
            this._router.navigate(['/allcourses']);
          },
          function(error){},    
          function()
          {
            alert('added');
          }
        );
  }
  else
  {
       //edit
    this._course_data.updateCourse(new CourseModel(this.course_id,this.course_name))
    .subscribe(
      (data:any)=>{
 
         console.log(data); 
         this._router.navigate(['/allcourses']); 
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
