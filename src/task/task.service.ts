import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const taskCreate = await new this.taskModel.create(createTaskDto).save();
    return taskCreate;
  }
  async find(id: string): Promise<Task> {
    const taskFindOne = await this.taskModel.findById(id);
    return taskFindOne;
  }
  async findAll(): Promise<Task[]> {
    const taskFindAll = await this.taskModel.find({});
    return taskFindAll;
  }
  async update(id: string, params: UpdateTaskDto): Promise<Task> {
    const taskUpdate = await this.taskModel.findByIdAndUpdate(id, params, {
      new: true,
    });
    return taskUpdate;
  }
  async delete(id: string): Promise<Task> {
    const taskDelete = await this.taskModel.findByIdAndRemove(id);
    return taskDelete;
  }
}
