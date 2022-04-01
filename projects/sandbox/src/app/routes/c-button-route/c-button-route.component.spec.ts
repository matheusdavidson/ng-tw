import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CButtonRouteComponent } from './c-button-route.component';

describe('CButtonRouteComponent', () => {
  let component: CButtonRouteComponent;
  let fixture: ComponentFixture<CButtonRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CButtonRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CButtonRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
