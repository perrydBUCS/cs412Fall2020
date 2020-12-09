import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingHTTPComponent } from './calling-http.component';

describe('CallingHTTPComponent', () => {
  let component: CallingHTTPComponent;
  let fixture: ComponentFixture<CallingHTTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallingHTTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingHTTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
