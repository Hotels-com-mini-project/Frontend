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
  public hotels : Array<HotelMain>;
  public pageNo : number;
  public item : HotelMain[];
  constructor(private hotelService : HotelService) { 
    this.hotels= [];
    this.pageNo = 1;
    this.item = [];
  }

  ngOnInit(): void {
    this.getHotelMains();
  }
  public getHotelMains(): void{
    this.hotelService.getHotels(this.pageNo).subscribe(
      (response)=>{
        this.item = response;
        for(let i of this.item) {
          this.hotels.push(i);
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
