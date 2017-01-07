import { Injectable } from '@angular/core';
import { NewsModel } from './news-model';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NewsDataService {

  private url:string="http://localhost:3000/news/";
  private url1:string="http://localhost:3000/newsjoin/";

  constructor(private _http:Http) { }

  getAllNews()
  {
    return this._http.get(this.url).map((res:Response)=>res.json());
  }
  getNewsById(id:number)
  {
    return this._http.get(this.url+id).map((res:Response)=>res.json());
  }
   getAllNewsJoin()
  {
    return this._http.get(this.url1).map((res:Response)=>res.json());
  }
  addNews(item:NewsModel)
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.post(this.url,body,requestoptions).map((res:Response)=>res.json());
  }
  deleteNews(id:number)
  {
    
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.delete(this.url+id,requestoptions).map((res:Response)=>res.json());
  }
   deleteAll(item:NewsModel[])
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoption=new RequestOptions({headers:headers});
    return this._http.post(this.url+1,body,requestoption).map((res:Response)=>res.json());
  
  }

  updateNews(item:NewsModel)
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.put(this.url+item.news_id,body,requestoptions).map((res:Response)=>res.json());
  }


}
