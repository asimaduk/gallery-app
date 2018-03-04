import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';

import { ImageService } from './image.service';
import { AuthService } from './auth/auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ImageService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
