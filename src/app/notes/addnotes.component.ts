import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NotesModel } from '../shared/notes-model';
import { NotesDataService } from '../shared/notes-data.service';
import { NotesJoinModel } from '../shared/notes-join-model';
import { Subscription } from 'rxjs/Rx';
import { SubjectModel } from '../shared/subject-model';
import { SubjectDataService } from '../shared/subject-data.service';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {

notes_id:number;
notes_title:string='';
notes:string='';
fk_u_email_id:string='';
fk_sub_id:number;

private _subscription:Subscription;
allNotes:NotesModel[]=[];
allSubject:SubjectModel[]=[];



  constructor(public _notes_data:NotesDataService,public _router:Router,private _acroute:ActivatedRoute,public _subject_data:SubjectDataService) { }

  ngOnInit() {

    this._subscription=this._acroute.params.subscribe(

      (params:any)=>{

       this.notes_id =params["notes_id"];
      }
    );
    this._subject_data.getAllSubjects().subscribe(
      (data:SubjectModel[])=>{
        this.allSubject=data;
      }
    );

    
    if(this.notes_id!=0)
    {
      this._notes_data.getNoteById(this.notes_id).subscribe(

        (data:NotesModel[])=>{
         this.notes_title=data[0].notes_title;
          this.notes=data[0].notes;
          this.fk_sub_id=data[0].fk_sub_id;
          this.fk_u_email_id=data[0].fk_u_email_id;
        }
      );
    }
  }


  addnotes()
  {
       console.log("add notes"); 

        if(this.notes_id==0)
    {
    this._notes_data.addNotes(new NotesModel(this.notes_id,this.notes_title,this.notes,this.fk_u_email_id,this.fk_sub_id))
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
    else{

        this._notes_data.updateNotes(new NotesModel(this.notes_id,this.notes_title,this.notes,this.fk_u_email_id,this.fk_sub_id))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/allnotes']); 
    },
    function(error){

      alert(error);
    },
    function(){
      alert('Updated');
      }
    );
  }

    }
  }

 


