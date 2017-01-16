import { Pipe, PipeTransform } from '@angular/core';
import { QuestionjoinModel } from '../shared/questionjoin-model';
@Pipe({
  name: 'questionfilter'
})
export class QuestionfilterPipe implements PipeTransform {

  que_title:any[]=[];

  transform(value: any, args: any): any {
  
      if(args!='')
    {
      console.log("if");
      return this.que_title=value.filter(res=>res.que_title.startsWith(args));
      
    }
    else
    {
      console.log("else");
      return value;
    }
  }

}
