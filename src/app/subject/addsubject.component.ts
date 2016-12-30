import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SubjectModel } from '../shared/subject-model';
import { SubjectDataService } from '../shared/subject-data.service';
@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {


  sub_id:number;
  sub_name:string='';
  fk_que_id:number;
  fk_u_email_id:string='';

  constructor(private _subject_data:SubjectDataService,public _router:Router) { }

  ngOnInit() {
  }

   addsubject()
  {
    this._subject_data.addSubject(new SubjectModel(this.sub_id,this.sub_name,this.fk_que_id,this.fk_u_email_id))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allsubjects']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }

}
