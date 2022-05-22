import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDropdownRouteComponent } from './c-dropdown-route.component';

describe('CDropdownRouteComponent', () => {
  let component: CDropdownRouteComponent;
  let fixture: ComponentFixture<CDropdownRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDropdownRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CDropdownRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
