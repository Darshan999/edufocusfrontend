import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsModel } from '../shared/news-model';
import { NewsjoinModel } from '../shared/newsjoin-model';
import { NewsDataService } from '../shared/news-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

allNewsjoin:NewsjoinModel[]=[];
delarr:NewsjoinModel[]=[];

  constructor(public _news_data:NewsDataService,public _router:Router) { }

  ngOnInit() {

     this._news_data.getAllNewsJoin().subscribe(

      (data:NewsjoinModel[])=>{
        this.allNewsjoin=data;
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
    this._router.navigate(['/addnews',0]);
  }

  deletenews(item:NewsjoinModel)
  {
    if(confirm("Are You Sure want to delete?"))
    {
    this._news_data.deleteNews(item.news_id).subscribe(
      (data:any)=>{
      this.allNewsjoin.splice(this.allNewsjoin.indexOf(item),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }
    );
    }
  }

   i:number=0;
    checkChange(item:NewsjoinModel)
    {
      
        if(this.delarr.find(x=>x==item))
        {
          this.delarr.splice(this.delarr.indexOf(item),1);
        }
        else
        {
          this.delarr.push(item);
        }
        console.log(this.delarr);
      
    }

    deleteAll()
    {
      this._news_data.deleteAll(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allNewsjoin.find(x=>x==this.delarr[this.i]))
                {
                   this.allNewsjoin.splice(this.allNewsjoin.indexOf(this.delarr[this.i]),1);
                 }
            }
            this.delarr=[];
            
          },
          function(err){console.log(err);},
          function(){

            console.log("Complete");
          }
        
      );
    }
 

  updatenews(item:NewsjoinModel)
  {
      this._router.navigate(['/addnews',item.news_id]);
  }




}
