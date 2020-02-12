import { Component } from '@angular/core';
import { HttpService } from '../services/http-service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import menu from "../services/menu.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})

export class Layout {
  title = 'layout';
  private url = '/api/user/loginOut';
  private isShowMenu = false;
  private menu:Array<any>;
  constructor(
    private http: HttpService,
    private router:Router,
    private message:NzMessageService,
    ) {
    this.menu=menu;
    console.log(menu);
  }

  loginOut() {
    let telphone={
      telphone : localStorage.getItem('USER')
    };
   this.http.get({url:this.url,body:telphone,callback:(res)=>{
        console.log(res);
        if(res.status==='success'){
          localStorage.removeItem('USER');
          localStorage.removeItem('ISLOGIN');
          this.router.navigate(['/login']);
        }else{
          this.message.error('退出失败!');
        }
   }})
  }
  isShowMenuF() {
    if (!this.isShowMenu) {
      this.isShowMenu = true;
    } else {
      this.isShowMenu = false;
    }

  }
  isShowLeftChildF(item:any) {
    console.log(item);
  for(let data of this.menu){
      for(let list of data.child){
        if(item!=list){
          list.isUnfold=false;
        }
   
      }  
  }
    if(item.child){
      item.isUnfold=!item.isUnfold;
    }else{
      this.router.navigate([item.url]);
    }
 
}
route(url:string){
this.router.navigate([url]);
}

}