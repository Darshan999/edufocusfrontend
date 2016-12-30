import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BlogModel } from '../shared/blog-model';
import { BlogDataService } from '../shared/blog-data.service';


@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

blog_id:number;
blog_title:string='';
blog_desc:string='';
blog_date:string='';
blog_time:string='';
blog_photo:string='';
flag:string='';
view:number;
fk_u_email_id:string='';
fk_sub_id:number;

  constructor(public _blog_data:BlogDataService,public _router:Router) { }

  ngOnInit() {
  }

  addblog()
  {
    this._blog_data.addBlog(new BlogModel(this.blog_id,this.blog_title,this.blog_desc,this.blog_date,this.blog_time,this.blog_photo,this.flag,this.view,this.fk_u_email_id,this.fk_sub_id))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allblogs']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }
}
