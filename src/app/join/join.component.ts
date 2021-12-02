import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';
import { User } from '../models/user';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  registerUser(registerForm: NgForm):void {
    console.log(registerForm.value);
    this.registerService.registerRequest(registerForm.value).subscribe(
<<<<<<< Updated upstream
      (response: User) => {
     
=======
      (_response: string) => {
>>>>>>> Stashed changes
        registerForm.reset();
        alert("회원가입이 완료되었습니다.");
        document.getElementById("add-register")?.click();
      },
<<<<<<< Updated upstream
      (error: HttpErrorResponse) => {
     
        registerForm.reset();
=======
      (_error: HttpErrorResponse) => {
        // registerForm.reset();
        alert("중복된 아이디입니다.");
>>>>>>> Stashed changes
      }
    )
  }
}
