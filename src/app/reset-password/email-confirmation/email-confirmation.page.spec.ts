import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmailConfirmationPage } from './email-confirmation.page';

describe('EmailConfirmationPage', () => {
  let component: EmailConfirmationPage;
  let fixture: ComponentFixture<EmailConfirmationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailConfirmationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
