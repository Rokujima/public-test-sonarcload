import { TaskCreateRequestSuccess } from '../task-sample-data/task-create-sample-success.mocks';

export const mockTaskService = {
  create: jest.fn().mockImplementation((dto) => Promise.resolve(dto)),
  findAll: jest
    .fn()
    .mockImplementation(() => Promise.resolve([TaskCreateRequestSuccess])),
  find: jest
    .fn()
    .mockImplementation((id) =>
      Promise.resolve({ id, ...TaskCreateRequestSuccess }),
    ),
  update: jest
    .fn()
    .mockImplementation((id, dto) => Promise.resolve({ id, ...dto })),
  delete: jest.fn().mockImplementation((id) => Promise.resolve(id)),
};
