import { Pipe, PipeTransform } from '@angular/core';
import { CourseModel } from '../shared/course-model';
@Pipe({
  name: 'coursefilter'
})
export class CoursefilterPipe implements PipeTransform {

  allcourse:any[]=[];

  transform(value: any, args: any): any {

    if(args!='')
    {
        return this.allcourse=value.filter(res=>res.course_name.startsWith(args));
    }
    else{

      return value;

    }
  }

}
