import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HotelMain } from './hotel.model';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private serverUrl="http://172.30.1.29:9000";

  constructor(private http: HttpClient) { }

  public getHotels(): Observable<HotelMain[]> {
    return this.http.get<HotelMain[]>(`http://172.30.1.29:9000/main/hotel?page=1`)
    .pipe(map((data : any) => data.content),
      catchError(error => {
        return throwError("불러오기 실패");
      })
    );
}

}