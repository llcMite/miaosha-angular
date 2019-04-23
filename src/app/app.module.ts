import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//用于修复图标不显示问题bugfix
import { HttpClientModule } from '@angular/common/http';
// antd
// import { IconDefinition } from '@ant-design/icons-angular';
// import { NgZorroAntdModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS,NZ_I18N, zh_CN} from 'ng-zorro-antd';
// 引入你需要的图标，比如你需要 fill 主题的 AccountBook Alert 和 outline 主题的 Alert，推荐 ✔️
// import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
// const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // NgZorroAntdModule.forRoot()
  ],
  providers   : [
    // { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // 不提供的话，即为 Ant Design 的主题蓝色
    // { provide: NZ_ICONS, useValue: icons },
    // { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}