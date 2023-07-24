import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCheckboxSideRouteComponent } from './c-checkbox-side-route.component';

describe('CNotificationSideRouteComponent', () => {
  let component: CCheckboxSideRouteComponent;
  let fixture: ComponentFixture<CCheckboxSideRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCheckboxSideRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCheckboxSideRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
