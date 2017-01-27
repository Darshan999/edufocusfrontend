import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerJoinModel } from '../shared/answer-join-model';
import { AnswerModel } from '../shared/answer-model';
import { AnswerDataService } from '../shared/answer-data.service';
@Component({
  selector: 'app-answerapprove',
  templateUrl: './answerapprove.component.html',
  styleUrls: ['./answerapprove.component.css']
})
export class AnswerapproveComponent implements OnInit {


    ans_id:number;
    ans_desc:string='';
    ans_date:string='';
    ans_time:string='';
    flag:string='active';
    view:number;
    fk_que_id:number;
    fk_u_email_id:string='';

    allAnswer:AnswerModel[]=[];
  allAnswerjoin:AnswerJoinModel[]=[];


  constructor(public _answer_data:AnswerDataService,public _router:Router) { }

  ngOnInit() {

     this._answer_data.getAllAnswersJoinflag().subscribe(

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

  approveanswer(item:AnswerModel)
  {
    
    this.ans_id=item.ans_id;
    this._answer_data.updateAnswerflag(new AnswerModel(this.ans_id,this.ans_desc,this.ans_date,this.ans_time,this.flag,this.view,this.fk_que_id,this.fk_u_email_id))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/allanswers']); 
    },
    function(error){

      alert(error);
    },
    function(){
      alert('Updated');
      }
    );

  }
}
