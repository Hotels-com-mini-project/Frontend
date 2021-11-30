import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(registerForm: NgForm):void {
    const username:string = registerForm.value.username;
    const password:string = registerForm.value.password;
  }
}
