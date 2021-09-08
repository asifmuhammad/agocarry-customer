import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../services/network/share.service';

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

  constructor(private router : Router, private shareService : ShareService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.setCustomerVal('Home')
  }
  navigateToShophour() {
    this.setCustomerVal('Shophor')
this.router.navigate(['tabs/main-home/shop-hour/home'])
  }
  navigateToDoctor(){
    this.setCustomerVal('Doctor');
    this.router.navigate(['tabs/home'])
  }
  setCustomerVal(val){
    this.shareService.setCustomer(val);
  }
}
