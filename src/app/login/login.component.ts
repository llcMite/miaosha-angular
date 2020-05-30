import { Component } from "@angular/core";
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
   selector: "app-login",
   templateUrl: "./login.component.html",
   styleUrls: ["./login.component.less"]
})
export class Login {
   private loginUrl: string = "/api/user/login";
   private registerUrl: string = '/api/user/register';
   private optCodeUrl: string = '/api/user/getotp'
   loginParam: any = {
      user: '',
      password: ''
   }
   isLoginPage = true
   registerParam = {
      name: '',
      password: '',
      telphone: '',
      age: '',
      gender: '1',
      otpCode: ''
   }
   constructor(
      private message: NzMessageService,
      private http: Http,
      private router: Router
   ) {

   }

   onLogin() {
      let { user, password } = this.loginParam
      if (!user.trim() || !password.trim()) {
         return this.message.info('请输入用户名或密码');
      }
      this.getUserService({ telphone: password, password: password }).subscribe((rsp => {
         let res = rsp._body ? JSON.parse(rsp._body) : {};
         if (res.status == "success") {
            localStorage.setItem("USER", user);
            localStorage.setItem("ISLOGIN", "TRUE");
            localStorage.setItem("USER", user);
            this.message.info("登入成功");
            this.router.navigate(['/admin/user']);
         } else {
            this.message.error("登入失败，用户名或密码错误");
         }
      }))
   }
   getUserService(body: any): Observable<any> {
      return this.http.post(this.loginUrl, body);
   }

   onRegister() {
      let { name, password, telphone, age, gender } = this.registerParam;
      if (!name || !password || !telphone || !age || !gender) {
         return this.message.info("请输入完整的注册信息！")
      }
      this.http.post(this.registerUrl, {
         ...this.registerParam
      }).subscribe((res:any) => {
         let data = JSON.parse(res._body);
         if(data.status=='success'){
            this.message.success('注册成功！')
            this.isLoginPage=true;
         }else if(data.status=='fail'){
            this.message.error(`${data.data.errMsg}`)
         }
      })
   }

   getOptCode() {
      let { telphone } = this.registerParam;
      if (!telphone) {
         return this.message.info('请输入手机号码！');
      }
      let url = `${this.optCodeUrl}?telphone=${telphone}`
      this.http.get(url).subscribe((res:any) => {
         let data = JSON.parse(res._body);
         if(data.status=='success'){
            this.message.info(`手机验证码：${data.data.otpCode}`,{
               nzDuration:10000,
            })
         }
      })
   }

};

