import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  template: `<div class="card mt-5" style="margin:auto;width: 600px;">
  <div class="card-body">
    <h5 class="card-title">Login</h5>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" class="form-control" id="email" placeholder="Email Address" [(ngModel)]="email">
    </div>
    <div class="form-group">
      <label for="email">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Password" [(ngModel)]="password">
    </div>
  <button type="submit" class="btn btn-primary" (click)="tryLogin()">Login</button>
  </div>
</div>`  
})
export class LoginPageComponent {

  email = 'test@test.com';
  password = 'test@123';
  userType:string="1";   
  
 constructor(private apiService: ApiService,private userService: UserService,private router: Router) { }

  tryLogin() {  
        
    this.apiService.login(this.email,this.password).subscribe(
      res => { 
        if (res.token) {
          this.userService.setToken(res.token);
          this.router.navigateByUrl('/dashboard');
        }
        this.userService.setUserTypeToken(this.userType);  
      });
  }

}
