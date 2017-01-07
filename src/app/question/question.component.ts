import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionModel } from '../shared/question-model';
import { QuestionjoinModel } from '../shared/questionjoin-model';
import { QuestionDataService } from '../shared/question-data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {


allQuestionjoin:QuestionjoinModel[]=[];
delarr:QuestionjoinModel[]=[];

  constructor(public _question_data:QuestionDataService,public _router:Router) { }

  ngOnInit() {

    this._question_data.getAllQuestionsJoin().subscribe(
      (data:QuestionjoinModel[])=>{
        this.allQuestionjoin=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New Question Added');
      }
    );
  }

  ques(item:QuestionjoinModel){
    this._router.navigate(['/anslink',item.que_id]);
  }

 addquestion()
  {
    this._router.navigate(['/addquestion',0]);
  }

  deletequestion(item:QuestionjoinModel)
  {
    if(confirm("Are You Sure want to delete?"))
    {
      this._question_data.deleteQuestion(item.que_id).subscribe(
        (data:any)=>{
        this.allQuestionjoin.splice(this.allQuestionjoin.indexOf(item),1);
        alert("Deleted");
     },
      function(error){
        alert(error);
      }
      );
    }
  }

    i:number=0;
    checkChange(item:QuestionjoinModel)
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
      this._question_data.deleteAll(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allQuestionjoin.find(x=>x==this.delarr[this.i]))
                {
                   this.allQuestionjoin.splice(this.allQuestionjoin.indexOf(this.delarr[this.i]),1);
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
 

  updatequestion(item:QuestionjoinModel)
  {
      this._router.navigate(['/addquestion',item.que_id]);
  }

}
