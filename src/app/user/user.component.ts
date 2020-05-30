import { Component, Injectable, ViewChild, OnInit} from '@angular/core';
import { HttpService } from '../services/http-service';
import request from './../services/ajax.service';

declare var AMap: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  listOfData: any = [];
  searchParam={
    name:'',
    telphone:''
  }
  pageVo: any = {
    pageNo: 1,
    pageSize: 10,
    total: 0
  }

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    let self = this;
    let {pageNo,pageSize}=this.pageVo;
    let requestParam={
      ...this.searchParam,
      pageSize:pageSize,
      pageNo:pageNo
    }
    this.httpService.get({
      url: "/api/user/getUserList", 
      body:requestParam,
      callback(res) {
        if (res.status === 'success') {
          let pageObject = res.data;
          self.listOfData = pageObject.dataList;
          self.pageVo.pageNo = pageObject.pageNo;
          self.pageVo.pageSize = pageObject.pageSize;
          self.pageVo.total = pageObject.total;
        }
      }
    })
  }

  changePageIndex(pageNo ) {
    this.pageVo.pageNo = pageNo;
    this.getUserList();
  }
   changePageSize(pageSize) {
    this.pageVo.pageSize = pageSize;
    this.getUserList();
  }

  onSearch() {
    this.getUserList()
  }
}