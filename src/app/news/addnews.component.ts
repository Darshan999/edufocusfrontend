import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
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

 path='';
   public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];

news_id:number;
news_title:string='';
news_desc:string='';
news_photo:string='';
news_date:string='';
news_time:string='';
fk_u_email_id:string='';

private _subscription:Subscription;

  constructor(public _news_data:NewsDataService,public _router:Router,private _acroute:ActivatedRoute,private changeDetectorRef: ChangeDetectorRef) { }

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

 fileChange(input){
  this.readFiles(input.files);
}
readFile(file, reader, callback){
  reader.onload = () => {
    callback(reader.result);
     this.news_photo=reader.result;
    console.log(reader.result);
  }

  reader.readAsDataURL(file);
}
readFiles(files, index=0){
  // Create the file reader
  let reader = new FileReader();
  
  // If there is a file
  if(index in files){
    // Start reading this file
    this.readFile(files[index], reader, (result) =>{
      // Create an img element and add the image file data to it
      var img = document.createElement("img");
      img.src = result;
  
      // Send this img to the resize function (and wait for callback)
      this.resize(img, 250, 250, (resized_jpeg, before, after)=>{
        // For debugging (size in bytes before and after)
        this.debug_size_before.push(before);
        this.debug_size_after.push(after);
  
        // Add the resized jpeg img source to a list for preview
        // This is also the file you want to upload. (either as a
        // base64 string or img.src = resized_jpeg if you prefer a file). 
        this.file_srcs.push(resized_jpeg);
  
        // Read the next file;
        this.readFiles(files, index+1);
      });
    });
  }else{
    // When all files are done This forces a change detection
    this.changeDetectorRef.detectChanges();
  }
}
resize(img, MAX_WIDTH:number, MAX_HEIGHT:number, callback){
  // This will wait until the img is loaded before calling this function
  return img.onload = () => {

    // Get the images current width and height
    var width = img.width;
    var height = img.height;

    // Set the WxH to fit the Max values (but maintain proportions)
    if (width > height) {
        if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
        }
    } else {
        if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
        }
    }

    // create a canvas object
    var canvas = document.createElement("canvas");

    // Set the canvas to the new calculated dimensions
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");  

    ctx.drawImage(img, 0, 0,  width, height); 

    // Get this encoded as a jpeg
    // IMPORTANT: 'jpeg' NOT 'jpg'
    var dataUrl = canvas.toDataURL('image/jpeg');

    // callback with the results
    callback(dataUrl, img.src.length, dataUrl.length);
  };
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
