import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  public Loginmodal : boolean = false;
  public Registermodal : boolean = false;



  clickedModalClose(){
    this.Loginmodal =false;
    this.Registermodal =false;

  }

  clickedLoginModal(){
    this.Loginmodal=true;
  }

  clickedRegisterModal(){
    this.Registermodal=true;

  }
  loginUser(loginForm: NgForm):void {
    this.loginService.loginRequest(loginForm.value).subscribe(
      (response: User) => {
        console.log(response);
        loginForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        loginForm.reset();
      }
    )
  }

}
