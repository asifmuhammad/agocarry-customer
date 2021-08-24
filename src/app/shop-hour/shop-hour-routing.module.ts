import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopHourPage } from './shop-hour.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop-hour/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopHourPageRoutingModule {}
