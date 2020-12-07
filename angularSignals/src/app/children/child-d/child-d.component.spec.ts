import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDComponent } from './child-d.component';

describe('ChildDComponent', () => {
  let component: ChildDComponent;
  let fixture: ComponentFixture<ChildDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
