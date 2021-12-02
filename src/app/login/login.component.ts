import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginUser(loginForm: NgForm):void {
    this.loginService.loginRequest(loginForm.value).subscribe(
      (response: User) => {
     
        loginForm.reset();
      },
      (error: HttpErrorResponse) => {
    
        loginForm.reset();
      }
    )
  }

}
