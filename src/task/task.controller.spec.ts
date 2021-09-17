import { Test, TestingModule } from '@nestjs/testing';
import {
  createTaskDataSuccess,
  createTaskResultSuccess,
} from '../../test/mocks/task-sample-data/createTask.mocks';
import {
  updateById,
  updateTaskDataSuccess,
} from '../../test/mocks/task-sample-data/updateTask.mocks';
import { mockTaskController } from '../../test/mocks/service/mockTaskController.mocks';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

describe('TaskController', () => {
  let controller: TaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService],
    })
      .overrideProvider(TaskService)
      .useValue(mockTaskController)
      .compile();

    controller = module.get<TaskController>(TaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should be create new task', () => {
    expect(controller.create(createTaskDataSuccess)).toEqual(
      createTaskDataSuccess,
    );
    expect(mockTaskController.create).toBeCalledWith(createTaskDataSuccess);
  });
  it('should be find one task', () => {
    expect(controller.find(updateById.id)).toEqual(createTaskResultSuccess);
    expect(mockTaskController.find).toBeCalledWith(updateById.id);
  });
  it('should be find all task', () => {
    expect(controller.findAll()).toEqual([createTaskResultSuccess]);
    expect(mockTaskController.findAll).toBeCalled();
  });
  it('should be update task', () => {
    expect(controller.update(updateById.id, updateTaskDataSuccess)).toEqual({
      ...updateById,
      ...updateTaskDataSuccess,
    });
    expect(mockTaskController.update).toBeCalledWith(
      updateById.id,
      updateTaskDataSuccess,
    );
  });

  it('should be delete task', () => {
    expect(controller.delete(updateById.id)).toEqual(updateById.id);
    expect(mockTaskController.delete).toBeCalledWith(updateById.id);
  });
});
