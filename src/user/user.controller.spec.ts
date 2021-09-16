import { Test, TestingModule } from '@nestjs/testing';
import { createUserSuccess } from '../../test/mocks/user-sample-data/createUserSuccess.mocks';
import { mockUserController } from '../../test/mocks/service/mockUserController.mocks';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {
  updateByEmail,
  updateUserDataSuccess,
  updateUserSuccessResult,
} from '../../test/mocks/user-sample-data/updateUserSuccess.mocks';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserController)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should be create new users', async () => {
    expect(controller.create(createUserSuccess)).toEqual({
      _id: expect.any(String),
      ...createUserSuccess,
    });

    expect(mockUserController.create).toBeCalledWith(createUserSuccess);
  });
  it('should be find list users ', async () => {
    expect(controller.find()).toEqual({
      _id: expect.any(String),
      ...createUserSuccess,
    });

    expect(mockUserController.find).toBeCalled();
  });
  it('should be update users', async () => {
    controller.update(updateByEmail.id, updateUserDataSuccess).then((data) => {
      expect(data).toEqual({
        _id: expect.any(String),
        ...updateUserSuccessResult,
      });

      expect(mockUserController.update).toBeCalledWith(
        updateByEmail.id,
        updateUserDataSuccess,
      );
    });
  });
  it('should be delete users', async () => {
    expect(controller.delete(updateByEmail.id)).toEqual(updateByEmail.id);

    expect(mockUserController.delete).toBeCalledWith(updateByEmail.id);
  });
});
