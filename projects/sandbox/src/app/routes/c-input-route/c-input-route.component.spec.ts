import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CInputRouteComponent } from './c-input-route.component';

describe('CInputRouteComponent', () => {
  let component: CInputRouteComponent;
  let fixture: ComponentFixture<CInputRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CInputRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CInputRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
