import { set } from 'mockdate';

const mockDate = '2020-04-13T18:09:12.451Z';
set(mockDate);

export const TaskCreateRequestSuccess = {
  title: 'sample data task',
  description: 'sample data description',
  date: mockDate,
  user_id: '12315646847987',
};
