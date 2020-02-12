import { Component,Injectable,ViewChild } from '@angular/core';
import {HttpService} from '../services/http-service';

declare var AMap:any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
@Injectable()
export class User {
  listOfData:any=[];
  constructor(private httpService:HttpService){
    
  }
  ngOnInit(){
    this.getUserList();
  }
  getUserList(){
    let self=this;
    this.httpService.get({url:"/api/user/getUserList",callback(res){
      if(res.status=='success'){
        self.listOfData=res.data;
      }
    }})
  }
  // ngAfterViewInit(){
  //   var map = new AMap.Map('container', {
  //     zoom:11,//级别
  //     center: [116.397428, 39.90923],//中心点坐标
  //     viewMode:'3D'//使用3D视图
  // });
  // }

}