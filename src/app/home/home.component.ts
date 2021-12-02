import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RegisterService } from '../join/register.service';
<<<<<<< Updated upstream
=======
import { Router, RouterLink } from '@angular/router';
>>>>>>> Stashed changes

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< Updated upstream
  constructor(private loginService: LoginService, private registerService: RegisterService) { }

  ngOnInit(): void {
  }
=======
>>>>>>> Stashed changes
  public Loginmodal : boolean = false;
  public Registermodal : boolean = false;
  public Loginstate : string;
  public mystate : string;

  constructor(private loginService: LoginService, private registerService:RegisterService) {
   }

  ngOnInit(): void {
    console.log(localStorage.getItem('userid'));
      if(localStorage.getItem('userid') != null && localStorage.getItem('userid') != undefined && localStorage.getItem('userid') != ''){
        console.log("1" + this.Loginstate+localStorage.getItem('userid'));
        this.Loginstate = '로그아웃';
        this.mystate='마이페이지';
      } else {
        console.log("2" + this.Loginstate+localStorage.getItem('userid'));
        this.Loginstate = '로그인';
        this.mystate='회원가입';
      }
      console.log("3" + this.Loginstate+localStorage.getItem('userid'));
  }
  
  
  clickedModalClose(){
    this.Loginmodal =false;
    this.Registermodal =false;

  }

  clickedLoginModal(){
    if (this.Loginstate == '로그인'){
      this.Loginmodal=true;
    } else {
      this.clickedLogout();
      this.reloadPage();
    }
  }

  clickedRegisterModal(){
    if (this.mystate == '회원가입'){
      this.Registermodal=true;
    } else {
      location.pathname="/my";
    }

  }

  clickedLogout(){
    return localStorage.removeItem("userid");
  }

  returnLocalStorage(key : string) {
    return localStorage.getItem(key);
  }


  reloadPage() {
    // window.location.reload();
    location.pathname="/home";
 }

  updatePage(){
  }
  
  loginUser(loginForm: NgForm) {
    this.loginService.loginRequest(loginForm.value).subscribe(
      (response: User) => {
<<<<<<< Updated upstream

=======
        localStorage.setItem('userid', response.userId);
>>>>>>> Stashed changes
        loginForm.reset();
        this.reloadPage();
      },
      (error: HttpErrorResponse) => {
<<<<<<< Updated upstream
  
=======
>>>>>>> Stashed changes
        loginForm.reset();
      }
    )
  }

<<<<<<< Updated upstream
  registerUser(registerForm: NgForm):void {
    this.registerService.registerRequest(registerForm.value).subscribe(
      (response: User) => {
   
        registerForm.reset();
      },
      (error: HttpErrorResponse) => {
     
        registerForm.reset();
=======


  registerUser(registerForm: NgForm):void {
    console.log(registerForm.value);
    this.registerService.registerRequest(registerForm.value).subscribe(
      (response: string) => {
        console.log(response);
        document.getElementById("add-register")?.click();
        registerForm.reset();
        alert("회원가입이 완료되었습니다.");

      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        // registerForm.reset();
        alert("중복된 아이디입니다.");
>>>>>>> Stashed changes
      }
    )
  }

<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
