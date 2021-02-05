import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BtogPage } from './btog.page';

describe('BtogPage', () => {
  let component: BtogPage;
  let fixture: ComponentFixture<BtogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BtogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
