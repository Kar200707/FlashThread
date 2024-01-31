import { TestBed } from '@angular/core/testing';

import { SetThemesService } from './set-themes.service';

describe('SetThemesService', () => {
  let service: SetThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
