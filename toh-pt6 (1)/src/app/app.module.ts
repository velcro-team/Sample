import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivate } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserFormComponent } from './userform/userform.component';
import { RemoveUserComponent } from './removeUser/remove-user.component';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import {UserListComponent} from './dashboard/userList/userlist.component';
import {UserListRComponent} from './removeUser/userListr/userlistr.component';
import { FormGaurdService } from './form-gaurd.service';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent}, 
  { path: 'userform', component: UserFormComponent, canDeactivate:[FormGaurdService]  },
  { path: 'removeuser', component: RemoveUserComponent },
  { path: 'contactus', component: ContactusComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserFormComponent,
    RemoveUserComponent,
    DashboardComponent,
    HeaderComponent,
    UserListComponent,
    UserListRComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
