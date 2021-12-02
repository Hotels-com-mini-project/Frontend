import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://172.30.1.19:9000';
  constructor(private http:HttpClient) { }

  public loginRequest(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user/login`, user)
  }

}
