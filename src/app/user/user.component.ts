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
  public userList:any[];
  @ViewChild("appTest") Test:any;
  constructor(private http:HttpClient){
    
  }
  ngOnInit(): void {

  }
  getChildMsg(){
    alert(this.Test.msg);
  }
  public title:string = 'user';
}