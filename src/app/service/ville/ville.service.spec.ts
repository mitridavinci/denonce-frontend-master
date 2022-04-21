import { TestBed } from '@angular/core/testing';

import { VilleService } from './ville.service';

describe('VilleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VilleService = TestBed.get(VilleService);
    expect(service).toBeTruthy();
  });
});
