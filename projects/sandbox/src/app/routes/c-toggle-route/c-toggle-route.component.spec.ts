import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToggleRouteComponent } from './c-toggle-route.component';

describe('CToggleRouteComponent', () => {
  let component: CToggleRouteComponent;
  let fixture: ComponentFixture<CToggleRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CToggleRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CToggleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
