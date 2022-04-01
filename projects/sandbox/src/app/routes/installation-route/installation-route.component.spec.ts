import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationRouteComponent } from './installation-route.component';

describe('InstallationRouteComponent', () => {
  let component: InstallationRouteComponent;
  let fixture: ComponentFixture<InstallationRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallationRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
