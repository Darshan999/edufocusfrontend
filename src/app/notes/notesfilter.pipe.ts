import { Pipe, PipeTransform } from '@angular/core';
import { NotesJoinModel } from '../shared/notes-join-model';
//import { NotesModel } from '../shared/notes-model';
@Pipe({
  name: 'notesfilter'
})
export class NotesfilterPipe implements PipeTransform {


  allnotes:any[]=[];

  transform(value: any, args: any): any {


     if(args!='')
    {
      return this.allnotes=value.filter(res=>res.notes_title.startsWith(args));
    }
    else{
      return value;
    }
   
  }

}
