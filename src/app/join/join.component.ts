import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';

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
    this.registerService.registerRequest(registerForm.value).subscribe(
      (response: User) => {
        console.log(response);
        registerForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        registerForm.reset();
      }
    )
  }
}
