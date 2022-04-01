import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationSideRouteComponent } from './installation-side-route.component';

describe('InstallationSideRouteComponent', () => {
  let component: InstallationSideRouteComponent;
  let fixture: ComponentFixture<InstallationSideRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallationSideRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationSideRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
