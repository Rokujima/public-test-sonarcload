import { UserUpdateRequestSuccessResult } from '../user-sample-data/user-update-sample-success.mocks';

export const mockUserService = {
  create: jest.fn().mockImplementation((dto) => Promise.resolve(dto)),
  find: jest.fn().mockImplementation(() =>
    Promise.resolve({
      id: expect.any(String),
      email: expect.any(String),
      username: expect.any(String),
    }),
  ),
  delete: jest.fn().mockImplementation((id) => Promise.resolve(id)),
  update: jest.fn().mockImplementation(() =>
    Promise.resolve({
      id: expect.any(String),
      ...UserUpdateRequestSuccessResult,
    }),
  ),
};
