import { TestBed } from '@angular/core/testing';

import { AdmindashbordService } from './admindashbord.service';

describe('AdmindashbordService', () => {
  let service: AdmindashbordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmindashbordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
