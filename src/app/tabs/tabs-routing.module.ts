import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [{
      path: '',
      children: [
        {
          path: 'home',
          loadChildren: () =>
            import('../home/home.module').then(m => m.HomePageModule)
        },{
          path: 'main-home',
          loadChildren: () => import('../main-home/main-home.module').then( m => m.MainHomePageModule)
        }
      ]
    }, {
      path: 'doctors',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('../doctors/doctors.module').then(m => m.DoctorsPageModule)
        }
      ]
    }, {
      path: 'hospitals',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('../hospitals/hospitals.module').then(m => m.HospitalsPageModule)
        }
      ]
    }, {
      path: 'my_appointments',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('../my-appointments/my-appointments.module').then(m => m.MyAppointmentsPageModule)
        }
      ]
    }, {
      path: 'more',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('../account/account.module').then(m => m.AccountPageModule)
        }
      ]
    },
    {
      path: 'History',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('../orders/orders.module').then(m => m.OrdersPageModule)
        }
      ]
    },

    {
      path: 'customer-wallet',
      loadChildren: () => import('../main-home/customer-wallet/customer-wallet.module').then( m => m.CustomerWalletPageModule)
    },
    // {
    //   path: 'customer-history',
    //   loadChildren: () => import('../main-home/customer-history/customer-history.module').then( m => m.CustomerHistoryPageModule)
    // },
    {
      path: 'customer-profile',
      loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
    }
    , {
      path: '',
      redirectTo: '/tabs/main-home',
      pathMatch: 'full'
    }
    ]
  }, {
    path: '',
    redirectTo: '/tabs/main-home',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
