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
    this._router.navigate(['/addcourse']);
  }

  deletecourse(course:CourseModel)
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
