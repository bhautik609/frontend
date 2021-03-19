import { Injectable } from '@angular/core';
import { Router ,ActivatedRouteSnapshot,CanActivate,RouterStateSnapshot,UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgardService implements CanActivate {

  constructor(private _routdata:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(localStorage.getItem("username"));
    if(localStorage.getItem("username")!='' && localStorage.getItem("username")!=null){
      console.log('from authguard');
      return true;
    }
   this._routdata.navigate(['/']);
   return false;
  }
}
