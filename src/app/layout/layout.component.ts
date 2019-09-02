import { Component } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http-service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})

export class Layout {
  title = 'layout';
  private url = '/api/user/loginOut';
  private isShowMenu = false;
  private isShowLeftChild = false;
  constructor(private http: HttpService) {

  }

  loginOut() {
    this.http.get(this.url, {}, function (res) {
      console.log(res);
    });
  }
  isShowMenuF() {
    if (!this.isShowMenu) {
      this.isShowMenu = true;
    } else {
      this.isShowMenu = false;
    }

  }
  isShowLeftChildF() {
    if (!this.isShowLeftChild) {
      this.isShowLeftChild = true;
    } else {
      this.isShowLeftChild = false;
    }
  }

}