import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem("TOKEN", token);
  }

  clearToken(token: string): void {
    localStorage.removeItem(token);
  }

  isLogged() {
    return localStorage.getItem("TOKEN") != null;
  }

  removeUserRecord(userData){
    console.log("userData:",userData);
    //ajax call will be going here.
  }
  userFormSubmit(formDataSubmit){
    console.log("formDataSubmit:",formDataSubmit);
  }
  setUserTypeToken(type){
    localStorage.setItem("userTypeToken", type);
  }
  getUserTypeToken(){
    return localStorage.getItem("userTypeToken");
  }
}
