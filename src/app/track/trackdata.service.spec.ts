import { TestBed } from '@angular/core/testing';

import { TrackdataService } from './trackdata.service';

describe('TrackdataService', () => {
  let service: TrackdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
