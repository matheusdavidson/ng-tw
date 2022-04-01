import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSelectRouteComponent } from './c-select-route.component';

describe('CSelectRouteComponent', () => {
  let component: CSelectRouteComponent;
  let fixture: ComponentFixture<CSelectRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSelectRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSelectRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
