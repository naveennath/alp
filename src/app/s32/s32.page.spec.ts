import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S32Page } from './s32.page';

describe('S32Page', () => {
  let component: S32Page;
  let fixture: ComponentFixture<S32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S32Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
