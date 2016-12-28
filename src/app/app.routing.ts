import { Routes,RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './user/adduser.component';


const router:Routes=[
    {path:'',redirectTo:'/allusers',pathMatch:'full'},
    {path:'allusers',component:UserComponent},
    {path:'adduser',component:AdduserComponent}


];

export const routing=RouterModule.forRoot(router);