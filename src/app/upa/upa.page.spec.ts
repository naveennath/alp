import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpaPage } from './upa.page';

describe('UpaPage', () => {
  let component: UpaPage;
  let fixture: ComponentFixture<UpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
