import { Injectable } from '@angular/core';
import { QuestionModel } from './question-model';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class QuestionDataService {

private url:string="http://localhost:3000/questions/";
private url1:string="http://localhost:3000/questionjoin/";

  constructor(private _http:Http) { }

  getAllQuestions()
  {
    return this._http.get(this.url).map((res:Response)=>res.json());
  }

  getAllQuestionsJoin()
  {
    return this._http.get(this.url1).map((res:Response)=>res.json());
  }

  getQuestionByIdJoin(id:number)
  {
    return this._http.get(this.url1+id).map((res:Response)=>res.json());
  }


  getQuestionById(id:number)
  {
    return this._http.get(this.url+id).map((res:Response)=>res.json());
  }

  addQuestion(item:QuestionModel)
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.post(this.url,body,requestoptions).map((res:Response)=>res.json());
  }

  deleteQuestion(id:number)
  {

    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.delete(this.url+id,requestoptions).map((res:Response)=>res.json());
  }
  deleteAll(item:QuestionModel[])
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoption=new RequestOptions({headers:headers});
    return this._http.post(this.url+1,body,requestoption).map((res:Response)=>res.json());
  
  }


  updateQuestion(item:QuestionModel)
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.put(this.url+item.que_id,body,requestoptions).map((res:Response)=>res.json());
  }
}
