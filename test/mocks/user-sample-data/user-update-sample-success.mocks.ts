import { UserCreateRequestSuccess } from './user-create-sample-success.mocks';

export const UserUpdateRequestSuccessResult = {
  id: expect.any(String),
  ...UserCreateRequestSuccess,
};
