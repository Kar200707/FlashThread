import { TestBed } from '@angular/core/testing';

import { SetChatService } from './set-chat.service';

describe('SetChatService', () => {
  let service: SetChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
