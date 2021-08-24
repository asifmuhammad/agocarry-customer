import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyAddress } from 'src/models/models-shop-hour/address.models';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from 'src/app/services/shoup-hour-services/common/ui-elements.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.page.html',
  styleUrls: ['./title.page.scss']
})
export class TitlePage implements OnInit {
  @Input() address: MyAddress;

  constructor(private modalController: ModalController, private uiElementService: UiElementsService, private translate: TranslateService) {
  }

  ngOnInit() {
    if (!this.address) this.address = new MyAddress();
    // if (!this.address.title || !this.address.title.length) this.address.title = "home";
  }

  onAddressTypeChange(event) {
    if (event.detail && event.detail.value) {
      this.address.title = event.detail.value;
    }
  }

  dismiss() {
    this.modalController.dismiss(null);
  }

  save() {
    if (!this.address.title || !this.address.title.length) {
      this.translate.get("err_field_address_title").subscribe(value => this.uiElementService.presentToast(value));
    } else if (!this.address.formatted_address || !this.address.formatted_address.length) {
      this.translate.get("err_field_address").subscribe(value => this.uiElementService.presentToast(value));
    } else {
      this.modalController.dismiss(this.address);
    }
  }
}
