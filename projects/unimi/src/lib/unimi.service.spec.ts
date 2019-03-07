import { TestBed } from '@angular/core/testing';

import { UnimiService } from './unimi.service';

describe('UnimiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnimiService = TestBed.get(UnimiService);
    expect(service).toBeTruthy();
  });
});
