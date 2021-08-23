import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.page.html',
  styleUrls: ['./main-home.page.scss'],
})
export class MainHomePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.2,
  };

  constructor() { }

  ngOnInit() {
  }

}
