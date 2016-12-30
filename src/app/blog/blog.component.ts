import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogModel } from '../shared/blog-model';
import { BlogDataService } from '../shared/blog-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  allBlog:BlogModel[]=[];

  constructor(public _blog_data:BlogDataService,public _router:Router) { }

  ngOnInit() {

    this._blog_data.getAllBlogs().subscribe(

      (data:BlogModel[])=>{
        this.allBlog=data;
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
    this._router.navigate(['/addblog']);
  }

  deleteblog(item:BlogModel)
  {
    this._blog_data.deleteBlog(item.blog_id).subscribe(
      (data:any)=>{
      this.allBlog.splice(this.allBlog.indexOf(item),1);
      alert("Deleted");
    },
    function(error){
      alert(error);
    }
    );
  }

}
