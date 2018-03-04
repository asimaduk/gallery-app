import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Image } from '../image';

import { AuthService } from '../auth/auth.service';
import { ImageService } from '../image.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit, OnDestroy {

  imagesSub: Subscription;
  images = {};
  error: any;

  constructor( public imageService: ImageService, public authService: AuthService) { }

  ngOnInit() {
    this.imagesSub = this.imageService
      .getImages()
      .subscribe(
        images => {this.images = images, console.log(images)},
        err => this.handleError
      );
  }

  ngOnDestroy() {
    this.imagesSub.unsubscribe();
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }
}
