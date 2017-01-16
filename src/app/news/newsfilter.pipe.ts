import { Pipe, PipeTransform } from '@angular/core';
import { NewsjoinModel } from '../shared/newsjoin-model';
@Pipe({
  name: 'newsfilter'
})
export class NewsfilterPipe implements PipeTransform {

  news_title:any[];

  transform(value: any, args: any): any {

    if(args!='')
    {
      console.log("if");
      return this.news_title=value.filter(res=>res.news_title.startsWith(args));
     

     

    }
    else
    {
      console.log("else");
      return value;
    }

 
  }

}
