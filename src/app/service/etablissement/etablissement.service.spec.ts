import { TestBed } from '@angular/core/testing';

import { EtablissementService } from './etablissement.service';

describe('EtablissementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtablissementService = TestBed.get(EtablissementService);
    expect(service).toBeTruthy();
  });
});
