import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videofilter'
})
export class VideofilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    return null;
  }

}
