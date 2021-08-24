import { Constants } from './constants.models';
import { MyNotification } from './notification.models';
import { AuthResponse } from './auth-response.models';
import { MyMeta } from './meta.models';
import { MyAddress } from './address.models';
import { User } from './user.models';
import * as moment from 'moment';

export class Helper {
    static formatPhone(phone: string): string {
        let toReturn = phone.replace(/\s/g, '');
        while (toReturn.startsWith("0")) toReturn = toReturn.substring(1);
        return toReturn;
    }
    static setSearchHistory(sh: Array<string>) {
        window.localStorage.setItem(Constants.KEY_SEARCH_HISTORY, JSON.stringify(sh));
    }
    static getSearchHistory(): Array<string> {
        let adl: Array<string> = JSON.parse(window.localStorage.getItem(Constants.KEY_SEARCH_HISTORY));
        return (adl && adl.length) ? adl : new Array<string>();
    }
    static getReviewedProductIds(): Array<string> {
        let adl: Array<string> = JSON.parse(window.localStorage.getItem(Constants.KEY_REVIEWED_PRODUCTS));
        return (adl && adl.length) ? adl : new Array<string>();
    }
    static addReviewedProductId(id: string) {
        let adl: Array<string> = this.getReviewedProductIds();
        adl.push(id);
        window.localStorage.setItem(Constants.KEY_REVIEWED_PRODUCTS, JSON.stringify(adl));
    }
    static setAddresses(addresses: Array<MyAddress>) {
        window.localStorage.setItem(Constants.KEY_ADDRESSES, JSON.stringify(addresses));
    }
    static getAddresses(): Array<MyAddress> {
        let adl: Array<MyAddress> = JSON.parse(window.localStorage.getItem(Constants.KEY_ADDRESSES));
        return (adl && adl.length) ? adl : new Array<MyAddress>();
    }
    static setSettings(settings: Array<MyMeta>) {
        window.localStorage.setItem(Constants.KEY_SETTINGS, JSON.stringify(settings));
    }
    static getSettings(): Array<MyMeta> {
        return JSON.parse(window.localStorage.getItem(Constants.KEY_SETTINGS));
    }
    static setLoggedInUser(user: User) {
        window.localStorage.setItem(Constants.KEY_USER, JSON.stringify(user));
    }
    static setLoggedInUserResponse(authRes: AuthResponse) {
        window.localStorage.removeItem(Constants.KEY_USER);
        window.localStorage.removeItem(Constants.KEY_TOKEN);
        window.localStorage.removeItem(Constants.KEY_ADDRESS);
        window.localStorage.removeItem(Constants.KEY_ADDRESSES);
        window.localStorage.removeItem(Constants.KEY_NOTIFICATIONS);

        if (authRes && authRes.user && authRes.token) {
            window.localStorage.setItem(Constants.KEY_USER, JSON.stringify(authRes.user));
            window.localStorage.setItem(Constants.KEY_TOKEN, authRes.token);
        }
    }
    static getToken() {
        return window.localStorage.getItem(Constants.KEY_TOKEN);
    }
    static getLoggedInUser(): User {
        return JSON.parse(window.localStorage.getItem(Constants.KEY_USER));
    }
    static getAddressSelected(): MyAddress {
        return JSON.parse(window.localStorage.getItem(Constants.KEY_ADDRESS));
    }
    static getSetectedAddress(): MyAddress {
        return JSON.parse(window.localStorage.getItem(Constants.KEY_SETECT_ADDRESS));
    }
    static getLocale(): string {
        let sl = window.localStorage.getItem(Constants.KEY_LOCALE);
        return sl && sl.length ? sl : "en";
    }
    static getLanguageDefault(): string {
        return window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    }
    static setLanguageDefault(language: string) {
        window.localStorage.setItem(Constants.KEY_DEFAULT_LANGUAGE, language);
    }
    static setLocale(lc) {
        window.localStorage.setItem(Constants.KEY_LOCALE, lc);
    }
    static setAddressSelected(location: MyAddress) {
        window.localStorage.setItem(Constants.KEY_ADDRESS, JSON.stringify(location));
    }
    static getSetting(settingKey: string) {
        let settings: Array<MyMeta> = this.getSettings();
        let toReturn: string;
        if (settings) {
            for (let s of settings) {
                if (s.key == settingKey) {
                    toReturn = s.value;
                    break;
                }
            }
        }
        if (!toReturn) toReturn = "";
        return toReturn;
    }
    static saveNotification(notiTitle: string, notiBody: string, notiTime: string) {
        let notifications: Array<MyNotification> = JSON.parse(window.localStorage.getItem(Constants.KEY_NOTIFICATIONS));
        if (!notifications) notifications = new Array<MyNotification>();
        notifications.push(new MyNotification(notiTitle, notiBody, notiTime));
        window.localStorage.setItem(Constants.KEY_NOTIFICATIONS, JSON.stringify(notifications));
    }
    static formatMillisDateTime(millis: number, locale: string): string {
        return moment(millis).locale(locale).format("ddd, MMM D, HH:mm");
    }
    static formatTimestampDateTime(timestamp: string, locale: string): string {
        return moment(timestamp).locale(locale).format("ddd, MMM D, HH:mm");
    }
    static formatMillisDate(millis: number, locale: string): string {
        return moment(millis).locale(locale).format("Do MMM YYYY");
    }
    static formatTimestampDate(timestamp: string, locale: string): string {
        return moment(timestamp).locale(locale).format("Do MMM YYYY");
    }
    static formatMillisTime(millis: number, locale: string): string {
        return moment(millis).locale(locale).format("HH:mm");
    }
    static formatTimestampTime(timestamp: string, locale: string): string {
        return moment(timestamp).locale(locale).format("HH:mm");
    }
}