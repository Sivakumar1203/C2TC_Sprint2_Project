import { TestBed } from '@angular/core/testing';

import { MallstackService } from './mallstack.service';

describe('MallstackService', () => {
  let service: MallstackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MallstackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
