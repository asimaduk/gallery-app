import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h3>Home component</h3>
    <p>
      Login to view images!
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
