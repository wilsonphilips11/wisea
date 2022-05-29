import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Recommendation1Page } from './recommendation1.page';

describe('Recommendation1Page', () => {
  let component: Recommendation1Page;
  let fixture: ComponentFixture<Recommendation1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recommendation1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Recommendation1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
