import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopHourPage } from './shop-hour.page';

describe('ShopHourPage', () => {
  let component: ShopHourPage;
  let fixture: ComponentFixture<ShopHourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopHourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopHourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
