import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { HotelMain } from '../hotel.model';
import { HotelService } from '../hotel.service';
import { HotelAddress } from '../models/hotel.address';
import { Room } from '../models/room';

@Component({
  selector: 'app-get-hotel',
  templateUrl: './get-hotel.component.html',
  styleUrls: ['./get-hotel.component.css']
})
export class GetHotelComponent implements OnInit {

  imgArray: string[]=[];
  hotel: HotelMain=null;
  hotelAddress: HotelAddress=null;
  roomArray: Room[]=[];
  hotelId=null;
  score:number=0;
  sub1=null;
  sub2=null;
  sub3=null;
  hotelLink:SafeHtml=null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.sub1 = this.activatedRoute.paramMap.subscribe(params => {

      this.hotelId = params.get('id');
      this.hotelService.getHotelById(this.hotelId).subscribe(
        (response: HotelMain) => {
          this.hotel = response;


          this.imgArray=this.hotel.hotelimages.split(",");
          const atagbegin:number = this.hotel.reservationpage.indexOf("<a");
          const atagend:number = this.hotel.reservationpage.indexOf("</a>");
          const trimmedref:string = this.hotel.reservationpage.substring(atagbegin, atagend+4);
          this.hotelLink = this.sanitizer.sanitize(SecurityContext.HTML, trimmedref);

        }, (error: HttpErrorResponse) => {

        }
      );
    });

    this.sub2 = this.activatedRoute.paramMap.subscribe(params => {

      this.hotelId = params.get('id');
      this.hotelService.getHotelAddressById(this.hotelId).subscribe(
        (response: HotelAddress) => {
          this.hotelAddress = response;
          this.score = Math.round(response.score * 10)/10;
 
        }, (error: HttpErrorResponse) => {
 
        }
      );
    });


    this.sub3 = this.activatedRoute.paramMap.subscribe(params => {

      this.hotelId = params.get('id');
      this.hotelService.getRoombyHotelId(this.hotelId).subscribe(
        (response: Room[]) => {
          this.roomArray = response;
 
        }, (error: HttpErrorResponse) => {
 
        }
      );
    });

  }
  
  ngOnDestroy():void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
  onBack() {
    this.router.navigate(['list']);
  }
}
