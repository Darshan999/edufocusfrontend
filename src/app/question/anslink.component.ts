import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AnswerJoinModel } from '../shared/answer-join-model';
import { AnswerModel } from '../shared/answer-model';
import { AnswerDataService } from '../shared/answer-data.service';
import { Subscription } from 'rxjs/Rx';
import { QuestionjoinModel } from '../shared/questionjoin-model';
import { QuestionModel } from '../shared/question-model';
import { QuestionDataService } from '../shared/question-data.service';



@Component({
  selector: 'app-anslink',
  templateUrl: './anslink.component.html',
  styleUrls: ['./anslink.component.css']
})
export class AnslinkComponent implements OnInit {

  allansbyid:AnswerJoinModel[]=[];
private _subscription:Subscription;
que_id:number;
que_title:string='';
que_desc:string='';
u_name:string='';
ans_desc:string='';
u_name1:string='';
que_date:string='';
ans_date:string='';

  constructor(public _question_data:QuestionDataService,public _answer_data:AnswerDataService,public _router:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {


    
    this._subscription=this._acroute.params.subscribe(

      (params:any)=>{

       this.que_id =params["que_id"];
        console.log(this.que_id);
      }
    );

    this._question_data.getQuestionByIdJoin(this.que_id).subscribe(

        (data:QuestionjoinModel[])=>{
          this.que_title=data[0].que_title,
          this.que_desc=data[0].que_desc;
            this.u_name=data[0].u_name;
            this.que_date=data[0].que_date;
          console.log(this.que_date);
        }
      );


    /*this._ansdata.getAnswerByQueId(this.faq_id).subscribe(

        (data:AnswerjoinModel[])=>{
         this.allansbyid=data;
          console.log(this.faq_id);
        }
      );*/

      this._answer_data.getAnswerByIdJoin(this.que_id).subscribe(

      (data:AnswerJoinModel[])=>{
        this.allansbyid=data;
        this.ans_desc=this.allansbyid[0].ans_desc;
        this.u_name1=this.allansbyid[0].u_name;
        this.ans_date=this.allansbyid[0].ans_date;
        console.log(data);
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('answer aai gai');
      }
      
    );

  }


  }


