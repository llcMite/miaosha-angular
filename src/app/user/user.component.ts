import { Component,Injectable,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Config } from 'protractor';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
@Injectable()
export class User {
  private data:object={};
  private password:string='';
  private schoolList:Array<any>=[];
  constructor(){
    this.data={
      "username":"",
      "school":""
    };
    for(let i=0; i<100; i++){
      this.schoolList.push({label:"北京"+i,value:"北京"+i});
    }
  }

}