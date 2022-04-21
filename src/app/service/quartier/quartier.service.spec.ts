import { TestBed } from '@angular/core/testing';

import { QuartierService } from './quartier.service';

describe('QuartierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuartierService = TestBed.get(QuartierService);
    expect(service).toBeTruthy();
  });
});
