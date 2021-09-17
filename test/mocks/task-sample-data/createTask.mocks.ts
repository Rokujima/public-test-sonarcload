import { set } from 'mockdate';

const mockDate = '2020-04-13T18:09:12.451Z';
set(mockDate);

export const createTaskDataSuccess = {
  title: 'sample data task',
  description: 'sample data description',
  date: mockDate,
  user_id: '12315646847987',
};

export const createTaskResultSuccess = {
  id: 'id sample',
  ...createTaskDataSuccess,
};

const { title, description, date, user_id } = createTaskDataSuccess;

export const createTaskDataFailedNullTitle = {
  title: null,
  description: description,
  date: date,
  user_id: user_id,
};

export const createTaskDataFailedNullDate = {
  title: title,
  description: description,
  date: null,
  user_id: user_id,
};
