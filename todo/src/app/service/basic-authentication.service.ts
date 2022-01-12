import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

 token:any
  constructor(private http:HttpClient) { }
  executeJWTAuthenticationService(username:string,password:string)
  {

   return this.http.post("http://localhost:8080/authenticate",{
     username,
     password
    }
   ).pipe(
     map(
              data => {
         sessionStorage.setItem('authenticatorUser',username);
         sessionStorage.setItem('token',`Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY0MTk3Mjg2MCwiaWF0IjoxNjQxMzY4MDYwfQ.EIeo5RBy8mN7NBQQw2uQZkXEzPnV6MNxglZ0qY738jgOPD8C30_BRMhnIGWbOIj8q8715X0Mwl9ZsRhAcErkkg`);
         return data;
       }
     )
   );
  }

  executeAuthenticationService(username:string,password:string)
  {
    let basicAuthHeaderString='Basic '+ window.btoa(username + ':' + password);
    let headers=new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
   return this.http.get("http://localhost:8080/basicAuth",{headers}).pipe(
     map(
              data => {
         sessionStorage.setItem('authenticatorUser',username);
         sessionStorage.setItem('token',basicAuthHeaderString);
         return data;
       }
     )
   );
  }
  createBasicAuthenticationHttpHeader()
  {
    let username='user';
    let password='password';
    let basicAuthHeaderString= 'Basic '+ window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
  getAuthenticatedUser()
  {
    return sessionStorage.getItem('authenticatorUser');
  }
  getAuthenticatedToken()
  {
    if(this.getAuthenticatedUser())
    {
      return sessionStorage.getItem('token');
    }
    return

  }
  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('authenticatorUser');
    return !(user===null);
  }
  logout()
  {
    sessionStorage.removeItem('authenticatorUser');
    sessionStorage.removeItem('token');
  }
}
