import { Injectable } from '@angular/core';
import {Http,Response,Headers} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private header:Headers=new Headers();
  constructor(private http:Http) { 
    this.header.append("isLogin","true");
  }
  
  get(url:string,body:any,callback){
    for(let key in body){
      if(url.indexOf("?")>=0){
        url+="&"+key+"="+body[key];
      }else{
        url+="?"+key+"="+body[key];
      }
    }
    this.http.get(url,{
      headers:this.header
    }).subscribe(res=>{
      callback(res)
    });
  }
  post(url:string,body:any,callback){
    this.http.post(url,body,{
      headers:this.header
    }).subscribe(res=>{
      callback(res)
    });
  }
  put(url:string,body:any,callback){
    this.http.put(url,body,{
      headers:this.header
    }).subscribe(res=>{
      callback(res)
    });
  }
  delete(url:string,body:any,callback){
    this.http.delete(url,{
      headers:this.header
    }).subscribe(res=>{
      callback(res)
    });
  }
}
