import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMinimumComponent } from './view-minimum.component';

describe('ViewMinimumComponent', () => {
  let component: ViewMinimumComponent;
  let fixture: ComponentFixture<ViewMinimumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMinimumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMinimumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
