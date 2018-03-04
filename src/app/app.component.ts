import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Image Gallery App';
  constructor(public authService: AuthService) {}
  
  ngOnInit() {
    //TO BE WORKED ON
    // if(localStorage.getItem('image-gallery-app-profile'))
    //   alert('user is logged in')
    // else alert('not log in')
  }
}
