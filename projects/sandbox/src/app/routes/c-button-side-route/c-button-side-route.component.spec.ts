import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CButtonSideRouteComponent } from './c-button-side-route.component';

describe('CButtonSideRouteComponent', () => {
  let component: CButtonSideRouteComponent;
  let fixture: ComponentFixture<CButtonSideRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CButtonSideRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CButtonSideRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
