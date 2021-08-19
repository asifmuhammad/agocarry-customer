import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchHospitalsPageRoutingModule } from './search-hospitals-routing.module';

import { SearchHospitalsPage } from './search-hospitals.page';
import { TranslateModule } from '@ngx-translate/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SearchHospitalsPageRoutingModule
  ], providers: [CallNumber, InAppBrowser],
  declarations: [SearchHospitalsPage]
})
export class SearchHospitalsPageModule { }
