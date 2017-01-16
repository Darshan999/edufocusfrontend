import { Pipe, PipeTransform } from '@angular/core';
import { BlogjoinModel } from '../shared/blogjoin-model';
@Pipe({
  name: 'blogfilter'
})
export class BlogfilterPipe implements PipeTransform {

  blog_title:any[]=[];

  transform(value: any, args: any): any {

    if(args!='')
    {
      console.log("if");
      return this.blog_title=value.filter(res=>res.blog_title.startsWith(args));
      

    }
    else
    {
      console.log("else");
      return value;
    }
  }
    
  }


