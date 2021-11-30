import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { HotelMain } from '../hotel.model';
import { HotelService } from '../hotel.service';
@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent implements OnInit {
  public hotels : HotelMain[];
  constructor(private hotelService : HotelService) { 
    this.hotels=[];
  }

  ngOnInit(): void {
    this.getHotelMains();
  }
  public getHotelMains(): void{
    this.hotelService.getHotels().subscribe(
      (response : HotelMain[])=>{
        this.hotels = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
