import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { VideoModel } from '../shared/video-model';
import { VideoDataService } from '../shared/video-data.service';
@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {

  video_id:number;
  video_title:string='';
  video:string='';
  flag:string='';
  fk_u_email_id:string='';
  fk_sub_id:number;

  constructor(private _video_data:VideoDataService,public _router:Router) { }

  ngOnInit() {
  }

   addvideo()
  {
    this._video_data.addVideo(new VideoModel(this.video_id,this.video_title,this.video,this.flag,this.fk_u_email_id,this.fk_sub_id))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allvideos']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }


}
