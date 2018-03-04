import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ImageService {
  // Define the routes we are going to interact with
  private baseUrl = 'http://pentiumtech-api.herokuapp.com:80/api/v1.0/mainfeed/?page=1';

  constructor(private http: HttpClient) { }

  // Implement a method to get the public deals
  getImages() {
    return this.http
      .get(this.baseUrl, {
        headers: new HttpHeaders().set('Authorization', `Token ${localStorage.getItem('image-gallery-app-token')}`)
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }
}