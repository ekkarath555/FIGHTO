import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightoComponent } from './flighto.component';

describe('FlightoComponent', () => {
  let component: FlightoComponent;
  let fixture: ComponentFixture<FlightoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
