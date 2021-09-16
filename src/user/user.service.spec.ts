import { Test } from '@nestjs/testing';
import { mockUserService } from '../../test/mocks/service/mockUserService.mocks';
import { createUserSuccess } from '../../test/mocks/user-sample-data/createUserSuccess.mocks';
import { UserService } from './user.service';
import {
  createUserFailedNotEmailAddress,
  createUserFailedUsernameSpecialCharacter,
} from '../../test/mocks/user-sample-data/createUserFailed.mocks';
import {
  updateByEmail,
  updateUserSuccess,
} from '../../test/mocks/user-sample-data/updateUserSuccess.mocks';
import { deleteByEmail } from '../../test/mocks/user-sample-data/deleteUserSuccess.mocks';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should be create new record', async () => {
    expect(await service.create(createUserSuccess)).toEqual(createUserSuccess);
  });

  it('should be error create new record', async () => {
    expect(await service.create(createUserFailedNotEmailAddress)).toEqual(
      createUserFailedNotEmailAddress,
    );
    expect(
      await service.create(createUserFailedUsernameSpecialCharacter),
    ).toEqual(createUserFailedUsernameSpecialCharacter);
  });

  it('should be find all record', async () => {
    expect(await service.find(createUserSuccess)).toEqual(createUserSuccess);
  });
  it('should be update record', async () => {
    expect(
      await service.update(updateByEmail.email, updateUserSuccess),
    ).toEqual({
      id: Date.now(),
      ...updateByEmail,
      ...updateUserSuccess,
    });
  });
  it('should be delete record', async () => {
    expect(await service.delete(deleteByEmail.email)).toBe(deleteByEmail.email);
  });
});
