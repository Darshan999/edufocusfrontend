import { Component, OnInit } from '@angular/core';
import { AnswerModel } from '../shared/answer-model';
import { AnswerDataService } from '../shared/answer-data.service';
import { Router } from '@angular/router';
import { AnswerJoinModel } from '../shared/answer-join-model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  allAnswer:AnswerModel[]=[];
  allAnswerjoin:AnswerJoinModel[]=[];

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
    this._router.navigate(['/addanswer',0]);
  }

  deleteanswer(answer:AnswerModel)
{
   if(confirm("Are You Sure want to delete?"))
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


   updateanswer(item:AnswerModel)
  {
   
      this._router.navigate(['/addanswer',item.ans_id]);
  }


}
