import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // we create an object to store the user name and pass
  model: any = {}; // type any

  // in the constructor we will inject the authService because for the login
  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  // we call the login from authservice, we pass the model and because it's observable we need to use subscribe
  // the next is treating the succes or error validation, or what to do next
  login(){
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully.');
      // by adding router in contructor we can use that class to redirect to a specific page after the action is done
      this.router.navigate(['/members']);
    }, error => {
      this.alertify.error(error);
    });
  }

  // here we take the token stored in the localstorage and return true or false
  loggedIn(){
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.message('Logged out.');
    this.router.navigate(['/home']);
  }

}
