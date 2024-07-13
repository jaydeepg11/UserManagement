import { inject } from '@angular/core';
import { CanMatchFn, Router} from '@angular/router';

export const canmatchGuard: CanMatchFn = () => {
  let isAdmin :Boolean=true;
  const router = inject(Router);
  if(isAdmin){
    return false;
  }
  else{
    return true;
  }

  
};
