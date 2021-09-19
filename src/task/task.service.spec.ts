import { Test, TestingModule } from '@nestjs/testing';
import { mockTaskService } from '../../test/mocks/service/mockTaskService.mocks';
import { TaskService } from './task.service';
import { TaskCreateRequestSuccess } from '../../test/mocks/task-sample-data/task-create-sample-success.mocks';
import { TaskUpdateRequestSuccess } from '../../test/mocks/task-sample-data/task-update-sample-success.mocks';

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
    expect(await service.create(TaskCreateRequestSuccess)).toEqual(
      TaskCreateRequestSuccess,
    );
  });
  it('should be find one data', async () => {
    expect(await service.find(TaskUpdateRequestSuccess.id)).toEqual(
      TaskUpdateRequestSuccess,
    );
  });
  it('should be find all data', async () => {
    expect(await service.findAll()).toEqual([TaskCreateRequestSuccess]);
  });
  it('should be update data by id', async () => {
    expect(
      await service.update(
        TaskUpdateRequestSuccess.id,
        TaskCreateRequestSuccess,
      ),
    ).toEqual(TaskUpdateRequestSuccess);
  });
  it('should be delete data by id', async () => {
    expect(await service.delete(TaskUpdateRequestSuccess.id)).toBe(
      TaskUpdateRequestSuccess.id,
    );
  });
});
