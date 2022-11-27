import { TestBed } from '@angular/core/testing';

import { CannactiveGuard } from './cannactive.guard';

describe('CannactiveGuard', () => {
  let guard: CannactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CannactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
