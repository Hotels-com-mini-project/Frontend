import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HotelMain } from './hotel.model';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private serverUrl="http://172.30.1.53:9000";

  constructor(private http: HttpClient) { }

  public getHotels(pageNo : number): Observable<HotelMain[]> {
    // console.log("sevice : "+pageNo);
    return this.http.get<HotelMain[]>(`http://172.30.1.53:9000/main/hotel?page=${pageNo}`)
    .pipe(map((data : any) => data.content),
      catchError(error => {
        return throwError("불러오기 실패");
      })
    );
}

}