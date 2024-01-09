import { Test, TestingModule } from '@nestjs/testing';
import { SearchUserService } from './search_user.service';

describe('SearchUserService', () => {
  let service: SearchUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchUserService],
    }).compile();

    service = module.get<SearchUserService>(SearchUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
