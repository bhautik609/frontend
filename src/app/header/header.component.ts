import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  showFiller=false;
  username;
  constructor( private _router:Router,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.username=localStorage.getItem('username');
  }
  logout(){
  //this._router.navigate['/'];
  localStorage.removeItem('username');
  }

}
