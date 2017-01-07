import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogModel } from '../shared/blog-model';
import { BlogjoinModel } from '../shared/blogjoin-model';
import { BlogDataService } from '../shared/blog-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  allBlogjoin:BlogjoinModel[]=[];
  delarr:BlogjoinModel[]=[];
  constructor(public _blog_data:BlogDataService,public _router:Router) { }

  ngOnInit() {

    this._blog_data.getAllBlogsJoin().subscribe(

      (data:BlogjoinModel[])=>{
        this.allBlogjoin=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New Blog Added');
      }
    );
  }

  addblog()
  {
    this._router.navigate(['/addblog',0]);
  }

  deleteblog(item:BlogjoinModel)
  {
     if(confirm("Are You Sure want to delete?"))
    {
   
    this._blog_data.deleteBlog(item.blog_id).subscribe(
      (data:any)=>{
      this.allBlogjoin.splice(this.allBlogjoin.indexOf(item),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }
    );
  }
  }
   i:number=0;
    checkChange(item:BlogjoinModel)
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
      this._blog_data.deleteAll(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allBlogjoin.find(x=>x==this.delarr[this.i]))
                {
                   this.allBlogjoin.splice(this.allBlogjoin.indexOf(this.delarr[this.i]),1);
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
 

  updateblog(item:BlogjoinModel)
  {
      this._router.navigate(['/addblog',item.blog_id]);
  }


}
