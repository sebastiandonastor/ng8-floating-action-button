import { TestBed } from '@angular/core/testing';

import { Ng8FloatingActionButtonService } from './ng8-floating-action-button.service';

describe('Ng8FloatingActionButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng8FloatingActionButtonService = TestBed.get(Ng8FloatingActionButtonService);
    expect(service).toBeTruthy();
  });
});
