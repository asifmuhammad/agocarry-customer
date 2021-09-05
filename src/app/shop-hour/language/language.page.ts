import { Component, OnInit, Inject } from '@angular/core';
import { MyEventsService } from 'src/app/services/shoup-hour-services/events/my-events.service';
import { APP_CONFIG_ShopHour, ShopHourConfig } from 'src/app/shophour.config';
import { Constants } from 'src/models/constants.models';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss']
})
export class LanguagePage implements OnInit {
  defaultLanguageCode;
  languages: Array<{ code: string, name: string }>;

  constructor(@Inject(APP_CONFIG_ShopHour) private config: ShopHourConfig, private myEvent: MyEventsService) {
    this.languages = this.config.availableLanguages;
    this.defaultLanguageCode = config.availableLanguages[0].code;
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    if (defaultLang) this.defaultLanguageCode = defaultLang;
  }

  ngOnInit() {
  }

  onLanguageClick(language) {
    this.defaultLanguageCode = language.code;
  }

  languageConfirm() {
    this.myEvent.setLanguageData(this.defaultLanguageCode);
    window.localStorage.setItem(Constants.KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
  }

}
