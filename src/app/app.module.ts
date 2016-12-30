import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserDataService } from './shared/user-data.service';
import { GroupDataService } from './shared/group-data.service';
import { CourseDataService } from './shared/course-data.service';
import { SubjectDataService } from './shared/subject-data.service';
import { AnswerDataService } from './shared/answer-data.service';
import { VideoDataService } from './shared/video-data.service';
import { NotesDataService } from './shared/notes-data.service';
import { BlogDataService } from './shared/blog-data.service';
import { NewsDataService } from './shared/news-data.service';
import { QuestionDataService } from './shared/question-data.service';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header.component';

import { routing } from './app.routing';

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
import { AddvideoComponent } from './video/addvideo.component';


import { QuestionComponent } from './question/question.component';
import { AddquestionComponent } from './question/addquestion.component';

import { BlogComponent } from './blog/blog.component';
import { AddblogComponent } from './blog/addblog.component';

import { NewsComponent } from './news/news.component';
import { AddnewsComponent } from './news/addnews.component';

import { NotesComponent } from './notes/notes.component';
import { AddnotesComponent } from './notes/addnotes.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    AdduserComponent,

    GroupComponent,
    AddgroupComponent,
    CourseComponent,
    AddcourseComponent,
    SubjectComponent,
    AddsubjectComponent,
    AnswerComponent,
    AddanswerComponent,
    VideoComponent,
    AddvideoComponent,

    QuestionComponent,
    AddquestionComponent,
    BlogComponent,
    AddblogComponent,
    NewsComponent,
    AddnewsComponent,
    NotesComponent,
    AddnotesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],

  providers: [UserDataService,QuestionDataService,GroupDataService,CourseDataService,SubjectDataService,AnswerDataService,VideoDataService,BlogDataService,NewsDataService,NotesDataService],


  bootstrap: [AppComponent]
})
export class AppModule { }
