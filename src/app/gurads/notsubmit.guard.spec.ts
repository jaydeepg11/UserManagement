import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { notsubmitGuard } from './notsubmit.guard';

describe('notsubmitGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notsubmitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
