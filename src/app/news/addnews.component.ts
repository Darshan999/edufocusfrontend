import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NewsModel } from '../shared/news-model';
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

  constructor(public _news_data:NewsDataService,public _router:Router) { }

  ngOnInit() {
  }

  addnews()
  {
    this._news_data.addNews(new NewsModel(this.news_id,this.news_title,this.news_desc,this.news_photo,this.news_date,this.news_time,this.fk_u_email_id))
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
}
