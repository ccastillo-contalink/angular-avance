import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable , of} from 'rxjs';
import { AuthService } from '../services/auth.service';
import {take, first, map}  from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private  auth: AuthService, private router: Router){
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean   {
      return this.isAuth();
      ;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean   {

      return this.isAuth();
    }
  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean  {
    return this.isAuth();
  }


  isAuth():boolean{

    if(this.auth.user$.getValue() !== null){
      return true;
    }

    this.router.navigate(['/404'], { skipLocationChange: true });
    return false;

  }
}
