import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetListComponent } from './get-list/get-list.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:AppComponent },
  {path:'list' , component:GetListComponent},
  {path:'log' , component:LoginComponent},
  {path:'jo' , component:JoinComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
