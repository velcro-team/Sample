import { Component} from '@angular/core';
import { UserService } from '../user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  template: `
<a href="" (click)="logout()">Logout</a>
<nav class="navbar navbar-expand-sm bg-light navbar-light">
<ul class="navbar-nav">
  <li class="nav-item">
    <a class="nav-link" [routerLink]="['/dashboard']">Dashboard</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [routerLink]="['/feature']">Feature</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [routerLink]="['/contactus']">Contact Us</a>
  </li>
 </ul>
</nav>
`
})
export class DashboardPageComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  
 logout() {
   this.userService.clearToken("TOKEN");
   this.router.navigateByUrl('/login');
 }

}
