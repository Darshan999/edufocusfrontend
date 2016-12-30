import { Routes,RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './user/adduser.component';
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
    {path:'allquestions',component:QuestionComponent},
    {path:'addquestion',component:AddquestionComponent},
    {path:'allblogs',component:BlogComponent},
    {path:'addblog',component:AddblogComponent},
    {path:'allnews',component:NewsComponent},
    {path:'addnews',component:AddnewsComponent},
    {path:'allnotes',component:NotesComponent},
    {path:'addnotes',component:AddnotesComponent}
    
    
    
];

export const routing=RouterModule.forRoot(router);