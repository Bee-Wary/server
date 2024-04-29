import { Test, TestingModule } from '@nestjs/testing';
import { BeehivesController } from './beehives.controller';

describe('BeehivesController', () => {
  let controller: BeehivesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeehivesController],
    }).compile();

    controller = module.get<BeehivesController>(BeehivesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
