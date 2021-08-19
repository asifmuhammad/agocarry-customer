import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchHospitalsPage } from './search-hospitals.page';

describe('SearchHospitalsPage', () => {
  let component: SearchHospitalsPage;
  let fixture: ComponentFixture<SearchHospitalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHospitalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchHospitalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
