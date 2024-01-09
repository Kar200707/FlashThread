import { Test, TestingModule } from '@nestjs/testing';
import { SearchUserController } from './search_user.controller';

describe('SearchUserController', () => {
  let controller: SearchUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchUserController],
    }).compile();

    controller = module.get<SearchUserController>(SearchUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
