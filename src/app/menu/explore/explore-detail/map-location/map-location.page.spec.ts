import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapLocationPage } from './map-location.page';

describe('MapLocationPage', () => {
  let component: MapLocationPage;
  let fixture: ComponentFixture<MapLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
