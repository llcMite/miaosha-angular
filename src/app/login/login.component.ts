import {Component} from "@angular/core";
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import {Http,Response} from '@angular/http';
import {Router,ActivatedRoute}from "@angular/router";


@Component({
   selector:"app-login",
   templateUrl:"./login.component.html",
   styleUrls:["./login.component.less"]
})
export class Login{
   private user:string='';
   private password:string="";
   private url:string="/api/user/login";
   constructor(
      private message:NzMessageService,
      private http:Http,
      private router:Router
      ){

   }
   login(){
      this.getUser();
   }
   getUser(){
      if(!this.user.trim() || !this.password.trim()){
         return this.message.info('请输入用户名或密码');
      }
      this.getUserService({telphone:this.user,password:this.password}).subscribe((rsp=>{
         let res=rsp._body ? JSON.parse(rsp._body) :{};
         if(res.status=="success"){
            localStorage.setItem("ISLOGIN","TRUE");
            this.message.info("登入成功");
            this.router.navigate(['/admin/user']);
         }else{
            this.message.info("登入失败，用户名或密码错误");
         }
      }))
   }
   getUserService(body:any):Observable<any>{
      return this.http.post(this.url,body);
   }
  
};

