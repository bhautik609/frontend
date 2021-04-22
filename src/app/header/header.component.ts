import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showFiller=false;
  username;
  constructor( private _router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem('username');
  }
  logout(){
  //this._router.navigate['/'];
  localStorage.removeItem('username');
  }

}
