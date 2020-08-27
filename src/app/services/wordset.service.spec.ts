import { TestBed } from '@angular/core/testing';

import { WordsetService } from './wordset.service';

describe('WordsetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordsetService = TestBed.get(WordsetService);
    expect(service).toBeTruthy();
  });
});
