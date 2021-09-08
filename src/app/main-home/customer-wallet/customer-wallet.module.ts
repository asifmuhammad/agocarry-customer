import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerWalletPageRoutingModule } from './customer-wallet-routing.module';

import { CustomerWalletPage } from './customer-wallet.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    CustomerWalletPageRoutingModule
  ],
  declarations: [CustomerWalletPage]
})
export class CustomerWalletPageModule {}
