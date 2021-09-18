import { UserCreateRequestSuccess } from './user-create-sample-success.mocks';

export const UserCreateRequestFailedNotEmailAddress = {
  ...UserCreateRequestSuccess,
  email: 'username',
};

export const UserCreateRequestUsernameSpecialCharacter = {
  username: 'username@!&!^#(!*$&!)*',
  ...UserCreateRequestSuccess,
};
