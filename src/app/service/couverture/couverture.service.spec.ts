import { TestBed } from '@angular/core/testing';

import { CouvertureService } from './couverture.service';

describe('CouvertureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CouvertureService = TestBed.get(CouvertureService);
    expect(service).toBeTruthy();
  });
});
