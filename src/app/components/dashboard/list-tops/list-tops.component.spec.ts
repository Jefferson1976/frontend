import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopsComponent } from './list-tops.component';

describe('ListTopsComponent', () => {
  let component: ListTopsComponent;
  let fixture: ComponentFixture<ListTopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
