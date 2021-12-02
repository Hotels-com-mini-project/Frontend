import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://172.30.1.19:9000';
  constructor(private http:HttpClient) {}

  public registerRequest(user: User) {
    return this.http.post(`${this.apiUrl}/user/join`, user, {responseType:'text'});
  }
}
