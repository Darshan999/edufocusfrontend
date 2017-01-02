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

import { QuestionComponent } from './question/question.component';
import { AddquestionComponent } from './question/addquestion.component';
import { BlogComponent } from './blog/blog.component';
import { AddblogComponent } from './blog/addblog.component';
import { NewsComponent } from './news/news.component';
import { AddnewsComponent } from './news/addnews.component';
import { NotesComponent } from './notes/notes.component';
import { AddnotesComponent } from './notes/addnotes.component';

const router:Routes=[
    {path:'',redirectTo:'/allusers',pathMatch:'full'},
    {path:'allusers',component:UserComponent},
    {path:'adduser',component:AdduserComponent},

    {path:'allgroups',component:GroupComponent},
     {path:'addgroup',component:AddgroupComponent},
      {path:'allcourses',component:CourseComponent},
     {path:'addcourse/:course_id',component:AddcourseComponent},
     {path:'allsubjects',component:SubjectComponent},
     {path:'addsubject/:sub_id',component:AddsubjectComponent},
      {path:'allanswers',component:AnswerComponent},
       {path:'addanswer',component:AddanswerComponent},
       {path:'allvideos',component:VideoComponent},
       {path:'addvideo',component:AddvideoComponent},




    {path:'allquestions',component:QuestionComponent},
    {path:'addquestion/:que_id',component:AddquestionComponent},
    {path:'allblogs',component:BlogComponent},
    {path:'addblog',component:AddblogComponent},
    {path:'allnews',component:NewsComponent},
    {path:'addnews',component:AddnewsComponent},
    {path:'allnotes',component:NotesComponent},
    {path:'addnotes',component:AddnotesComponent}
    
    
    

];

export const routing=RouterModule.forRoot(router);