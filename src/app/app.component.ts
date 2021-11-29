import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title : string= 'team4front';
  username : string ='gdfgsd';

  constructor( ) {}

  ngOnInit(): void {
   
  }

  setUserName(name: string):void {
    this.username = name;
    console.log(this.username);
  }
}
