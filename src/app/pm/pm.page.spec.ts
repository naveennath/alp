import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PmPage } from './pm.page';

describe('PmPage', () => {
  let component: PmPage;
  let fixture: ComponentFixture<PmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
