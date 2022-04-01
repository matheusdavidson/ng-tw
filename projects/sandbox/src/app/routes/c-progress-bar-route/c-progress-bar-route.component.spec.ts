import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProgressBarRouteComponent } from './c-progress-bar-route.component';

describe('CProgressBarRouteComponent', () => {
  let component: CProgressBarRouteComponent;
  let fixture: ComponentFixture<CProgressBarRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CProgressBarRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CProgressBarRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
