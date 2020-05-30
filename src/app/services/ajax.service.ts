 class Ajax {
    constructor(param){
        let promise=new Promise((resolve,reject)=>{
            let {
                method = 'GET',
                url='',
                requestParam={},
                header={},
                withCredentials=false
            }=param;
            method = method.toUpperCase();
            let xhr=new XMLHttpRequest();
            xhr.open('method',url);
    
            for(let key in header){
                header[key] && xhr.setRequestHeader(key,header[key]);
            }
            
            xhr.withCredentials=withCredentials
            xhr.onload=()=>{
                if(xhr.status>=200 && xhr.status<300){
                    resolve(xhr);
                }else{
                    reject(xhr);
                }
            }
            xhr.onerror=()=>{
                reject(xhr);
            }
            if(method=='GET'){
                xhr.send();
            }else{
                xhr.send(requestParam);
            }
            
        })
        return promise;
    }
}
request.prototype.get=function(url,requestParam,config){
    if(!requestParam)requestParam={};
    if(config)config={}
    for (let key in requestParam) {
        if (url.indexOf("?") >= 0) {
          url += "&" + key + "=" + requestParam[key];
        } else {
          url += "?" + key + "=" + requestParam[key];
        }
      }
    return new Ajax({url:url,method:'GET'});
}
request.prototype.post=function(url,requestParam?,config?){
    if(!requestParam)requestParam={};
    if(!config)config={};
    return new Ajax({url,requestParam,...config,method:"POST"})
}
request.prototype.delete=function(url,requestParam?,config?){
    if(!requestParam)requestParam={};
    if(!config)config={};
    return new Ajax({url,requestParam,...config,method:"DELETE"})
}
request.prototype.put=function(url,requestParam?,config?){
    if(!requestParam)requestParam={};
    if(!config)config={};
    return new Ajax({url,requestParam,...config,method:"PUT"})
}

request.prototype.upload=function(url,requestParam,config?){
    if(!config)config={};
    let form=new FormData();
    for(let key in requestParam){
        requestParam[key] && form.append(key,requestParam[key]);
    }
    return new Ajax({url,requestParam,...config,method:"POST"})
}

function request(param){
   return new Ajax(param);
}

export default request;