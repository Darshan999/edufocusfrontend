import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CourseModel } from '../shared/course-model';
import { CourseDataService } from '../shared/course-data.service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  course_id:number;
  course_name:string='';
  fk_sub_id:number;
  fk_u_email_id:string='';
  constructor(private _course_data:CourseDataService,public _router:Router) { }

  ngOnInit() {
  }

   addcourse()
  {
    this._course_data.addCourse(new CourseModel(this.course_id,this.course_name,this.fk_sub_id,this.fk_u_email_id))
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

}
