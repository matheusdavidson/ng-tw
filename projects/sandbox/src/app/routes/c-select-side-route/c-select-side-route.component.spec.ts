import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSelectSideRouteComponent } from './c-select-side-route.component';

describe('CSelectSideRouteComponent', () => {
  let component: CSelectSideRouteComponent;
  let fixture: ComponentFixture<CSelectSideRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSelectSideRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSelectSideRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
