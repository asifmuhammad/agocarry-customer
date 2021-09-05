import { Component, OnInit, OnDestroy } from '@angular/core';
import { SupportRequest } from 'src/models/support-request.models';
import { Helper } from 'src/models/helper.models';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { UiElementsService } from 'src/app/services/shoup-hour-services/common/ui-elements.service';
import { ApiService } from 'src/app/services/shoup-hour-services/network/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss']
})
export class ContactUsPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  supportRequest: SupportRequest;

  constructor(private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService) {
    let userMe = Helper.getLoggedInUser();
    this.supportRequest = new SupportRequest(userMe.name, userMe.email);
  }

  ngOnInit() { }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  submit() {
    if (this.supportRequest && this.supportRequest.message) {
      this.translate.get(["supporting", "supporting_success", "something_wrong"]).subscribe(values => {
        this.uiElementService.presentLoading(values["supporting"]);
        this.subscriptions.push(this.apiService.submitSupport(this.supportRequest).subscribe(res => {
          this.uiElementService.dismissLoading();
          this.uiElementService.presentToast(values["supporting_success"]);
          this.navCtrl.navigateRoot(["tabs/main-home/shop-hour/home"]);
        }, err => {
          console.log("submitSupport", err);
          this.uiElementService.dismissLoading();
          this.uiElementService.presentToast(values["something_wrong"]);
        }));
      });
    } else {
      this.translate.get("err_valid_support_msg").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

}
