import { TestBed } from '@angular/core/testing';

import { NucontService } from './nucont-service.service';

describe('NucontService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NucontService = TestBed.get(NucontService);
    expect(service).toBeTruthy();
  });
});
