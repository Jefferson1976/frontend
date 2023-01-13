import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMaximumComponent } from './view-maximum.component';

describe('ViewMaximumComponent', () => {
  let component: ViewMaximumComponent;
  let fixture: ComponentFixture<ViewMaximumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMaximumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMaximumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
