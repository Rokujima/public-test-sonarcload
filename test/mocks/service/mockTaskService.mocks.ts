import {
  createTaskResultSuccess,
  createTaskDataSuccess,
} from '../task-sample-data/createTask.mocks';

export const mockTaskService = {
  create: jest.fn().mockImplementation((dto) => Promise.resolve(dto)),
  findAll: jest
    .fn()
    .mockImplementation(() => Promise.resolve([createTaskResultSuccess])),
  find: jest
    .fn()
    .mockImplementation((id) =>
      Promise.resolve({ id, ...createTaskDataSuccess }),
    ),
  update: jest
    .fn()
    .mockImplementation((id, dto) => Promise.resolve({ id, ...dto })),
  delete: jest.fn().mockImplementation((id) => Promise.resolve(id)),
};
