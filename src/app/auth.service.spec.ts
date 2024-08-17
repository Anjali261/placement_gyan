import { TestBed } from '@angular/core/testing';

import { OurAuthService } from './auth.service';

describe('OurAuthService', () => {
  let service: OurAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
