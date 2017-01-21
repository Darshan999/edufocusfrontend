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
//ans_desc:string='';
u_name1:string='';
que_date:string='';
//ans_date:string='';
fk_u_email_id="dd@gmail.com";
flag="inactive";

    ans_id:number;
    ans_desc:string='';
    add_ans_desc:string='';
    /*ans_date:string='2016/12/16';
    ans_time:string='20:12:00';*/
    ans_date:string='';
    ans_time:string='';
    ans_flag:string='approve';
    view:number=2;
   // fk_que_id:number;
    fk_ans_u_email_id:string='dd@gmail.com';



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

      this._answer_data.getAnswerByQuestionId(this.que_id).subscribe(

      (data:AnswerJoinModel[])=>{
        this.allansbyid=data;
      // this.ans_desc=this.allansbyid[0].ans_desc;
       // this.u_name1=this.allansbyid[0].u_name;
        //this.ans_date=this.allansbyid[0].ans_date;

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
  addans_desc()
  {
      this._answer_data.addAnswer(new AnswerModel(this.ans_id,this.add_ans_desc,this.ans_date,this.ans_time,this.ans_flag,this.view,this.que_id,this.fk_ans_u_email_id))
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


