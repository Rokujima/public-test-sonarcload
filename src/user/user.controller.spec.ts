import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { mockUserService } from '../../test/mocks/service/mockUserService.mocks';
import { UserCreateRequestSuccess } from '../../test/mocks/user-sample-data/user-create-sample-success.mocks';
import { UserUpdateRequestSuccessResult } from '../../test/mocks/user-sample-data/user-update-sample-success.mocks';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should be create new users', async () => {
    expect(await controller.create(UserCreateRequestSuccess)).toEqual(
      UserCreateRequestSuccess,
    );

    expect(mockUserService.create).toBeCalledWith(UserCreateRequestSuccess);
  });
  it('should be find list users ', async () => {
    expect(await controller.find()).toEqual(UserUpdateRequestSuccessResult);

    expect(mockUserService.find).toBeCalled();
  });
  it('should be update users', async () => {
    controller
      .update(UserUpdateRequestSuccessResult.id, UserCreateRequestSuccess)
      .then((data) => {
        expect(data).toEqual(UserUpdateRequestSuccessResult);

        expect(mockUserService.update).toBeCalledWith(
          UserUpdateRequestSuccessResult.id,
          UserCreateRequestSuccess,
        );
      });
  });
  it('should be delete users', async () => {
    expect(await controller.delete(UserUpdateRequestSuccessResult.id)).toEqual(
      UserUpdateRequestSuccessResult.id,
    );

    expect(mockUserService.delete).toBeCalledWith(
      UserUpdateRequestSuccessResult.id,
    );
  });
});
