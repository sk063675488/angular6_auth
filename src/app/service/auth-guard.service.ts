import { Injectable } from '@angular/core';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private route:Router ) { }
  sendToken(token:string){
    localStorage.setItem("username", token);
  }
  getToken(){
    return localStorage.getItem("username");
  }
  isLogindIn(){
    return this.getToken() !== null;
  }
  logOut(){
    localStorage.removeItem("username")
    this.route.navigate(["Login"])
  }

}
