import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage="Sorry there is some error in the url please contact ****";
  constructor() { }

  ngOnInit(): void {
  }

}
