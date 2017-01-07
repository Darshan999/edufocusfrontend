import { Injectable } from '@angular/core';
import { UserModel } from './user-model';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserDataService {

  private url:string="http://localhost:3000/users/";
  

  constructor(private _http:Http) { }

  getAllUsers()
  {
    return this._http.get(this.url).map((res:Response)=>res.json());
  }

  getUserById(id:string)
  {
    return this._http.get(this.url+id).map((res:Response)=>res.json());
  }

  addUser(item:UserModel)
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.post(this.url,body,requestoptions).map((res:Response)=>res.json());
  }

  deleteUser(id:string)
  {
    
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.delete(this.url+id,requestoptions).map((res:Response)=>res.json());
  }

  deleteAll(item:UserModel[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this.url+1,body,requestoption).map((res:Response)=>res.json());
  
  }

  updateUser(item:UserModel)
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.put(this.url+item.u_email_id,body,requestoptions).map((res:Response)=>res.json());
  }

}
