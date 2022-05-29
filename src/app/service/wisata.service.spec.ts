import { TestBed } from '@angular/core/testing';

import { WisataService } from './wisata.service';

describe('WisataService', () => {
  let service: WisataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WisataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
