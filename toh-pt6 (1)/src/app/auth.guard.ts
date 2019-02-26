import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService) { }

  canActivate():boolean {
    
    if (this.userService.isLogged()) {
      return true;
    }
    return false;
  }
}
