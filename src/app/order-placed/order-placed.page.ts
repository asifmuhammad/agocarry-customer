import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.page.html',
  styleUrls: ['./order-placed.page.scss']
})
export class OrderPlacedPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navHome() {
    this.navCtrl.navigateRoot(['./tabs/main-home']);
  }

  navMyOrders() {
    this.navHome();
    setTimeout(() => this.navCtrl.navigateForward(['./orders']), 100);
  }

}
