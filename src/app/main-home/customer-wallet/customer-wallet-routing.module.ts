import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerWalletPage } from './customer-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerWalletPageRoutingModule {}
