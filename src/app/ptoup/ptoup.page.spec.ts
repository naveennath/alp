import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PtoupPage } from './ptoup.page';

describe('PtoupPage', () => {
  let component: PtoupPage;
  let fixture: ComponentFixture<PtoupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtoupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PtoupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
