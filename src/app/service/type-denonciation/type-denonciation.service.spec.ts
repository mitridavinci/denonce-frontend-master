import { TestBed } from '@angular/core/testing';

import { TypeDenonciationService } from './type-denonciation.service';

describe('TypeDenonciationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeDenonciationService = TestBed.get(TypeDenonciationService);
    expect(service).toBeTruthy();
  });
});
