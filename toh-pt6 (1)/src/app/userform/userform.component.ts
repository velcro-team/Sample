
import {Component, ViewChild} from '@angular/core';
import {Signup} from './Signup';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  template: `
  <app-header></app-header>
  <p>&nbsp;</p>
  <div style="text-align:center"><h2><u>User Form</u></h2></div>
  <div class="container table-bordered">
  <form novalidate
        (ngSubmit)="onSubmit()"
        #form="ngForm">
  
    <fieldset ngModelGroup="name">
      <div class="form-group"
           [ngClass]="{
          'has-danger': firstName.invalid && (firstName.dirty || firstName.touched),
          'has-success': firstName.valid && (firstName.dirty || firstName.touched)
     }">
        <label>First Name</label>
        <input type="text"
               class="form-control"
               name="firstName"
               [(ngModel)]="model.firstName"
               required
               #firstName="ngModel">
        <div class="form-control-feedback"
             *ngIf="firstName.errors && (firstName.dirty || firstName.touched)">
          <p *ngIf="firstName.errors.required">First name is required</p>
        </div>
      </div>
  
      <div class="form-group"
           [ngClass]="{
          'has-danger': lastName.invalid && (lastName.dirty || lastName.touched),
          'has-success': lastName.valid && (lastName.dirty || lastName.touched)
     }">
        <label>Last Name</label>
        <input type="text"
               class="form-control"
               name="lastName"
               [(ngModel)]="model.lastName"
               required
               #lastName="ngModel">
        <div class="form-control-feedback"
             *ngIf="lastName.errors && (lastName.dirty || lastName.touched)">
          <p *ngIf="lastName.errors.required">Last name is required</p>
        </div>
      </div>
    </fieldset>
  
  
    <div class="form-group"
         [ngClass]="{
          'has-danger': email.invalid && (email.dirty || email.touched),
          'has-success': email.valid && (email.dirty || email.touched)
     }">
      <label>Email</label>
      <input type="email"
             class="form-control"
             name="email"
             [(ngModel)]="model.email"
             required
             pattern="[^ @]*@[^ @]*"
             #email="ngModel">
      <div class="form-control-feedback"
           *ngIf="email.errors && (email.dirty || email.touched)">
        <p *ngIf="email.errors.required">Email is required</p>
        <p *ngIf="email.errors.pattern">Email must contain at least the @ character</p>
      </div>
    </div>
  
    <div class="form-group"
         [ngClass]="{
          'has-danger': password.invalid && (password.dirty || password.touched),
          'has-success': password.valid && (password.dirty || password.touched)
    }">
      <label>Temporary Password</label>
      <input type="password"
             class="form-control"
             name="password"
             [(ngModel)]="model.password"
             required
             minlength="8"
             #password="ngModel">
      <div class="form-control-feedback"
           *ngIf="password.errors && (password.dirty || password.touched)">
        <p *ngIf="password.errors.required">Password is required</p>
        <p *ngIf="password.errors.minlength">Password must be at least 8 characters long</p>
      </div>
    </div>
  
    <div class="form-group">
      <label>User Type</label>
      <select class="form-control"
              name="usertypelist"
              [(ngModel)]="model.userTypeList">
        <option value="">Please select user type</option>
        <option *ngFor="let user of userTypeList"
                [value]="user">{{user}}
        </option>
      </select>
    </div>
  
    <button type="submit"
            class="btn btn-primary"
            [disabled]="form.invalid">Submit
    </button>
     
  </form>
  </div>`
})
export class UserFormComponent {

  constructor(private userService: UserService,private router: Router) { }
  

 model: Signup = new Signup();
  @ViewChild('form') form: any;

  userTypeList: string[] = [
    'first',
    'second',
    'third',
  ];

  onSubmit() {
    if (this.form.valid) {
      this.userService.userFormSubmit(this.form.value);
      this.form.reset();
    }
  }

}
