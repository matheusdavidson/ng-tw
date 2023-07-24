import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRadioRouteComponent } from './c-radio-route.component';

describe('CNotificationRouteComponent', () => {
  let component: CRadioRouteComponent;
  let fixture: ComponentFixture<CRadioRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRadioRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRadioRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
