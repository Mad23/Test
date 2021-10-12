import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // this input will fetch the values from the home component
  @Input() valuesFromHome: any;
  // with output we can create an object that sends values into another component.
  // FOr thie we declare that ob and create a new EventEmitter because it's an event
  // this will be sent into the home component
  @Output() cancelRegister = new EventEmitter();
model: any = {};
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration Successful');
    }, error => {
      this.alertify.error(error);
    });
  }
  cancel(){
    // the value will be a boolean (false). We use emit to send the value
    this.cancelRegister.emit(false);
    this.alertify.message('Canceled!');
  }

}
