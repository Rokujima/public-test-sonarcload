import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  const mocksUserService = {
    create: jest.fn((dto) => {
      return {
        _id: Date.now(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mocksUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should create', async () => {
    expect(
      await controller.create({
        email: 'testingrokujima@gmail.com',
        username: 'testing testing',
      }),
    ).toEqual({
      _id: expect.any(Number),
      email: 'testingrokujima@gmail.com',
      username: 'testing testing',
    });
  });
});
