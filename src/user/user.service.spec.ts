import { Test } from '@nestjs/testing';
import { mockUserService } from '../../test/mocks/service/mockUserService.mocks';
import { UserService } from './user.service';
import { UserCreateRequestSuccess } from '../../test/mocks/user-sample-data/user-create-sample-success.mocks';
import {
  UserCreateRequestFailedNotEmailAddress,
  UserCreateRequestUsernameSpecialCharacter,
} from '../../test/mocks/user-sample-data/user-create-sample-failed.mocks';
import { UserUpdateRequestSuccessResult } from '../../test/mocks/user-sample-data/user-update-sample-success.mocks';

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
    expect(await service.create(UserCreateRequestSuccess)).toEqual(
      UserCreateRequestSuccess,
    );
  });

  it('should be error create new record', async () => {
    expect(
      await service.create(UserCreateRequestFailedNotEmailAddress),
    ).toEqual(UserCreateRequestFailedNotEmailAddress);
    expect(
      await service.create(UserCreateRequestUsernameSpecialCharacter),
    ).toEqual(UserCreateRequestUsernameSpecialCharacter);
  });

  it('should be find all record', async () => {
    expect(await service.find()).toEqual(UserUpdateRequestSuccessResult);
  });
  it('should be update record', async () => {
    expect(
      await service.update(
        UserUpdateRequestSuccessResult.id,
        UserCreateRequestSuccess,
      ),
    ).toEqual(UserUpdateRequestSuccessResult);
  });
  it('should be delete record', async () => {
    expect(await service.delete(UserUpdateRequestSuccessResult.id)).toBe(
      UserUpdateRequestSuccessResult.id,
    );
  });
});
