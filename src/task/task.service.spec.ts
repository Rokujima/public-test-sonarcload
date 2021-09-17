import { Test, TestingModule } from '@nestjs/testing';
import {
  createTaskDataSuccess,
  createTaskResultSuccess,
} from '../../test/mocks/task-sample-data/createTask.mocks';
import {
  updateById,
  updateTaskDataSuccess,
} from '../../test/mocks/task-sample-data/updateTask.mocks';
import { mockTaskService } from '../../test/mocks/service/mockTaskService.mocks';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
    })
      .overrideProvider(TaskService)
      .useValue(mockTaskService)
      .compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should be create new field', async () => {
    expect(await service.create(createTaskDataSuccess)).toEqual(
      createTaskDataSuccess,
    );
  });
  it('should be find one data', async () => {
    expect(await service.find(updateById.id)).toEqual(createTaskResultSuccess);
  });
  it('should be find all data', async () => {
    expect(await service.findAll()).toEqual([createTaskResultSuccess]);
  });
  it('should be update data by id', async () => {
    expect(await service.update(updateById.id, updateTaskDataSuccess)).toEqual({
      ...updateById,
      ...updateTaskDataSuccess,
    });
  });
  it('should be delete data by id', async () => {
    expect(await service.delete(updateById.id)).toBe(updateById.id);
  });
});
