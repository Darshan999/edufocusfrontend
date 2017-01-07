import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModel } from '../shared/course-model';
import { CourseDataService } from '../shared/course-data.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  allCourse:CourseModel[]=[];
  delarr:CourseModel[]=[];
  constructor(public _course_data:CourseDataService,public _router:Router) { }

  ngOnInit() {
      
     this._course_data.getAllCourses().subscribe(

      (data:CourseModel[])=>{

        this.allCourse=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New Course Added');
      }
    );
  }

  addcourse()
  {
    this._router.navigate(['/addcourse',0]);
  }

  deletecourse(course:CourseModel)
{
  if(confirm("Are You Sure want to delete?"))
    {
  this._course_data.deleteCourse(course.course_id).subscribe(
    (data:any)=>{
      this.allCourse.splice(this.allCourse.indexOf(course),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }
    
  );
    }
}
 updatecourse(item:CourseModel)
  {
      this._router.navigate(['/addcourse',item.course_id]);
  } 
i:number=0;
    checkChange(item:CourseModel)
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
      this._course_data.deleteAll(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allCourse.find(x=>x==this.delarr[this.i]))
                {
                   this.allCourse.splice(this.allCourse.indexOf(this.delarr[this.i]),1);
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
