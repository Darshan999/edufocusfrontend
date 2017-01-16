import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { UserModel } from '../shared/user-model';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

   path='';
   public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];

  u_email_id:string='';
  u_name:string='';
  u_password:string='';
  u_photo:string='';
  u_mobile_no:string='';
  u_gender:string='';
  u_active:string='';
  u_status:string='';
  u_type:string='';
  flag:boolean=false;
private _subscription:Subscription;

  constructor(private _user_data:UserDataService,public _router:Router,private _acroute:ActivatedRoute,private changeDetectorRef: ChangeDetectorRef) { }


  ngOnInit() {
     this._subscription=this._acroute.params.subscribe(

      (params:any)=>{

       this.u_email_id=params["u_email_id"];
      }
    );
  
    if(this.u_email_id!='0')
    {
      this.flag=true;
      this._user_data.getUserById(this.u_email_id).subscribe(

        (data:UserModel[])=>{
          this.u_name=data[0].u_name,
          this.u_photo=data[0].u_photo;
          this.u_mobile_no=data[0].u_mobile_no;
          
          this.u_gender=data[0].u_gender;
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
     this.u_photo=reader.result;
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

  adduser()
  {
    this._user_data.addUser(new UserModel(this.u_email_id,this.u_name,'1234',this.u_photo,this.u_mobile_no,this.u_gender,'approve','on','admin'))
    .subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/allusers']);
      },
      function(error){},
      function()
      {
        alert('added');
      }
    );
  }


  updateuser()
  {
     this._user_data.updateUser(new UserModel(this.u_email_id,this.u_name,this.u_password,this.u_photo,this.u_mobile_no,this.u_gender,this.u_active,this.u_status,this.u_type))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/allusers']); 
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
