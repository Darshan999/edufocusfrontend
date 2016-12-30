import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NotesModel } from '../shared/notes-model';
import { NotesDataService } from '../shared/notes-data.service';


@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {

notes_id:number;
notes_title:string='';
fk_u_email_id:string='';
fk_sub_id:number;

  constructor(public _notes_data:NotesDataService,public _router:Router) { }

  ngOnInit() {
  }

  addnotes()
  {
    this._notes_data.addNotes(new NotesModel(this.notes_id,this.notes_title,this.fk_u_email_id,this.fk_sub_id))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allnotes']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }

}
