import { TestBed } from '@angular/core/testing';

import { NiveauScolaireService } from './niveau-scolaire.service';

describe('NiveauScolaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NiveauScolaireService = TestBed.get(NiveauScolaireService);
    expect(service).toBeTruthy();
  });
});
