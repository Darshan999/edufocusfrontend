import { Pipe, PipeTransform } from '@angular/core';
import { SubjectJoinModel } from '../shared/subject-join-model';
@Pipe({
  name: 'subjectfilter'
})
export class SubjectfilterPipe implements PipeTransform {

  allsubject:any[]=[];
  transform(value: any, args: any): any {
    
    if(args!='')
    {
      return this.allsubject=value.filter(res=>res.sub_name.startsWith(args));
    }
    else{
      return value;
    }
  }

}
