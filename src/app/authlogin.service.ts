import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private route:Router){}
  login(username: any, password: any){
    if(username==="admin"&&password==="1234"){
      localStorage.setItem('state','true');
      this.route.navigate(['']);
    }else {
      alert("wrong pass or username");
      localStorage.setItem('state','false');
      this.route.navigate(['login']);
    }
  }
  checkState(){
    if (localStorage.getItem('state')==='true')
      return true;
    else
      return false;
  }
    
}