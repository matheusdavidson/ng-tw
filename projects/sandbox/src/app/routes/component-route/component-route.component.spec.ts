import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRouteComponent } from './component-route.component';

describe('ComponentRouteComponent', () => {
  let component: ComponentRouteComponent;
  let fixture: ComponentFixture<ComponentRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
