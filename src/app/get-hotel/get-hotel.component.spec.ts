import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHotelComponent } from './get-hotel.component';

describe('GetHotelComponent', () => {
  let component: GetHotelComponent;
  let fixture: ComponentFixture<GetHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
