import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoModel } from '../shared/video-model';
import { VideoDataService } from '../shared/video-data.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  allVideo:VideoModel[]=[];
  constructor(public _video_data:VideoDataService,public _router:Router) { }

  ngOnInit() {



    this._video_data.getAllVideos().subscribe(

      (data:VideoModel[])=>{

        this.allVideo=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New Video Added');
      }
    );
  }

   addvideo()
  {
    this._router.navigate(['/addvideo']);
  }

  deletevideo(video:VideoModel)
{
  this._video_data.deleteVideo(video.video_id).subscribe(
    (data:any)=>{
      this.allVideo.splice(this.allVideo.indexOf(video),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }

  );
}

}
