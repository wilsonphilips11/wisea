import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Recommendation3Page } from './recommendation3.page';

describe('Recommendation3Page', () => {
  let component: Recommendation3Page;
  let fixture: ComponentFixture<Recommendation3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recommendation3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Recommendation3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
