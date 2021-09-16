import { createUserSuccess } from '../user-sample-data/createUserSuccess.mocks';
import { updateUserSuccessResult } from '../user-sample-data/updateUserSuccess.mocks';

export const mockUserController = {
  create: jest.fn((dto) => {
    return {
      _id: expect.any(String),
      ...dto,
    };
  }),
  find: jest.fn().mockImplementation(() => {
    return { _id: expect.any(String), ...createUserSuccess };
  }),
  update: jest
    .fn()
    .mockImplementation(() => Promise.resolve(updateUserSuccessResult)),
  delete: jest.fn().mockImplementation((index) => {
    return index;
  }),
};
