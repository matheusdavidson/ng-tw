import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNotificationSideRouteComponent } from './c-notification-side-route.component';

describe('CNotificationSideRouteComponent', () => {
  let component: CNotificationSideRouteComponent;
  let fixture: ComponentFixture<CNotificationSideRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CNotificationSideRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CNotificationSideRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
