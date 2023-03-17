import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCarreraComponent } from './miCarrera.component';

describe('MiCarreraComponent', () => {
  let component: MiCarreraComponent;
  let fixture: ComponentFixture<MiCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiCarreraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
