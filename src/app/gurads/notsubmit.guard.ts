import { CanDeactivateFn } from '@angular/router';

export const notsubmitGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
