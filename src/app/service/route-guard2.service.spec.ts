import { TestBed } from '@angular/core/testing';

import { RouteGuard2Service } from './route-guard2.service';

describe('RouteGuard2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteGuard2Service = TestBed.get(RouteGuard2Service);
    expect(service).toBeTruthy();
  });
});
