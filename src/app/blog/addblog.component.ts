import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BlogModel } from '../shared/blog-model';
import { BlogjoinModel } from '../shared/blogjoin-model';
import { BlogDataService } from '../shared/blog-data.service';
import { Subscription } from 'rxjs/Rx';
import { SubjectModel } from '../shared/subject-model';
import { SubjectDataService } from '../shared/subject-data.service';

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
sub_name:string='';


private _subscription:Subscription;
allSubject:SubjectModel[]=[];


  constructor(public _subject_data:SubjectDataService,public _blog_data:BlogDataService,public _router:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {

    this._subscription=this._acroute.params.subscribe(

      (params:any)=>{

       this.blog_id =params["blog_id"];
      }
    );
    this._subject_data.getAllSubjects().subscribe(
      (data:SubjectModel[])=>{
        this.allSubject=data;
        this.fk_sub_id=this.allSubject[0].sub_id;
        
      }
    );
    if(this.blog_id!=0)
    {
      this._blog_data.getBlogById(this.blog_id).subscribe(

        (data:BlogjoinModel[])=>{
          this.blog_title=data[0].blog_title,
          this.blog_desc=data[0].blog_desc;
          this.blog_photo=data[0].blog_photo;
          this.sub_name=data[0].sub_name;
        }
      );
    }
  }

  addblog()
  {
    this._blog_data.addBlog(new BlogModel(this.blog_id,this.blog_title,this.blog_desc,'11/3/2017','10',this.blog_photo,'approve',10,this.fk_u_email_id,this.fk_sub_id))
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
  updateblog()
  {
     this._blog_data.updateBlog(new BlogModel(this.blog_id,this.blog_title,this.blog_desc,this.blog_date,this.blog_time,this.blog_photo,this.flag,this.view,this.fk_u_email_id,this.fk_sub_id))
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
