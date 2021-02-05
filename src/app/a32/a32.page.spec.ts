import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A32Page } from './a32.page';

describe('A32Page', () => {
  let component: A32Page;
  let fixture: ComponentFixture<A32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A32Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
