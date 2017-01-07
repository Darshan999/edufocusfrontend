import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesModel } from '../shared/notes-model';
import { NotesDataService } from '../shared/notes-data.service';
import { NotesJoinModel } from '../shared/notes-join-model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

allNotes:NotesModel[]=[];
allNotesjoin:NotesJoinModel[]=[];
delarr:NotesModel[]=[];

  constructor(public _notes_data:NotesDataService,public _router:Router) { }

  ngOnInit() {
     this._notes_data.getAllQuestionsJoin().subscribe(

      (data:NotesJoinModel[])=>{
        this.allNotesjoin=data;
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
       console.log("add notes compom="); 
    this._router.navigate(['/addnotes',0]);
  }


  deletenotes(item:NotesJoinModel)
  {
    if(confirm("Are You Sure want to delete?"))
    {
    this._notes_data.deleteNotes(item.notes_id).subscribe(
      (data:any)=>{
      this.allNotesjoin.splice(this.allNotesjoin.indexOf(item),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }
    );
    }
  }

   updatenotes(item:NotesJoinModel)
  {
       console.log("update notes component"); 
      this._router.navigate(['/addnotes',item.notes_id]);
  }




	i:number=0;
    checkChange(item:NotesModel)
    {
      
        if(this.delarr.find(x=>x==item))
        {
          this.delarr.splice(this.delarr.indexOf(item),1);
        }
        else
        {
          this.delarr.push(item);
        }
        console.log(this.delarr);
      
    }
    deleteAll()
    {
      /*if(confirm("Are You Sure want to delete?"))
      {
        for(this.i=0;this.i<=this.delarr.length;this.i++)
        {
          this.deleteUser1(this.delarr[this.i]);
        }
      }*/
      this._notes_data.deleteAllNotes(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allNotes.find(x=>x==this.delarr[this.i]))
                {
                   this.allNotes.splice(this.allNotes.indexOf(this.delarr[this.i]),1);
                 }
            }
            this.delarr=[];
            
          },
          function(err){console.log(err);},
          function(){

            console.log("Complete");
          }
        
      );
    }
 


}
