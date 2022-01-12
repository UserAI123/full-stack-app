import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name='';
welcomeMessage:string='';
value:boolean=false;
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService
    ) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
  }
  getWelcomeMessage()
  {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorMessage(error)
    );
  }
  getWelcomeMessageForPathVariable()
  {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPath(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorMessage(error)
    );
  }
  handleSuccessfulResponse(response:any)
  {
    this.value=true;
    this.welcomeMessage=response.message;
    //console.log(response);
    //console.log(response.message);
  }
  handleErrorMessage(error:any)
  {
    this.welcomeMessage=error.error.message;
  }
 

}
