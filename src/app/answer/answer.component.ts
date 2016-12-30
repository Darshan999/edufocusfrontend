import { Component, OnInit } from '@angular/core';
import { AnswerModel } from '../shared/answer-model';
import { AnswerDataService } from '../shared/answer-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  allAnswer:AnswerModel[]=[];
  constructor(public _answer_data:AnswerDataService,public _router:Router) { }

  ngOnInit() {


    this._answer_data.getAllAnswers().subscribe(

      (data:AnswerModel[])=>{

        this.allAnswer=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New Answer Added');
      }
    );

  }

   addanswer()
  {
    this._router.navigate(['/addanswer']);
  }

  deleteanswer(answer:AnswerModel)
{
  this._answer_data.deleteAnswer(answer.ans_id).subscribe(
    (data:any)=>{
      this.allAnswer.splice(this.allAnswer.indexOf(answer),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }

  );
}

}
