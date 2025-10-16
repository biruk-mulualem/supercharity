import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('admin'); // or use a better token system later

    if (!isLoggedIn) {
      this.router.navigate(['/cpanel']); // redirect to login
      return false;
    }

    return true;
  }
}
