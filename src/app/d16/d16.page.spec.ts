import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D16Page } from './d16.page';

describe('D16Page', () => {
  let component: D16Page;
  let fixture: ComponentFixture<D16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D16Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
