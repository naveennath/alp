import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UptopPage } from './uptop.page';

describe('UptopPage', () => {
  let component: UptopPage;
  let fixture: ComponentFixture<UptopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UptopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UptopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
