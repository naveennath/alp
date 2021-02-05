import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D8Page } from './d8.page';

describe('D8Page', () => {
  let component: D8Page;
  let fixture: ComponentFixture<D8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
