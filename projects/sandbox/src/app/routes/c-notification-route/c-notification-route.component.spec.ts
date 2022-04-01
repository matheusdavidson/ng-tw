import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNotificationRouteComponent } from './c-notification-route.component';

describe('CNotificationRouteComponent', () => {
  let component: CNotificationRouteComponent;
  let fixture: ComponentFixture<CNotificationRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CNotificationRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CNotificationRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
