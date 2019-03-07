import { TestBed } from '@angular/core/testing';

import { UnimiPortalService } from './unimi-portal.service';

describe('UnimiPortalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnimiPortalService = TestBed.get(UnimiPortalService);
    expect(service).toBeTruthy();
  });
});
