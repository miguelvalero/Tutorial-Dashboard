import { TestBed, async, inject } from '@angular/core/testing';

import { MiguardiaGuard } from './miguardia.guard';

describe('MiguardiaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiguardiaGuard]
    });
  });

  it('should ...', inject([MiguardiaGuard], (guard: MiguardiaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
