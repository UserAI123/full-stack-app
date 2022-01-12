import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { request } from 'http';
//import { nextTick } from 'process';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService:BasicAuthenticationService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) //Observable<HttpEvent<any>> 
  {
    //throw new Error('Method not implemented.');
   // let username='user';
 // let password='password';
   //let  basicAuthHeaderString= 'Basic '+ window.btoa(username + ':' + password);
   
    let basicAuthHeaderString=this.basicAuthenticationService.getAuthenticatedToken();
    let username=this.basicAuthenticationService.getAuthenticatedUser();
   if(basicAuthHeaderString && username)
    {
    request=request.clone({
      setHeaders:{
       Authorization:basicAuthHeaderString
        
      }
    })
  }
  
    return next.handle(request);
  }
}
