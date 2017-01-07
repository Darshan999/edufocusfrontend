import { Injectable } from '@angular/core';
import { BlogModel } from './blog-model';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BlogDataService {

private url:string="http://localhost:3000/blogs/";
private url1:string="http://localhost:3000/blogjoin/";

  constructor(private _http:Http) { }

  getAllBlogs()
  {
    return this._http.get(this.url).map((res:Response)=>res.json());
  }

  getBlogById(id:number)
  {
    return this._http.get(this.url+id).map((res:Response)=>res.json());
  }

   getAllBlogsJoin()
  {
    return this._http.get(this.url1).map((res:Response)=>res.json());
  }

  addBlog(item:BlogModel)
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.post(this.url,body,requestoptions).map((res:Response)=>res.json());
  }

  deleteBlog(id:number)
  {
    
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.delete(this.url+id,requestoptions).map((res:Response)=>res.json());
  }

    deleteAll(item:BlogModel[])
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoption=new RequestOptions({headers:headers});
    return this._http.post(this.url+1,body,requestoption).map((res:Response)=>res.json());
  
  }


  updateBlog(item:BlogModel)
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.put(this.url+item.blog_id,body,requestoptions).map((res:Response)=>res.json());
  }

}
