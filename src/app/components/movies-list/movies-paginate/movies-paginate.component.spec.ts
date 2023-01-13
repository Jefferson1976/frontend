import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPaginateComponent } from './movies-paginate.component';

describe('MoviesPaginateComponent', () => {
  let component: MoviesPaginateComponent;
  let fixture: ComponentFixture<MoviesPaginateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesPaginateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
