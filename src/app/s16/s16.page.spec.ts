import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S16Page } from './s16.page';

describe('S16Page', () => {
  let component: S16Page;
  let fixture: ComponentFixture<S16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S16Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
