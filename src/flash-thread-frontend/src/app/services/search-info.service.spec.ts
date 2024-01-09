import { TestBed } from '@angular/core/testing';

import { SearchInfoService } from './search-info.service';

describe('SearchInfoService', () => {
  let service: SearchInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
