import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { QuestionModel } from '../shared/question-model';
import { QuestionDataService } from '../shared/question-data.service';
import { QuestionjoinModel } from '../shared/questionjoin-model';
import { SubjectModel } from '../shared/subject-model';
import { SubjectDataService } from '../shared/subject-data.service';

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
sub_name:string='';


private _subscription:Subscription;
allSubject:SubjectModel[]=[];

  constructor(public _subject_data:SubjectDataService,public _question_data:QuestionDataService,public _router:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {

    this._subscription=this._acroute.params.subscribe(

      (params:any)=>{

       this.que_id =params["que_id"];
      }
    );
    this._subject_data.getAllSubjects().subscribe(
      (data:SubjectModel[])=>{
        this.allSubject=data;
        this.fk_sub_id=this.allSubject[0].sub_id;
        
      }
    );
    if(this.que_id!=0)
    {
      this._question_data.getQuestionById(this.que_id).subscribe(

        (data:QuestionjoinModel[])=>{
          this.que_title=data[0].que_title,
          this.que_desc=data[0].que_desc;
          this.que_photo=data[0].que_photo;
          this.sub_name=data[0].sub_name;
        }
      );
    }
  }

  addquestion()
  {
    
    this._question_data.addQuestion(new QuestionModel(this.que_id,this.que_title,this.que_desc,'11/3/2017','10',this.que_photo,'approve',10,this.fk_u_email_id,this.fk_sub_id))
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

  updatequestion()
  {
     this._question_data.updateQuestion(new QuestionModel(this.que_id,this.que_title,this.que_desc,this.que_date,this.que_time,this.que_photo,this.flag,this.view,this.fk_u_email_id,this.fk_sub_id))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/allquestions']); 
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
