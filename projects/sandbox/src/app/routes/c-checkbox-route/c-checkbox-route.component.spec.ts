import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCheckboxRouteComponent } from './c-checkbox-route.component';

describe('CCheckboxRouteComponent', () => {
  let component: CCheckboxRouteComponent;
  let fixture: ComponentFixture<CCheckboxRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCheckboxRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCheckboxRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
