import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {User} from "./user/user.component"; 
import {Layout} from "./layout/layout.component";
import {Login} from "./login/login.component"

const routes: Routes = [
  { path: 'login', component: Login },
  { 
    path: "admin",
    component:Layout,
    children:[
      {
        path:'',
        component:User
      },
      {
        path:"user",
        component:User
      }
    ] 
  },
  {
    path:"",
    redirectTo:"/admin",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    User,
    Layout,
    Login
  ]
})
export class AppRoutingModule {}
