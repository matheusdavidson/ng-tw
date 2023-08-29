import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CInputSideRouteComponent } from './c-input-side-route.component';

describe('CNotificationSideRouteComponent', () => {
  let component: CInputSideRouteComponent;
  let fixture: ComponentFixture<CInputSideRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CInputSideRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CInputSideRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
