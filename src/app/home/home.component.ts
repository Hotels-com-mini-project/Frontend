import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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


}
