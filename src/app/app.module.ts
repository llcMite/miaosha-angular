import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgZorroAntdModule, NZ_I18N, zh_CN } from "ng-zorro-antd";
import { from } from "rxjs";
import { HttpService } from "./services/http-service";
// 组件
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { TestComponent } from "./component/test/test.component";
import { UserComponent } from "./component/user/user.component";
import { Layout } from "./component/layout/layout.component";
import { Login } from "./component/login/login.component";
import { SearchSelectComponent } from "./component/user/search-select/search-select.component";
import { ShoppingComponent } from "./component/store/shopping/shopping.component";
import { ManagementComponent } from "./component/store/management/management.component";
import { FormDialog } from "./common/form-dialog/formDialog.component";

//装饰器 @ngModule接收一个元数据对象，告诉angular如何编译和启动应用
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    Layout,
    Login,
    TestComponent,
    SearchSelectComponent,
    ShoppingComponent,
    ManagementComponent,
    FormDialog
  ],
  imports: [
    //配置当前模块运行的依赖的其它模块
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, HttpService], //配置项目所需的服务
  bootstrap: [AppComponent] //指定应用的主视图（根组件），通过引导appModule来启动应用
})
export class AppModule {}
