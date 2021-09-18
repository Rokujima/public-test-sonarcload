import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { mockTaskService } from '../../test/mocks/service/mockTaskService.mocks';
import { TaskCreateRequestSuccess } from '../../test/mocks/task-sample-data/task-create-sample-success.mocks';
import { TaskUpdateRequestSuccess } from '../../test/mocks/task-sample-data/task-update-sample-success.mocks';

describe('TaskController', () => {
  let controller: TaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService],
    })
      .overrideProvider(TaskService)
      .useValue(mockTaskService)
      .compile();

    controller = module.get<TaskController>(TaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should be create new task', async () => {
    expect(await controller.create(TaskCreateRequestSuccess)).toEqual(
      TaskCreateRequestSuccess,
    );
    expect(mockTaskService.create).toBeCalledWith(TaskCreateRequestSuccess);
  });
  it('should be find one task', async () => {
    expect(await controller.find(TaskUpdateRequestSuccess.id)).toEqual(
      TaskUpdateRequestSuccess,
    );
    expect(mockTaskService.find).toBeCalledWith(TaskUpdateRequestSuccess.id);
  });
  it('should be find all task', async () => {
    expect(await controller.findAll()).toEqual([TaskCreateRequestSuccess]);
    expect(mockTaskService.findAll).toBeCalled();
  });
  it('should be update task', async () => {
    expect(
      await controller.update(
        TaskUpdateRequestSuccess.id,
        TaskCreateRequestSuccess,
      ),
    ).toEqual(TaskUpdateRequestSuccess);
    expect(mockTaskService.update).toBeCalledWith(
      TaskUpdateRequestSuccess.id,
      TaskCreateRequestSuccess,
    );
  });

  it('should be delete task', async () => {
    expect(await controller.delete(TaskUpdateRequestSuccess.id)).toEqual(
      TaskUpdateRequestSuccess.id,
    );
    expect(mockTaskService.delete).toBeCalledWith(TaskUpdateRequestSuccess.id);
  });
});
