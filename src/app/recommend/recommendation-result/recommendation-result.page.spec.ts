import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecommendationResultPage } from './recommendation-result.page';

describe('RecommendationResultPage', () => {
  let component: RecommendationResultPage;
  let fixture: ComponentFixture<RecommendationResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendationResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
