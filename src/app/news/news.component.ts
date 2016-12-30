import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsModel } from '../shared/news-model';
import { NewsDataService } from '../shared/news-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

allNews:NewsModel[]=[];

  constructor(public _news_data:NewsDataService,public _router:Router) { }

  ngOnInit() {

     this._news_data.getAllNews().subscribe(

      (data:NewsModel[])=>{
        this.allNews=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New News Added');
      }
    );
  }

  addnews()
  {
    this._router.navigate(['/addnews']);
  }

  deletenews(item:NewsModel)
  {
    this._news_data.deleteNews(item.news_id).subscribe(
      (data:any)=>{
      this.allNews.splice(this.allNews.indexOf(item),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }
    );
  }



}
