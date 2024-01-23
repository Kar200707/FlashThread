import { Test, TestingModule } from '@nestjs/testing';
import { GetUserByTokenController } from './get_user_by_token.controller';

describe('GetUserByTokenController', () => {
  let controller: GetUserByTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetUserByTokenController],
    }).compile();

    controller = module.get<GetUserByTokenController>(GetUserByTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
