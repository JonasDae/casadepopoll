import { TestBed } from '@angular/core/testing';

import { PollDbService } from './poll-db.service';

describe('PollDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollDbService = TestBed.get(PollDbService);
    expect(service).toBeTruthy();
  });
});
