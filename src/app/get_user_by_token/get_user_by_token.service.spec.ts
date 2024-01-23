import { Test, TestingModule } from '@nestjs/testing';
import { GetUserByTokenService } from './get_user_by_token.service';

describe('GetUserByTokenService', () => {
  let service: GetUserByTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetUserByTokenService],
    }).compile();

    service = module.get<GetUserByTokenService>(GetUserByTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
