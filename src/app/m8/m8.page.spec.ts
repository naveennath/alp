import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { M8Page } from './m8.page';

describe('M8Page', () => {
  let component: M8Page;
  let fixture: ComponentFixture<M8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(M8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
