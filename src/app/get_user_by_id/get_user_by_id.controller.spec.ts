import { Test, TestingModule } from '@nestjs/testing';
import { GetUserByIdController } from './get_user_by_id.controller';

describe('GetUserByIdController', () => {
  let controller: GetUserByIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetUserByIdController],
    }).compile();

    controller = module.get<GetUserByIdController>(GetUserByIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
