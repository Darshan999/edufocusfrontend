import { Injectable } from '@angular/core';
import { VideoModel } from './video-model';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class VideoDataService {

  private url:string="http://localhost:3000/videos/";

  constructor(private _http:Http) { }

   getAllVideos()
  {
    return this._http.get(this.url).map((res:Response)=>res.json());
  }

  getVideoById(id:number)
  {
    return this._http.get(this.url+id).map((res:Response)=>res.json());
  }

  addVideo(video:VideoModel)
  {
    let body=JSON.stringify(video);
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.post(this.url,body,requestoptions).map((res:Response)=>res.json());
  }

  deleteVideo(id:number)
  {
    
    let headers=new Headers({'Content-Type':'application/json'});
    let requestoptions=new RequestOptions({headers:headers});

    return this._http.delete(this.url+id,requestoptions).map((res:Response)=>res.json());
  }


}
