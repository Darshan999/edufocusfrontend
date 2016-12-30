import { Routes,RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './user/adduser.component';
import { GroupComponent } from './group/group.component';
import { AddgroupComponent } from './group/addgroup.component';
import { CourseComponent } from './course/course.component';
import { AddcourseComponent } from './course/addcourse.component';
import { SubjectComponent } from './subject/subject.component';
import { AddsubjectComponent } from './subject/addsubject.component';
import { AnswerComponent } from './answer/answer.component';
import { AddanswerComponent } from './answer/addanswer.component';
import { VideoComponent } from './video/video.component';
import {  AddvideoComponent} from './video/addvideo.component';
const router:Routes=[
    {path:'',redirectTo:'/allusers',pathMatch:'full'},
    {path:'allusers',component:UserComponent},
    {path:'adduser',component:AdduserComponent},
    {path:'allgroups',component:GroupComponent},
     {path:'addgroup',component:AddgroupComponent},
      {path:'allcourses',component:CourseComponent},
     {path:'addcourse',component:AddcourseComponent},
     {path:'allsubjects',component:SubjectComponent},
     {path:'addsubject',component:AddsubjectComponent},
      {path:'allanswers',component:AnswerComponent},
       {path:'addanswer',component:AddanswerComponent},
       {path:'allvideos',component:VideoComponent},
       {path:'addvideo',component:AddvideoComponent},



];

export const routing=RouterModule.forRoot(router);