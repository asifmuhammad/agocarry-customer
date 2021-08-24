import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; // For rxjs 6
import { User } from 'src/models/models-shop-hour/user.models';

@Injectable({
  providedIn: 'root'
})
export class MyEventsService {
    private selectedLanguage = new Subject<string>();
    private currentUser = new Subject<User>();

    constructor() { }

    public getLanguageObservable(): Observable<string> {
        return this.selectedLanguage.asObservable();
    }

    public setLanguageData(data) {
        this.selectedLanguage.next(data);
    }

    public getUserMeObservable(): Observable<User> {
        return this.currentUser.asObservable();
    }

    public setUserMeData(data) {
        this.currentUser.next(data);
    }
}
