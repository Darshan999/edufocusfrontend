import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../shared/user-model';
@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  u_email_id:any[]=[];
  u_name:any[]=[];

  transform(value: any, args: any): any {
   
    if(args!='')
    {
      console.log("if");
      this.u_email_id=value.filter(res=>res.u_email_id.startsWith(args));
      this.u_name=value.filter(res=>res.u_name.startsWith(args));

      return this.u_name.concat(this.u_email_id);

    }
    else
    {
      console.log("else");
      return value;
    }
  }

}
