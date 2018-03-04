import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { User } from '../user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  firstname = '';
  lastname = '';
  phonenumber = '';
  email = '';
  password = '';
  confirm_password = '';

  user: User;
  error: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onFirstnameChange(event: any) {
    this.firstname = event.target.value 
  }

  onLastnameChange(event: any) {
    this.lastname = event.target.value 
  }

  onPhonenumberChange(event: any) {
    this.phonenumber = event.target.value 
  }

  onEmailChange(event: any) {
    this.email = event.target.value 
  }

  onPasswordChange(event: any) {
    this.password = event.target.value 
  }

  onPasswordConfirmChange(event: any) {
    this.confirm_password = event.target.value 
  }

  signUp(event){
    event.preventDefault();
    
    if(this.firstname)
      if(this.lastname)
        if(this.phonenumber)
          if(this.email)
            if(this.password)
              if(this.confirm_password)
                if(this.password === this.confirm_password) {
                  const newUser = new User();
                  
                  newUser.first_name = this.firstname
                  newUser.last_name = this.lastname
                  newUser.phone_number = this.phonenumber
                  newUser.email = this.email
                  newUser.password = this.password

                  console.log('user is',newUser);

                  this.authService.signUp(newUser).subscribe(
                    user => this.authService.login(user),
                    err => this.error = err
                  );


                }
                else alert('Password does not match!')
              else alert('Please confirm password!')
            else alert('Please provide password!')
          else alert('Please provide email!')
        else alert('Please provide phone number')
      else alert('Please provide last name')
    else alert('Please provide first name!')
  }

}
