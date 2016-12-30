import { Injectable } from '@angular/core';
import { AnswerModel } from './answer-model';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AnswerDataService {

  private url:string="http://localhost:3000/answers/";

  constructor(private _http:Http) { }

   getAllAnswers()
  {
    return this._http.get(this.url).map((res:Response)=>res.json());
  }

  getAnswerById(id:number)
  {
    return this._http.get(this.url+id).map((res:Response)=>res.json());
  }

  addAnswer(answer:AnswerModel)
  {
    let body=JSON.stringify(answer);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.post(this.url,body,requestoptions).map((res:Response)=>res.json()); 
  }

   deleteAnswer(id:number)
  {
    
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.delete(this.url+id,requestoptions).map((res:Response)=>res.json());
  }

}
