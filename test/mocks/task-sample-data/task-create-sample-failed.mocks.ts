import { TaskCreateRequestSuccess } from './task-create-sample-success.mocks';

export const createTaskDataFailedNullTitle = {
  ...TaskCreateRequestSuccess,
  title: null,
};

export const createTaskDataFailedNullDate = {
  ...TaskCreateRequestSuccess,
  date: null,
};
