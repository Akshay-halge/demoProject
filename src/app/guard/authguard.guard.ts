import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {

  const Is_User_Login_IN = localStorage.getItem('token');
  if(Is_User_Login_IN){
    return true
  }
  inject(Router).navigate(['/login']);
  return false
};
