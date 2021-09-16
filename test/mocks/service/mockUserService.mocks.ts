import { updateUserSuccessResult } from '../user-sample-data/updateUserSuccess.mocks';

export const mockUserService = {
  create: jest.fn().mockImplementation((dto) => dto),
  save: jest
    .fn()
    .mockImplementation((user) => Promise.resolve({ id: String, ...user })),
  find: jest.fn().mockImplementation(() =>
    Promise.resolve({
      id: expect.any(String),
      email: expect.any(String),
      username: expect.any(String),
    }),
  ),
  updateOne: jest
    .fn()
    .mockImplementation((email, dto) =>
      Promise.resolve({ id: expect.any(String), ...dto, email }),
    ),
  delete: jest.fn().mockImplementation((email) => email),
  update: jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve({ _id: expect.any(String), ...updateUserSuccessResult }),
    ),
};
