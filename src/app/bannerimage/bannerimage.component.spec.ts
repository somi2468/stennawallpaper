import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerimageComponent } from './bannerimage.component';

describe('BannerimageComponent', () => {
  let component: BannerimageComponent;
  let fixture: ComponentFixture<BannerimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
