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
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header.component';
import { QuestionDataService } from './shared/question-data.service';
import { routing } from './app.routing';
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
    AddvideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserDataService,QuestionDataService,GroupDataService,CourseDataService,SubjectDataService,AnswerDataService,VideoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
