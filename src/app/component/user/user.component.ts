import { Component, Injectable, ViewChild, OnInit } from "@angular/core";
import { HttpService } from "../../services/http-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
declare var AMap: any;

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.less"]
})
export class UserComponent implements OnInit {
  listOfData: any = [];
  searchParam = {
    name: "",
    telphone: ""
  };
  pageVo: any = {
    pageNo: 1,
    pageSize: 10,
    total: 0
  };

  dialogConfig = {
    visible: false,
    title: "新增用户",
    validateForm: null,
    formItems: null,
    onSubmit: data => {
      this.submit(data);
    },
    onCancel: () => {
      this.cancel();
    }
  };

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private modalService: NzModalService) {
    this.dialogConfig.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      nickname: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]]
    });
    this.dialogConfig.formItems = [
      {
        type: "input",
        name: "邮箱",
        key: "email",
        errorMsg: "请输入邮箱地址"
      },
      {
        type: "password",
        name: "密码",
        key: "password",
        errorMsg: "请输入密码"
      },
      {
        type: "password",
        name: "名称",
        key: "nickname",
        errorMsg: "请输入名称"
      },
      {
        type: "password",
        name: "电话号码",
        key: "phoneNumber",
        errorMsg: "请输入电话号码"
      },
      {
        type: "password",
        name: "网址",
        key: "website",
        errorMsg: "请输入网址"
      }
    ]

  }

  ngOnInit() {
    this.getUserList();
  }

  submit(data) {
    console.log('校验成功了', data);
  }

  cancel() {
    this.dialogConfig.visible = false;
  }

  add() {
    this.dialogConfig.visible = true;
  }

  edit() { }

  onDelete(item) {
    this.modalService.confirm({
      nzTitle: '<i>删除确认</i>',
      nzContent: '<b>删除将无法恢复，您确认删除吗?</b>',
      nzOnOk: () => {
        this.httpService.get({
          url: "/api/user/deleteUser",
          body: { id: item.id },
          callback: (res) => {
            if (res.status === "success") {
              this.message.create('success', '删除成功！');
              this.getUserList()
            }
          }
        });
      }
    });
  }

  getUserList() {
    let self = this;
    let { pageNo, pageSize } = this.pageVo;
    let requestParam = {
      ...this.searchParam,
      pageSize: pageSize,
      pageNo: pageNo
    };
    this.httpService.get({
      url: "/api/user/getUserList",
      body: requestParam,
      callback(res) {
        if (res.status === "success") {
          let pageObject = res.data;
          self.listOfData = pageObject.dataList;
          self.pageVo.pageNo = pageObject.pageNo;
          self.pageVo.pageSize = pageObject.pageSize;
          self.pageVo.total = pageObject.total;
        }
      }
    });
  }

  changePageIndex(pageNo) {
    this.pageVo.pageNo = pageNo;
    this.getUserList();
  }
  changePageSize(pageSize) {
    this.pageVo.pageSize = pageSize;
    this.getUserList();
  }

  onSearch() {
    this.getUserList();
  }
}
