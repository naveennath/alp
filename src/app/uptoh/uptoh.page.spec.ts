import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UptohPage } from './uptoh.page';

describe('UptohPage', () => {
  let component: UptohPage;
  let fixture: ComponentFixture<UptohPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UptohPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UptohPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
