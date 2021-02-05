import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpmPage } from './upm.page';

describe('UpmPage', () => {
  let component: UpmPage;
  let fixture: ComponentFixture<UpmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
