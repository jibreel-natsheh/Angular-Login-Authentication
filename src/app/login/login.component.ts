import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authlogin.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : any;
  password : any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { 
      // redirect to home if already logged in
      if (this.authenticationService.checkState()) { 
          this.router.navigate(['profile']);
      }
  }
  
  login(){
    this.authenticationService.login(this.username, this.password);
    this.username = "";
    this.password = "";
  }
  
}
