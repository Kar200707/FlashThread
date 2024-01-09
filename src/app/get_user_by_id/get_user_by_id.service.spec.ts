import { Test, TestingModule } from '@nestjs/testing';
import { GetUserByIdService } from './get_user_by_id.service';

describe('GetUserByIdService', () => {
  let service: GetUserByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetUserByIdService],
    }).compile();

    service = module.get<GetUserByIdService>(GetUserByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
