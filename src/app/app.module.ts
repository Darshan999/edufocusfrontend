import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserDataService } from './shared/user-data.service';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header.component';
import { QuestionDataService } from './shared/question-data.service';
import { routing } from './app.routing';
import { AdduserComponent } from './user/adduser.component';
import { QuestionComponent } from './question/question.component';
import { AddquestionComponent } from './question/addquestion.component';
import { BlogDataService } from './shared/blog-data.service';
import { BlogComponent } from './blog/blog.component';
import { AddblogComponent } from './blog/addblog.component';
import { NewsDataService } from './shared/news-data.service';
import { NewsComponent } from './news/news.component';
import { AddnewsComponent } from './news/addnews.component';
import { NotesDataService } from './shared/notes-data.service';
import { NotesComponent } from './notes/notes.component';
import { AddnotesComponent } from './notes/addnotes.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    AdduserComponent,
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
  providers: [UserDataService,QuestionDataService,BlogDataService,NewsDataService,NotesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
