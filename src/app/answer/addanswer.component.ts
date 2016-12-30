import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AnswerModel } from '../shared/answer-model';
import { AnswerDataService } from '../shared/answer-data.service';
@Component({
  selector: 'app-addanswer',
  templateUrl: './addanswer.component.html',
  styleUrls: ['./addanswer.component.css']
})
export class AddanswerComponent implements OnInit {

    ans_id:number;
    ans_desc:string='';
    ans_date:string='';
    ans_time:string='';
    view:number;
    fk_que_id:number;
    fk_u_email_id:string='';

  constructor(private _answer_data:AnswerDataService,public _router:Router) { }

  ngOnInit() {
  }

   addanswer()
  {
    this._answer_data.addAnswer(new AnswerModel(this.ans_id,this.ans_desc,this.ans_date,this.ans_time,this.view,this.fk_que_id,this.fk_u_email_id))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allanswers']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }


}
