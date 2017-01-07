import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NewsModel } from '../shared/news-model';
import { NewsjoinModel } from '../shared/newsjoin-model';
import { Subscription } from 'rxjs/Rx';
import { NewsDataService } from '../shared/news-data.service';


@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {

news_id:number;
news_title:string='';
news_desc:string='';
news_photo:string='';
news_date:string='';
news_time:string='';
fk_u_email_id:string='';

private _subscription:Subscription;

  constructor(public _news_data:NewsDataService,public _router:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription=this._acroute.params.subscribe(

      (params:any)=>{

       this.news_id =params["news_id"];
      }
    );
    
    if(this.news_id!=0)
    {
      this._news_data.getNewsById(this.news_id).subscribe(

        (data:NewsjoinModel[])=>{
          this.news_title=data[0].news_title,
          this.news_desc=data[0].news_desc;
          this.news_photo=data[0].news_photo;
        }
      );
    }
  }

  addnews()
  {
    this._news_data.addNews(new NewsModel(this.news_id,this.news_title,this.news_desc,this.news_photo,'11/3/2017','10',this.fk_u_email_id))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allnews']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }

  updatenews()
  {
     this._news_data.updateNews(new NewsModel(this.news_id,this.news_title,this.news_desc,this.news_photo,this.news_date,this.news_time,this.fk_u_email_id))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/allnews']); 
    },
    function(error){

      alert(error);
    },
    function(){
      alert('Updated');
      }
    );
  }
}
