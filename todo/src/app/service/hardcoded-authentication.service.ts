import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {


  constructor() { }

  authenticate(username:string,password:string)
  {
    console.log('before'+this.isUserLoggedIn());
    if(username==='user' && password==='password')
    {
      sessionStorage.setItem('authenticatorUser',username);
      console.log('after'+this.isUserLoggedIn());
      return true;
    }
    else{
      return false;
    }
  }
  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('authenticatorUser');
    return !(user===null);
  }
  logout()
  {
    sessionStorage.removeItem('authenticatorUser');
  }
}
