import { Injectable } from '@angular/core';
import { NotesModel } from './notes-model';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class NotesDataService {

  private url:string="http://localhost:3000/notes/";
  private url1:string="http://localhost:3000/notesjoin/";


  constructor(private _http:Http) { }

  getAllNotes()
  {
    return this._http.get(this.url).map((res:Response)=>res.json());
  }
  getAllQuestionsJoin()
  {
    return this._http.get(this.url1).map((res:Response)=>res.json());
  }
  getNoteById(id:number)
  {
    return this._http.get(this.url+id).map((res:Response)=>res.json());
  }
  addNotes(item:NotesModel)
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.post(this.url,body,requestoptions).map((res:Response)=>res.json());
  }
  deleteNotes(id:number)
  {
    
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.delete(this.url+id,requestoptions).map((res:Response)=>res.json());
  }

  deleteAllNotes(item:NotesModel[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this.url+1,body,requestoption).map((res:Response)=>res.json());
  
}

  updateNotes(item:NotesModel)
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.put(this.url+item.notes_id,body,requestoptions).map((res:Response)=>res.json());
  }

}
