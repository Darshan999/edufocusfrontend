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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserDataService,QuestionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
