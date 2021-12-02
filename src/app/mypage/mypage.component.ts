import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})

export class MypageComponent implements OnInit {

  public userid : string = localStorage.getItem('userid');

  constructor(private loginService: LoginService) { 
    // this.userid = localStorage.getItem('userid');
  }

  ngOnInit(): void {
    // console.log(localStorage.getItem('userid'));
    // this.userid = localStorage.getItem('userid');
    // console.log(localStorage.getItem('userid')+this.userid);
  }


  loginUser(loginForm: NgForm) {
    loginForm.controls['userId'].setValue(localStorage.getItem("userid"));
    this.loginService.loginRequest(loginForm.value).subscribe(
      (response: User) => {
        location.pathname="/my1";
      },
      (error: HttpErrorResponse) => {
        alert("비밀번호가 맞지 않습니다.");
      }
    )
  }

}
