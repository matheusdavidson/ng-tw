import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTwComponent } from './ng-tw.component';

describe('NgTwComponent', () => {
  let component: NgTwComponent;
  let fixture: ComponentFixture<NgTwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
