import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Recommendation2Page } from './recommendation2.page';

describe('Recommendation2Page', () => {
  let component: Recommendation2Page;
  let fixture: ComponentFixture<Recommendation2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recommendation2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Recommendation2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
