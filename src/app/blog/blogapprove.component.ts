import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogjoinModel  } from '../shared/blogjoin-model';
import { BlogDataService } from '../shared/blog-data.service';
import { BlogModel } from '../shared/blog-model';
@Component({
  selector: 'app-blogapprove',
  templateUrl: './blogapprove.component.html',
  styleUrls: ['./blogapprove.component.css']
})
export class BlogapproveComponent implements OnInit {

      blog_id:number;
    blog_title:string='';
    blog_desc:string='';
    blog_date:string='';
    blog_time:string='';
    blog_photo:string='';
    flag:string='active';
    view:number;
    fk_u_email_id:string='';
    fk_sub_id:number;
    sub_name:string='';

  allBlogjoin:BlogjoinModel[]=[];
  constructor(public _blog_data:BlogDataService,public _router:Router) { }

  ngOnInit() {

    this._blog_data.getAllBlogsJoinflag().subscribe(

      (data:BlogjoinModel[])=>{
        this.allBlogjoin=data;
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('New flag Blog Added');
      }
    );
  }

  approveblog(item:BlogModel)
  {
    this.blog_id=item.blog_id;
     this._blog_data.updateBlogflag(new BlogModel(this.blog_id,this.blog_title,this.blog_desc,this.blog_date,this.blog_time,this.blog_photo,this.flag,this.view,this.fk_u_email_id,this.fk_sub_id))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/allblogs']); 
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

