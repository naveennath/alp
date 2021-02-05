import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A16Page } from './a16.page';

describe('A16Page', () => {
  let component: A16Page;
  let fixture: ComponentFixture<A16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A16Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
