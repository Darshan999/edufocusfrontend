import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { SubjectModel } from '../shared/subject-model';
import { SubjectDataService } from '../shared/subject-data.service';
import { Subscription } from 'rxjs/Rx';
import { CourseModel } from '../shared/course-model';
import { CourseDataService } from '../shared/course-data.service';
import { UserModel } from '../shared/user-model';
import { UserDataService } from '../shared/user-data.service';
import { SubjectJoinModel } from '../shared/Subject-Join-model';
@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {

   path='';
   public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];


  sub_id:number;
  sub_name:string='';
  sub_photo:string='';
  fk_course_id:number;
  fk_u_email_id:string='rutulthakkar8997@gmail.com';
  u_name:string='';

    private _subscription:Subscription;
    allCourse:CourseModel[]=[];
    allUser:UserModel[]=[];
    allSubjectjoin:SubjectJoinModel[]=[];

  constructor(private _subject_data:SubjectDataService,private changeDetectorRef: ChangeDetectorRef,public _user_data:UserDataService,private _course_data:CourseDataService,public _router:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {

    
    this._subscription=this._acroute.params.subscribe(    
        (params:any)=>{

          this.sub_id =params["sub_id"];
          }
    );

     this._course_data.getAllCourses().subscribe(
      (data:CourseModel[])=>{
        this.allCourse=data;
        this.fk_course_id=this.allCourse[0].course_id;
      }
    );

     this._user_data.getAllUsers().subscribe(
      (data:UserModel[])=>{
        this.allUser=data;
        this.fk_u_email_id=this.allUser[0].u_email_id;
        
      } 
    );

    if(this.sub_id!=0)
    {
      this._subject_data.getSubjectById
      (this.sub_id).subscribe(

        (data:SubjectModel[])=>{
          this.sub_id=data[0].sub_id;
          this.sub_name=data[0].sub_name;
          this.sub_photo=data[0].sub_photo;
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
     this.sub_photo=reader.result;
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
    addsubject()
  {

    if(this.sub_id==0)
    {
    this._subject_data.addSubject(new SubjectModel(this.sub_id,this.sub_name,this.sub_photo,this.fk_course_id,this.fk_u_email_id))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allsubjects']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }
  else{

    this._subject_data.updateSubject(new SubjectModel(this.sub_id,this.sub_name,this.sub_photo,this.fk_course_id,this.fk_u_email_id))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/allsubjects']); 
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

}
