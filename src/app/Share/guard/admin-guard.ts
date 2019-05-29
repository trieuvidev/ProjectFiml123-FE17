import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private router: Router) { }

  // ham check login
  checkLogin(): boolean {
    if (localStorage.getItem('loginUser')) { // kiem tra xem da co userLogin chua
      const userAdmin = JSON.parse(localStorage.getItem('loginUser'));
      if (userAdmin.MaLoaiNguoiDung === 'QuanTri') {
        return true;
      }
    }
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.checkLogin()) {
      return true;
    }
    this.router.navigate(['/login']);
  }
}
