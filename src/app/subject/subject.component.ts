import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../shared/subject-model';
import { SubjectDataService } from '../shared/subject-data.service';
import { SubjectJoinModel } from '../shared/subject-join-model';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  allSubject:SubjectModel[]=[];
allSubjectjoin:SubjectJoinModel[]=[];

    delarr:SubjectJoinModel[]=[];

  constructor(public _subject_data:SubjectDataService,public _router:Router) { }

  ngOnInit() {

    this._subject_data.getAllSubjectjoin().subscribe(

      (data:SubjectJoinModel[])=>{
        this.allSubjectjoin=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New User Added');
      }
    );
  }



  addsubject()
{
  this._router.navigate(['/addsubject',0]);
}

deletesubject(subject:SubjectJoinModel)
{
  this._subject_data.deleteSubject(subject.sub_id).subscribe(
    (data:any)=>{
      this.allSubjectjoin.splice(this.allSubjectjoin.indexOf(subject),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }

  );
}

i:number=0;
    checkChange(item:SubjectJoinModel)
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
    deleteallsubject()
    {
      /*if(confirm("Are You Sure want to delete?"))
      {
        for(this.i=0;this.i<=this.delarr.length;this.i++)
        {
          this.deleteUser1(this.delarr[this.i]);
        }
      }*/
      this._subject_data.deleteAllSubject(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allSubjectjoin.find(x=>x==this.delarr[this.i]))
                {
                   this.allSubjectjoin.splice(this.allSubjectjoin.indexOf(this.delarr[this.i]),1);
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
 

 updatesubject(item:SubjectJoinModel)
  {
      this._router.navigate(['/addsubject',item.sub_id]);
  }
}
