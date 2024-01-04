import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { inject } from '@angular/core';
  

export const authGuardGuard: CanActivateFn = (route, state) => {
  if (inject(AuthServiceService).isAuthenticate()) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};
