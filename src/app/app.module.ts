import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { LoginService } from './login/login.service';
import { RegisterService } from './join/register.service';


import { AppComponent } from './app.component';
import { JoinComponent } from './join/join.component';
import { GetListComponent } from './get-list/get-list.component';
import { GetHotelComponent } from './get-hotel/get-hotel.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MypageComponent } from './mypage/mypage.component';
import { ReviewComponent } from './review/review.component';
import { Mypage1Component } from './mypage1/mypage1.component';
import { TestComponent } from './test/test.component';
import { HotelService } from './hotel.service';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: GetListComponent},
  {path: 'log', component: LoginComponent},
  {path: 'jo', component:JoinComponent},
  {path: 'list/get', component:GetHotelComponent},
  {path: 'review', component:ReviewComponent},
  {path: 'my', component:MypageComponent},
  {path: 'my1', component:Mypage1Component}
]



@NgModule({
  declarations: [
    AppComponent,
    JoinComponent,
    GetListComponent,
    GetHotelComponent,
    LoginComponent,
    HomeComponent,
    MypageComponent,
    ReviewComponent,
    Mypage1Component,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HotelService, LoginService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
