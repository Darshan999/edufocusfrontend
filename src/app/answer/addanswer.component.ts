import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AnswerModel } from '../shared/answer-model';
import { AnswerDataService } from '../shared/answer-data.service';
import { AnswerJoinModel } from '../shared/answer-join-model';
import { Subscription } from 'rxjs/Rx';
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
    flag:string='';
    view:number;
    fk_que_id:number;
    fk_u_email_id:string='';

private _subscription:Subscription;
allAnswer:AnswerModel[]=[];
  constructor(private _answer_data:AnswerDataService,public _router:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {


     this._subscription=this._acroute.params.subscribe(

      (params:any)=>{

       this.ans_id =params["ans_id"];
      }
    );
  /*  this._answer_data.getAllAnswers().subscribe(
      (data:AnswerModel[])=>{
        this.allAnswer=data;
      }
    ); */

    
    if(this.ans_id!=0)
    {
      this._answer_data.getAnswerById(this.ans_id).subscribe(

        (data:AnswerModel[])=>{
          this.ans_desc=data[0].ans_desc;
          this.ans_date=data[0].ans_date;
          this.ans_time=data[0].ans_time;
        }
      );
    }
  }

   addanswer()
  {

    if(this.ans_id==0)
    {
    this._answer_data.addAnswer(new AnswerModel(this.ans_id,this.ans_desc,this.ans_date,this.ans_time,this.flag,this.view,this.fk_que_id,this.fk_u_email_id))
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
  else{

    this._answer_data.updateAnswer(new AnswerModel(this.ans_id,this.ans_desc,this.ans_date,this.ans_time,this.flag,this.view,this.fk_que_id,this.fk_u_email_id))
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


}
