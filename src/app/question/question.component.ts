import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionModel } from '../shared/question-model';
import { QuestionDataService } from '../shared/question-data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

allQuestion:QuestionModel[]=[];

  constructor(public _question_data:QuestionDataService,public _router:Router) { }

  ngOnInit() {

    this._question_data.getAllQuestions().subscribe(
      (data:QuestionModel[])=>{
        this.allQuestion=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New Question Added');
      }
    );
  }

 addquestion()
  {
    this._router.navigate(['/addquestion']);
  }

  deletequestion(item:QuestionModel)
  {
    this._question_data.deleteQuestion(item.que_id).subscribe(
      (data:any)=>{
      this.allQuestion.splice(this.allQuestion.indexOf(item),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }
    );
  }

}
