import { TestBed } from '@angular/core/testing';

import { FunkoPopService } from './place.service';

describe('FunkoPopService', () => {
  let service: FunkoPopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunkoPopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
