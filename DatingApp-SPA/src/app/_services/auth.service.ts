import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // baseUrl = 'http://localhost:5000/api/auth/';
 baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

constructor(private http: HttpClient) { }

// we will consume the login service from the API. The API will return a token along with the user
// so below we will store that token in a local storage variable provided by angular
// in this arrow call (ajax call) we need the url from api the action name from there and we pass the model
// we need to use pipe to treat the response. As a respone we will get the user and the token and we map the response to user var
// this service will be injected into a component
// also we need to store the token in localStorage because this way we will check if the user is logged in or not
login(model: any){
  return this.http.post(this.baseUrl + 'login', model)
  .pipe(
    map((response: any) => {
      const user = response;
      if (user){
        localStorage.setItem('token', user.token);
        // we use Angular jwt to decode the user token. From here we can take the username to use it in the NavBar at Welcome User
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
      }
    })
  );
}
register(model: any){
  return this.http.post(this.baseUrl + 'register', model);
}

loggedIn(){
  const token = localStorage.getItem('token');
  // we take the token stored in the localStorage
  // with the Angular JWT library we check to see if the token in expired or not to decide if the user is logged in
  return !this.jwtHelper.isTokenExpired(token);
}
}
