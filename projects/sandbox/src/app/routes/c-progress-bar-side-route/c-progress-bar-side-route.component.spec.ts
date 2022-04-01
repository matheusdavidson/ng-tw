import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProgressBarSideRouteComponent } from './c-progress-bar-side-route.component';

describe('CProgressBarSideRouteComponent', () => {
  let component: CProgressBarSideRouteComponent;
  let fixture: ComponentFixture<CProgressBarSideRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CProgressBarSideRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CProgressBarSideRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
