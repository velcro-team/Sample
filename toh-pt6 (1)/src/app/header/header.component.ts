import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService,private userService: UserService,private router: Router) { }

addU:boolean=true;
removeU:boolean=true;

  ngOnInit() {
    if(this.userService.getUserTypeToken()=="2"){
         this.removeU=false;
      }
      
      if(this.userService.getUserTypeToken()=="3"){
        this.addU=false;
        this.removeU=false;
     }
  }
//getUserTypeToken
}
