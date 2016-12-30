import { Injectable } from '@angular/core';
import { GroupModel } from './group-model';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class GroupDataService {

  private url:string="http://localhost:3000/groups/";

  constructor(private _http:Http) { }

  getAllGroups()
  {
    return this._http.get(this.url).map((res:Response)=>res.json());
  }
  getGroupById(id:number)
  {
    return this._http.get(this.url+id).map((res:Response)=>res.json());
  }

  addGroup(group:GroupModel)
  {
    let body=JSON.stringify(group);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.post(this.url,body,requestoptions).map((res:Response)=>res.json()); 
  }
   deleteGroup(id:number)
  {
    
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.delete(this.url+id,requestoptions).map((res:Response)=>res.json());
  }

   updateGroup(group:GroupModel)
  {
    let body=JSON.stringify(group);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.put(this.url+group.grp_id,body,requestoptions).map((res:Response)=>res.json());
  }
}
