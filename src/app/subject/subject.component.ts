import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../shared/subject-model';
import { SubjectDataService } from '../shared/subject-data.service';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  allSubject:SubjectModel[]=[];
  constructor(public _subject_data:SubjectDataService,public _router:Router) { }

  ngOnInit() {

    this._subject_data.getAllSubjects().subscribe(

      (data:SubjectModel[])=>{
        this.allSubject=data;
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
  this._router.navigate(['/addsubject']);
}

deletesubject(subject:SubjectModel)
{
  this._subject_data.deleteSubject(subject.sub_id).subscribe(
    (data:any)=>{
      this.allSubject.splice(this.allSubject.indexOf(subject),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }

  );
}

}
