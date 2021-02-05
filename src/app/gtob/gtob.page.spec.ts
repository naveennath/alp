import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GtobPage } from './gtob.page';

describe('GtobPage', () => {
  let component: GtobPage;
  let fixture: ComponentFixture<GtobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GtobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
