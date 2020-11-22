import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../../services/http-service";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: "app-management",
  templateUrl: "./management.component.html",
  styleUrls: ["./management.component.less"]
})
export class ManagementComponent implements OnInit {
  private storeUrl = "/api/item/list";
  private detailUrl = "/api/item/detail";
  private goodsData: Array<any> = [];
  private detailData: Object = {};
  private isShowDetail = false;

  constructor(
    private http: HttpService,
    private router: Router,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.getGoods();
  }
  getGoods() {
    this.http.get({
      url: this.storeUrl,
      callback: res => {
        console.log(res);
        if (res) {
          this.goodsData = res.data;
        }
      }
    });
  }
  delete(i: number) {
    this.http.delete("", null, null);
  }

  detail(id: string) {
    const detailId = {
      id: id
    };
    this.isShowDetail = true;
    this.http.get({
      url: this.detailUrl,
      body: detailId,
      callback: res => {
        console.log(res);
        if (res.status == "success") {
          this.detailData = res.data;
        }
      }
    });
  }
  route(url: string, id: string) {
    const param = {
      id: id
    };
    this.router.navigate([url], { queryParams: param });
  }
}
