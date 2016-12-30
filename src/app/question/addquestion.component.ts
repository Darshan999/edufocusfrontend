import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { QuestionModel } from '../shared/question-model';
import { QuestionDataService } from '../shared/question-data.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

que_id:number;
que_title:string='';
que_desc:string='';
que_date:string='';
que_time:string='';
que_photo:string='';
flag:string='';
view:number;
fk_u_email_id:string='';
fk_sub_id:number;

  constructor(public _question_data:QuestionDataService,public _router:Router) { }

  ngOnInit() {
  }

  addquestion()
  {
    this._question_data.addQuestion(new QuestionModel(this.que_id,this.que_title,this.que_desc,this.que_date,this.que_time,this.que_photo,this.flag,this.view,this.fk_u_email_id,this.fk_sub_id))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allquestions']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }

}
