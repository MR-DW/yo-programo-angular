import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrucelComponent } from './carrucel.component';

describe('CarrucelComponent', () => {
  let component: CarrucelComponent;
  let fixture: ComponentFixture<CarrucelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrucelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
