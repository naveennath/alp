import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Aa16Page } from './aa16.page';

describe('Aa16Page', () => {
  let component: Aa16Page;
  let fixture: ComponentFixture<Aa16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aa16Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Aa16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
