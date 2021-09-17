import {
  createTaskDataSuccess,
  createTaskResultSuccess,
} from '../task-sample-data/createTask.mocks';

export const mockTaskController = {
  create: jest.fn().mockImplementation((dto) => dto),
  find: jest.fn().mockImplementation((id) => {
    return { id, ...createTaskDataSuccess };
  }),
  findAll: jest.fn().mockImplementation(() => [createTaskResultSuccess]),
  update: jest.fn().mockImplementation((id, dto) => {
    return { id, ...dto };
  }),
  delete: jest.fn().mockImplementation((id) => id),
};
