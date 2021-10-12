import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
// with this component we will make the http requests to our .net api
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues(); // when the component load it call the getValues method
  }

  // here we simply make an get request like ajax call. If success we populate values that has type any with the response
  // because it returns an observable we are using subscribe to access that observable
  getValues(){
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
