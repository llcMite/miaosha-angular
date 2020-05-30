import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {UserComponent} from "./user/user.component"; 
import {Layout} from "./layout/layout.component";
import {Login} from "./login/login.component";
import {ManagementComponent} from "./store/management/management.component";
import {ShoppingComponent} from "./store/shopping/shopping.component";


const routes: Routes = [
  { path: 'login', component: Login },
  { 
    path: "admin",
    component:Layout,
    children:[
      {
        path:'',
        component:UserComponent
      },
      {
        path:"user",
        component:UserComponent
      },
      {
        path:"store-management",
        component:ManagementComponent
      },
      {
        path:"shopping",
        component:ShoppingComponent
      },
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
  declarations: []
})
export class AppRoutingModule {}
