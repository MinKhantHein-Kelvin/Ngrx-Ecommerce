import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { startWith } from 'rxjs';
import { CONSTANTS } from '../constants/constant';
import { MainIntercomService } from '../services/main-intercom.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const url = state.url;
  const _mainInterComService = inject(MainIntercomService)
  const userObj: any = JSON.parse(localStorage.getItem(CONSTANTS.user_obj) || '{}');

  if(userObj){
    _mainInterComService.userObj.username = userObj.user;
  }

  if(url === '/admin'){
    router.navigate(['admin/dashboard']);
  }

  if (!authService.isAdminAuthenticated()) {
  router.navigate(['/auth/login']);
    return false;
  }

  return true;
};
