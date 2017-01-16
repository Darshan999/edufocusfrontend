import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { QuestionModel } from '../shared/question-model';
import { QuestionDataService } from '../shared/question-data.service';
import { QuestionjoinModel } from '../shared/questionjoin-model';
import { SubjectModel } from '../shared/subject-model';
import { SubjectDataService } from '../shared/subject-data.service';


@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

 path='';
   public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];

que_id:number;
que_title:string='';
que_desc:string='';
que_date:string='';
que_time:string='';
que_photo:string='';
flag:string='';
view:number;
fk_u_email_id:string='';
fk_sub_id:number;
sub_name:string='';


private _subscription:Subscription;
allSubject:SubjectModel[]=[];


  constructor(public _subject_data:SubjectDataService,public _question_data:QuestionDataService,public _router:Router,private _acroute:ActivatedRoute,private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {

    this._subscription=this._acroute.params.subscribe(

      (params:any)=>{

       this.que_id =params["que_id"];
      }
    );
    this._subject_data.getAllSubjects().subscribe(
      (data:SubjectModel[])=>{
        this.allSubject=data;
        this.fk_sub_id=this.allSubject[0].sub_id;
        
      }
    );

    
    if(this.que_id!=0)
    {
      this._question_data.getQuestionById(this.que_id).subscribe(


      /*  (data:QuestionModel[])=>{
          this.que_title=data[0].que_title;
*/

        (data:QuestionjoinModel[])=>{
          this.que_title=data[0].que_title,

          this.que_desc=data[0].que_desc;
          this.que_photo=data[0].que_photo;
          this.sub_name=data[0].sub_name;
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
     this.que_photo=reader.result;
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

  addquestion()
  {
    
    this._question_data.addQuestion(new QuestionModel(this.que_id,this.que_title,this.que_desc,'2017-03-11','00:00:10',this.que_photo,'approve',10,this.fk_u_email_id,this.fk_sub_id))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allquestions']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }

  updatequestion()
  {
     this._question_data.updateQuestion(new QuestionModel(this.que_id,this.que_title,this.que_desc,this.que_date,this.que_time,this.que_photo,this.flag,this.view,this.fk_u_email_id,this.fk_sub_id))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/allquestions']); 
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
