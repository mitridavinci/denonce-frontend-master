import { TestBed } from '@angular/core/testing';

import { DenonciationService } from './denonciation.service';

describe('DenonciationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DenonciationService = TestBed.get(DenonciationService);
    expect(service).toBeTruthy();
  });
});
