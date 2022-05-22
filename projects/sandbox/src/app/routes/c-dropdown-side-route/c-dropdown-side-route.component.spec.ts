import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDropdownSideRouteComponent } from './c-dropdown-side-route.component';

describe('CDropdownSideRouteComponent', () => {
  let component: CDropdownSideRouteComponent;
  let fixture: ComponentFixture<CDropdownSideRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDropdownSideRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CDropdownSideRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
