import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarpage',
  templateUrl: './navbarpage.component.html',
  styleUrls: ['./navbarpage.component.scss']
})
export class NavbarpageComponent {
  constructor( private router:Router){

  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
