import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HotelMain } from './hotel.model';
import { HotelAddress } from './models/hotel.address';
import { Room } from './models/room';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private serverUrl="http://localhost:9000";

  constructor(private http: HttpClient) { }

  public getHotels(pageNo: number=1): Observable<HotelMain[]> {
    return this.http.get<HotelMain[]>(`${this.serverUrl}/main/hotel?page=${pageNo}`);
}
  public getHotelById(id:bigint): Observable<HotelMain> {
    return this.http.get<HotelMain> (`${this.serverUrl}/detail/hotel/${id}`);
  }

  public getHotelAddressById(id:bigint): Observable<HotelAddress> {
    return this.http.get<HotelAddress> (`${this.serverUrl}/detail/adhotel/${id}`);
  }

  public getRoombyHotelId(id:bigint): Observable<Room[]> {
    return this.http.get<Room[]> (`${this.serverUrl}/detail/room/${id}`);
  }

  public getHotelsWithKeyword(keyword: string, page:number = 1): Observable<HotelAddress[]> {

    return this.http.get<HotelAddress[]>(`${this.serverUrl}/main/search?keyword=${keyword}&page=${page}`);
  }

  public getHotelsWithNoKeyword(page:number = 1): Observable<HotelAddress[]> {

    return this.http.get<HotelAddress[]>(`${this.serverUrl}/main/search?page=${page}`);
  }
}