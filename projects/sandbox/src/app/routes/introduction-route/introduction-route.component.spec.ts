import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionRouteComponent } from './introduction-route.component';

describe('IntroductionRouteComponent', () => {
  let component: IntroductionRouteComponent;
  let fixture: ComponentFixture<IntroductionRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
