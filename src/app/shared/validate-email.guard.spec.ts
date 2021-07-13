import { TestBed } from '@angular/core/testing';

import { ValidateEmailGuard } from './validate-email.guard';

describe('ValidateEmailGuard', () => {
  let guard: ValidateEmailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateEmailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
