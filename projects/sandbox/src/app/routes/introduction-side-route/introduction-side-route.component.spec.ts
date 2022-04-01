import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionSideRouteComponent } from './introduction-side-route.component';

describe('IntroductionSideRouteComponent', () => {
  let component: IntroductionSideRouteComponent;
  let fixture: ComponentFixture<IntroductionSideRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionSideRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionSideRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
