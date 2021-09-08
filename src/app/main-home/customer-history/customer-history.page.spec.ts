import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerHistoryPage } from './customer-history.page';

describe('CustomerHistoryPage', () => {
  let component: CustomerHistoryPage;
  let fixture: ComponentFixture<CustomerHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
