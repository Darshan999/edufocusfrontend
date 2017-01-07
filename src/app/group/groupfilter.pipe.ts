import { Pipe, PipeTransform } from '@angular/core';
import { GroupJoinModel } from '../shared/group-join-model';
@Pipe({
  name: 'groupfilter'
})
export class GroupfilterPipe implements PipeTransform {

allgroup:any[]=[];
  transform(value: any, args: any): any {


     if(args!='')
    {
      return this.allgroup=value.filter(res=>res.sub_name.startsWith(args));
    }
    else{
      return value;
    }

  }

}
