import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesModel } from '../shared/notes-model';
import { NotesDataService } from '../shared/notes-data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

allNotes:NotesModel[]=[];

  constructor(public _notes_data:NotesDataService,public _router:Router) { }

  ngOnInit() {
     this._notes_data.getAllNotes().subscribe(

      (data:NotesModel[])=>{
        this.allNotes=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New Notes Added');
      }
    );
  }

  addnotes()
  {
    this._router.navigate(['/addnotes']);
  }


  deletenotes(item:NotesModel)
  {
    this._notes_data.deleteNotes(item.notes_id).subscribe(
      (data:any)=>{
      this.allNotes.splice(this.allNotes.indexOf(item),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }
    );
  }


}
