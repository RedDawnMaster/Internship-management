import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { inject } from '@angular/core';

export const AuthGuardAll: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let user = authService.retrieveUser().user;
  if (user !== undefined) return true;
  router.navigate(['unauthorized']);
  return false;
};

export const AuthGuardAdmin: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let user = authService.retrieveUser().user;
  if (user !== undefined && user.role === 'ADMIN') {
    return true;
  }
  router.navigate(['unauthorized']);
  return false;
};

export const AuthGuardProfesseur: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let user = authService.retrieveUser().user;
  if (user !== undefined && user.role === 'ADMIN') {
    router.navigate(['unauthorized']);
    return false;
  }
  return true;
};
