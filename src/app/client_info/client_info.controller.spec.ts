import { Test, TestingModule } from '@nestjs/testing';
import { ClientInfoController } from './client_info.controller';

describe('ClientInfoController', () => {
  let controller: ClientInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientInfoController],
    }).compile();

    controller = module.get<ClientInfoController>(ClientInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
