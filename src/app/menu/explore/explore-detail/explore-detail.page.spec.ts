import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreDetailPage } from './explore-detail.page';

describe('ExploreDetailPage', () => {
  let component: ExploreDetailPage;
  let fixture: ComponentFixture<ExploreDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
