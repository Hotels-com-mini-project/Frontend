import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mypage1Component } from './mypage1.component';

describe('Mypage1Component', () => {
  let component: Mypage1Component;
  let fixture: ComponentFixture<Mypage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mypage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mypage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
