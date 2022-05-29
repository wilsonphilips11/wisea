import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnBoardingScreenPage } from './on-boarding-screen.page';

describe('OnBoardingScreenPage', () => {
  let component: OnBoardingScreenPage;
  let fixture: ComponentFixture<OnBoardingScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnBoardingScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
