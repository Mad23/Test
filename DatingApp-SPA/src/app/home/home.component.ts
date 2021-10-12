import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode = false;
// values: any;
// with this component we will make the http requests to our .net api
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getValues();
  }

  registerToggle(){
    this.registerMode = true;
  }

  // here we simply make an get request like ajax call. If success we populate values that has type any with the response
  // because it returns an observable we are using subscribe to access that observable
  // getValues(){
  //   this.http.get('http://localhost:5000/api/values').subscribe(response => {
  //     this.values = response;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;
  }
}
