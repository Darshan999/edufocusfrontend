import { Injectable } from '@angular/core';
import { CourseModel } from './course-model';
import { Http,Response,Headers,RequestOptions } from '@angular/http';;
import 'rxjs/Rx';
@Injectable()
export class CourseDataService {

  private url:string="http://localhost:3000/courses/";

  constructor(private _http:Http) { }

  getAllCourses()
  {
    return this._http.get(this.url).map((res:Response)=>res.json());
  }

  getCourseById(id:number)
  {
    return this._http.get(this.url+id).map((res:Response)=>res.json());
  }

  addCourse(course:CourseModel)
  {
    let body=JSON.stringify(course);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.post(this.url,body,requestoptions).map((res:Response)=>res.json()); 
  }

   deleteCourse(id:number)
  {
    
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.delete(this.url+id,requestoptions).map((res:Response)=>res.json());
  }
}
