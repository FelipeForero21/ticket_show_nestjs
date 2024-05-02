import { Test, TestingModule } from '@nestjs/testing';
import { UsersDbController } from './users-db.controller';
import { UsersDbService } from './users-db.service';

describe('UsersDbController', () => {
  let controller: UsersDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersDbController],
      providers: [UsersDbService],
    }).compile();

    controller = module.get<UsersDbController>(UsersDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
