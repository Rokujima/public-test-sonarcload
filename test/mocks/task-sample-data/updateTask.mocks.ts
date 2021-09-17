export const updateTaskDataSuccess = {
  title: 'sample data task',
  description: 'sample data description',
  date: Date.now(),
};

export const updateById = {
  id: 'id sample',
};

export const updateTaskResultSuccess = {
  id: 'id sample',
  ...updateTaskDataSuccess,
  user_id: expect.any(String),
};
