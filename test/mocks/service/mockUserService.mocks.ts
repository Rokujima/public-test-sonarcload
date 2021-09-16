export const mockUserService = {
  create: jest.fn().mockImplementation((dto) => dto),
  save: jest
    .fn()
    .mockImplementation((user) => Promise.resolve({ id: String, ...user })),
  find: jest.fn().mockImplementation((dto) => dto),
  updateOne: jest
    .fn()
    .mockImplementation((email, dto) =>
      Promise.resolve({ id: Date.now(), ...dto, email }),
    ),
  delete: jest.fn().mockImplementation((email) => email),
  update: jest
    .fn()
    .mockImplementation((email, dto) =>
      Promise.resolve({ id: Date.now(), ...dto, email }),
    ),
};
