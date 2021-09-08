import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerWalletPage } from './customer-wallet.page';

describe('CustomerWalletPage', () => {
  let component: CustomerWalletPage;
  let fixture: ComponentFixture<CustomerWalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerWalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerWalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
