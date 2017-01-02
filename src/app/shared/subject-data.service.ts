import { Injectable } from '@angular/core';
import { SubjectModel } from './subject-model';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class SubjectDataService {

  private url:string="http://localhost:3000/subjects/";
  private url1:string="http://localhost:3000/subjectjoin";
  constructor(private _http:Http) { }

   getAllSubjects()
  {
    return this._http.get(this.url).map((res:Response)=>res.json());
  }
  
   getAllSubjectjoin()
  {
    return this._http.get(this.url1).map((res:Response)=>res.json());
  }
  getSubjectById(id:number)
  {
    return this._http.get(this.url+id).map((res:Response)=>res.json());
  }

  addSubject(subject:SubjectModel)
  {
    let body=JSON.stringify(subject);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.post(this.url,body,requestoptions).map((res:Response)=>res.json()); 
  }
   deleteSubject(id:number)
  {
    
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.delete(this.url+id,requestoptions).map((res:Response)=>res.json());
  }

  deleteAllSubject(item:SubjectModel[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this.url+1,body,requestoption).map((res:Response)=>res.json());
  
  }
  updateSubject(item:SubjectModel){


    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoption=new RequestOptions({headers});

      console.log(this.url+item.sub_id);
    return this._http.put(this.url+item.sub_id,body,requestoption).map((res:Response)=>res.json());


}

}
