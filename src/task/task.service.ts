import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}

  async create(createTaskDto: createTaskDto): Promise<Task> {
    return await (await this.taskModel.create(createTaskDto)).save();
  }
  async find(id: string): Promise<Task> {
    return await this.taskModel.findById(id);
  }
  async findAll(): Promise<Task[]> {
    return await this.taskModel.find({});
  }
  async update(id: string, params: updateTaskDto): Promise<Task> {
    return await this.taskModel.findByIdAndUpdate(id, params, { new: true });
  }
  async delete(id: string): Promise<Task> {
    return await this.taskModel.findByIdAndRemove(id);
  }
}
