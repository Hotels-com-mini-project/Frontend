import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { HotelMain } from '../hotel.model';
import { HotelService } from '../hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelAddress } from '../models/hotel.address';
@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent implements OnInit {
  page : number=1;
  maxpage: number=1;
  hotelAddressArray: HotelAddress[];
  sub1=null;
  sub2=null;
  sub3=null;
  init_done:boolean=false;
  keyWord:string = null;
  constructor(
    private hotelService : HotelService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub1=this.activatedRoute.paramMap.subscribe(params => {
      this.page = +params.get('page') || 1;
      if (params.get('keyword').length===0) {
        this.getHotelMains(this.page);
      } else {
      this.keyWord = params.get('keyword');
      this.hotelService.getHotelsWithKeyword(this.keyWord, this.page).subscribe(
        (response: HotelAddress[]) => {
          this.hotelAddressArray = response;
          this.maxpage = this.hotelAddressArray["totalPages"];

          this.hotelAddressArray = this.hotelAddressArray["content"];
        },
        (error:HttpErrorResponse) => {

        }
      )
    }});
    this.init_done=true;
  }
  public getHotelMains(page:number=1): void{
    this.hotelService.getHotelsWithNoKeyword(page).subscribe(
      (response: HotelAddress[])=>{
        this.hotelAddressArray = response;
        this.maxpage = this.hotelAddressArray["totalPages"];
        this.hotelAddressArray = this.hotelAddressArray["content"];


      },
      (error: HttpErrorResponse) => {
        this.router.navigate(['../']);
      }
    )
  }
  public hasNextPage(): boolean {
    console.log("hasnext");
    console.log(this.page);
    console.log(this.maxpage);
    console.log((this.page === this.maxpage) ? false: true);
    return (this.page === this.maxpage) ? false: true;
  }

  public hasPrevPage(): boolean {
    console.log("hasprev");
    console.log(this.page);
    console.log(this.maxpage);
    console.log((this.page === 1) ? false: true);
    return (this.page === 1) ? false: true;
  }

  

}
