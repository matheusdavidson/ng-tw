import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToggleSideRouteComponent } from './c-toggle-side-route.component';

describe('CToggleSideRouteComponent', () => {
  let component: CToggleSideRouteComponent;
  let fixture: ComponentFixture<CToggleSideRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CToggleSideRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CToggleSideRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
