import { CanActivateFn } from '@angular/router';

export const notsubmitGuard: CanActivateFn = (route, state) => {
  return false;
};
