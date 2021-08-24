import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToShophour() {
this.router.navigate(['tabs/main-home/shop-hour/home'])
  }
}
