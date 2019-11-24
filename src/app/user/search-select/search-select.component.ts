import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import {NG_VALUE_ACCESSOR,ControlValueAccessor} from "@angular/forms"
@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchSelectComponent),
    multi: true
  }]
})
export class SearchSelectComponent implements ControlValueAccessor {
  // @Input() lzModel:string;
  // @Output() lzModelChange=new EventEmitter<string>();
  @Input() ngModel:string;
  @Output() ngModelChange=new EventEmitter<string>();
  @Input() options:Array<any>;

  private selectValue:string;
  private isShow:boolean;
  private selectList:Array<any>;

  constructor() {
    this.isShow=false;
  }

  ngOnChanges(){
    this.selectValue=this.ngModel;
    this.selectList=this.options;
  }
  registerOnChange(fn: any): void {
    // 页面值改变时，调用该方法，传入新值实现回传

  }

  registerOnTouched(fn: any): void {
    
  }
  ngOnInit() {
     
  }

   // 赋值时调用
   writeValue(val: object): void {
    
  }

  selectItem(value){
    this.ngModelChange.emit(value);
  }

  showSelectList(){
    this.isShow=true;
  }
  hideSelectList(){
    this.isShow=false;
  }
}
