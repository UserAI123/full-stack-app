import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='in28minutes';
  password:string='dummy';
  errorMessage='invalid credentials';
  valid=false;
  constructor(
    private router:Router,
    public hardcodedAuthenticationService:HardcodedAuthenticationService ,
    public basicAuth:BasicAuthenticationService) { }

  ngOnInit(): void {
  }
  eventLogin()
  {
    //console.log(this.username);
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
    {
      this.router.navigate(['welcome',this.username]);
      this.valid=false;
    }
    else{
      this.valid=true;
    }
  }
  basicAuthLogin()
  {
    console.log(this.username);
    this.basicAuth.executeAuthenticationService(this.username,this.password).subscribe(
     data => {
        console.log(data);
        this.router.navigate(['welcome',this.username]);
        this.valid=false;
     },
          error => {
          console.log(error);
          this.valid=true;
      }
    )
    
  }
  basicAWTAuthLogin()
  {
    console.log(this.username);
    this.basicAuth.executeJWTAuthenticationService(this.username,this.password).subscribe(
     data => {
        console.log(data);
        this.router.navigate(['welcome',this.username]);
        this.valid=false;
     },
          error => {
          console.log(error);
          this.valid=true;
      }
    )
  }

}


