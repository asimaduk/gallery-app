import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onEmailChange(event: any) {
    this.email = event.target.value 
  }

  onPasswordChange(event: any) {
    this.password = event.target.value 
  }

  logIn(event){
    event.preventDefault();

    if(this.email)
      if(this.password){
        this.authService.authenticate({email:this.email, password:this.password})
            .subscribe(
              profile => this.authService.login(profile),
              err => this.handleError
            )
      }
      else alert('Provide password...')
    else alert('Provide email...')
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}
