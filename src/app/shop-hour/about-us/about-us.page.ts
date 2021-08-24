import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/models/models-shop-hour/helper.models';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss']
})
export class AboutUsPage implements OnInit {
  about_us: string;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.about_us = Helper.getSetting("about_us");
  }

}
