import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { User } from '../user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class AuthService {
  userProfile: any;

  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  signUpUrl = 'http://pentiumtech-api.herokuapp.com:80/api/v1.0/users/signup/';
  logInUrl = 'http://pentiumtech-api.herokuapp.com:80/api/v1.0/users/login/'
  logOutUrl = 'http://pentiumtech-api.herokuapp.com:80/api/v1.0/users/logout/'

  constructor(private router: Router, private http: HttpClient) {
    // If authenticated, set local profile property and update login status subject
    // If token is expired, log out to clear any data from localStorage
    if (this.loggedIn) {
      this.userProfile = JSON.parse(localStorage.getItem('profile'));
      this.setLoggedIn(true);
    } else {
      this.logout();
    }
  }

  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  login(profile) {
    localStorage.setItem('image-gallery-app-token', profile.auth_token);
    localStorage.setItem('image-gallery-app-profile',JSON.stringify(profile));
    this.setLoggedIn(true);
    this.userProfile = profile;
    
    console.log('profile is',profile);

    this.router.navigate(['/gallery']);
  }

  logout(): Observable<any> {
    
    // Remove tokens and profile and update login status subject
    localStorage.removeItem('image-gallery-app-token');
    localStorage.removeItem('image-gallery-app-profile');
    this.userProfile = undefined;
    this.setLoggedIn(false);

    this.router.navigate(['/']);

    //data for logout to be done
    return this.http.post<any>(this.logOutUrl, {}, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  signUp (user: User): Observable<User> {
    alert('Please wait, signing up user...')
    return this.http.post<User>(this.signUpUrl, user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('Error at AuthService', err);
    if(err.status == 404){
      alert('Username/Password mismatch')
    }
      
    return Observable.throw(err.message || err);
  }

  authenticate(data): Observable<any> {
    alert('Please wait, authenticating...')
    return this.http.post<any>(this.logInUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

}
