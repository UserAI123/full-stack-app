import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  executeHelloWorldBeanService()
  {
    let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();
    let headers=new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
   return this.http.get("http://localhost:8080/hello-world-bean",{headers});
  }
  executeHelloWorldBeanServiceWithPath(name:string)
  {
    let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();
    let headers=new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
   return this.http.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`,{headers});
  }
  createBasicAuthenticationHttpHeader()
  {
    let username='user';
    let password='password';
    let basicAuthHeaderString= 'Basic '+ window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
