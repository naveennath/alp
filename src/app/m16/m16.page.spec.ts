import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { M16Page } from './m16.page';

describe('M16Page', () => {
  let component: M16Page;
  let fixture: ComponentFixture<M16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M16Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(M16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
