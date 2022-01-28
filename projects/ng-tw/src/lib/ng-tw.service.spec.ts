import { TestBed } from '@angular/core/testing';

import { NgTwService } from './ng-tw.service';

describe('NgTwService', () => {
  let service: NgTwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
