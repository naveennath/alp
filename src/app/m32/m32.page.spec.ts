import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { M32Page } from './m32.page';

describe('M32Page', () => {
  let component: M32Page;
  let fixture: ComponentFixture<M32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M32Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(M32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
