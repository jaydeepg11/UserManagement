import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notsubmitGuard } from './notsubmit.guard';

describe('notsubmitGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notsubmitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
