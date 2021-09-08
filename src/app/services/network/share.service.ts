import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  isActiveCustomer = 'Home'
  constructor() { }
  setCustomer(val){
    this.isActiveCustomer = val;
  }
}
