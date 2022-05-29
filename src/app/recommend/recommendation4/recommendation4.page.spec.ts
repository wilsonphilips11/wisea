import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Recommendation4Page } from './recommendation4.page';

describe('Recommendation4Page', () => {
  let component: Recommendation4Page;
  let fixture: ComponentFixture<Recommendation4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recommendation4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Recommendation4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
