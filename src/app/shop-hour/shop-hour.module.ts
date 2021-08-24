import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopHourPageRoutingModule } from './shop-hour-routing.module';

import { ShopHourPage } from './shop-hour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopHourPageRoutingModule
  ],
  declarations: [ShopHourPage]
})
export class ShopHourPageModule {}
